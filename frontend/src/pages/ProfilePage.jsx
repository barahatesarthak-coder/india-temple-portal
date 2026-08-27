import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../context/FavoritesContext';
import { User, Mail, Shield, Heart, Landmark, Calendar, LogOut, CheckCircle2 } from 'lucide-react';

export default function ProfilePage() {
  const { user, isAdmin, logout } = useAuth();
  const { favoriteIds } = useFavorites();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Profile Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-700 to-saffron-500 text-white flex items-center justify-center font-bold text-3xl shadow-md shrink-0">
          {user?.name?.charAt(0) || 'U'}
        </div>

        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-2xl font-bold font-serif-heading text-stone-900">
              {user?.name || 'Registered Pilgrim'}
            </h1>
            {isAdmin ? (
              <span className="px-3 py-0.5 bg-amber-100 text-amber-900 font-bold text-xs rounded-full border border-amber-300">
                Heritage Administrator
              </span>
            ) : (
              <span className="px-3 py-0.5 bg-emerald-100 text-emerald-900 font-bold text-xs rounded-full border border-emerald-300">
                Verified Pilgrim
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-stone-500 flex items-center justify-center sm:justify-start gap-1.5">
            <Mail className="w-4 h-4 text-stone-400" /> {user?.email}
          </p>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-1.5 px-4 py-2 bg-stone-100 hover:bg-rose-50 text-stone-700 hover:text-rose-600 rounded-xl text-xs font-bold transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Account Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm text-center space-y-1">
          <Heart className="w-6 h-6 text-rose-500 mx-auto mb-1" />
          <p className="text-2xl font-bold text-stone-900">{favoriteIds.length}</p>
          <p className="text-xs font-semibold text-stone-500">Bookmarked Temples</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm text-center space-y-1">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
          <p className="text-2xl font-bold text-stone-900">Active</p>
          <p className="text-xs font-semibold text-stone-500">Account Status</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm text-center space-y-1">
          <Shield className="w-6 h-6 text-amber-600 mx-auto mb-1" />
          <p className="text-2xl font-bold text-stone-900">{isAdmin ? 'Admin' : 'Standard'}</p>
          <p className="text-xs font-semibold text-stone-500">Access Level</p>
        </div>
      </div>

      {/* Quick Navigation Links */}
      <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-stone-700">
          Quick Actions & Yatras
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/favorites"
            className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-amber-400 transition-colors shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-rose-500" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900">View Saved Temples</h4>
                <p className="text-[11px] text-stone-500">{favoriteIds.length} shrines saved</p>
              </div>
            </div>
          </Link>

          {isAdmin && (
            <Link
              to="/admin"
              className="p-4 bg-amber-50 rounded-2xl border border-amber-300 hover:bg-amber-100 transition-colors shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-amber-700" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-amber-950">Admin Management Portal</h4>
                  <p className="text-[11px] text-amber-800">Add, edit & approve temple records</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>

    </div>
  );
}
