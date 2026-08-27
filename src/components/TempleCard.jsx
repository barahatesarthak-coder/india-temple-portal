import React from 'react';
import { Landmark, MapPin, Sparkles, Clock, Volume2, Camera, Shirt, Accessibility, Bookmark, Star, ArrowRight } from 'lucide-react';
import { templeAudio } from '../utils/audioEngine';

export default function TempleCard({ 
  temple, 
  onSelect, 
  isBookmarked, 
  onToggleBookmark,
  isFeatured = false 
}) {
  const getRushBadge = (status) => {
    switch (status) {
      case 'Low':
        return { text: 'Low Rush (Fast Darshan)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' };
      case 'Moderate':
        return { text: 'Moderate Flow (30-45m)', color: 'bg-amber-100 text-amber-900 border-amber-300' };
      case 'High':
        return { text: 'High Crowd (1.5-2 hrs)', color: 'bg-orange-100 text-orange-800 border-orange-300' };
      case 'Peak':
        return { text: 'Peak Darshan (3+ hrs)', color: 'bg-rose-100 text-rose-800 border-rose-300' };
      default:
        return { text: 'Live Tracking', color: 'bg-sandstone-200 text-charcoal-700' };
    }
  };

  const rushInfo = getRushBadge(temple.rushLevel);

  const handlePlayPreview = (e) => {
    e.stopPropagation();
    templeAudio.playTempleBell(587.33, 4.0);
    templeAudio.startAmbientDrone();
  };

  return (
    <div 
      onClick={() => onSelect(temple)}
      className={`group cursor-pointer rounded-2xl overflow-hidden terracotta-card flex flex-col justify-between ${
        isFeatured ? 'md:col-span-2 md:flex-row' : ''
      }`}
    >
      {/* Temple Thumbnail & Badges */}
      <div className={`relative overflow-hidden ${isFeatured ? 'md:w-1/2 min-h-[260px]' : 'h-52 w-full'}`}>
        <img
          src={temple.image}
          alt={temple.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />

        {/* Top Badges: Style & Bookmark */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="text-[11px] font-bold font-serif uppercase tracking-wider bg-sandstone-50/95 backdrop-blur-md text-terracotta-800 px-2.5 py-1 rounded-full border border-sandstone-300 shadow-sm">
            {temple.style}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(temple.id);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-transform active:scale-90 ${
              isBookmarked
                ? 'bg-brass-500 text-charcoal-900 shadow-md'
                : 'bg-charcoal-900/50 text-sandstone-100 hover:bg-charcoal-900/80'
            }`}
            title={isBookmarked ? "Remove from bookmarks" : "Save temple"}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Bottom Banner on Image: State & Sanskrit Name */}
        <div className="absolute bottom-3 left-3 right-3 text-sandstone-50 z-10">
          <div className="flex items-center space-x-1.5 text-xs text-brass-300 font-medium">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{temple.city}, {temple.state}</span>
          </div>
          <div className="text-[11px] text-sandstone-300 font-serif truncate">
            {temple.sanskritName}
          </div>
        </div>
      </div>

      {/* Card Content Details */}
      <div className={`p-4 sm:p-5 flex flex-col justify-between flex-1 ${isFeatured ? 'md:w-1/2' : ''}`}>
        <div className="space-y-2.5">
          
          {/* Rush Badge & Period */}
          <div className="flex items-center justify-between text-xs">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${rushInfo.color} flex items-center`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse"></span>
              {rushInfo.text}
            </span>
            <span className="text-[11px] text-charcoal-500 font-medium truncate max-w-[140px]">
              {temple.period.split('(')[0]}
            </span>
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-lg font-bold font-serif text-terracotta-800 group-hover:text-terracotta-600 transition-colors line-clamp-1">
              {temple.name}
            </h3>
            <p className="text-xs text-charcoal-600 font-medium mt-0.5 line-clamp-2 leading-relaxed">
              {temple.tagline}
            </p>
          </div>

          {/* Deity Specification */}
          <div className="text-xs text-charcoal-700 bg-sandstone-100/80 p-2 rounded-lg border border-sandstone-200/80">
            <span className="font-bold text-terracotta-800 font-serif">Presiding Deity: </span>
            <span className="text-charcoal-600 truncate">{temple.deity}</span>
          </div>

          {/* Quick Rules Micro-badges */}
          <div className="grid grid-cols-3 gap-1.5 pt-1 text-[10px]">
            <div className="bg-sandstone-100 text-charcoal-700 p-1.5 rounded flex items-center space-x-1 truncate" title="Photography Status">
              <Camera className="w-3 h-3 text-terracotta-600 flex-shrink-0" />
              <span className="truncate">{temple.rulesMatrix.photography.badge}</span>
            </div>
            <div className="bg-sandstone-100 text-charcoal-700 p-1.5 rounded flex items-center space-x-1 truncate" title="Dress Code">
              <Shirt className="w-3 h-3 text-brass-700 flex-shrink-0" />
              <span className="truncate">{temple.rulesMatrix.dressCode.badge}</span>
            </div>
            <div className="bg-sandstone-100 text-charcoal-700 p-1.5 rounded flex items-center space-x-1 truncate" title="Wheelchair Facility">
              <Accessibility className="w-3 h-3 text-emerald-700 flex-shrink-0" />
              <span className="truncate">{temple.rulesMatrix.wheelchair.badge}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-4 pt-3 border-t border-sandstone-200/80 flex items-center justify-between gap-2">
          <button
            onClick={handlePlayPreview}
            className="flex items-center space-x-1.5 text-xs text-brass-800 hover:text-brass-950 font-bold bg-brass-100 hover:bg-brass-200 px-2.5 py-1.5 rounded-lg transition-colors"
            title="Listen to ambient temple bell & chant"
          >
            <Volume2 className="w-3.5 h-3.5 text-terracotta-700" />
            <span>Audio Legend</span>
          </button>

          <span className="inline-flex items-center space-x-1 text-xs font-bold text-terracotta-800 group-hover:translate-x-1 transition-transform">
            <span>Explore Darshan Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
