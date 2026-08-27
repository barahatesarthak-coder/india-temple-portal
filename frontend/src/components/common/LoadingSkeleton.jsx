import React from 'react';

export function TempleCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm animate-pulse">
      <div className="h-56 bg-stone-200" />
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-center">
          <div className="h-4 bg-stone-200 rounded w-1/3" />
          <div className="h-4 bg-stone-200 rounded w-1/4" />
        </div>
        <div className="h-6 bg-stone-200 rounded w-3/4" />
        <div className="h-4 bg-stone-200 rounded w-full" />
        <div className="h-4 bg-stone-200 rounded w-2/3" />
        <div className="pt-3 border-t border-stone-100 flex justify-between items-center">
          <div className="h-4 bg-stone-200 rounded w-1/3" />
          <div className="h-8 bg-stone-200 rounded-lg w-24" />
        </div>
      </div>
    </div>
  );
}

export function TempleGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <TempleCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 5, cols = 4 }) {
  return (
    <div className="w-full bg-white rounded-xl border border-stone-200 overflow-hidden animate-pulse">
      <div className="h-12 bg-stone-100 border-b border-stone-200" />
      <div className="p-4 space-y-4">
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} className="flex gap-4 items-center">
            {Array.from({ length: cols }).map((_, c) => (
              <div key={c} className="h-5 bg-stone-200 rounded flex-1" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default { TempleCardSkeleton, TempleGridSkeleton, TableSkeleton };
