import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import circuitService from '../services/circuitService';
import TempleCard from '../components/temples/TempleCard';
import { 
  Compass, 
  Clock, 
  MapPin, 
  ArrowLeft, 
  Footprints, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Info 
} from 'lucide-react';

export default function CircuitDetailPage() {
  const { id } = useParams();
  const [circuit, setCircuit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCircuit = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await circuitService.getCircuitByIdOrSlug(id);
        if (res.data) setCircuit(res.data);
      } catch (err) {
        setError(err.message || 'Failed to load circuit itinerary.');
      } finally {
        setLoading(false);
      }
    };
    fetchCircuit();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm font-semibold text-stone-600">Loading pilgrimage circuit itinerary...</p>
      </div>
    );
  }

  if (error || !circuit) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
        <div className="p-4 bg-rose-50 text-rose-700 rounded-2xl border border-rose-200">
          <p className="font-bold text-base font-serif-heading">Circuit Not Found</p>
          <p className="text-xs text-rose-600 mt-1">{error || 'This circuit does not exist.'}</p>
        </div>
        <Link
          to="/circuits"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-700 text-white text-xs font-bold rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Circuits
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Back Link */}
      <Link
        to="/circuits"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-amber-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Circuits</span>
      </Link>

      {/* Circuit Hero Banner */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-divine relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-amber-500 text-stone-950 font-bold text-xs uppercase rounded-lg">
              {circuit.region}
            </span>
            {circuit.difficulty && (
              <span className="px-3 py-1 bg-black/60 border border-amber-400/40 text-amber-300 font-semibold text-xs rounded-lg">
                {circuit.difficulty} Difficulty
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold font-serif-heading text-stone-50">
            {circuit.name}
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            {circuit.description}
          </p>

          <div className="flex flex-wrap gap-6 pt-4 border-t border-stone-800 text-xs sm:text-sm font-semibold text-amber-300">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" /> Duration: {circuit.duration}
            </span>
            {circuit.distance && (
              <span className="flex items-center gap-2">
                <Footprints className="w-4 h-4 text-amber-400" /> Approx Distance: {circuit.distance}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Spiritual Significance */}
      {circuit.spiritualSignificance && (
        <div className="bg-amber-50/60 rounded-3xl p-6 sm:p-8 border border-amber-200 space-y-2">
          <h2 className="text-lg font-bold text-amber-950 font-serif-heading flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-700" />
            Spiritual Significance & Yatra Fruit (Moksha)
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {circuit.spiritualSignificance}
          </p>
        </div>
      )}

      {/* Day-by-Day Itinerary */}
      {circuit.itinerary && circuit.itinerary.length > 0 && (
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Step-by-Step Route Plan
            </span>
            <h2 className="text-2xl font-bold text-stone-900 font-serif-heading">
              Detailed Pilgrimage Itinerary
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {circuit.itinerary.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2 hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-lg">
                    {item.day}
                  </span>
                  <span className="text-xs font-bold text-stone-600 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" /> {item.location}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 pt-2 leading-relaxed">
                  {item.activities}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Temples Included in Circuit */}
      {circuit.temples && circuit.temples.length > 0 && (
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Sacred Sanctuaries En Route
            </span>
            <h2 className="text-2xl font-bold text-stone-900 font-serif-heading">
              Featured Shrines on this Circuit ({circuit.temples.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {circuit.temples.map((temple) => (
              <TempleCard key={temple.id || temple._id} temple={temple} />
            ))}
          </div>
        </div>
      )}

      {/* Travel Tips */}
      {circuit.travelTips && circuit.travelTips.length > 0 && (
        <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-4">
          <h3 className="text-base font-bold text-stone-900 font-serif-heading flex items-center gap-2">
            <Info className="w-5 h-5 text-amber-600" />
            Travel Advisory & Pilgrim Recommendations
          </h3>
          <ul className="space-y-2.5">
            {circuit.travelTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}
