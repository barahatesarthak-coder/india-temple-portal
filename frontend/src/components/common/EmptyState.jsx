import React from 'react';
import { SearchX, Landmark, Sparkles, RefreshCw } from 'lucide-react';

export default function EmptyState({
  icon: Icon = SearchX,
  title = 'No Temple Shrines Found',
  message = 'We could not find any records matching your search or active filters. Try adjusting your search query or reset filters.',
  actionLabel,
  onAction
}) {
  return (
    <div className="text-center py-16 px-6 max-w-md mx-auto bg-white rounded-3xl border border-stone-200 shadow-sm my-8">
      <div className="w-16 h-16 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-200">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-stone-900 font-serif-heading mb-2">
        {title}
      </h3>
      <p className="text-sm text-stone-600 mb-6 leading-relaxed">
        {message}
      </p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <RefreshCw className="w-4 h-4" />
          {actionLabel}
        </button>
      )}
    </div>
  );
}
