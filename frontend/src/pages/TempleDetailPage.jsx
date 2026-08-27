import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import templeService from '../services/templeService';
import { useFavorites } from '../context/FavoritesContext';
import { useToast } from '../context/ToastContext';
import {
  MapPin,
  Clock,
  Heart,
  Share2,
  Calendar,
  Compass,
  Sparkles,
  Shirt,
  ShieldAlert,
  Plane,
  Train,
  Bus,
  Bed,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
  Building,
  History,
  ArrowLeft,
  Eye
} from 'lucide-react';

export default function TempleDetailPage() {
  const { id } = useParams();
  const [temple, setTemple] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'timings', 'rituals', 'visitor-guide', 'travel'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isFavorite, toggleFavorite } = useFavorites();
  const { success } = useToast();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await templeService.getTempleByIdOrSlug(id);
        if (res.data) {
          setTemple(res.data);
          setActiveImageIndex(0);
        }
      } catch (err) {
        setError(err.message || 'Failed to retrieve temple information.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      success('Temple link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm font-semibold text-stone-600">Loading sacred temple heritage details...</p>
      </div>
    );
  }

  if (error || !temple) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
        <div className="p-4 bg-rose-50 text-rose-700 rounded-2xl border border-rose-200">
          <p className="font-bold text-base font-serif-heading">Temple Record Not Found</p>
          <p className="text-xs text-rose-600 mt-1">{error || 'The requested temple could not be located.'}</p>
        </div>
        <Link
          to="/temples"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-700 text-white text-xs font-bold rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Temple Directory
        </Link>
      </div>
    );
  }

  const templeKey = temple.id || temple.slug || temple._id;
  const isFav = isFavorite(templeKey);
  const images = temple.images && temple.images.length > 0
    ? temple.images
    : ['https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Back Navigation & Quick Actions Bar */}
      <div className="flex items-center justify-between">
        <Link
          to="/temples"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-amber-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Temples</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleFavorite(temple)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
              isFav
                ? 'bg-rose-600 text-white'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 hover:text-rose-600'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
            <span>{isFav ? 'Saved in Favorites' : 'Save Temple'}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-2 bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 rounded-xl text-xs font-bold shadow-sm transition-all"
            title="Share Temple Information"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Hero Heritage Showcase */}
      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-divine">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Main Photo Gallery View (7 cols) */}
          <div className="lg:col-span-7 bg-stone-900 flex flex-col">
            <div className="relative h-80 sm:h-[460px] overflow-hidden bg-black">
              <img
                src={images[activeImageIndex]}
                alt={temple.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex justify-between items-end">
                <div>
                  <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-bold text-[10px] uppercase rounded-md">
                    {temple.region || 'India'}
                  </span>
                  <p className="text-stone-300 text-[11px] mt-1">Photo {activeImageIndex + 1} of {images.length}</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Selector */}
            {images.length > 1 && (
              <div className="p-3 bg-stone-950 flex gap-2 overflow-x-auto border-t border-stone-800">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx ? 'border-amber-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Header Information (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {temple.hindiName && (
                <p className="text-sm font-bold text-amber-700 font-serif">
                  {temple.hindiName}
                </p>
              )}

              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-heading leading-tight">
                {temple.name}
              </h1>

              <div className="flex items-center gap-2 text-stone-600 text-xs font-semibold">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{temple.city}, {temple.state}, India</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">Primary Deity</span>
                  <span className="text-xs font-bold text-stone-900 line-clamp-1">{temple.deity}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">Period / Era</span>
                  <span className="text-xs font-bold text-stone-900 line-clamp-1">{temple.period || 'Ancient Heritage'}</span>
                </div>
              </div>

              {temple.architecturalStyle && (
                <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">Architecture Style</span>
                  <span className="text-xs font-bold text-amber-950">{temple.architecturalStyle}</span>
                </div>
              )}

              <p className="text-xs text-stone-600 leading-relaxed">
                {temple.shortDescription}
              </p>
            </div>

            {/* Quick Darshan Timing Card */}
            <div className="p-4 bg-stone-900 text-white rounded-2xl space-y-1.5 shadow-md">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <Clock className="w-4 h-4" />
                <span>Daily Darshan Hours</span>
              </div>
              <p className="text-sm font-semibold">{temple.darshanTimings}</p>
              <p className="text-[11px] text-stone-400">Timings may vary on major festivals & ekadashi tithis.</p>
            </div>

          </div>

        </div>
      </div>

      {/* Tabs Navigation for Comprehensive Information */}
      <div className="border-b border-stone-200">
        <nav className="flex space-x-2 sm:space-x-8 overflow-x-auto pb-px" aria-label="Temple Sections">
          {[
            { id: 'overview', label: 'History & Architecture', icon: History },
            { id: 'timings', label: 'Darshan & Pooja Schedule', icon: Clock },
            { id: 'rituals', label: 'Rituals & Festivals', icon: Sparkles },
            { id: 'visitor-guide', label: 'Visitor Guidelines & Rules', icon: ShieldAlert },
            { id: 'travel', label: 'Travel & Accommodation', icon: Compass }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3.5 px-3 border-b-2 font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-all ${
                  isActive
                    ? 'border-amber-700 text-amber-800 bg-amber-50/50 rounded-t-lg'
                    : 'border-transparent text-stone-600 hover:text-stone-900 hover:border-stone-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-700' : 'text-stone-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab 1: History & Architecture */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Historical Background */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-stone-900 font-serif-heading flex items-center gap-2">
              <History className="w-5 h-5 text-amber-600" />
              Historical Background & Chronicles
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
              {temple.historicalBackground}
            </p>
          </div>

          {/* Historical & Religious Significance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {temple.historicalSignificance && (
              <div className="bg-amber-50/50 rounded-3xl p-6 border border-amber-200/70 space-y-3">
                <h3 className="text-base font-bold text-amber-950 font-serif-heading">
                  Historical Significance
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {temple.historicalSignificance}
                </p>
              </div>
            )}

            {temple.religiousSignificance && (
              <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200 space-y-3">
                <h3 className="text-base font-bold text-stone-900 font-serif-heading">
                  Spiritual & Religious Sanctity
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {temple.religiousSignificance}
                </p>
              </div>
            )}
          </div>

          {/* Architectural Mastery */}
          {temple.architecture && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-stone-900 font-serif-heading flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-600" />
                Architectural Features & Engineering
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed">
                {temple.architecture}
              </p>
            </div>
          )}

        </div>
      )}

      {/* Tab 2: Darshan & Pooja Schedule */}
      {activeTab === 'timings' && (
        <div className="space-y-8 animate-fadeIn">
          
          <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 border border-stone-800">
            <h2 className="text-xl font-bold font-serif-heading text-amber-400 mb-2">
              Sanctum Hours & Daily Aarti Timetable
            </h2>
            <p className="text-xs text-stone-300">
              General Darshan is open throughout the scheduled timings. Special Aartis require punctuality.
            </p>
          </div>

          {temple.poojaSchedule && temple.poojaSchedule.length > 0 ? (
            <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
              <div className="divide-y divide-stone-200">
                {temple.poojaSchedule.map((pooja, i) => (
                  <div key={i} className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-amber-50/30 transition-colors">
                    <div className="space-y-1">
                      <h4 className="font-bold text-base text-stone-900 font-serif-heading">{pooja.name}</h4>
                      <p className="text-xs text-stone-600">{pooja.description}</p>
                    </div>
                    <div className="px-3.5 py-1.5 bg-amber-100 text-amber-900 font-bold text-xs rounded-xl self-start sm:self-center shrink-0 border border-amber-300">
                      {pooja.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-8 bg-white rounded-3xl border text-center text-stone-500 text-sm">
              General darshan available between {temple.darshanTimings}.
            </div>
          )}

        </div>
      )}

      {/* Tab 3: Rituals & Festivals */}
      {activeTab === 'rituals' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Rituals Card */}
          {temple.rituals && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-stone-900 font-serif-heading flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                Vedic Rituals & Sacred Sevas
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed">
                {temple.rituals}
              </p>
            </div>
          )}

          {/* Associated Festivals */}
          {temple.festivals && temple.festivals.length > 0 && (
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-4">
              <h3 className="text-lg font-bold text-stone-900 font-serif-heading">
                Celebrated Utsavams & Annual Festivals
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {temple.festivals.map((fest, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-amber-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-stone-800">{fest}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* Tab 4: Visitor Guidelines & Rules */}
      {activeTab === 'visitor-guide' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Dress Code Warning */}
          {temple.dressCode && (
            <div className="bg-amber-50 rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-sm flex flex-col sm:flex-row gap-5 items-start">
              <div className="p-3.5 bg-amber-600 text-white rounded-2xl shrink-0">
                <Shirt className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-amber-950 font-serif-heading">
                  Mandatory Traditional Dress Code
                </h3>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  {temple.dressCode}
                </p>
              </div>
            </div>
          )}

          {/* Visitor Guidelines List */}
          {temple.visitorGuidelines && temple.visitorGuidelines.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900 font-serif-heading flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-600" />
                Official Guidelines & Temple Protocol
              </h3>
              <ul className="space-y-3">
                {temple.visitorGuidelines.map((guide, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{guide}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Nearby Facilities */}
          {temple.nearbyFacilities && temple.nearbyFacilities.length > 0 && (
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-4">
              <h3 className="text-base font-bold text-stone-900 font-serif-heading">
                Available Pilgrim Amenities & Facilities
              </h3>
              <div className="flex flex-wrap gap-2">
                {temple.nearbyFacilities.map((fac, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-xl text-xs font-semibold text-stone-800 shadow-sm">
                    ✓ {fac}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* Tab 5: Travel & Accommodation */}
      {activeTab === 'travel' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Best Time to Visit */}
          {temple.bestTimeToVisit && (
            <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-200 text-emerald-950 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">Ideal Climate & Season</span>
              <h4 className="text-base font-bold font-serif-heading">Best Time to Visit: {temple.bestTimeToVisit}</h4>
            </div>
          )}

          {/* Transportation Routes */}
          {temple.transportation && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-stone-900 font-serif-heading">
                How to Reach {temple.name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                    <Plane className="w-4 h-4" /> By Air
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">{temple.transportation.byAir || 'Nearest domestic airport'}</p>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                    <Train className="w-4 h-4" /> By Train
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">{temple.transportation.byTrain || 'Nearest railway junction'}</p>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                    <Bus className="w-4 h-4" /> By Road
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">{temple.transportation.byRoad || 'State highways & express bus'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Accommodation Info */}
          {temple.accommodation && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-stone-900 font-serif-heading flex items-center gap-2">
                <Bed className="w-5 h-5 text-amber-600" />
                Lodging & Dharamshala Stays
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {temple.accommodation}
              </p>
            </div>
          )}

          {/* Contact Details */}
          {temple.contact && (
            <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">Official Devasthanam Contact</h4>
              <div className="flex flex-wrap gap-6 text-xs text-stone-800">
                {temple.contact.phone && (
                  <span className="flex items-center gap-1.5 font-medium">
                    <Phone className="w-4 h-4 text-amber-600" /> {temple.contact.phone}
                  </span>
                )}
                {temple.contact.email && (
                  <span className="flex items-center gap-1.5 font-medium">
                    <Mail className="w-4 h-4 text-amber-600" /> {temple.contact.email}
                  </span>
                )}
                {temple.contact.website && (
                  <a
                    href={temple.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-bold text-amber-700 hover:underline"
                  >
                    <Globe className="w-4 h-4" /> Official Portal
                  </a>
                )}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
