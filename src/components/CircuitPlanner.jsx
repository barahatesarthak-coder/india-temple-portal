import React, { useState } from 'react';
import { Compass, MapPin, Calendar, Clock, Navigation, CheckCircle2, Circle, AlertCircle, Plane, Train, Car, Sparkles, Plus, Trash2 } from 'lucide-react';
import { PILGRIMAGE_CIRCUITS } from '../data/circuits';

export default function CircuitPlanner({ onSelectTempleById }) {
  const [selectedCircuitId, setSelectedCircuitId] = useState('char-dham');
  const [visitedStops, setVisitedStops] = useState({});
  const [checklistItems, setChecklistItems] = useState({});
  const [customStops, setCustomStops] = useState([]);
  const [newStopInput, setNewStopInput] = useState('');

  const circuit = PILGRIMAGE_CIRCUITS.find(c => c.id === selectedCircuitId) || PILGRIMAGE_CIRCUITS[0];

  const toggleStopVisited = (stopIndex) => {
    setVisitedStops(prev => ({
      ...prev,
      [`${selectedCircuitId}-${stopIndex}`]: !prev[`${selectedCircuitId}-${stopIndex}`]
    }));
  };

  const toggleChecklistItem = (itemIndex) => {
    setChecklistItems(prev => ({
      ...prev,
      [`${selectedCircuitId}-${itemIndex}`]: !prev[`${selectedCircuitId}-${itemIndex}`]
    }));
  };

  const handleAddCustomStop = () => {
    if (newStopInput.trim()) {
      setCustomStops([...customStops, newStopInput.trim()]);
      setNewStopInput('');
    }
  };

  const handleRemoveCustomStop = (idx) => {
    setCustomStops(customStops.filter((_, i) => i !== idx));
  };

  // Calculate completion percentage
  const totalStops = circuit.stops.length;
  const completedStopsCount = circuit.stops.filter((_, idx) => visitedStops[`${selectedCircuitId}-${idx}`]).length;
  const progressPercent = Math.round((completedStopsCount / totalStops) * 100);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-sandstone-100/90 border border-sandstone-300 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider bg-terracotta-100 text-terracotta-800 px-2.5 py-0.5 rounded border border-terracotta-200">
                Tirtha Yatra Route Architecture
              </span>
              <span className="text-xs text-brass-700 font-bold">Multi-Stop Itinerary Planner</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-terracotta-800 mt-1">
              Sacred Pilgrimage Circuit Planner
            </h2>
            <p className="text-sm text-charcoal-600 max-w-3xl mt-1 leading-relaxed">
              Explore curated all-India pilgrimage circuits, calculate total transit distances, track your holy darshan progress, and access route-specific dress codes and logistics.
            </p>
          </div>

          {/* Circuit Tabs */}
          <div className="flex flex-wrap md:flex-nowrap gap-2 bg-sandstone-200/80 p-1.5 rounded-xl border border-sandstone-300">
            {PILGRIMAGE_CIRCUITS.map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCircuitId(c.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap font-serif ${
                  selectedCircuitId === c.id
                    ? 'bg-terracotta-700 text-sandstone-50 shadow-md scale-102'
                    : 'text-charcoal-700 hover:bg-sandstone-100 hover:text-terracotta-800'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Circuit Metrics & Progress */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-sandstone-50 border border-sandstone-300 rounded-xl p-4 shadow-xs">
          <div className="flex items-center space-x-2 text-terracotta-700 mb-1">
            <Navigation className="w-4 h-4" />
            <span className="text-xs font-bold font-serif uppercase tracking-wider">Total Mileage</span>
          </div>
          <div className="text-2xl font-bold font-serif text-terracotta-800">
            {circuit.totalDistanceKm.toLocaleString()} km
          </div>
          <span className="text-[11px] text-charcoal-500">Across major sacred corridors</span>
        </div>

        <div className="bg-sandstone-50 border border-sandstone-300 rounded-xl p-4 shadow-xs">
          <div className="flex items-center space-x-2 text-brass-700 mb-1">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-bold font-serif uppercase tracking-wider">Estimated Duration</span>
          </div>
          <div className="text-2xl font-bold font-serif text-brass-800">
            {circuit.estimatedDays}
          </div>
          <span className="text-[11px] text-charcoal-500">Recommended pacing</span>
        </div>

        <div className="bg-sandstone-50 border border-sandstone-300 rounded-xl p-4 shadow-xs">
          <div className="flex items-center space-x-2 text-charcoal-700 mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-bold font-serif uppercase tracking-wider">Ideal Season</span>
          </div>
          <div className="text-sm font-bold text-charcoal-800 truncate">
            {circuit.bestSeason}
          </div>
          <span className="text-[11px] text-charcoal-500">Weather & access window</span>
        </div>

        <div className="bg-sandstone-50 border border-sandstone-300 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold font-serif uppercase tracking-wider text-charcoal-700 flex items-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1" />
              Yatra Progress
            </span>
            <span className="text-xs font-bold text-terracotta-800">
              {completedStopsCount} / {totalStops} Visited
            </span>
          </div>
          <div className="w-full h-2.5 bg-sandstone-200 rounded-full overflow-hidden mt-2">
            <div
              style={{ width: `${progressPercent}%` }}
              className="h-full bg-emerald-600 rounded-full transition-all duration-500"
            />
          </div>
          <span className="text-[11px] text-charcoal-500 mt-1 block text-right font-semibold">
            {progressPercent}% Completed
          </span>
        </div>
      </div>

      {/* Circuit Description & Classical Order */}
      <div className="bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sandstone-200 pb-2">
          <div>
            <h3 className="text-lg font-bold font-serif text-terracotta-800">
              {circuit.sanskritName}
            </h3>
            <p className="text-xs text-brass-700 font-semibold mt-0.5">
              Established / Documented by: {circuit.establishedBy}
            </p>
          </div>
          <span className="text-xs bg-terracotta-100 text-terracotta-800 font-bold px-3 py-1 rounded-full border border-terracotta-200">
            {circuit.tagline}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
          {circuit.description}
        </p>

        {/* Recommended Sequence */}
        {circuit.recommendedOrder && (
          <div className="pt-2">
            <span className="text-xs font-bold font-serif text-terracotta-800 uppercase tracking-wide block mb-1.5">
              Traditional Circumambulation (Pradakshina) Sequence:
            </span>
            <div className="flex flex-wrap gap-2">
              {circuit.recommendedOrder.map((step, idx) => (
                <span key={idx} className="text-xs bg-sandstone-200/90 text-charcoal-800 font-medium px-2.5 py-1 rounded-lg border border-sandstone-300 flex items-center">
                  <span className="w-4 h-4 rounded-full bg-terracotta-700 text-white text-[10px] flex items-center justify-center mr-1.5 font-bold">
                    {idx + 1}
                  </span>
                  {step}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Multi-Stop Route Timeline */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold font-serif text-terracotta-800 flex items-center">
            <Compass className="w-5 h-5 text-brass-600 mr-2" />
            Interactive Route Timeline ({totalStops} Sacred Stops)
          </h3>
          <span className="text-xs text-charcoal-500">
            Click circle to mark stop as visited
          </span>
        </div>

        <div className="space-y-3 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-sandstone-300 before:z-0">
          {circuit.stops.map((stop, idx) => {
            const isVisited = !!visitedStops[`${selectedCircuitId}-${idx}`];

            return (
              <div
                key={idx}
                className={`relative z-10 bg-sandstone-50 border rounded-xl p-4 transition-all shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  isVisited
                    ? 'border-emerald-400 bg-emerald-50/30'
                    : 'border-sandstone-300/90 hover:border-sandstone-400'
                }`}
              >
                {/* Left Side: Stop Number & Details */}
                <div className="flex items-start space-x-3.5">
                  <button
                    onClick={() => toggleStopVisited(idx)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 transition-transform active:scale-90 ${
                      isVisited
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-sandstone-200 text-charcoal-700 hover:bg-brass-500 hover:text-charcoal-900'
                    }`}
                    title={isVisited ? "Mark as unvisited" : "Mark as visited in your Yatra"}
                  >
                    {isVisited ? <CheckCircle2 className="w-5 h-5" /> : stop.stopNumber}
                  </button>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold font-serif text-terracotta-800">
                        {stop.name}
                      </h4>
                      <span className="text-[11px] font-semibold bg-sandstone-200 text-charcoal-700 px-2 py-0.5 rounded">
                        {stop.city ? `${stop.city}, ` : ''}{stop.state}
                      </span>
                      {stop.direction && (
                        <span className="text-[10px] font-bold bg-brass-100 text-brass-900 px-2 py-0.5 rounded border border-brass-300">
                          {stop.direction}
                        </span>
                      )}
                      {stop.element && (
                        <span className="text-[10px] font-bold bg-blue-100 text-blue-900 px-2 py-0.5 rounded border border-blue-300">
                          Element: {stop.element}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      {stop.significance || stop.symbolism}
                    </p>

                    {/* Transit & Dress Code details */}
                    <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-charcoal-500">
                      {stop.transit && (
                        <span className="flex items-center">
                          <Plane className="w-3 h-3 text-terracotta-600 mr-1" />
                          {stop.transit}
                        </span>
                      )}
                      {stop.dressCode && (
                        <span className="flex items-center text-amber-900 font-medium">
                          👗 {stop.dressCode}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side: Action */}
                {stop.templeId && (
                  <button
                    onClick={() => onSelectTempleById(stop.templeId)}
                    className="self-end md:self-center px-3 py-1.5 bg-sandstone-100 hover:bg-sandstone-200 text-terracotta-800 rounded-lg text-xs font-bold border border-sandstone-300 transition-colors whitespace-nowrap"
                  >
                    View Temple Specs →
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Travel Logistics & Packing Checklist Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: Travel Tips */}
        <div className="bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 shadow-xs space-y-3">
          <h4 className="text-sm font-bold font-serif text-terracotta-800 uppercase tracking-wide flex items-center">
            <AlertCircle className="w-4 h-4 text-brass-600 mr-1.5" />
            Route Advisory & Spiritual Guidelines
          </h4>
          <div className="space-y-2.5">
            {circuit.travelTips.map((tip, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs text-charcoal-700 bg-sandstone-100/70 p-2.5 rounded-lg border border-sandstone-200">
                <span className="text-terracotta-700 font-bold">•</span>
                <p className="leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Packing & Preparation Checklist */}
        <div className="bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold font-serif text-terracotta-800 uppercase tracking-wide flex items-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1.5" />
              Yatra Essential Checklist
            </h4>
            <span className="text-[11px] text-charcoal-500">Interactive</span>
          </div>

          <div className="space-y-2">
            {circuit.packingChecklist.map((item, idx) => {
              const isChecked = !!checklistItems[`${selectedCircuitId}-${idx}`];
              return (
                <div
                  key={idx}
                  onClick={() => toggleChecklistItem(idx)}
                  className={`p-2.5 rounded-lg border text-xs flex items-center justify-between cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-emerald-50 border-emerald-300 text-charcoal-800 line-through opacity-80'
                      : 'bg-sandstone-100/80 border-sandstone-200 text-charcoal-700 hover:bg-sandstone-200'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded flex items-center justify-center text-white ${isChecked ? 'bg-emerald-600' : 'border border-charcoal-400 bg-white'}`}>
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span>{item.item}</span>
                  </div>
                  {item.essential && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-terracotta-100 text-terracotta-800">
                      Mandatory
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Custom Stop Builder */}
          <div className="pt-3 border-t border-sandstone-200">
            <span className="text-xs font-bold font-serif text-terracotta-800 uppercase tracking-wide block mb-1.5">
              Add Custom Stop to Itinerary
            </span>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="e.g. Haridwar Ganga Aarti, Joshimath..."
                value={newStopInput}
                onChange={(e) => setNewStopInput(e.target.value)}
                className="flex-1 bg-sandstone-100 border border-sandstone-300 text-xs px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-terracotta-500"
              />
              <button
                onClick={handleAddCustomStop}
                className="bg-terracotta-700 hover:bg-terracotta-800 text-white p-2 rounded-lg text-xs font-bold flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>

            {customStops.length > 0 && (
              <div className="mt-2 space-y-1">
                {customStops.map((stop, i) => (
                  <div key={i} className="flex items-center justify-between text-xs bg-brass-50 border border-brass-200 p-2 rounded-lg">
                    <span className="font-medium text-charcoal-800">📍 {stop}</span>
                    <button onClick={() => handleRemoveCustomStop(i)} className="text-rose-600 hover:text-rose-800">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
