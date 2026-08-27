import React, { useState } from 'react';
import { X, MapPin, Landmark, Clock, ShieldCheck, Volume2, Sparkles, ExternalLink, Bookmark, Share2, Flame, Bell } from 'lucide-react';
import RushHeatmap from './RushHeatmap';
import AccessibilityMatrix from './AccessibilityMatrix';
import AudioPlayer from './AudioPlayer';
import { templeAudio } from '../utils/audioEngine';

export default function TempleDetailModal({ 
  temple, 
  onClose, 
  isBookmarked, 
  onToggleBookmark,
  onOpenDiyaModal 
}) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!temple) return null;

  const handleRingBell = () => {
    templeAudio.playTempleBell(587.33, 4.5);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-900/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-sandstone-50 border border-sandstone-300 rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-fade-in my-auto">
        
        {/* Modal Top Banner Image with Controls */}
        <div className="relative h-64 sm:h-80 w-full flex-shrink-0">
          <img
            src={temple.image}
            alt={temple.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sandstone-50 via-charcoal-900/40 to-charcoal-900/60" />

          {/* Top Floating Buttons */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold font-serif uppercase tracking-wider bg-sandstone-50/95 backdrop-blur-md text-terracotta-800 px-3 py-1 rounded-full border border-sandstone-300 shadow-sm">
                {temple.style} Architecture
              </span>
              <span className="hidden sm:inline text-xs font-bold bg-brass-500 text-charcoal-900 px-3 py-1 rounded-full shadow-sm">
                {temple.region} India
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleRingBell}
                className="w-9 h-9 rounded-full bg-sandstone-50/90 text-terracotta-800 hover:bg-brass-500 hover:text-charcoal-900 flex items-center justify-center backdrop-blur-md transition-all shadow-md active:scale-90"
                title="Ring Temple Bell"
              >
                <Bell className="w-4 h-4" />
              </button>

              <button
                onClick={() => onToggleBookmark(temple.id)}
                className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-md active:scale-90 ${
                  isBookmarked
                    ? 'bg-brass-500 text-charcoal-900'
                    : 'bg-sandstone-50/90 text-charcoal-700 hover:bg-sandstone-100'
                }`}
                title="Bookmark Temple"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-sandstone-50/90 text-charcoal-700 hover:bg-sandstone-200 flex items-center justify-center backdrop-blur-md transition-all shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Title on Banner */}
          <div className="absolute bottom-4 left-6 right-6 z-10">
            <div className="flex items-center space-x-2 text-brass-700 font-serif text-sm">
              <MapPin className="w-4 h-4" />
              <span>{temple.city}, {temple.state}</span>
              <span>•</span>
              <span>{temple.period}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-terracotta-800 tracking-tight leading-tight mt-0.5">
              {temple.name}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-serif italic mt-0.5">
              {temple.sanskritName}
            </p>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-sandstone-300 px-6 bg-sandstone-100/90 overflow-x-auto no-scrollbar flex-shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap font-serif ${
              activeTab === 'overview'
                ? 'border-terracotta-700 text-terracotta-800 bg-sandstone-50/80'
                : 'border-transparent text-charcoal-600 hover:text-terracotta-700'
            }`}
          >
            Overview & Sthala History
          </button>

          <button
            onClick={() => setActiveTab('darshan')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap font-serif flex items-center space-x-1.5 ${
              activeTab === 'darshan'
                ? 'border-terracotta-700 text-terracotta-800 bg-sandstone-50/80'
                : 'border-transparent text-charcoal-600 hover:text-terracotta-700'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Darshan Rush & Aarti</span>
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap font-serif flex items-center space-x-1.5 ${
              activeTab === 'rules'
                ? 'border-terracotta-700 text-terracotta-800 bg-sandstone-50/80'
                : 'border-transparent text-charcoal-600 hover:text-terracotta-700'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Rules & Accessibility</span>
          </button>

          <button
            onClick={() => setActiveTab('audio')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap font-serif flex items-center space-x-1.5 ${
              activeTab === 'audio'
                ? 'border-terracotta-700 text-terracotta-800 bg-sandstone-50/80'
                : 'border-transparent text-charcoal-600 hover:text-terracotta-700'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5 text-brass-700" />
            <span>Audio Legends & Transcripts</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap font-serif flex items-center space-x-1.5 ${
              activeTab === 'architecture'
                ? 'border-terracotta-700 text-terracotta-800 bg-sandstone-50/80'
                : 'border-transparent text-charcoal-600 hover:text-terracotta-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-brass-700" />
            <span>Architectural Feats</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Tab 1: Overview & Heritage */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Quick Info Bento Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-sandstone-100/90 border border-sandstone-200 p-3 rounded-xl">
                  <span className="text-[10px] font-bold text-charcoal-500 uppercase font-serif block">Presiding Deity</span>
                  <span className="text-xs font-bold text-terracotta-800 line-clamp-2 mt-0.5">{temple.deity}</span>
                </div>
                <div className="bg-sandstone-100/90 border border-sandstone-200 p-3 rounded-xl">
                  <span className="text-[10px] font-bold text-charcoal-500 uppercase font-serif block">Ruling Dynasty</span>
                  <span className="text-xs font-bold text-terracotta-800 line-clamp-2 mt-0.5">{temple.dynasty}</span>
                </div>
                <div className="bg-sandstone-100/90 border border-sandstone-200 p-3 rounded-xl">
                  <span className="text-[10px] font-bold text-charcoal-500 uppercase font-serif block">Architectural School</span>
                  <span className="text-xs font-bold text-terracotta-800 line-clamp-2 mt-0.5">{temple.style}</span>
                </div>
                <div className="bg-sandstone-100/90 border border-sandstone-200 p-3 rounded-xl">
                  <span className="text-[10px] font-bold text-charcoal-500 uppercase font-serif block">Associated Circuits</span>
                  <span className="text-xs font-bold text-brass-800 line-clamp-2 mt-0.5">{temple.circuits?.join(', ') || 'Independent'}</span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-sandstone-100/80 border border-sandstone-300 rounded-2xl p-5 space-y-2">
                <h4 className="text-sm font-bold font-serif text-terracotta-800 uppercase tracking-wide">
                  Historical & Spiritual Chronicle
                </h4>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  {temple.description}
                </p>
              </div>

              {/* Quick Darshan Highlights Banner */}
              <div className="bg-gradient-to-r from-brass-50 to-sandstone-100 border border-brass-300/80 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-terracotta-800 font-serif uppercase">Live Darshan Status:</span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {temple.rushLevel} Rush ({temple.rushPercentage}%)
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-600 mt-1">
                    Optimal Darshan Slot: <span className="font-semibold text-charcoal-800">{temple.bestDarshanSlots?.[0]?.time}</span>
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={onOpenDiyaModal}
                    className="flex items-center space-x-1.5 bg-brass-500 hover:bg-brass-600 text-charcoal-900 text-xs font-bold px-4 py-2 rounded-xl shadow-sm transition-transform active:scale-95"
                  >
                    <Flame className="w-3.5 h-3.5 text-terracotta-800 animate-diya-flame" />
                    <span>Offer Virtual Diya</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('darshan')}
                    className="text-xs font-bold text-terracotta-800 hover:text-terracotta-900 underline"
                  >
                    View 24h Heatmap →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Live Darshan & Aarti */}
          {activeTab === 'darshan' && (
            <RushHeatmap
              heatmapData={temple.rushHeatmap24h}
              aartiSchedule={temple.aartiSchedule}
              bestSlots={temple.bestDarshanSlots}
              templeName={temple.name}
            />
          )}

          {/* Tab 3: Rules & Accessibility Matrix */}
          {activeTab === 'rules' && (
            <AccessibilityMatrix rulesMatrix={temple.rulesMatrix} />
          )}

          {/* Tab 4: Audio Legends */}
          {activeTab === 'audio' && (
            <AudioPlayer audioLegend={temple.audioLegend} templeName={temple.name} />
          )}

          {/* Tab 5: Architecture Highlights */}
          {activeTab === 'architecture' && temple.architectureHighlights && (
            <div className="space-y-5">
              <div className="bg-sandstone-100/90 border border-sandstone-300 rounded-2xl p-5 space-y-2">
                <h4 className="text-sm font-bold font-serif text-terracotta-800 uppercase tracking-wide">
                  Architectural Grandeur & Philosophy
                </h4>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  {temple.architectureHighlights.styleDetails}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold font-serif text-terracotta-800 uppercase tracking-wider">
                  Key Architectural Feats & Inscriptions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {temple.architectureHighlights.features.map((feat, i) => (
                    <div key={i} className="bg-sandstone-50 border border-sandstone-300/80 rounded-xl p-3 flex items-start space-x-2.5 shadow-xs">
                      <span className="w-5 h-5 rounded-full bg-brass-100 text-brass-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-xs text-charcoal-800 leading-relaxed font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 px-6 border-t border-sandstone-300 bg-sandstone-100/80 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center space-x-2 text-xs text-charcoal-500">
            <span className="font-semibold text-charcoal-700">{temple.rating} ★★★★★</span>
            <span>({temple.reviewsCount} pilgrim records)</span>
          </div>

          <div className="flex items-center space-x-3">
            {temple.rulesMatrix?.bookingPass?.officialUrl && (
              <a
                href={temple.rulesMatrix.bookingPass.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-terracotta-700 hover:bg-terracotta-800 text-sandstone-50 text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-sm"
              >
                <span>Official Darshan Booking</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-sandstone-200 hover:bg-sandstone-300 text-charcoal-800"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
