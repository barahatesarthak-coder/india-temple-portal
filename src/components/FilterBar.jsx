import React from 'react';
import { Filter, RotateCcw, Sparkles } from 'lucide-react';

export default function FilterBar({
  selectedStyle,
  setSelectedStyle,
  selectedRegion,
  setSelectedRegion,
  selectedCircuit,
  setSelectedCircuit,
  selectedRush,
  setSelectedRush,
  totalResults,
  onResetFilters
}) {
  const styles = [
    { label: 'All Styles', value: 'all' },
    { label: 'Nagara (North)', value: 'Nagara' },
    { label: 'Dravidian (South)', value: 'Dravidian' },
    { label: 'Vesara / Hybrid', value: 'Vesara' },
    { label: 'Kalinga (East)', value: 'Kalinga' },
    { label: 'Rock-Cut Monolith', value: 'Rock-Cut' },
  ];

  const regions = [
    { label: 'All Regions', value: 'all' },
    { label: 'North India', value: 'North' },
    { label: 'South India', value: 'South' },
    { label: 'East India', value: 'East' },
    { label: 'West India', value: 'West' }
  ];

  const circuits = [
    { label: 'All Circuits', value: 'all' },
    { label: 'Char Dham', value: 'Char Dham' },
    { label: '12 Jyotirlingas', value: '12 Jyotirlingas' },
    { label: 'Pancha Bhoota Stalam', value: 'Pancha Bhoota Stalam' },
    { label: 'Shakti Peethas', value: 'Shakti Peethas' }
  ];

  const rushLevels = [
    { label: 'Any Rush', value: 'all' },
    { label: '🟢 Low Rush (Smooth)', value: 'Low' },
    { label: '🟡 Moderate Flow', value: 'Moderate' },
    { label: '🟠 High Queue', value: 'High' },
    { label: '🔴 Peak Darshan', value: 'Peak' }
  ];

  const hasActiveFilters = selectedStyle !== 'all' || selectedRegion !== 'all' || selectedCircuit !== 'all' || selectedRush !== 'all';

  return (
    <div className="bg-sandstone-100/90 rounded-2xl p-4 sm:p-5 border border-sandstone-300 shadow-sm mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        
        {/* Title & Stats */}
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-terracotta-100 border border-terracotta-200 flex items-center justify-center text-terracotta-800">
            <Filter className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold font-serif text-terracotta-800 tracking-wide uppercase">
              Filter Heritage Sites
            </h3>
            <p className="text-xs text-charcoal-500">
              Showing <span className="font-bold text-terracotta-700">{totalResults}</span> consecrated sanctuaries
            </p>
          </div>
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 flex-1 lg:max-w-3xl">
          
          {/* Architectural Style */}
          <div>
            <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">
              Architecture
            </label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
            >
              {styles.map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          {/* Region */}
          <div>
            <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">
              Region / State
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
            >
              {regions.map(r => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>

          {/* Circuit */}
          <div>
            <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">
              Pilgrimage Circuit
            </label>
            <select
              value={selectedCircuit}
              onChange={(e) => setSelectedCircuit(e.target.value)}
              className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
            >
              {circuits.map(c => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Rush Level */}
          <div>
            <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">
              Live Rush Status
            </label>
            <select
              value={selectedRush}
              onChange={(e) => setSelectedRush(e.target.value)}
              className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
            >
              {rushLevels.map(r => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset Filters button */}
        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="flex items-center justify-center space-x-1 px-3 py-1.5 bg-sandstone-200 hover:bg-sandstone-300 text-charcoal-700 rounded-lg text-xs font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Quick Circuit Pills */}
      <div className="mt-3.5 pt-3 border-t border-sandstone-200/80 flex items-center space-x-2 overflow-x-auto no-scrollbar">
        <span className="text-[11px] font-semibold text-charcoal-500 whitespace-nowrap flex items-center">
          <Sparkles className="w-3 h-3 text-brass-500 mr-1" /> Quick Circuits:
        </span>
        {['Char Dham', '12 Jyotirlingas', 'Pancha Bhoota Stalam'].map(circuitName => (
          <button
            key={circuitName}
            onClick={() => setSelectedCircuit(selectedCircuit === circuitName ? 'all' : circuitName)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
              selectedCircuit === circuitName
                ? 'bg-terracotta-700 text-white shadow-sm'
                : 'bg-sandstone-200/80 hover:bg-sandstone-300 text-charcoal-700'
            }`}
          >
            {circuitName}
          </button>
        ))}
      </div>
    </div>
  );
}
