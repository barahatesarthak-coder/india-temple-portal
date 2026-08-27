import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import templeService from '../../services/templeService';
import { useToast } from '../../context/ToastContext';
import { Landmark, ArrowLeft, Save, Plus, Trash2, Building, Clock, Shirt, Compass } from 'lucide-react';

export default function AdminAddTemplePage() {
  const navigate = useNavigate();
  const { success, error: toastError } = useToast();
  const [loading, setLoading] = useState(false);
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
    darshanTimings: '06:00 AM – 09:00 PM',
    poojaSchedule: [
      { name: 'Mangala Aarti', time: '05:00 AM', description: 'Dawn awakening ceremony' },
      { name: 'Sandhya Aarti', time: '07:00 PM', description: 'Evening lamp offering' }
    ],
    rituals: '',
    festivals: ['Maha Shivaratri', 'Navratri'],
    dressCode: 'Traditional Indian attire recommended.',
    visitorGuidelines: [
      'Carry valid photo ID for verification.',
      'Deposit electronic gadgets and footwear at designated counters.'
    ],
    bestTimeToVisit: 'October to March',
    transportation: {
      byAir: '',
      byTrain: '',
      byRoad: ''
    },
    accommodation: 'Dharamshalas, temple trust guest houses, and budget hotels available nearby.',
    nearbyFacilities: ['Shoe Counter', 'Locker Room', 'Drinking Water', 'Prasad Counter'],
    images: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    status: 'approved',
    contact: {
      phone: '',
      email: '',
      website: ''
    }
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNestedChange = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
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
    if (!formData.name || !formData.deity || !formData.state || !formData.city || !formData.shortDescription || !formData.historicalBackground || !formData.darshanTimings) {
      toastError('Please fill out all mandatory fields (Name, Deity, State, City, Short Description, History, Darshan Timings).');
      return;
    }

    try {
      setLoading(true);
      await templeService.createTemple(formData);
      success('Temple record created and published successfully!');
      navigate('/admin/temples');
    } catch (err) {
      toastError(err.message || 'Failed to create temple');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      {/* Back Link & Header */}
      <div className="flex items-center justify-between">
        <Link
          to="/admin/temples"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-amber-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Temples Management</span>
        </Link>
        <span className="text-xs font-semibold text-stone-400">National Registry Entry</span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 space-y-8">
        <div>
          <h1 className="text-2xl font-bold font-serif-heading text-stone-900">
            Add New Temple Listing
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Fill in the authentic heritage, architectural, and pilgrimage details for the national repository.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-stone-200">
          <nav className="flex space-x-4 overflow-x-auto" aria-label="Form Tabs">
            {[
              { id: 'basic', label: '1. Basic Info' },
              { id: 'history', label: '2. History & Architecture' },
              { id: 'darshan', label: '3. Darshan & Pooja' },
              { id: 'visitor', label: '4. Guidelines & Logistics' }
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* TAB 1: BASIC INFO */}
          {activeTab === 'basic' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">
                    Temple Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="e.g. Lingaraj Temple"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">
                    Hindi / Sanskrit Name
                  </label>
                  <input
                    type="text"
                    value={formData.hindiName}
                    onChange={(e) => handleChange('hindiName', e.target.value)}
                    placeholder="e.g. श्री लिंगराज मंदिर"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">
                    Primary Deity <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.deity}
                    onChange={(e) => handleChange('deity', e.target.value)}
                    placeholder="e.g. Lord Shiva (Harihara)"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">
                    State <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => handleChange('state', e.target.value)}
                    placeholder="e.g. Odisha"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">
                    City <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    placeholder="e.g. Bhubaneswar"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">Region</label>
                  <select
                    value={formData.region}
                    onChange={(e) => handleChange('region', e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="North India">North India</option>
                    <option value="South India">South India</option>
                    <option value="East India">East India</option>
                    <option value="West India">West India</option>
                    <option value="Central India">Central India</option>
                    <option value="North-East India">North-East India</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="jyotirlinga">12 Jyotirlinga</option>
                    <option value="char-dham">Maha Char Dham</option>
                    <option value="chota-char-dham">Chota Char Dham</option>
                    <option value="shakti-peetha">51 Shakti Peetha</option>
                    <option value="unesco-heritage">UNESCO Heritage</option>
                    <option value="dravidian">Dravidian Architecture</option>
                    <option value="nagara">Nagara Architecture</option>
                    <option value="vesara">Vesara Architecture</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">Initial Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleChange('status', e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="approved">Approved (Live)</option>
                    <option value="pending">Pending Review</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="feat-checkbox"
                  checked={formData.featured}
                  onChange={(e) => handleChange('featured', e.target.checked)}
                  className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                />
                <label htmlFor="feat-checkbox" className="text-xs font-bold text-stone-800">
                  Mark as Featured on Homepage
                </label>
              </div>
            </div>
          )}

          {/* TAB 2: HISTORY & ARCHITECTURE */}
          {activeTab === 'history' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-stone-700">
                  Short Overview / Subtitle <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.shortDescription}
                  onChange={(e) => handleChange('shortDescription', e.target.value)}
                  placeholder="One or two sentences highlighting the core significance..."
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-stone-700">
                  Historical Background & Origin <span className="text-rose-600">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.historicalBackground}
                  onChange={(e) => handleChange('historicalBackground', e.target.value)}
                  placeholder="Detailed historical background, founding dynasties, reconstruction chronicles..."
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">
                    Historical Significance
                  </label>
                  <textarea
                    rows={3}
                    value={formData.historicalSignificance}
                    onChange={(e) => handleChange('historicalSignificance', e.target.value)}
                    placeholder="National, architectural, or imperial importance..."
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">
                    Spiritual / Religious Significance
                  </label>
                  <textarea
                    rows={3}
                    value={formData.religiousSignificance}
                    onChange={(e) => handleChange('religiousSignificance', e.target.value)}
                    placeholder="Spiritual legends, Puranic references, Moksha blessings..."
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-stone-700">
                  Architectural Engineering & Elements
                </label>
                <textarea
                  rows={3}
                  value={formData.architecture}
                  onChange={(e) => handleChange('architecture', e.target.value)}
                  placeholder="Details on Gopuram heights, stone materials, carvings, and mandapas..."
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          )}

          {/* TAB 3: DARSHAN & POOJA */}
          {activeTab === 'darshan' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-stone-700">
                  Daily Darshan Timings <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.darshanTimings}
                  onChange={(e) => handleChange('darshanTimings', e.target.value)}
                  placeholder="e.g. 05:00 AM – 12:30 PM & 04:00 PM – 09:30 PM"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Pooja Schedule List */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Aarti & Pooja Timetable ({formData.poojaSchedule.length})
                  </h3>
                  <button
                    type="button"
                    onClick={handleAddPooja}
                    className="flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-900 bg-amber-50 px-3 py-1.5 rounded-lg"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Aarti Slot
                  </button>
                </div>

                <div className="space-y-3">
                  {formData.poojaSchedule.map((p, idx) => (
                    <div key={idx} className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex flex-col sm:flex-row gap-3 items-center">
                      <input
                        type="text"
                        value={p.name}
                        onChange={(e) => handlePoojaChange(idx, 'name', e.target.value)}
                        placeholder="Pooja Name (e.g. Mangala Aarti)"
                        className="flex-1 w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                      />
                      <input
                        type="text"
                        value={p.time}
                        onChange={(e) => handlePoojaChange(idx, 'time', e.target.value)}
                        placeholder="Time (e.g. 05:30 AM)"
                        className="w-full sm:w-36 px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                      />
                      <input
                        type="text"
                        value={p.description}
                        onChange={(e) => handlePoojaChange(idx, 'description', e.target.value)}
                        placeholder="Short description"
                        className="flex-1 w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemovePooja(idx)}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-stone-700">
                  Rituals & Sevas
                </label>
                <textarea
                  rows={2}
                  value={formData.rituals}
                  onChange={(e) => handleChange('rituals', e.target.value)}
                  placeholder="e.g. Rudrabhishekam, Kalyanotsavam, Panchamrit Snanam..."
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          )}

          {/* TAB 4: GUIDELINES & LOGISTICS */}
          {activeTab === 'visitor' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-stone-700">
                  Mandatory Dress Code
                </label>
                <input
                  type="text"
                  value={formData.dressCode}
                  onChange={(e) => handleChange('dressCode', e.target.value)}
                  placeholder="e.g. Dhoti/Kurta for men; Saree/Salwar for women. Shorts strictly prohibited."
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-stone-700">
                  Best Time to Visit
                </label>
                <input
                  type="text"
                  value={formData.bestTimeToVisit}
                  onChange={(e) => handleChange('bestTimeToVisit', e.target.value)}
                  placeholder="e.g. October to March (Pleasant climate)"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">How to Reach (Air)</label>
                  <input
                    type="text"
                    value={formData.transportation.byAir}
                    onChange={(e) => handleNestedChange('transportation', 'byAir', e.target.value)}
                    placeholder="Nearest Airport (distance)"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">How to Reach (Train)</label>
                  <input
                    type="text"
                    value={formData.transportation.byTrain}
                    onChange={(e) => handleNestedChange('transportation', 'byTrain', e.target.value)}
                    placeholder="Nearest Railway Station"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-stone-700">How to Reach (Road)</label>
                  <input
                    type="text"
                    value={formData.transportation.byRoad}
                    onChange={(e) => handleNestedChange('transportation', 'byRoad', e.target.value)}
                    placeholder="Highway & Bus details"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-stone-700">
                  Primary Image URL (Unsplash or CDN)
                </label>
                <input
                  type="url"
                  value={formData.images[0] || ''}
                  onChange={(e) => handleChange('images', [e.target.value])}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
            <Link
              to="/admin/temples"
              className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs rounded-xl"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{loading ? 'Submitting Record...' : 'Publish Temple Record'}</span>
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}
