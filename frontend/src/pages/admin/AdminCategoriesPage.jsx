import React, { useState, useEffect } from 'react';
import adminService from '../../services/adminService';
import { useToast } from '../../context/ToastContext';
import { Tags, Globe, Plus, Trash2, Save } from 'lucide-react';

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { success, error: toastError } = useToast();

  const [newCat, setNewCat] = useState({ id: '', name: '', description: '' });
  const [newReg, setNewReg] = useState({ id: '', name: '', states: '' });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [catRes, regRes] = await Promise.all([
        adminService.getCategories(),
        adminService.getRegions()
      ]);
      if (catRes.data) setCategories(catRes.data);
      if (regRes.data) setRegions(regRes.data);
    } catch (err) {
      toastError(err.message || 'Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCat.id || !newCat.name) return;
    try {
      await adminService.createCategory(newCat);
      success(`Category '${newCat.name}' created.`);
      setNewCat({ id: '', name: '', description: '' });
      fetchData();
    } catch (err) {
      toastError(err.message || 'Failed to add category');
    }
  };

  const handleDeleteCategory = async (id) => {
    if (window.confirm(`Delete category '${id}'?`)) {
      try {
        await adminService.deleteCategory(id);
        success('Category removed.');
        fetchData();
      } catch (err) {
        toastError(err.message);
      }
    }
  };

  const handleAddRegion = async (e) => {
    e.preventDefault();
    if (!newReg.id || !newReg.name) return;
    try {
      const statesArr = newReg.states.split(',').map(s => s.trim()).filter(Boolean);
      await adminService.createRegion({ ...newReg, states: statesArr });
      success(`Region '${newReg.name}' created.`);
      setNewReg({ id: '', name: '', states: '' });
      fetchData();
    } catch (err) {
      toastError(err.message);
    }
  };

  const handleDeleteRegion = async (id) => {
    if (window.confirm(`Delete region '${id}'?`)) {
      try {
        await adminService.deleteRegion(id);
        success('Region removed.');
        fetchData();
      } catch (err) {
        toastError(err.message);
      }
    }
  };

  return (
    <div className="space-y-10">
      
      <div>
        <h1 className="text-2xl font-bold font-serif-heading text-stone-900">
          Categories & Geographical Regions
        </h1>
        <p className="text-xs text-stone-500">
          Manage temple architectural classifications, theological categories, and geographic zones.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Categories Panel */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b pb-3">
            <Tags className="w-5 h-5 text-amber-700" />
            <h2 className="font-bold text-base font-serif-heading text-stone-900">
              Heritage Categories ({categories.length})
            </h2>
          </div>

          <form onSubmit={handleAddCategory} className="p-4 bg-stone-50 rounded-2xl border space-y-3 text-xs">
            <h3 className="font-bold text-stone-800 uppercase tracking-wider text-[11px]">Add New Category</h3>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                required
                value={newCat.id}
                onChange={(e) => setNewCat({ ...newCat, id: e.target.value })}
                placeholder="ID (e.g. jain-heritage)"
                className="px-3 py-2 bg-white border rounded-xl"
              />
              <input
                type="text"
                required
                value={newCat.name}
                onChange={(e) => setNewCat({ ...newCat, name: e.target.value })}
                placeholder="Name (e.g. Jain Shrines)"
                className="px-3 py-2 bg-white border rounded-xl"
              />
            </div>
            <input
              type="text"
              value={newCat.description}
              onChange={(e) => setNewCat({ ...newCat, description: e.target.value })}
              placeholder="Description"
              className="w-full px-3 py-2 bg-white border rounded-xl"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-amber-700 text-white rounded-xl font-bold flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" /> Add Category
            </button>
          </form>

          <div className="divide-y divide-stone-100 max-h-80 overflow-y-auto">
            {categories.map((c) => (
              <div key={c.id} className="py-3 flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-bold text-xs text-stone-900">{c.name}</h4>
                  <p className="text-[11px] text-stone-500">{c.description || c.id}</p>
                </div>
                <button
                  onClick={() => handleDeleteCategory(c.id)}
                  className="p-1 text-stone-400 hover:text-rose-600 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Regions Panel */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b pb-3">
            <Globe className="w-5 h-5 text-amber-700" />
            <h2 className="font-bold text-base font-serif-heading text-stone-900">
              Geographical Regions ({regions.length})
            </h2>
          </div>

          <form onSubmit={handleAddRegion} className="p-4 bg-stone-50 rounded-2xl border space-y-3 text-xs">
            <h3 className="font-bold text-stone-800 uppercase tracking-wider text-[11px]">Add New Region</h3>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                required
                value={newReg.id}
                onChange={(e) => setNewReg({ ...newReg, id: e.target.value })}
                placeholder="ID (e.g. island-territories)"
                className="px-3 py-2 bg-white border rounded-xl"
              />
              <input
                type="text"
                required
                value={newReg.name}
                onChange={(e) => setNewReg({ ...newReg, name: e.target.value })}
                placeholder="Name (e.g. Island Shrines)"
                className="px-3 py-2 bg-white border rounded-xl"
              />
            </div>
            <input
              type="text"
              value={newReg.states}
              onChange={(e) => setNewReg({ ...newReg, states: e.target.value })}
              placeholder="States (comma separated e.g. Andaman, Lakshadweep)"
              className="w-full px-3 py-2 bg-white border rounded-xl"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-amber-700 text-white rounded-xl font-bold flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" /> Add Region
            </button>
          </form>

          <div className="divide-y divide-stone-100 max-h-80 overflow-y-auto">
            {regions.map((r) => (
              <div key={r.id} className="py-3 flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-bold text-xs text-stone-900">{r.name}</h4>
                  <p className="text-[11px] text-stone-500">
                    {Array.isArray(r.states) ? r.states.join(', ') : ''}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteRegion(r.id)}
                  className="p-1 text-stone-400 hover:text-rose-600 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
