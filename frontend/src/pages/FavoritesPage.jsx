import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import templeService from '../services/templeService';
import TempleCard from '../components/temples/TempleCard';
import EmptyState from '../components/common/EmptyState';
import { Heart, Compass, Sparkles, Trash2, ArrowRight } from 'lucide-react';

export default function FavoritesPage() {
  const { favoriteIds, favorites, loading } = useFavorites();
  const [resolvedTemples, setResolvedTemples] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const resolveTempleList = async () => {
      // If context already resolved full temple objects
      if (favorites && favorites.length > 0) {
        setResolvedTemples(favorites);
        return;
      }

      if (favoriteIds && favoriteIds.length > 0) {
        try {
          setFetching(true);
          const list = [];
          for (const key of favoriteIds) {
            try {
              const res = await templeService.getTempleByIdOrSlug(key);
              if (res.data) list.push(res.data);
            } catch {}
          }
          setResolvedTemples(list);
        } finally {
          setFetching(false);
        }
      } else {
        setResolvedTemples([]);
      }
    };

    resolveTempleList();
  }, [favoriteIds, favorites]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded-lg border border-rose-500/30">
            <Heart className="w-3.5 h-3.5 fill-rose-400" />
            <span>Saved Yatra Destinations ({resolvedTemples.length})</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-serif-heading">
            Your Bookmarked Temple Shrines
          </h1>
          <p className="text-sm text-stone-300">
            Keep track of sacred destinations you intend to visit. View darshan timings, nearby facilities, and travel routes at any time.
          </p>
        </div>
      </div>

      {/* Grid of Saved Favorites */}
      {loading || fetching ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-72 bg-white rounded-2xl border animate-pulse" />
          ))}
        </div>
      ) : resolvedTemples.length === 0 ? (
        <EmptyState
          icon={Heart}
          title="No Saved Shrines Yet"
          message="You haven't saved any temples to your favorites collection. Browse our extensive directory and click the heart icon to save."
          actionLabel="Explore Temple Shrines"
          onAction={() => window.location.href = '/temples'}
        />
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resolvedTemples.map((temple) => (
              <TempleCard key={temple.id || temple._id} temple={temple} />
            ))}
          </div>

          {/* Quick Circuit Action */}
          <div className="bg-amber-50/70 rounded-3xl p-6 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-700 text-white rounded-xl">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm font-serif-heading">Ready to Plan Your Circuit?</h4>
                <p className="text-xs text-stone-600">Connect your saved shrines with pre-planned routes and logistics.</p>
              </div>
            </div>
            <Link
              to="/circuits"
              className="px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold rounded-xl shadow-sm transition-colors shrink-0"
            >
              Explore Pilgrimage Circuits
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
