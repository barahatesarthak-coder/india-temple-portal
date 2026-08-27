import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import templeService from '../../services/templeService';
import { useToast } from '../../context/ToastContext';
import {
  Landmark,
  PlusCircle,
  Search,
  Check,
  X,
  Edit,
  Trash2,
  ExternalLink,
  Filter,
  Sparkles
} from 'lucide-react';

export default function AdminTemplesPage() {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const { success, error: toastError } = useToast();

  const fetchTemples = async () => {
    try {
      setLoading(true);
      const res = await templeService.getTemples({
        query: search,
        status: statusFilter === 'all' ? undefined : statusFilter,
        limit: 100
      });
      if (res.data) setTemples(res.data);
    } catch (err) {
      toastError(err.message || 'Failed to load temple directory');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemples();
  }, [statusFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchTemples();
  };

  const handleApprove = async (id) => {
    try {
      await templeService.approveTemple(id);
      success('Temple listing approved and published.');
      fetchTemples();
    } catch (err) {
      toastError(err.message || 'Approval failed');
    }
  };

  const handleReject = async (id) => {
    try {
      await templeService.rejectTemple(id);
      success('Temple marked as rejected.');
      fetchTemples();
    } catch (err) {
      toastError(err.message || 'Rejection failed');
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to permanently delete '${name}'?`)) {
      try {
        await templeService.deleteTemple(id);
        success(`'${name}' deleted successfully.`);
        fetchTemples();
      } catch (err) {
        toastError(err.message || 'Delete failed');
      }
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif-heading text-stone-900">
            Temple Management & Approval Hub
          </h1>
          <p className="text-xs text-stone-500">
            Create, review, edit, approve, and manage national temple directory listings.
          </p>
        </div>

        <Link
          to="/admin/temples/new"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold shadow-sm transition-all shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add New Temple</span>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search temple name, deity, or state..."
            className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </form>

        {/* Status Filter Buttons */}
        <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto">
          {['all', 'approved', 'pending', 'rejected'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all whitespace-nowrap ${
                statusFilter === st
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

      </div>

      {/* Data Table */}
      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="py-20 text-center text-xs text-stone-500">Loading temples...</div>
        ) : temples.length === 0 ? (
          <div className="py-16 text-center text-stone-500 space-y-2">
            <Landmark className="w-8 h-8 mx-auto text-stone-400" />
            <p className="text-sm font-bold">No temple listings found</p>
            <p className="text-xs">Try adjusting your search criteria or add a new temple.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 text-stone-600 font-bold uppercase tracking-wider border-b border-stone-200">
                <tr>
                  <th className="py-3.5 px-4">Temple Name</th>
                  <th className="py-3.5 px-4">Deity</th>
                  <th className="py-3.5 px-4">State & City</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-medium text-stone-800">
                {temples.map((t) => {
                  const id = t.id || t.slug || t._id;
                  return (
                    <tr key={id} className="hover:bg-amber-50/20 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-stone-900 flex items-center gap-1.5">
                          <Link to={`/temples/${t.slug || t.id}`} target="_blank" className="hover:text-amber-700">
                            {t.name}
                          </Link>
                          {t.featured && (
                            <span className="px-1.5 py-0.5 bg-amber-100 text-amber-900 text-[9px] font-extrabold rounded">
                              Featured
                            </span>
                          )}
                        </div>
                        {t.hindiName && (
                          <span className="text-[11px] text-stone-500 font-serif">{t.hindiName}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4">{t.deity}</td>
                      <td className="py-3.5 px-4">{t.city}, {t.state}</td>
                      <td className="py-3.5 px-4 capitalize">{t.category}</td>
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
                              onClick={() => handleApprove(id)}
                              className="p-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition-colors"
                              title="Approve Temple"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {t.status !== 'rejected' && (
                            <button
                              onClick={() => handleReject(id)}
                              className="p-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-lg transition-colors"
                              title="Reject Temple"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <Link
                            to={`/admin/temples/edit/${id}`}
                            className="p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors"
                            title="Edit Temple"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => handleDelete(id, t.name)}
                            className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-colors"
                            title="Delete Temple"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
