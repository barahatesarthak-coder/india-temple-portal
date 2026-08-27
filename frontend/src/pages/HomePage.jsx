import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import templeService from '../services/templeService';
import circuitService from '../services/circuitService';
import festivalService from '../services/festivalService';
import TempleCard from '../components/temples/TempleCard';
import CircuitCard from '../components/circuits/CircuitCard';
import FestivalCard from '../components/festivals/FestivalCard';
import { TempleCardSkeleton } from '../components/common/LoadingSkeleton';
import { 
  Search, 
  Landmark, 
  Compass, 
  Calendar, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  Flame, 
  Globe2,
  Users
} from 'lucide-react';

export default function HomePage() {
  const [featuredTemples, setFeaturedTemples] = useState([]);
  const [circuits, setCircuits] = useState([]);
  const [festivals, setFestivals] = useState([]);
  const [metadata, setMetadata] = useState({ states: [], categories: [] });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        setLoading(true);
        const [featRes, circRes, festRes, metaRes] = await Promise.all([
          templeService.getFeaturedTemples(),
          circuitService.getCircuits(),
          festivalService.getFestivals(),
          templeService.getMetadata()
        ]);

        if (featRes.data) setFeaturedTemples(featRes.data);
        if (circRes.data) setCircuits(circRes.data.slice(0, 3));
        if (festRes.data) setFestivals(festRes.data.slice(0, 3));
        if (metaRes.data) setMetadata(metaRes.data);
      } catch (err) {
        console.error('Failed to load homepage data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.append('q', searchQuery.trim());
    if (selectedState) params.append('state', selectedState);
    navigate(`/temples?${params.toString()}`);
  };

  const featuredStates = [
    { name: 'Uttar Pradesh', count: 'Varanasi, Ayodhya, Mathura', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80' },
    { name: 'Tamil Nadu', count: 'Madurai, Thanjavur, Rameswaram', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80' },
    { name: 'Uttarakhand', count: 'Kedarnath, Badrinath, Haridwar', image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=600&q=80' },
    { name: 'Gujarat', count: 'Somnath, Dwarka, Ambaji', image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=600&q=80' },
    { name: 'Odisha', count: 'Puri, Konark, Bhubaneswar', image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=600&q=80' },
    { name: 'Andhra Pradesh', count: 'Tirupati, Srisailam, Simhachalam', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center bg-stone-900 text-white overflow-hidden py-20 px-4">
        {/* Background Image Overlay with Sacred Atmospheric Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2000&q=85"
            alt="Ancient Indian Temple Sanctum"
            className="w-full h-full object-cover object-center opacity-30 scale-105 transform animate-pulse duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-950/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>National Heritage & Spiritual Discovery Portal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif-heading tracking-tight leading-tight sm:leading-none text-stone-50">
            Discover the Timeless Sanctity of <br />
            <span className="gold-gradient-text">India's Sacred Temples</span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-lg text-stone-300 font-normal leading-relaxed">
            A comprehensive, verified digital archive of architectural wonders, darshan timings, sacred rituals, festival calendars, and pilgrimage circuits across all states of India.
          </p>

          {/* Live Search & Filter Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-3xl mx-auto bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200/50 flex flex-col sm:flex-row items-center gap-2 text-stone-900 mt-8"
          >
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-3 w-full px-3 py-2">
              <Search className="w-5 h-5 text-amber-600 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by temple name, deity (Shiva, Vishnu, Devi)..."
                className="w-full bg-transparent text-sm sm:text-base font-medium placeholder:text-stone-400 focus:outline-none"
              />
            </div>

            {/* State Selector */}
            <div className="w-full sm:w-52 border-t sm:border-t-0 sm:border-l border-stone-200 px-3 py-2">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-stone-700 focus:outline-none"
              >
                <option value="">All Indian States</option>
                {metadata.states.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-amber-700 to-saffron-600 hover:from-amber-800 hover:to-saffron-700 text-white font-bold text-sm rounded-xl sm:rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Filter Categories */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-stone-400 font-semibold mr-1">Popular:</span>
            <Link to="/temples?category=jyotirlinga" className="px-3 py-1 bg-stone-800/80 hover:bg-amber-600 text-amber-200 hover:text-white rounded-full border border-stone-700 transition-colors">
              12 Jyotirlingas
            </Link>
            <Link to="/temples?category=char-dham" className="px-3 py-1 bg-stone-800/80 hover:bg-amber-600 text-amber-200 hover:text-white rounded-full border border-stone-700 transition-colors">
              Maha Char Dham
            </Link>
            <Link to="/temples?category=shakti-peetha" className="px-3 py-1 bg-stone-800/80 hover:bg-amber-600 text-amber-200 hover:text-white rounded-full border border-stone-700 transition-colors">
              51 Shakti Peethas
            </Link>
            <Link to="/temples?category=unesco-heritage" className="px-3 py-1 bg-stone-800/80 hover:bg-amber-600 text-amber-200 hover:text-white rounded-full border border-stone-700 transition-colors">
              UNESCO Monuments
            </Link>
          </div>

        </div>
      </section>

      {/* 2. STATS & REPOSITORY HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-divine">
          
          <div className="text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-700 font-serif-heading">100+</p>
            <p className="text-xs sm:text-sm font-bold text-stone-800">Verified Shrines</p>
            <p className="text-[11px] text-stone-500">Documented with rituals</p>
          </div>

          <div className="text-center space-y-1 border-l border-stone-100">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-700 font-serif-heading">28+</p>
            <p className="text-xs sm:text-sm font-bold text-stone-800">States & UTs</p>
            <p className="text-[11px] text-stone-500">Pan-India coverage</p>
          </div>

          <div className="text-center space-y-1 border-l border-stone-100">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-700 font-serif-heading">100%</p>
            <p className="text-xs sm:text-sm font-bold text-stone-800">Reliable Timings</p>
            <p className="text-[11px] text-stone-500">Darshan & Pooja schedules</p>
          </div>

          <div className="text-center space-y-1 border-l border-stone-100">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-700 font-serif-heading">6+</p>
            <p className="text-xs sm:text-sm font-bold text-stone-800">Pilgrimage Circuits</p>
            <p className="text-[11px] text-stone-500">Complete yatra guides</p>
          </div>

        </div>
      </section>

      {/* 3. FEATURED TEMPLES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Divine Architecture & Sanctuaries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-heading mt-1">
              Featured Temple Shrines
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              Handpicked iconic heritage centers representing centuries of devotion, architectural mastery, and spiritual sanctity.
            </p>
          </div>

          <Link
            to="/temples"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-900 transition-colors"
          >
            <span>Browse All Temples</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <TempleCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTemples.map((temple) => (
              <TempleCard key={temple.id || temple._id} temple={temple} />
            ))}
          </div>
        )}
      </section>

      {/* 4. EXPLORE BY STATE / REGION */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Geographic Discovery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-heading">
              Explore Shrines by State & Region
            </h2>
            <p className="text-sm text-stone-600">
              Discover revered temples across India's sacred geography, from Himalayan peaks to coastal shorelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStates.map((st) => (
              <Link
                key={st.name}
                to={`/temples?state=${encodeURIComponent(st.name)}`}
                className="group relative h-48 rounded-2xl overflow-hidden shadow-sm hover:shadow-divine transition-all"
              >
                <img
                  src={st.image}
                  alt={st.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold font-serif-heading text-amber-200 group-hover:text-amber-100">
                    {st.name}
                  </h3>
                  <p className="text-xs text-stone-300 mt-0.5">{st.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POPULAR PILGRIMAGE CIRCUITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Sacred Routes & Itineraries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-heading mt-1">
              Popular Pilgrimage Circuits
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              Curated spiritual journeys connecting holy shrines with complete day-by-day itineraries and logistical travel guidelines.
            </p>
          </div>

          <Link
            to="/circuits"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-900 transition-colors"
          >
            <span>View All Circuits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {circuits.map((circuit) => (
            <CircuitCard key={circuit.id || circuit.slug} circuit={circuit} />
          ))}
        </div>
      </section>

      {/* 6. UPCOMING FESTIVALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Celebrations & Auspicious Tithis
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-heading mt-1">
              Sacred Festival Calendars
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              Experience the vibrancy of temple utsavams, chariot processions, and sacred bathing festivals across Bharat.
            </p>
          </div>

          <Link
            to="/festivals"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-900 transition-colors"
          >
            <span>Explore All Festivals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {festivals.map((fest) => (
            <FestivalCard key={fest.id || fest.slug} festival={fest} />
          ))}
        </div>
      </section>

      {/* 7. HERITAGE AWARENESS & DIGITAL PRESERVATION PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-amber-800/30">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Cultural Mission & Preservation
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif-heading leading-tight">
              Preserving India’s Sacred Architecture & Spiritual Legacy for Generations
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Temples in India are not merely places of worship; they are epicenters of astronomical science, intricate stone engineering, classical music, dance, and community harmony. Our portal unifies this decentralized knowledge into an open, verified digital standard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-amber-800/40">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-amber-100 font-serif-heading">Verified Research</h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">Information cross-referenced from ASI, temple devasthanams, and epigraphical records.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30 shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-amber-100 font-serif-heading">Architectural Details</h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">Deep-dive into Nagara, Dravidian, Vesara, and Katyuri architectural styles.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30 shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-amber-100 font-serif-heading">Pilgrim-Centric Guides</h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">Pooja timings, dress codes, luggage lockers, transport, and lodging guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="bg-amber-50 py-16 border-y border-amber-200/60 text-center px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center mx-auto shadow-md">
            <Flame className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-heading">
            Begin Your Sacred Pilgrimage Journey
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Search shrines, plan custom pilgrimage routes, check daily darshan aartis, and bookmark your sacred destinations.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              to="/temples"
              className="px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm rounded-xl shadow-sm transition-all"
            >
              Explore Temple Repository
            </Link>
            <Link
              to="/circuits"
              className="px-6 py-3 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-bold text-sm rounded-xl transition-all"
            >
              View Pilgrimage Circuits
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
