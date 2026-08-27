import React, { useState, useEffect } from 'react';
import circuitService from '../services/circuitService';
import CircuitCard from '../components/circuits/CircuitCard';
import { Compass, Sparkles, Footprints, ShieldCheck } from 'lucide-react';

export default function CircuitsPage() {
  const [circuits, setCircuits] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCircuits = async () => {
      try {
        setLoading(true);
        const res = await circuitService.getCircuits({ region: selectedRegion });
        if (res.data) setCircuits(res.data);
      } catch (err) {
        console.error('Failed to load circuits:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCircuits();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedRegion]);

  const regions = ['All India', 'North India', 'South India', 'Pan-India'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 relative overflow-hidden shadow-lg">
        <div className="relative z-10 max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-serif-heading">
            Sacred Yatras & Itineraries
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-serif-heading">
            Pilgrimage Circuits of India
          </h1>
          <p className="text-sm text-stone-300">
            Curated sacred routes linking ancient temple clusters. Explore the Maha Char Dham, 12 Jyotirlingas, Shakti Peethas, and Himalayan Yatras with day-by-day itineraries and logistical advice.
          </p>
        </div>
      </div>

      {/* Region Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-2">Filter By Zone:</span>
        {regions.map((reg) => {
          const val = reg === 'All India' ? 'all' : reg;
          const isSelected = selectedRegion === val;
          return (
            <button
              key={reg}
              onClick={() => setSelectedRegion(val)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isSelected
                  ? 'bg-amber-700 text-white shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-amber-400'
              }`}
            >
              {reg}
            </button>
          );
        })}
      </div>

      {/* Circuits Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-80 bg-white rounded-2xl border animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {circuits.map((circuit) => (
            <CircuitCard key={circuit.id || circuit.slug} circuit={circuit} />
          ))}
        </div>
      )}

      {/* Yatra Preparation Checklist */}
      <div className="bg-amber-50/60 rounded-3xl p-8 border border-amber-200 space-y-4">
        <div className="flex items-center gap-2 text-amber-900 font-bold font-serif-heading text-lg">
          <Footprints className="w-5 h-5 text-amber-700" />
          <span>Essential Guidelines for Indian Pilgrimage Circuits</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-700">
          <div className="p-4 bg-white rounded-2xl border border-amber-200 space-y-1.5">
            <h4 className="font-bold text-stone-900">Biometric Passes & Yatra Permits</h4>
            <p>Routes like Chota Char Dham (Kedarnath/Badrinath) and Amarnath require official state registration.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-amber-200 space-y-1.5">
            <h4 className="font-bold text-stone-900">Aarti & Special Darshan Slots</h4>
            <p>Book Bhasma Aarti (Ujjain) and Special Entry (Tirupati) 30 to 60 days ahead on official devasthanam portals.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-amber-200 space-y-1.5">
            <h4 className="font-bold text-stone-900">Traditional Attire Rules</h4>
            <p>Strict modesty guidelines apply. Carry traditional Dhotis / Sarees for morning abhishekams.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
