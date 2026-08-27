import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Sparkles, Clock, Heart, ArrowRight } from 'lucide-react';
import { useFavorites } from '../../context/FavoritesContext';

export default function TempleCard({ temple }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const templeKey = temple.id || temple.slug || temple._id;
  const isFav = isFavorite(templeKey);

  const fallbackImage = 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80';
  const displayImage = temple.images?.[0] || fallbackImage;

  return (
    <div className="group bg-white rounded-2xl border border-stone-200 hover:border-amber-400 overflow-hidden shadow-sm hover:shadow-divine transition-all duration-300 flex flex-col h-full">
      {/* Image Container with Badges */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-stone-100">
        <img
          src={displayImage}
          alt={temple.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category / Heritage Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {temple.featured && (
            <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-bold text-[11px] uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          )}
          {temple.region && (
            <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-amber-300 font-semibold text-[11px] rounded-lg border border-amber-400/30">
              {temple.region}
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(temple);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-xl backdrop-blur-md transition-all ${
            isFav
              ? 'bg-rose-600 text-white shadow-md'
              : 'bg-black/40 text-white hover:bg-white hover:text-rose-600'
          }`}
          aria-label={isFav ? 'Remove from saved favorites' : 'Save to favorites'}
          title={isFav ? 'Saved in favorites' : 'Save to favorites'}
        >
          <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
        </button>

        {/* Location tag on image bottom */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{temple.city}, {temple.state}</span>
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Hindi Name / Subtitle if available */}
          {temple.hindiName && (
            <p className="text-xs font-semibold text-amber-700 mb-0.5 font-serif">
              {temple.hindiName}
            </p>
          )}

          {/* Temple Title */}
          <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors font-serif-heading line-clamp-1">
            <Link to={`/temples/${temple.slug || temple.id || temple._id}`}>
              {temple.name}
            </Link>
          </h3>

          {/* Deity and Architecture */}
          <div className="mt-2 text-xs text-stone-600 space-y-1">
            <p className="flex items-center gap-1.5 font-medium text-stone-700">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
              <span className="font-semibold text-stone-900">Deity:</span> 
              <span className="truncate">{temple.deity}</span>
            </p>
            {temple.architecturalStyle && (
              <p className="flex items-center gap-1.5 text-stone-500">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0"></span>
                <span className="truncate">{temple.architecturalStyle}</span>
              </p>
            )}
          </div>

          {/* Short Description */}
          <p className="mt-3 text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {temple.shortDescription}
          </p>
        </div>

        {/* Footer info: Darshan preview & CTA button */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <div className="text-[11px] text-stone-500 flex items-center gap-1 truncate" title={temple.darshanTimings}>
            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate">{temple.darshanTimings || 'Check timings'}</span>
          </div>

          <Link
            to={`/temples/${temple.slug || temple.id || temple._id}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-100 group-hover:bg-amber-700 text-stone-800 group-hover:text-white text-xs font-semibold transition-all shrink-0"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
