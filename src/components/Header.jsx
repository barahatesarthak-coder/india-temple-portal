import React, { useState } from 'react';
import { Search, Volume2, VolumeX, Bell, Flame, MapPin, Sparkles, Bookmark, Compass, Landmark, Clock, Calendar } from 'lucide-react';
import { templeAudio } from '../utils/audioEngine';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery, 
  bookmarksCount, 
  onOpenDiyaModal,
  temples,
  onSelectTemple
}) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const toggleAmbientAudio = () => {
    if (isAudioPlaying) {
      templeAudio.stopAmbientDrone();
      setIsAudioPlaying(false);
    } else {
      templeAudio.startAmbientDrone();
      setIsAudioPlaying(true);
    }
  };

  const handleRingBell = () => {
    templeAudio.playTempleBell(587.33, 4.5);
  };

  // Autocomplete matching
  const searchResults = searchQuery.trim() === '' ? [] : temples.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.deity.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.style.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.city.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  return (
    <header className="sticky top-0 z-40 bg-sandstone-50/95 backdrop-blur-md border-b border-sandstone-300 shadow-sm transition-all">
      {/* Top Auspicious Heritage Banner */}
      <div className="bg-terracotta-gradient text-sandstone-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2 font-medium tracking-wide">
            <span className="text-brass-300">ॐ</span>
            <span>॥ सत्यं शिवं सुन्दरम् ॥</span>
            <span className="hidden md:inline text-sandstone-300">|</span>
            <span className="hidden md:inline text-sandstone-200">Preserving Ancient Indian Architectural Wonders & Living Sacred Traditions</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleRingBell}
              className="flex items-center space-x-1.5 text-brass-300 hover:text-brass-100 transition-colors py-0.5 px-2 rounded hover:bg-terracotta-800/60"
              title="Ring the Consecrated Temple Bell"
            >
              <Bell className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold">Ring Bell (घण्टा)</span>
            </button>

            <button
              onClick={onOpenDiyaModal}
              className="flex items-center space-x-1.5 bg-brass-500 hover:bg-brass-600 text-charcoal-900 font-bold px-2.5 py-0.5 rounded-full text-[11px] shadow-sm transition-transform active:scale-95"
            >
              <Flame className="w-3.5 h-3.5 text-terracotta-800 animate-diya-flame" />
              <span>Offer Virtual Diya</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Logo & Portal Title */}
          <div className="flex items-center justify-between">
            <div 
              onClick={() => setActiveTab('temples')} 
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-xl bg-terracotta-700 text-brass-400 flex items-center justify-center shadow-md border border-brass-500/40 group-hover:scale-105 transition-transform">
                <Landmark className="w-6 h-6 text-brass-400" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-xl sm:text-2xl font-bold font-serif text-terracotta-800 tracking-tight leading-none group-hover:text-terracotta-600 transition-colors">
                    DEVALAYA
                  </h1>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brass-100 text-brass-800 px-2 py-0.5 rounded border border-brass-300">
                    Heritage Portal
                  </span>
                </div>
                <p className="text-xs text-charcoal-500 font-medium tracking-wide mt-0.5">
                  India Temple Heritage & Pilgrimage Information System
                </p>
              </div>
            </div>

            {/* Mobile Soundscape Toggle */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={toggleAmbientAudio}
                className={`p-2 rounded-lg border transition-colors ${
                  isAudioPlaying 
                    ? 'bg-brass-500 text-charcoal-900 border-brass-600' 
                    : 'bg-sandstone-100 text-charcoal-700 border-sandstone-300'
                }`}
                title={isAudioPlaying ? "Mute Vedic Ambience" : "Play Vedic Ambience & Bells"}
              >
                {isAudioPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Search Bar with live autocomplete */}
          <div className="relative flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
              <input
                type="text"
                placeholder="Search temples, deities, styles (e.g. Nagara, Kedarnath)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchDropdown(true);
                }}
                onFocus={() => setShowSearchDropdown(true)}
                className="w-full pl-10 pr-4 py-2 bg-sandstone-100/90 border border-sandstone-300 focus:border-terracotta-600 rounded-full text-sm text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal-400 hover:text-charcoal-700 px-1.5 py-0.5 rounded-full bg-sandstone-200"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Autocomplete dropdown */}
            {showSearchDropdown && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-sandstone-50 border border-sandstone-300 rounded-xl shadow-xl z-50 overflow-hidden">
                <div className="p-2 text-[11px] font-semibold text-charcoal-500 uppercase tracking-wider border-b border-sandstone-200">
                  Matching Heritage Sites ({searchResults.length})
                </div>
                {searchResults.map((temple) => (
                  <div
                    key={temple.id}
                    onClick={() => {
                      onSelectTemple(temple);
                      setShowSearchDropdown(false);
                      setSearchQuery('');
                    }}
                    className="p-2.5 hover:bg-sandstone-200/80 cursor-pointer flex items-center justify-between transition-colors border-b border-sandstone-100 last:border-0"
                  >
                    <div>
                      <div className="text-sm font-bold text-terracotta-800 font-serif">
                        {temple.name}
                      </div>
                      <div className="text-xs text-charcoal-500 flex items-center space-x-2">
                        <span>{temple.city}, {temple.state}</span>
                        <span>•</span>
                        <span className="text-brass-700 font-medium">{temple.style}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-terracotta-100 text-terracotta-800">
                      View Details →
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons & Soundscape player */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleAmbientAudio}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-full border text-xs font-semibold transition-all ${
                isAudioPlaying 
                  ? 'bg-brass-500 text-charcoal-900 border-brass-600 shadow-md shadow-brass-500/20 animate-pulse' 
                  : 'bg-sandstone-100 hover:bg-sandstone-200 text-charcoal-700 border-sandstone-300'
              }`}
              title={isAudioPlaying ? "Mute Vedic Ambience" : "Start Vedic Om Chanting & Bells"}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-terracotta-900" />
                  <span>Vedic Soundscape (Active)</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-charcoal-500" />
                  <span>Play Vedic Ambience</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-2 mt-3 pt-2 border-t border-sandstone-200 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('temples')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'temples'
                ? 'bg-terracotta-700 text-sandstone-50 shadow-sm'
                : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span>Temples & Darshan</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'bg-terracotta-700 text-sandstone-50 shadow-sm'
                : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-brass-400" />
            <span>Architecture Explorer (Nagara / Dravidian / Vesara)</span>
          </button>

          <button
            onClick={() => setActiveTab('circuits')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'circuits'
                ? 'bg-terracotta-700 text-sandstone-50 shadow-sm'
                : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Pilgrimage Circuit Planner</span>
          </button>

          <button
            onClick={() => setActiveTab('aarti')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'aarti'
                ? 'bg-terracotta-700 text-sandstone-50 shadow-sm'
                : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Live Aarti & Rush Heatmaps</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
