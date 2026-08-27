import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import adminService from '../../services/adminService';
import templeService from '../../services/templeService';
import { useToast } from '../../context/ToastContext';
import {
  Landmark,
  Calendar,
  Compass,
  Users,
  CheckCircle2,
  Clock,
  PlusCircle,
  ShieldCheck,
  Check,
  X,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const { success, error: toastError } = useToast();

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const res = await adminService.getDashboardStats();
      if (res.data) setStats(res.data);
    } catch (err) {
      console.error('Failed to load admin stats:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const handleApprove = async (id) => {
    try {
      await templeService.approveTemple(id);
      success('Temple listing approved and published live.');
      fetchDashboard();
    } catch (err) {
      toastError(err.message || 'Approval failed');
    }
  };

  const handleReject = async (id) => {
    try {
      await templeService.rejectTemple(id);
      success('Temple listing status set to rejected.');
      fetchDashboard();
    } catch (err) {
      toastError(err.message || 'Rejection failed');
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center space-y-4">
        <div className="w-10 h-10 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm font-semibold text-stone-600">Gathering heritage statistics...</p>
      </div>
    );
  }

  const metrics = stats?.metrics || {
    totalTemples: 0,
    approvedTemples: 0,
    pendingTemples: 0,
    totalFestivals: 0,
    totalCircuits: 0,
    totalUsers: 0
  };

  return (
    <div className="space-y-8">
      
      {/* Welcome Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold font-serif-heading text-stone-900">
              Heritage Command Overview
            </h1>
            <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 font-bold text-xs rounded-full border border-amber-300">
              CMS Live
            </span>
          </div>
          <p className="text-xs text-stone-500">
            Real-time management for India's national temple registry, festival schedules, and pilgrimage circuits.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            to="/admin/temples/new"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add New Temple</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        
        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Total Shrines</span>
            <Landmark className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-2xl font-extrabold text-stone-900 font-serif-heading">{metrics.totalTemples}</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">Approved</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-extrabold text-emerald-700 font-serif-heading">{metrics.approvedTemples}</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">Pending Review</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-2xl font-extrabold text-amber-700 font-serif-heading">{metrics.pendingTemples}</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Festivals</span>
            <Calendar className="w-4 h-4 text-saffron-600" />
          </div>
          <p className="text-2xl font-extrabold text-stone-900 font-serif-heading">{metrics.totalFestivals}</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Circuits</span>
            <Compass className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-2xl font-extrabold text-stone-900 font-serif-heading">{metrics.totalCircuits}</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Pilgrims</span>
            <Users className="w-4 h-4 text-stone-600" />
          </div>
          <p className="text-2xl font-extrabold text-stone-900 font-serif-heading">{metrics.totalUsers}</p>
        </div>

      </div>

      {/* Two-Column: Recent Temples Table + Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Temple Records (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold font-serif-heading text-stone-900">
              Recent Temple Registrations & Approval Queue
            </h2>
            <Link to="/admin/temples" className="text-xs font-bold text-amber-700 hover:underline">
              Manage All Temples
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 text-stone-600 font-bold uppercase tracking-wider border-b border-stone-200">
                <tr>
                  <th className="py-3 px-4">Temple Name</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Review Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-medium text-stone-800">
                {stats?.recentTemples?.map((t) => (
                  <tr key={t.id || t._id} className="hover:bg-stone-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-stone-900">
                      <Link to={`/temples/${t.slug || t.id}`} target="_blank" className="hover:text-amber-700 flex items-center gap-1">
                        {t.name} <ExternalLink className="w-3 h-3 text-stone-400" />
                      </Link>
                    </td>
                    <td className="py-3.5 px-4">{t.city}, {t.state}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase ${
                        t.status === 'approved'
                          ? 'bg-emerald-100 text-emerald-800'
                          : t.status === 'rejected'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {t.status || 'pending'}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {t.status !== 'approved' && (
                          <button
                            onClick={() => handleApprove(t.id || t.slug || t._id)}
                            className="p-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition-colors"
                            title="Approve Temple"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {t.status !== 'rejected' && (
                          <button
                            onClick={() => handleReject(t.id || t.slug || t._id)}
                            className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg transition-colors"
                            title="Reject Temple"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <Link
                          to={`/admin/temples/edit/${t.id || t.slug || t._id}`}
                          className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg font-bold text-[11px]"
                        >
                          Edit
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* State Breakdown Card (1 col) */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold font-serif-heading text-stone-900">
            State Distribution
          </h2>
          <div className="space-y-2.5">
            {Object.entries(stats?.stateBreakdown || {}).map(([st, cnt]) => (
              <div key={st} className="flex items-center justify-between text-xs py-1 border-b border-stone-100">
                <span className="font-medium text-stone-700">{st}</span>
                <span className="font-bold bg-stone-100 text-stone-800 px-2 py-0.5 rounded-md">{cnt} shrines</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
