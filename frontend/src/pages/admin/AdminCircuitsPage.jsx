import React, { useState, useEffect } from 'react';
import circuitService from '../../services/circuitService';
import { useToast } from '../../context/ToastContext';
import { Compass, Plus, Trash2, Edit, Save, X, Clock, Footprints } from 'lucide-react';

export default function AdminCircuitsPage() {
  const [circuits, setCircuits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCircuit, setEditingCircuit] = useState(null);
  const { success, error: toastError } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    region: 'Pan-India',
    duration: '',
    distance: '',
    difficulty: 'Moderate',
    description: '',
    spiritualSignificance: '',
    coverImage: ''
  });

  const fetchCircuits = async () => {
    try {
      setLoading(true);
      const res = await circuitService.getCircuits();
      if (res.data) setCircuits(res.data);
    } catch (err) {
      toastError(err.message || 'Failed to load circuits');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCircuits();
  }, []);

  const handleOpenCreate = () => {
    setEditingCircuit(null);
    setFormData({
      name: '',
      region: 'Pan-India',
      duration: '10 - 12 Days',
      distance: '2,500 km',
      difficulty: 'Moderate',
      description: '',
      spiritualSignificance: '',
      coverImage: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80'
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (circuit) => {
    setEditingCircuit(circuit);
    setFormData({
      name: circuit.name || '',
      region: circuit.region || '',
      duration: circuit.duration || '',
      distance: circuit.distance || '',
      difficulty: circuit.difficulty || 'Moderate',
      description: circuit.description || '',
      spiritualSignificance: circuit.spiritualSignificance || '',
      coverImage: circuit.coverImage || ''
    });
    setModalOpen(true);
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Delete pilgrimage circuit '${name}'?`)) {
      try {
        await circuitService.deleteCircuit(id);
        success(`Circuit '${name}' deleted.`);
        fetchCircuits();
      } catch (err) {
        toastError(err.message || 'Delete failed');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCircuit) {
        await circuitService.updateCircuit(editingCircuit.id || editingCircuit.slug || editingCircuit._id, formData);
        success('Pilgrimage circuit updated!');
      } else {
        await circuitService.createCircuit(formData);
        success('New pilgrimage circuit created!');
      }
      setModalOpen(false);
      fetchCircuits();
    } catch (err) {
      toastError(err.message || 'Action failed');
    }
  };

  return (
    <div className="space-y-8">
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-serif-heading text-stone-900">
            Pilgrimage Circuits Administration
          </h1>
          <p className="text-xs text-stone-500">
            Manage sacred routes, day-by-day itineraries, distance estimates, and logistics.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Circuit</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="py-20 text-center text-xs text-stone-500">Loading circuits...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 text-stone-600 font-bold uppercase tracking-wider border-b border-stone-200">
                <tr>
                  <th className="py-3.5 px-4">Circuit Name</th>
                  <th className="py-3.5 px-4">Region</th>
                  <th className="py-3.5 px-4">Duration & Distance</th>
                  <th className="py-3.5 px-4">Difficulty</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-medium text-stone-800">
                {circuits.map((c) => {
                  const id = c.id || c.slug || c._id;
                  return (
                    <tr key={id} className="hover:bg-amber-50/20 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-stone-900">{c.name}</td>
                      <td className="py-3.5 px-4">{c.region}</td>
                      <td className="py-3.5 px-4">{c.duration} ({c.distance || 'Varies'})</td>
                      <td className="py-3.5 px-4">{c.difficulty}</td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenEdit(c)}
                            className="p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(id, c.name)}
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

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-stone-200 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b">
              <h3 className="font-bold text-base font-serif-heading text-stone-900">
                {editingCircuit ? 'Edit Pilgrimage Circuit' : 'Add Pilgrimage Circuit'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold uppercase text-stone-700">Circuit Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-bold uppercase text-stone-700">Region</label>
                  <input
                    type="text"
                    required
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border rounded-xl"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold uppercase text-stone-700">Duration</label>
                  <input
                    type="text"
                    required
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border rounded-xl"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold uppercase text-stone-700">Distance</label>
                  <input
                    type="text"
                    value={formData.distance}
                    onChange={(e) => setFormData({ ...formData, distance: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold uppercase text-stone-700">Description & Route Overview</label>
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
                  rows={3}
                  value={formData.spiritualSignificance}
                  onChange={(e) => setFormData({ ...formData, spiritualSignificance: e.target.value })}
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
                  <Save className="w-3.5 h-3.5" /> Save Circuit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
