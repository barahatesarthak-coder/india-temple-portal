import React, { useState, useEffect } from 'react';
import festivalService from '../../services/festivalService';
import { useToast } from '../../context/ToastContext';
import { Calendar, Plus, Trash2, Edit, Save, X } from 'lucide-react';

export default function AdminFestivalsPage() {
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingFestival, setEditingFestival] = useState(null);
  const { success, error: toastError } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    month: '',
    state: '',
    season: '',
    description: '',
    significance: '',
    rituals: '',
    images: ''
  });

  const fetchFestivals = async () => {
    try {
      setLoading(true);
      const res = await festivalService.getFestivals();
      if (res.data) setFestivals(res.data);
    } catch (err) {
      toastError(err.message || 'Failed to load festivals');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFestivals();
  }, []);

  const handleOpenCreate = () => {
    setEditingFestival(null);
    setFormData({
      name: '',
      month: '',
      state: 'Pan-India',
      season: '',
      description: '',
      significance: '',
      rituals: '',
      images: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (fest) => {
    setEditingFestival(fest);
    setFormData({
      name: fest.name || '',
      month: fest.month || '',
      state: fest.state || '',
      season: fest.season || '',
      description: fest.description || '',
      significance: fest.significance || '',
      rituals: fest.rituals || '',
      images: fest.images || ''
    });
    setModalOpen(true);
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Delete festival '${name}'?`)) {
      try {
        await festivalService.deleteFestival(id);
        success(`Festival '${name}' deleted.`);
        fetchFestivals();
      } catch (err) {
        toastError(err.message || 'Delete failed');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingFestival) {
        await festivalService.updateFestival(editingFestival.id || editingFestival.slug || editingFestival._id, formData);
        success('Festival record updated!');
      } else {
        await festivalService.createFestival(formData);
        success('New festival created!');
      }
      setModalOpen(false);
      fetchFestivals();
    } catch (err) {
      toastError(err.message || 'Action failed');
    }
  };

  return (
    <div className="space-y-8">
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-serif-heading text-stone-900">
            Festival & Utsavam Registry
          </h1>
          <p className="text-xs text-stone-500">
            Manage sacred festival dates, associated temple rituals, and cultural celebrations.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Festival</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="py-20 text-center text-xs text-stone-500">Loading festivals...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 text-stone-600 font-bold uppercase tracking-wider border-b border-stone-200">
                <tr>
                  <th className="py-3.5 px-4">Festival Name</th>
                  <th className="py-3.5 px-4">Month / Tithi</th>
                  <th className="py-3.5 px-4">State</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-medium text-stone-800">
                {festivals.map((f) => {
                  const id = f.id || f.slug || f._id;
                  return (
                    <tr key={id} className="hover:bg-amber-50/20 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-stone-900">{f.name}</td>
                      <td className="py-3.5 px-4">{f.month}</td>
                      <td className="py-3.5 px-4">{f.state}</td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenEdit(f)}
                            className="p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(id, f.name)}
                            className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg"
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

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-stone-200 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b">
              <h3 className="font-bold text-base font-serif-heading text-stone-900">
                {editingFestival ? 'Edit Festival Record' : 'Add New Festival'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold uppercase text-stone-700">Festival Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold uppercase text-stone-700">Month / Tithi</label>
                  <input
                    type="text"
                    required
                    value={formData.month}
                    onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border rounded-xl"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold uppercase text-stone-700">State / Region</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold uppercase text-stone-700">Short Description</label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold uppercase text-stone-700">Spiritual Significance</label>
                <textarea
                  required
                  rows={3}
                  value={formData.significance}
                  onChange={(e) => setFormData({ ...formData, significance: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border rounded-xl"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-stone-100 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-700 text-white rounded-xl font-bold flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" /> Save Festival
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
