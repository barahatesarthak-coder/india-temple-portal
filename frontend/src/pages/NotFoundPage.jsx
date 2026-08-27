import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Compass, ArrowLeft, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-stone-200 shadow-xl space-y-6">
        <div className="w-16 h-16 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center mx-auto border border-amber-200 shadow-sm">
          <Landmark className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <span className="text-4xl font-extrabold font-serif-heading text-amber-700">404</span>
          <h1 className="text-xl font-bold font-serif-heading text-stone-900">
            Sacred Sanctuary Not Found
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            The pilgrimage path or temple record you are seeking does not exist or may have been repositioned in our national repository.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/temples"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-bold transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Temples</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
