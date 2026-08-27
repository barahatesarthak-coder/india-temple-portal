import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import templeService from '../../services/templeService';
import { useToast } from '../../context/ToastContext';
import { ArrowLeft, Save, Plus, Trash2 } from 'lucide-react';

export default function AdminEditTemplePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { success, error: toastError } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');

  const [formData, setFormData] = useState({
    name: '',
    hindiName: '',
    deity: '',
    state: '',
    city: '',
    region: 'North India',
    category: 'jyotirlinga',
    period: '',
    architecturalStyle: '',
    shortDescription: '',
    historicalBackground: '',
    historicalSignificance: '',
    religiousSignificance: '',
    architecture: '',
    darshanTimings: '',
    poojaSchedule: [],
    rituals: '',
    dressCode: '',
    bestTimeToVisit: '',
    featured: false,
    status: 'approved',
    images: []
  });

  useEffect(() => {
    const fetchTemple = async () => {
      try {
        setLoading(true);
        const res = await templeService.getTempleByIdOrSlug(id);
        if (res.data) {
          setFormData({
            ...res.data,
            poojaSchedule: res.data.poojaSchedule || [],
            images: res.data.images || []
          });
        }
      } catch (err) {
        toastError('Failed to load temple details for editing');
      } finally {
        setLoading(false);
      }
    };
    fetchTemple();
  }, [id]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddPooja = () => {
    setFormData(prev => ({
      ...prev,
      poojaSchedule: [...prev.poojaSchedule, { name: '', time: '', description: '' }]
    }));
  };

  const handlePoojaChange = (index, field, value) => {
    setFormData(prev => {
      const updated = [...prev.poojaSchedule];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, poojaSchedule: updated };
    });
  };

  const handleRemovePooja = (index) => {
    setFormData(prev => ({
      ...prev,
      poojaSchedule: prev.poojaSchedule.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      await templeService.updateTemple(id, formData);
      success('Temple record updated successfully!');
      navigate('/admin/temples');
    } catch (err) {
      toastError(err.message || 'Failed to update temple');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="py-20 text-center text-xs text-stone-500">Loading temple record...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      <div className="flex items-center justify-between">
        <Link
          to="/admin/temples"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-amber-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Temples Management</span>
        </Link>
        <span className="text-xs font-bold text-amber-700">Editing: {formData.name}</span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 space-y-8">
        <div>
          <h1 className="text-2xl font-bold font-serif-heading text-stone-900">
            Edit Temple Record: {formData.name}
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Update repository information, darshan schedules, and historical data.
          </p>
        </div>

        <div className="border-b border-stone-200">
          <nav className="flex space-x-4 overflow-x-auto">
            {[
              { id: 'basic', label: '1. Basic Info' },
              { id: 'history', label: '2. History & Architecture' },
              { id: 'darshan', label: '3. Darshan & Pooja' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-3 border-b-2 font-bold text-xs sm:text-sm transition-all ${
                  activeTab === tab.id
                    ? 'border-amber-700 text-amber-800 bg-amber-50/50 rounded-t-lg'
                    : 'border-transparent text-stone-500 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {activeTab === 'basic' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">Temple Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">Hindi Name</label>
                  <input
                    type="text"
                    value={formData.hindiName || ''}
                    onChange={(e) => handleChange('hindiName', e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">Deity</label>
                  <input
                    type="text"
                    required
                    value={formData.deity}
                    onChange={(e) => handleChange('deity', e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">State</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => handleChange('state', e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">Publication Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleChange('status', e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium"
                  >
                    <option value="approved">Approved (Live)</option>
                    <option value="pending">Pending Review</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 pt-6">
                  <input
                    type="checkbox"
                    id="edit-feat"
                    checked={Boolean(formData.featured)}
                    onChange={(e) => handleChange('featured', e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded"
                  />
                  <label htmlFor="edit-feat" className="text-xs font-bold text-stone-800">
                    Featured on Homepage
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-stone-700">Short Description</label>
                <input
                  type="text"
                  required
                  value={formData.shortDescription}
                  onChange={(e) => handleChange('shortDescription', e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-stone-700">Historical Background</label>
                <textarea
                  required
                  rows={4}
                  value={formData.historicalBackground}
                  onChange={(e) => handleChange('historicalBackground', e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm"
                />
              </div>
            </div>
          )}

          {activeTab === 'darshan' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-stone-700">Daily Darshan Timings</label>
                <input
                  type="text"
                  required
                  value={formData.darshanTimings}
                  onChange={(e) => handleChange('darshanTimings', e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm"
                />
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Pooja Schedule
                  </h3>
                  <button
                    type="button"
                    onClick={handleAddPooja}
                    className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Aarti Slot
                  </button>
                </div>

                <div className="space-y-3">
                  {formData.poojaSchedule?.map((p, idx) => (
                    <div key={idx} className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex flex-col sm:flex-row gap-3 items-center">
                      <input
                        type="text"
                        value={p.name}
                        onChange={(e) => handlePoojaChange(idx, 'name', e.target.value)}
                        placeholder="Pooja Name"
                        className="flex-1 w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                      />
                      <input
                        type="text"
                        value={p.time}
                        onChange={(e) => handlePoojaChange(idx, 'time', e.target.value)}
                        placeholder="Time"
                        className="w-full sm:w-36 px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemovePooja(idx)}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
            <Link
              to="/admin/temples"
              className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs rounded-xl"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? 'Updating Record...' : 'Save Changes'}</span>
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}
