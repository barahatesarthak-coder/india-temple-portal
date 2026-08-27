import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import templeService from '../services/templeService';
import TempleCard from '../components/temples/TempleCard';
import FilterPanel from '../components/temples/FilterPanel';
import { TempleGridSkeleton } from '../components/common/LoadingSkeleton';
import EmptyState from '../components/common/EmptyState';
import ErrorState from '../components/common/ErrorState';
import Pagination from '../components/common/Pagination';
import { Search, SlidersHorizontal, Grid, List, X, RotateCcw } from 'lucide-react';

export default function ExploreTemplesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL query params binding
  const qParam = searchParams.get('q') || '';
  const stateParam = searchParams.get('state') || 'all';
  const cityParam = searchParams.get('city') || 'all';
  const deityParam = searchParams.get('deity') || 'all';
  const categoryParam = searchParams.get('category') || 'all';
  const regionParam = searchParams.get('region') || 'all';
  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const sortParam = searchParams.get('sort') || 'name';

  const [searchInput, setSearchInput] = useState(qParam);
  const [temples, setTemples] = useState([]);
  const [metadata, setMetadata] = useState({ states: [], citiesByState: {}, deities: [], categories: [], regions: [] });
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Debounced search query handler
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== qParam) {
        updateParams({ q: searchInput.trim() || undefined, page: 1 });
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchInput]);

  // Sync state if URL search param changed externally
  useEffect(() => {
    setSearchInput(qParam);
  }, [qParam]);

  // Load Metadata once
  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const res = await templeService.getMetadata();
        if (res.data) setMetadata(res.data);
      } catch (err) {
        console.warn('Metadata fetch warning:', err);
      }
    };
    fetchMeta();
  }, []);

  // Helper to update search params
  const updateParams = (newParams) => {
    const updated = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([k, v]) => {
      if (v === undefined || v === null || v === '' || v === 'all') {
        updated.delete(k);
      } else {
        updated.set(k, String(v));
      }
    });
    setSearchParams(updated);
  };

  // Fetch temples whenever filters/page change
  const fetchTemples = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await templeService.getTemples({
        query: qParam,
        state: stateParam,
        city: cityParam,
        deity: deityParam,
        category: categoryParam,
        region: regionParam,
        page: pageParam,
        sort: sortParam,
        limit: 9
      });

      if (res.data) {
        setTemples(res.data);
        setTotal(res.total || 0);
        setTotalPages(res.totalPages || 1);
      }
    } catch (err) {
      console.error('Error loading temples:', err);
      setError(err.message || 'Failed to load temples.');
    } finally {
      setLoading(false);
    }
  }, [qParam, stateParam, cityParam, deityParam, categoryParam, regionParam, pageParam, sortParam]);

  useEffect(() => {
    fetchTemples();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [fetchTemples]);

  const handleFilterChange = (filterKey, value) => {
    updateParams({ [filterKey]: value, page: 1 });
  };

  const handleResetFilters = () => {
    setSearchInput('');
    setSearchParams(new URLSearchParams());
  };

  const activeFiltersCount = [
    stateParam !== 'all',
    cityParam !== 'all',
    deityParam !== 'all',
    categoryParam !== 'all',
    regionParam !== 'all'
  ].filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 relative overflow-hidden shadow-lg">
        <div className="relative z-10 max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-serif-heading">
            Sacred Geography of India
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-serif-heading">
            Explore Temple Shrines
          </h1>
          <p className="text-sm text-stone-300">
            Search across our verified digital repository of India's architectural monuments, ancient sanctums, daily pooja schedules, and pilgrimage guidelines.
          </p>
        </div>
      </div>

      {/* Search & Top Controls */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search input with live debouncing */}
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by temple name, deity, city, architecture..."
            className="w-full pl-10 pr-10 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
          />
          {searchInput && (
            <button
              onClick={() => setSearchInput('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Mobile Filter Button & View Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          
          {/* Mobile Filter Drawer Trigger */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2.5 bg-stone-100 text-stone-800 rounded-xl text-sm font-semibold border border-stone-200"
          >
            <SlidersHorizontal className="w-4 h-4 text-amber-600" />
            <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-stone-500 hidden sm:inline">Sort:</span>
            <select
              value={sortParam}
              onChange={(e) => updateParams({ sort: e.target.value, page: 1 })}
              className="px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="name">Name (A to Z)</option>
              <option value="recent">Recently Added</option>
            </select>
          </div>

          {/* Grid / List toggle */}
          <div className="hidden sm:flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                viewMode === 'grid' ? 'bg-white text-amber-800 shadow-sm' : 'text-stone-500 hover:text-stone-900'
              }`}
              title="Grid View"
              aria-label="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                viewMode === 'list' ? 'bg-white text-amber-800 shadow-sm' : 'text-stone-500 hover:text-stone-900'
              }`}
              title="List View"
              aria-label="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Desktop Left Sidebar: FilterPanel */}
        <div className="hidden lg:block lg:col-span-1 sticky top-28">
          <FilterPanel
            filters={{
              state: stateParam,
              city: cityParam,
              deity: deityParam,
              category: categoryParam,
              region: regionParam
            }}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            metadata={metadata}
            totalResults={total}
          />
        </div>

        {/* Mobile Filter Drawer */}
        {isMobileFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
            <div className="bg-white w-full max-w-xs h-full p-6 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <h3 className="font-bold text-stone-900 font-serif-heading">Filter Options</h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 text-stone-500 hover:text-stone-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <FilterPanel
                filters={{
                  state: stateParam,
                  city: cityParam,
                  deity: deityParam,
                  category: categoryParam,
                  region: regionParam
                }}
                onFilterChange={(k, v) => {
                  handleFilterChange(k, v);
                }}
                onResetFilters={() => {
                  handleResetFilters();
                  setIsMobileFilterOpen(false);
                }}
                metadata={metadata}
                totalResults={total}
              />

              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3 bg-amber-700 text-white rounded-xl font-bold text-sm"
              >
                Apply Filters & View ({total})
              </button>
            </div>
          </div>
        )}

        {/* Right Main Grid / List */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Results Summary Header */}
          <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-stone-600">
            <span>
              Showing <strong className="text-stone-900">{temples.length}</strong> of{' '}
              <strong className="text-stone-900">{total}</strong> sacred temples
            </span>
            {(activeFiltersCount > 0 || qParam) && (
              <button
                onClick={handleResetFilters}
                className="text-amber-700 hover:text-amber-900 font-bold flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All</span>
              </button>
            )}
          </div>

          {/* Body content based on state */}
          {loading ? (
            <TempleGridSkeleton count={6} />
          ) : error ? (
            <ErrorState message={error} onRetry={fetchTemples} />
          ) : temples.length === 0 ? (
            <EmptyState
              title="No Temples Match Your Filter"
              message="No temple listings match your specific search criteria. Please clear or broaden your filters."
              actionLabel="Clear Filters"
              onAction={handleResetFilters}
            />
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
              {temples.map((temple) => (
                <TempleCard key={temple.id || temple._id} temple={temple} />
              ))}
            </div>
          )}

          {/* Pagination */}
          <Pagination
            currentPage={pageParam}
            totalPages={totalPages}
            onPageChange={(p) => updateParams({ page: p })}
          />

        </div>
      </div>

    </div>
  );
}
