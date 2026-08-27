import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Clock, MapPin, ArrowRight, ShieldCheck, Footprints } from 'lucide-react';

export default function CircuitCard({ circuit }) {
  const fallbackImage = 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80';
  const displayImage = circuit.coverImage || fallbackImage;

  return (
    <div className="group bg-white rounded-2xl border border-stone-200 hover:border-amber-400 overflow-hidden shadow-sm hover:shadow-divine transition-all duration-300 flex flex-col h-full">
      {/* Cover Image */}
      <div className="relative h-52 overflow-hidden bg-stone-100">
        <img
          src={displayImage}
          alt={circuit.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Region & Difficulty Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-bold text-[11px] uppercase tracking-wider rounded-lg shadow-sm">
            {circuit.region}
          </span>
          {circuit.difficulty && (
            <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-amber-300 font-semibold text-[11px] rounded-lg border border-amber-400/30">
              {circuit.difficulty}
            </span>
          )}
        </div>

        {/* Duration / Distance info */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{circuit.duration}</span>
          </span>
          {circuit.distance && (
            <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
              <Footprints className="w-3.5 h-3.5 text-amber-400" />
              <span>{circuit.distance}</span>
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors font-serif-heading line-clamp-1">
            <Link to={`/circuits/${circuit.slug || circuit.id}`}>
              {circuit.name}
            </Link>
          </h3>
          <p className="mt-2 text-xs text-stone-600 line-clamp-3 leading-relaxed">
            {circuit.description}
          </p>
        </div>

        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-amber-800">
            {circuit.templeIds?.length || 4} Key Shrines Included
          </span>
          <Link
            to={`/circuits/${circuit.slug || circuit.id}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-100 group-hover:bg-amber-700 text-stone-800 group-hover:text-white text-xs font-semibold transition-all"
          >
            <span>View Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
