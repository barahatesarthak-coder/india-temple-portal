import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import festivalService from '../services/festivalService';
import { Calendar, MapPin, Sparkles, ArrowLeft, Building, Flame, CheckCircle2 } from 'lucide-react';

export default function FestivalDetailPage() {
  const { id } = useParams();
  const [festival, setFestival] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFestival = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await festivalService.getFestivalByIdOrSlug(id);
        if (res.data) setFestival(res.data);
      } catch (err) {
        setError(err.message || 'Failed to load festival details.');
      } finally {
        setLoading(false);
      }
    };
    fetchFestival();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm font-semibold text-stone-600">Loading sacred festival insights...</p>
      </div>
    );
  }

  if (error || !festival) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
        <div className="p-4 bg-rose-50 text-rose-700 rounded-2xl border border-rose-200">
          <p className="font-bold text-base font-serif-heading">Festival Not Found</p>
          <p className="text-xs text-rose-600 mt-1">{error || 'This festival record could not be located.'}</p>
        </div>
        <Link
          to="/festivals"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-700 text-white text-xs font-bold rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Festival Calendar
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      <Link
        to="/festivals"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-amber-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Festivals</span>
      </Link>

      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-divine relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-amber-500 text-stone-950 font-bold text-xs uppercase rounded-lg">
              {festival.month}
            </span>
            <span className="px-3 py-1 bg-black/60 border border-amber-400/40 text-amber-300 font-semibold text-xs rounded-lg">
              {festival.state}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold font-serif-heading text-stone-50">
            {festival.name}
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            {festival.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Spiritual Significance */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-3">
          <h2 className="text-lg font-bold text-stone-900 font-serif-heading flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-600" />
            Cultural & Spiritual Significance
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {festival.significance}
          </p>
        </div>

        {/* Rituals & Observances */}
        {festival.rituals && (
          <div className="bg-amber-50/60 rounded-3xl p-6 sm:p-8 border border-amber-200 space-y-3">
            <h2 className="text-lg font-bold text-amber-950 font-serif-heading flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-700" />
              Sacred Rituals & Observances
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {festival.rituals}
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
