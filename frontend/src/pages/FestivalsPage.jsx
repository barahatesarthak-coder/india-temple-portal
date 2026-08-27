import React, { useState, useEffect } from 'react';
import festivalService from '../services/festivalService';
import FestivalCard from '../components/festivals/FestivalCard';
import { Calendar, Sparkles } from 'lucide-react';

export default function FestivalsPage() {
  const [festivals, setFestivals] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        setLoading(true);
        const res = await festivalService.getFestivals({ month: selectedMonth });
        if (res.data) setFestivals(res.data);
      } catch (err) {
        console.error('Failed to load festivals:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchFestivals();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedMonth]);

  const months = [
    { label: 'All Year', value: 'all' },
    { label: 'Feb - Mar (Shivaratri)', value: 'February' },
    { label: 'Apr - May (Chithirai)', value: 'April' },
    { label: 'Jun - Jul (Rath Yatra)', value: 'June' },
    { label: 'Sep - Oct (Brahmotsavam / Navratri)', value: 'September' },
    { label: 'Nov - Dec (Dev Deepawali)', value: 'November' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 relative overflow-hidden shadow-lg">
        <div className="relative z-10 max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-serif-heading">
            Sacred Calendar & Tithis
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-serif-heading">
            Festivals & Utsavams of India
          </h1>
          <p className="text-sm text-stone-300">
            Witness the grand chariot processions, night-long aartis, sacred bathing festivals, and cultural celebrations across India's premier temple sanctuaries.
          </p>
        </div>
      </div>

      {/* Month Filter */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-2">Season / Month:</span>
        {months.map((m) => {
          const isSelected = selectedMonth === m.value;
          return (
            <button
              key={m.value}
              onClick={() => setSelectedMonth(m.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isSelected
                  ? 'bg-amber-700 text-white shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-amber-400'
              }`}
            >
              {m.label}
            </button>
          );
        })}
      </div>

      {/* Festivals Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-72 bg-white rounded-2xl border animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivals.map((fest) => (
            <FestivalCard key={fest.id || fest.slug} festival={fest} />
          ))}
        </div>
      )}

    </div>
  );
}
