import React from 'react';
import { Filter, RotateCcw, ChevronDown, Check } from 'lucide-react';

export default function FilterPanel({
  filters,
  onFilterChange,
  onResetFilters,
  metadata = {},
  totalResults = 0
}) {
  const { states = [], citiesByState = {}, deities = [], categories = [], regions = [] } = metadata;

  const isFilterActive =
    (filters.state && filters.state !== 'all') ||
    (filters.city && filters.city !== 'all') ||
    (filters.deity && filters.deity !== 'all') ||
    (filters.category && filters.category !== 'all') ||
    (filters.region && filters.region !== 'all');

  const availableCities = filters.state && citiesByState[filters.state]
    ? citiesByState[filters.state]
    : Object.values(citiesByState).flat().sort();

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-6">
      
      {/* Header & Reset Action */}
      <div className="flex items-center justify-between border-b border-stone-100 pb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-amber-50 text-amber-700 rounded-lg">
            <Filter className="w-4 h-4" />
          </div>
          <h2 className="font-bold text-stone-900 font-serif-heading text-sm">
            Filter Shrines
          </h2>
        </div>

        {isFilterActive && (
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-lg transition-colors"
            title="Reset all active filters"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear Filters</span>
          </button>
        )}
      </div>

      {/* 1. State Filter */}
      <div className="space-y-2">
        <label htmlFor="filter-state" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
          State / Union Territory
        </label>
        <select
          id="filter-state"
          value={filters.state || 'all'}
          onChange={(e) => {
            onFilterChange('state', e.target.value);
            // Reset city if state changes
            if (filters.city) onFilterChange('city', 'all');
          }}
          className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-stone-800"
        >
          <option value="all">All States of India</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* 2. City Filter */}
      <div className="space-y-2">
        <label htmlFor="filter-city" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
          City / Holy Town
        </label>
        <select
          id="filter-city"
          value={filters.city || 'all'}
          onChange={(e) => onFilterChange('city', e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-stone-800"
        >
          <option value="all">All Cities</option>
          {availableCities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* 3. Category Filter */}
      <div className="space-y-2">
        <label htmlFor="filter-category" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
          Heritage Category
        </label>
        <select
          id="filter-category"
          value={filters.category || 'all'}
          onChange={(e) => onFilterChange('category', e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-stone-800"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* 4. Region Filter */}
      <div className="space-y-2">
        <label htmlFor="filter-region" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
          Geographical Zone
        </label>
        <select
          id="filter-region"
          value={filters.region || 'all'}
          onChange={(e) => onFilterChange('region', e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-stone-800"
        >
          <option value="all">All India Regions</option>
          {regions.map((reg) => (
            <option key={reg.id} value={reg.name}>
              {reg.name}
            </option>
          ))}
        </select>
      </div>

      {/* Active Filter Tags */}
      {isFilterActive && (
        <div className="pt-2 border-t border-stone-100">
          <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
            Active Criteria
          </p>
          <div className="flex flex-wrap gap-1.5">
            {filters.state && filters.state !== 'all' && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md font-medium">
                {filters.state}
              </span>
            )}
            {filters.city && filters.city !== 'all' && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md font-medium">
                {filters.city}
              </span>
            )}
            {filters.category && filters.category !== 'all' && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-stone-100 text-stone-800 px-2 py-0.5 rounded-md font-medium">
                Category: {filters.category}
              </span>
            )}
            {filters.region && filters.region !== 'all' && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-stone-100 text-stone-800 px-2 py-0.5 rounded-md font-medium">
                Region: {filters.region}
              </span>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
