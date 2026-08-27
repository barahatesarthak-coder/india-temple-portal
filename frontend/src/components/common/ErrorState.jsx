import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function ErrorState({
  title = 'Something Went Wrong',
  message = 'An unexpected error occurred while communicating with the heritage repository. Please check your network and try again.',
  onRetry
}) {
  return (
    <div className="text-center py-12 px-6 max-w-md mx-auto bg-rose-50/70 border border-rose-200 rounded-3xl my-8">
      <div className="w-14 h-14 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-rose-200 shadow-sm">
        <AlertTriangle className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-rose-950 font-serif-heading mb-2">
        {title}
      </h3>
      <p className="text-sm text-rose-800/90 mb-6 leading-relaxed">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white text-sm font-semibold rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
        >
          <RefreshCw className="w-4 h-4" />
          Retry Request
        </button>
      )}
    </div>
  );
}
