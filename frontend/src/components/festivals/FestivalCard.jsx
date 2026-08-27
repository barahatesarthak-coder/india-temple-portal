import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export default function FestivalCard({ festival }) {
  const fallbackImage = 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80';
  const displayImage = festival.images || fallbackImage;

  return (
    <div className="group bg-white rounded-2xl border border-stone-200 hover:border-amber-400 overflow-hidden shadow-sm hover:shadow-divine transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-stone-100">
        <img
          src={displayImage}
          alt={festival.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-amber-500 text-stone-950 font-bold text-[11px] uppercase tracking-wider rounded-lg shadow-sm">
          <Calendar className="w-3 h-3" />
          <span>{festival.month}</span>
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>{festival.state}</span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors font-serif-heading line-clamp-1">
            <Link to={`/festivals/${festival.slug || festival.id}`}>
              {festival.name}
            </Link>
          </h3>
          <p className="mt-2 text-xs text-stone-600 line-clamp-3 leading-relaxed">
            {festival.description}
          </p>
        </div>

        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <span className="text-[11px] text-amber-800 font-semibold truncate">
            {festival.season || 'Sacred Festival'}
          </span>
          <Link
            to={`/festivals/${festival.slug || festival.id}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-100 group-hover:bg-amber-700 text-stone-800 group-hover:text-white text-xs font-semibold transition-all"
          >
            <span>Read Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
