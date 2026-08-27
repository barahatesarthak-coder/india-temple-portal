import React from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/admin/AdminSidebar';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function AdminLayout() {
  const { user, isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-900 text-white">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm font-semibold text-stone-400">Verifying administrator credentials...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100 p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-stone-200 shadow-xl text-center space-y-4">
          <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto border border-rose-200">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold font-serif-heading text-stone-900">
            Restricted Admin Area
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            You must be authenticated with administrator privileges to access the Temple Heritage Content Management System.
          </p>
          <div className="pt-2 flex flex-col gap-2">
            <Link
              to="/login"
              className="py-2.5 px-4 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-sm font-semibold transition-colors"
            >
              Sign In as Admin
            </Link>
            <Link
              to="/"
              className="py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-sm font-semibold transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-stone-100 text-stone-900">
      {/* Sidebar for desktop */}
      <AdminSidebar />

      {/* Main Admin Content View */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Government of India • Ministry of Culture / Heritage Node
            </span>
            <h1 className="text-base font-bold text-stone-900">
              National Temple Registry Administration
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-300">
              Admin Session Active
            </span>
          </div>
        </header>

        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
