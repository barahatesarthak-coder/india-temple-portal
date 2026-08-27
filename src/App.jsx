import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import TempleCard from './components/TempleCard';
import TempleDetailModal from './components/TempleDetailModal';
import ArchitectureExplorer from './components/ArchitectureExplorer';
import CircuitPlanner from './components/CircuitPlanner';
import RushHeatmap from './components/RushHeatmap';
import VirtualDiya from './components/VirtualDiya';
import { TEMPLES_DATA } from './data/temples';
import { Landmark, Sparkles, Compass, Clock, ShieldCheck, Flame, Heart, Volume2, Search, ArrowRight } from 'lucide-react';
import { templeAudio } from './utils/audioEngine';

export default function App() {
  const [activeTab, setActiveTab] = useState('temples');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCircuit, setSelectedCircuit] = useState('all');
  const [selectedRush, setSelectedRush] = useState('all');
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [isDiyaModalOpen, setIsDiyaModalOpen] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('devalaya_bookmarks');
      return saved ? JSON.parse(saved) : ['meenakshi-amman', 'kedarnath-temple'];
    } catch {
      return ['meenakshi-amman', 'kedarnath-temple'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('devalaya_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      // ignore local storage errors
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (templeId) => {
    setBookmarkedIds(prev => 
      prev.includes(templeId) ? prev.filter(id => id !== templeId) : [...prev, templeId]
    );
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedStyle('all');
    setSelectedRegion('all');
    setSelectedCircuit('all');
    setSelectedRush('all');
  };

  const handleSelectTempleById = (templeId) => {
    const temple = TEMPLES_DATA.find(t => t.id === templeId);
    if (temple) {
      setSelectedTemple(temple);
    }
  };

  // Filter logic
  const filteredTemples = TEMPLES_DATA.filter(temple => {
    // Search query match
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = temple.name.toLowerCase().includes(q);
      const matchState = temple.state.toLowerCase().includes(q);
      const matchDeity = temple.deity.toLowerCase().includes(q);
      const matchStyle = temple.style.toLowerCase().includes(q);
      const matchCity = temple.city.toLowerCase().includes(q);
      if (!matchName && !matchState && !matchDeity && !matchStyle && !matchCity) {
        return false;
      }
    }

    // Style match
    if (selectedStyle !== 'all') {
      if (!temple.style.toLowerCase().includes(selectedStyle.toLowerCase())) {
        return false;
      }
    }

    // Region match
    if (selectedRegion !== 'all') {
      if (temple.region !== selectedRegion) {
        return false;
      }
    }

    // Circuit match
    if (selectedCircuit !== 'all') {
      if (!temple.circuits || !temple.circuits.some(c => c.toLowerCase().includes(selectedCircuit.toLowerCase()))) {
        return false;
      }
    }

    // Rush level match
    if (selectedRush !== 'all') {
      if (temple.rushLevel !== selectedRush) {
        return false;
      }
    }

    return true;
  });

  const featuredTemple = filteredTemples[0] || TEMPLES_DATA[0];

  return (
    <div className="min-h-screen bg-sandstone-50 text-charcoal-800 flex flex-col font-sans selection:bg-brass-500 selection:text-charcoal-900">
      
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        bookmarksCount={bookmarkedIds.length}
        onOpenDiyaModal={() => setIsDiyaModalOpen(true)}
        temples={TEMPLES_DATA}
        onSelectTemple={(t) => setSelectedTemple(t)}
      />

      {/* Main App Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        
        {/* Tab 1: Temples Directory & Heritage Portal */}
        {activeTab === 'temples' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Cultural Hero Banner */}
            <div className="relative rounded-3xl overflow-hidden bg-terracotta-gradient text-sandstone-50 p-6 sm:p-10 shadow-heritage-lg border border-brass-500/30">
              <div className="absolute top-0 right-0 w-96 h-96 bg-subtle-mandala pointer-events-none opacity-40" />
              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center space-x-2 bg-brass-500/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-brass-400/40 text-brass-300 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-brass-400" />
                  <span>Sacred Architecture & Living Pilgrimage Heritage</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight leading-tight text-sandstone-50">
                  Discover the Divine Geometry & Living Temples of Bharat
                </h1>

                <p className="text-sm sm:text-base text-sandstone-200 leading-relaxed max-w-2xl font-light">
                  A curated cultural intelligence platform moving beyond generic travel templates. Explore interactive 2D anatomical blueprints (Nagara, Dravidian, Vesara), real-time Darshan rush heatmaps, multi-stop pilgrimage circuits, and authentic Sthalapurana audio legends.
                </p>

                {/* Stat Counters */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-sandstone-900/40 backdrop-blur-sm p-3 rounded-xl border border-sandstone-200/20">
                    <span className="text-2xl font-bold font-serif text-brass-400 block">10+</span>
                    <span className="text-xs text-sandstone-200">Iconic Shrines</span>
                  </div>
                  <div className="bg-sandstone-900/40 backdrop-blur-sm p-3 rounded-xl border border-sandstone-200/20">
                    <span className="text-2xl font-bold font-serif text-brass-400 block">3 Styles</span>
                    <span className="text-xs text-sandstone-200">Nagara, Dravid, Vesara</span>
                  </div>
                  <div className="bg-sandstone-900/40 backdrop-blur-sm p-3 rounded-xl border border-sandstone-200/20">
                    <span className="text-2xl font-bold font-serif text-brass-400 block">4 Circuits</span>
                    <span className="text-xs text-sandstone-200">Char Dham, 12 Jyotirlinga</span>
                  </div>
                  <div className="bg-sandstone-900/40 backdrop-blur-sm p-3 rounded-xl border border-sandstone-200/20">
                    <span className="text-2xl font-bold font-serif text-brass-400 block">24h</span>
                    <span className="text-xs text-sandstone-200">Rush & Aarti Tracker</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <FilterBar
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              selectedCircuit={selectedCircuit}
              setSelectedCircuit={setSelectedCircuit}
              selectedRush={selectedRush}
              setSelectedRush={setSelectedRush}
              totalResults={filteredTemples.length}
              onResetFilters={handleResetFilters}
            />

            {/* Temples Asymmetrical Bento Grid */}
            {filteredTemples.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Render the first item as a wide featured card if no search query */}
                {filteredTemples.map((temple, idx) => (
                  <TempleCard
                    key={temple.id}
                    temple={temple}
                    onSelect={(t) => setSelectedTemple(t)}
                    isBookmarked={bookmarkedIds.includes(temple.id)}
                    onToggleBookmark={toggleBookmark}
                    isFeatured={idx === 0 && searchQuery === '' && selectedStyle === 'all' && selectedRegion === 'all'}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-sandstone-100 border border-sandstone-300 rounded-2xl p-12 text-center space-y-4">
                <Landmark className="w-12 h-12 text-charcoal-400 mx-auto" />
                <h3 className="text-lg font-bold font-serif text-terracotta-800">
                  No Temples Match Your Filter Criteria
                </h3>
                <p className="text-xs text-charcoal-600 max-w-md mx-auto">
                  Try clearing your search query or resetting filters to explore all consecrated heritage sites across Bharat.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="bg-terracotta-700 hover:bg-terracotta-800 text-white font-bold text-xs px-4 py-2 rounded-xl"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </div>
        )}

        {/* Tab 2: Interactive Architecture Explorer */}
        {activeTab === 'architecture' && (
          <div className="animate-fade-in">
            <ArchitectureExplorer onSelectTempleById={handleSelectTempleById} />
          </div>
        )}

        {/* Tab 3: Pilgrimage Circuit Planner */}
        {activeTab === 'circuits' && (
          <div className="animate-fade-in">
            <CircuitPlanner onSelectTempleById={handleSelectTempleById} />
          </div>
        )}

        {/* Tab 4: Live Aarti & Rush Heatmaps */}
        {activeTab === 'aarti' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-sandstone-100/90 border border-sandstone-300 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-terracotta-100 text-terracotta-800 px-2.5 py-0.5 rounded border border-terracotta-200">
                  Live Darshan Intelligence
                </span>
                <span className="text-xs text-brass-700 font-bold">24-Hour Queue Heatmaps</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-terracotta-800 mt-1">
                Real-Time Darshan Rush & Scheduled Aarti Timings
              </h2>
              <p className="text-sm text-charcoal-600 max-w-3xl mt-1 leading-relaxed">
                Plan your sacred visit with live crowd indicators, optimal darshan time windows (Mangala, afternoon lulls), and daily consecrated Aarti schedules with real bell chimes.
              </p>
            </div>

            {/* Overview Grid of Aarti & Rush across all temples */}
            <div className="space-y-6">
              {TEMPLES_DATA.slice(0, 4).map((temple) => (
                <div key={temple.id} className="bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sandstone-200 pb-3">
                    <div>
                      <span className="text-xs text-charcoal-500">{temple.city}, {temple.state}</span>
                      <h3 className="text-lg font-bold font-serif text-terracotta-800">
                        {temple.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedTemple(temple)}
                      className="px-3 py-1.5 bg-terracotta-700 hover:bg-terracotta-800 text-sandstone-50 rounded-lg text-xs font-bold self-start sm:self-auto transition-colors"
                    >
                      View Full Shrine Specs →
                    </button>
                  </div>

                  <RushHeatmap
                    heatmapData={temple.rushHeatmap24h}
                    aartiSchedule={temple.aartiSchedule}
                    bestSlots={temple.bestDarshanSlots}
                    templeName={temple.name}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Floating Diya Offering Action Button */}
      <button
        onClick={() => setIsDiyaModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-brass-gradient text-charcoal-900 font-serif font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-2xl flex items-center space-x-2 border-2 border-brass-300 hover:scale-105 active:scale-95 transition-all"
        title="Light a consecrated Diya lamp online"
      >
        <Flame className="w-5 h-5 text-terracotta-900 animate-diya-flame" />
        <span className="hidden sm:inline">Offer Virtual Diya (दीपम्)</span>
      </button>

      {/* Temple Detail Modal */}
      {selectedTemple && (
        <TempleDetailModal
          temple={selectedTemple}
          onClose={() => setSelectedTemple(null)}
          isBookmarked={bookmarkedIds.includes(selectedTemple.id)}
          onToggleBookmark={toggleBookmark}
          onOpenDiyaModal={() => {
            setIsDiyaModalOpen(true);
          }}
        />
      )}

      {/* Virtual Diya Modal */}
      <VirtualDiya
        isOpen={isDiyaModalOpen}
        onClose={() => setIsDiyaModalOpen(false)}
        templeName={selectedTemple ? selectedTemple.name : "Sacred Indian Shrines"}
      />

      {/* Cultural Heritage Footer */}
      <footer className="bg-charcoal-900 text-sandstone-300 border-t border-sandstone-700 py-10 mt-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Column 1: Brand & Motto */}
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-terracotta-700 text-brass-400 flex items-center justify-center font-bold text-base">
                  🛕
                </div>
                <span className="text-base font-bold font-serif text-sandstone-50 tracking-wide">
                  DEVALAYA HERITAGE PORTAL
                </span>
              </div>
              <p className="text-sandstone-400 leading-relaxed max-w-md">
                Dedicated to documenting and celebrating the monumental stone architecture, living Agamic traditions, and civilizational heritage of Indian temples. Built with handcrafted authentic Indian aesthetics.
              </p>
              <div className="text-brass-400 font-serif italic text-xs">
                ॥ धर्मो रक्षति रक्षितः ॥ (Dharmo Rakshati Rakshitah)
              </div>
            </div>

            {/* Column 2: Architectural Schools */}
            <div className="space-y-2">
              <span className="text-xs font-bold font-serif text-sandstone-100 uppercase tracking-wider block">
                Architectural Orders
              </span>
              <ul className="space-y-1.5 text-sandstone-400">
                <li onClick={() => { setActiveTab('architecture'); }} className="hover:text-brass-400 cursor-pointer">Nagara Style (North & Himalayas)</li>
                <li onClick={() => { setActiveTab('architecture'); }} className="hover:text-brass-400 cursor-pointer">Dravidian Style (South & Chola)</li>
                <li onClick={() => { setActiveTab('architecture'); }} className="hover:text-brass-400 cursor-pointer">Vesara / Hybrid (Deccan & Hoysala)</li>
                <li onClick={() => { setActiveTab('architecture'); }} className="hover:text-brass-400 cursor-pointer">Kalinga Rekha Deula (Odisha)</li>
                <li onClick={() => { setActiveTab('architecture'); }} className="hover:text-brass-400 cursor-pointer">Rock-Cut Megaliths (Cave 16 Ellora)</li>
              </ul>
            </div>

            {/* Column 3: Sacred Pilgrimage Trails */}
            <div className="space-y-2">
              <span className="text-xs font-bold font-serif text-sandstone-100 uppercase tracking-wider block">
                Pilgrimage Circuits
              </span>
              <ul className="space-y-1.5 text-sandstone-400">
                <li onClick={() => { setActiveTab('circuits'); }} className="hover:text-brass-400 cursor-pointer">Maha Char Dham (4 Corners)</li>
                <li onClick={() => { setActiveTab('circuits'); }} className="hover:text-brass-400 cursor-pointer">12 Jyotirlingas of Shiva</li>
                <li onClick={() => { setActiveTab('circuits'); }} className="hover:text-brass-400 cursor-pointer">Pancha Bhoota Stalam (5 Elements)</li>
                <li onClick={() => { setActiveTab('aarti'); }} className="hover:text-brass-400 cursor-pointer">Live Aarti & Rush Heatmaps</li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between text-charcoal-400 gap-3">
            <div>
              © 2026 India Temple Heritage & Pilgrimage Information Portal. All sacred micro-data verified.
            </div>
            <div className="flex items-center space-x-4">
              <span>Warm Sandstone & Terracotta Aesthetic</span>
              <span>•</span>
              <span>Web Audio Vedic Soundscapes</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
