import { TEMPLES_DATA } from './data/temples.js';
import { ARCHITECTURE_STYLES, ANATOMY_TERMS_GLOSSARY } from './data/architecture.js';
import { PILGRIMAGE_CIRCUITS } from './data/circuits.js';
import { templeAudio } from './utils/audioEngine.js';

const { useState, useEffect } = React;

// Lucide Icon SVG components for standalone runtime
const Icon = ({ path, className = "w-4 h-4", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    {...props}
  >
    {path}
  </svg>
);

const LandmarkIcon = (p) => <Icon {...p} path={<><line x1="2" y1="22" x2="22" y2="22"/><line x1="12" y1="2" x2="12" y2="6"/><polygon points="12 2 20 7 4 7"/><line x1="6" y1="7" x2="6" y2="22"/><line x1="10" y1="7" x2="10" y2="22"/><line x1="14" y1="7" x2="14" y2="22"/><line x1="18" y1="7" x2="18" y2="22"/></>} />;
const BellIcon = (p) => <Icon {...p} path={<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>} />;
const FlameIcon = (p) => <Icon {...p} path={<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>} />;
const SparklesIcon = (p) => <Icon {...p} path={<><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></>} />;
const CompassIcon = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></>} />;
const ClockIcon = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>} />;
const Volume2Icon = (p) => <Icon {...p} path={<><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></>} />;
const VolumeXIcon = (p) => <Icon {...p} path={<><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></>} />;
const SearchIcon = (p) => <Icon {...p} path={<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>} />;
const BookmarkIcon = (p) => <Icon {...p} path={<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>} />;
const MapPinIcon = (p) => <Icon {...p} path={<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>} />;
const FilterIcon = (p) => <Icon {...p} path={<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>} />;
const RotateCcwIcon = (p) => <Icon {...p} path={<><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></>} />;
const CameraIcon = (p) => <Icon {...p} path={<><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></>} />;
const ShirtIcon = (p) => <Icon {...p} path={<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>} />;
const AccessibilityIcon = (p) => <Icon {...p} path={<><circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/></>} />;
const FootprintsIcon = (p) => <Icon {...p} path={<><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.5-2 8.5V16a2 2 0 0 1-2 2 2 2 0 0 1-2-2Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.5 2 8.5V20a2 2 0 0 0 2 2 2 2 0 0 0 2-2Z"/></>} />;
const SmartphoneIcon = (p) => <Icon {...p} path={<><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></>} />;
const ExternalLinkIcon = (p) => <Icon {...p} path={<><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></>} />;
const PlayIcon = (p) => <Icon {...p} path={<polygon points="5 3 19 12 5 21 5 3"/>} />;
const PauseIcon = (p) => <Icon {...p} path={<><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></>} />;
const XIcon = (p) => <Icon {...p} path={<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>} />;
const CheckCircle2Icon = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></>} />;
const NavigationIcon = (p) => <Icon {...p} path={<polygon points="3 11 22 2 13 21 11 13 3 11"/>} />;
const CalendarIcon = (p) => <Icon {...p} path={<><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>} />;
const ArrowRightIcon = (p) => <Icon {...p} path={<><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>} />;
const LayersIcon = (p) => <Icon {...p} path={<><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>} />;
const BookOpenIcon = (p) => <Icon {...p} path={<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>} />;
const InfoIcon = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>} />;

// Main Standalone React App
function IndiaTemplePortalApp() {
  const [activeTab, setActiveTab] = useState('temples');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCircuit, setSelectedCircuit] = useState('all');
  const [selectedRush, setSelectedRush] = useState('all');
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [isDiyaModalOpen, setIsDiyaModalOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('devalaya_bookmarks');
      return saved ? JSON.parse(saved) : ['meenakshi-amman', 'kedarnath-temple'];
    } catch {
      return ['meenakshi-amman', 'kedarnath-temple'];
    }
  });

  // Architecture state
  const [selectedArchStyle, setSelectedArchStyle] = useState('nagara');
  const [activeHotspotId, setActiveHotspotId] = useState('kalasha');

  // Circuit state
  const [selectedCircuitId, setSelectedCircuitId] = useState('char-dham');
  const [visitedStops, setVisitedStops] = useState({});
  const [checklistItems, setChecklistItems] = useState({});

  // Audio Player State inside detail
  const [audioProgress, setAudioProgress] = useState(0);
  const [isLegendPlaying, setIsLegendPlaying] = useState(false);
  const [activeLegendPara, setActiveLegendPara] = useState(0);

  // Detail Modal Tab
  const [modalTab, setModalTab] = useState('overview');

  const toggleAmbientAudio = () => {
    if (isAudioPlaying) {
      templeAudio.stopAmbientDrone();
      setIsAudioPlaying(false);
    } else {
      templeAudio.startAmbientDrone();
      setIsAudioPlaying(true);
    }
  };

  const toggleBookmark = (id) => {
    setBookmarkedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const handleRingBell = () => {
    templeAudio.playTempleBell(587.33, 4.5);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedStyle('all');
    setSelectedRegion('all');
    setSelectedCircuit('all');
    setSelectedRush('all');
  };

  const filteredTemples = TEMPLES_DATA.filter(temple => {
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const match = temple.name.toLowerCase().includes(q) || 
                    temple.state.toLowerCase().includes(q) || 
                    temple.deity.toLowerCase().includes(q) || 
                    temple.style.toLowerCase().includes(q) ||
                    temple.city.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (selectedStyle !== 'all' && !temple.style.toLowerCase().includes(selectedStyle.toLowerCase())) return false;
    if (selectedRegion !== 'all' && temple.region !== selectedRegion) return false;
    if (selectedCircuit !== 'all' && (!temple.circuits || !temple.circuits.some(c => c.toLowerCase().includes(selectedCircuit.toLowerCase())))) return false;
    if (selectedRush !== 'all' && temple.rushLevel !== selectedRush) return false;
    return true;
  });

  const curArch = ARCHITECTURE_STYLES[selectedArchStyle];
  const curHotspot = curArch.hotspots.find(h => h.id === activeHotspotId) || curArch.hotspots[0];
  const curCircuit = PILGRIMAGE_CIRCUITS.find(c => c.id === selectedCircuitId) || PILGRIMAGE_CIRCUITS[0];

  return (
    <div className="min-h-screen bg-sandstone-50 text-charcoal-800 flex flex-col font-sans selection:bg-brass-500 selection:text-charcoal-900">
      
      {/* Top Auspicious Header Banner */}
      <div className="bg-terracotta-gradient text-sandstone-100 text-xs py-1.5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2 font-medium tracking-wide">
            <span className="text-brass-300">ॐ</span>
            <span>॥ सत्यं शिवं सुन्दरम् ॥</span>
            <span className="hidden md:inline text-sandstone-300">|</span>
            <span className="hidden md:inline text-sandstone-200">Preserving Sacred Temple Architecture & Pilgrimage Heritage</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleRingBell}
              className="flex items-center space-x-1.5 text-brass-300 hover:text-brass-100 transition-colors py-0.5 px-2 rounded hover:bg-terracotta-800/60"
              title="Ring Consecrated Brass Bell"
            >
              <BellIcon className="w-3.5 h-3.5 text-brass-300" />
              <span className="text-[11px] font-semibold">Ring Bell (घण्टा)</span>
            </button>

            <button
              onClick={() => setIsDiyaModalOpen(true)}
              className="flex items-center space-x-1.5 bg-brass-500 hover:bg-brass-600 text-charcoal-900 font-bold px-3 py-0.5 rounded-full text-[11px] shadow-sm transition-transform active:scale-95"
            >
              <FlameIcon className="w-3.5 h-3.5 text-terracotta-800 animate-diya-flame" />
              <span>Offer Virtual Diya</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-sandstone-50/95 backdrop-blur-md border-b border-sandstone-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            
            {/* Logo */}
            <div className="flex items-center justify-between">
              <div 
                onClick={() => setActiveTab('temples')} 
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-terracotta-700 text-brass-400 flex items-center justify-center shadow-md border border-brass-500/40 group-hover:scale-105 transition-transform">
                  <LandmarkIcon className="w-6 h-6 text-brass-400" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h1 className="text-xl sm:text-2xl font-bold font-serif text-terracotta-800 tracking-tight leading-none group-hover:text-terracotta-600 transition-colors">
                      DEVALAYA
                    </h1>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brass-100 text-brass-800 px-2 py-0.5 rounded border border-brass-300">
                      Heritage Portal
                    </span>
                  </div>
                  <p className="text-[11px] text-charcoal-500 font-medium tracking-wide mt-0.5">
                    India Temple Heritage & Pilgrimage Information System
                  </p>
                </div>
              </div>

              {/* Soundscape toggle for mobile */}
              <div className="flex items-center space-x-2 md:hidden">
                <button
                  onClick={toggleAmbientAudio}
                  className={`p-2 rounded-lg border transition-colors ${
                    isAudioPlaying ? 'bg-brass-500 text-charcoal-900 border-brass-600' : 'bg-sandstone-100 text-charcoal-700 border-sandstone-300'
                  }`}
                >
                  {isAudioPlaying ? <Volume2Icon className="w-4 h-4" /> : <VolumeXIcon className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
              <input
                type="text"
                placeholder="Search temples, deities, styles (e.g. Nagara, Kedarnath)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2 bg-sandstone-100/90 border border-sandstone-300 focus:border-terracotta-600 rounded-full text-xs sm:text-sm text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20 shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal-400 hover:text-charcoal-700 px-1 py-0.5 rounded-full bg-sandstone-200"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Ambient Soundscape Toggle (Desktop) */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={toggleAmbientAudio}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-full border text-xs font-semibold transition-all ${
                  isAudioPlaying 
                    ? 'bg-brass-500 text-charcoal-900 border-brass-600 shadow-md shadow-brass-500/20 animate-pulse' 
                    : 'bg-sandstone-100 hover:bg-sandstone-200 text-charcoal-700 border-sandstone-300'
                }`}
              >
                {isAudioPlaying ? (
                  <>
                    <Volume2Icon className="w-4 h-4 text-terracotta-900" />
                    <span>Vedic Soundscape (Active)</span>
                  </>
                ) : (
                  <>
                    <VolumeXIcon className="w-4 h-4 text-charcoal-500" />
                    <span>Play Vedic Ambience</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 sm:space-x-2 mt-3 pt-2 border-t border-sandstone-200 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('temples')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'temples'
                  ? 'bg-terracotta-700 text-sandstone-50 shadow-sm'
                  : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
              }`}
            >
              <LandmarkIcon className="w-4 h-4" />
              <span>Temples & Darshan</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'architecture'
                  ? 'bg-terracotta-700 text-sandstone-50 shadow-sm'
                  : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
              }`}
            >
              <SparklesIcon className="w-4 h-4 text-brass-400" />
              <span>Architecture Explorer (Nagara / Dravidian / Vesara)</span>
            </button>

            <button
              onClick={() => setActiveTab('circuits')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'circuits'
                  ? 'bg-terracotta-700 text-sandstone-50 shadow-sm'
                  : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
              }`}
            >
              <CompassIcon className="w-4 h-4" />
              <span>Pilgrimage Circuit Planner</span>
            </button>

            <button
              onClick={() => setActiveTab('aarti')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'aarti'
                  ? 'bg-terracotta-700 text-sandstone-50 shadow-sm'
                  : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
              }`}
            >
              <ClockIcon className="w-4 h-4" />
              <span>Live Aarti & Rush Heatmaps</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        
        {/* Tab 1: Temples Directory */}
        {activeTab === 'temples' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Cultural Hero Banner */}
            <div className="relative rounded-3xl overflow-hidden bg-terracotta-gradient text-sandstone-50 p-6 sm:p-10 shadow-heritage-lg border border-brass-500/30">
              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center space-x-2 bg-brass-500/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-brass-400/40 text-brass-300 text-xs font-bold">
                  <SparklesIcon className="w-3.5 h-3.5 text-brass-400" />
                  <span>Sacred Architecture & Living Pilgrimage Heritage</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight leading-tight text-sandstone-50">
                  Discover the Divine Geometry & Living Temples of Bharat
                </h1>

                <p className="text-sm sm:text-base text-sandstone-200 leading-relaxed max-w-2xl font-light">
                  A curated cultural intelligence platform moving beyond generic travel templates. Explore interactive 2D anatomical blueprints (Nagara, Dravidian, Vesara), real-time Darshan rush heatmaps, multi-stop pilgrimage circuits, and authentic Sthalapurana audio legends.
                </p>

                {/* Stat Counters */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-sandstone-900/40 backdrop-blur-sm p-3 rounded-xl border border-sandstone-200/20">
                    <span className="text-2xl font-bold font-serif text-brass-400 block">10+</span>
                    <span className="text-xs text-sandstone-200">Iconic Shrines</span>
                  </div>
                  <div className="bg-sandstone-900/40 backdrop-blur-sm p-3 rounded-xl border border-sandstone-200/20">
                    <span className="text-2xl font-bold font-serif text-brass-400 block">3 Styles</span>
                    <span className="text-xs text-sandstone-200">Nagara, Dravid, Vesara</span>
                  </div>
                  <div className="bg-sandstone-900/40 backdrop-blur-sm p-3 rounded-xl border border-sandstone-200/20">
                    <span className="text-2xl font-bold font-serif text-brass-400 block">4 Circuits</span>
                    <span className="text-xs text-sandstone-200">Char Dham, 12 Jyotirlinga</span>
                  </div>
                  <div className="bg-sandstone-900/40 backdrop-blur-sm p-3 rounded-xl border border-sandstone-200/20">
                    <span className="text-2xl font-bold font-serif text-brass-400 block">24h</span>
                    <span className="text-xs text-sandstone-200">Rush & Aarti Tracker</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-sandstone-100/90 rounded-2xl p-4 sm:p-5 border border-sandstone-300 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-terracotta-100 border border-terracotta-200 flex items-center justify-center text-terracotta-800">
                    <FilterIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-serif text-terracotta-800 tracking-wide uppercase">
                      Filter Heritage Sites
                    </h3>
                    <p className="text-xs text-charcoal-500">
                      Showing <span className="font-bold text-terracotta-700">{filteredTemples.length}</span> consecrated sanctuaries
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 flex-1 lg:max-w-3xl">
                  {/* Style */}
                  <div>
                    <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">Architecture</label>
                    <select
                      value={selectedStyle}
                      onChange={(e) => setSelectedStyle(e.target.value)}
                      className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                    >
                      <option value="all">All Styles</option>
                      <option value="Nagara">Nagara (North)</option>
                      <option value="Dravidian">Dravidian (South)</option>
                      <option value="Vesara">Vesara / Hybrid</option>
                      <option value="Kalinga">Kalinga (Odisha)</option>
                      <option value="Rock-Cut">Rock-Cut Monolith</option>
                    </select>
                  </div>

                  {/* Region */}
                  <div>
                    <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">Region</label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                    >
                      <option value="all">All Regions</option>
                      <option value="North">North India</option>
                      <option value="South">South India</option>
                      <option value="East">East India</option>
                      <option value="West">West India</option>
                    </select>
                  </div>

                  {/* Circuit */}
                  <div>
                    <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">Pilgrimage Circuit</label>
                    <select
                      value={selectedCircuit}
                      onChange={(e) => setSelectedCircuit(e.target.value)}
                      className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                    >
                      <option value="all">All Circuits</option>
                      <option value="Char Dham">Char Dham</option>
                      <option value="12 Jyotirlingas">12 Jyotirlingas</option>
                      <option value="Pancha Bhoota Stalam">Pancha Bhoota Stalam</option>
                      <option value="Shakti Peethas">Shakti Peethas</option>
                    </select>
                  </div>

                  {/* Rush */}
                  <div>
                    <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">Live Rush Status</label>
                    <select
                      value={selectedRush}
                      onChange={(e) => setSelectedRush(e.target.value)}
                      className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                    >
                      <option value="all">Any Rush</option>
                      <option value="Low">🟢 Low Rush (Smooth)</option>
                      <option value="Moderate">🟡 Moderate Flow</option>
                      <option value="High">🟠 High Queue</option>
                      <option value="Peak">🔴 Peak Darshan</option>
                    </select>
                  </div>
                </div>

                {(selectedStyle !== 'all' || selectedRegion !== 'all' || selectedCircuit !== 'all' || selectedRush !== 'all' || searchQuery) && (
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center justify-center space-x-1 px-3 py-1.5 bg-sandstone-200 hover:bg-sandstone-300 text-charcoal-700 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <RotateCcwIcon className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Temples Asymmetrical Bento Grid */}
            {filteredTemples.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemples.map((temple, idx) => {
                  const isFeatured = idx === 0 && searchQuery === '' && selectedStyle === 'all' && selectedRegion === 'all';
                  const isBookmarked = bookmarkedIds.includes(temple.id);

                  return (
                    <div 
                      key={temple.id}
                      onClick={() => {
                        setSelectedTemple(temple);
                        setModalTab('overview');
                      }}
                      className={`group cursor-pointer rounded-2xl overflow-hidden terracotta-card flex flex-col justify-between ${
                        isFeatured ? 'md:col-span-2 md:flex-row' : ''
                      }`}
                    >
                      {/* Image Thumbnail */}
                      <div className={`relative overflow-hidden ${isFeatured ? 'md:w-1/2 min-h-[260px]' : 'h-52 w-full'}`}>
                        <img
                          src={temple.image}
                          alt={temple.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                          <span className="text-[11px] font-bold font-serif uppercase tracking-wider bg-sandstone-50/95 backdrop-blur-md text-terracotta-800 px-2.5 py-1 rounded-full border border-sandstone-300 shadow-sm">
                            {temple.style}
                          </span>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(temple.id);
                            }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-transform active:scale-90 ${
                              isBookmarked ? 'bg-brass-500 text-charcoal-900 shadow-md' : 'bg-charcoal-900/50 text-sandstone-100 hover:bg-charcoal-900/80'
                            }`}
                          >
                            <BookmarkIcon className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                          </button>
                        </div>

                        {/* Bottom Banner */}
                        <div className="absolute bottom-3 left-3 right-3 text-sandstone-50 z-10">
                          <div className="flex items-center space-x-1.5 text-xs text-brass-300 font-medium">
                            <MapPinIcon className="w-3.5 h-3.5 flex-shrink-0" />
                            <span>{temple.city}, {temple.state}</span>
                          </div>
                          <div className="text-[11px] text-sandstone-300 font-serif truncate">
                            {temple.sanskritName}
                          </div>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className={`p-4 sm:p-5 flex flex-col justify-between flex-1 ${isFeatured ? 'md:w-1/2' : ''}`}>
                        <div className="space-y-2.5">
                          
                          {/* Rush Indicator */}
                          <div className="flex items-center justify-between text-xs">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex items-center ${
                              temple.rushLevel === 'Low' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' :
                              temple.rushLevel === 'Moderate' ? 'bg-amber-100 text-amber-900 border-amber-300' :
                              temple.rushLevel === 'High' ? 'bg-orange-100 text-orange-800 border-orange-300' :
                              'bg-rose-100 text-rose-800 border-rose-300'
                            }`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse"></span>
                              {temple.rushLevel} Rush ({temple.rushPercentage}%)
                            </span>
                            <span className="text-[11px] text-charcoal-500 font-medium truncate max-w-[140px]">
                              {temple.period.split('(')[0]}
                            </span>
                          </div>

                          <div>
                            <h3 className="text-lg font-bold font-serif text-terracotta-800 group-hover:text-terracotta-600 transition-colors line-clamp-1">
                              {temple.name}
                            </h3>
                            <p className="text-xs text-charcoal-600 font-medium mt-0.5 line-clamp-2 leading-relaxed">
                              {temple.tagline}
                            </p>
                          </div>

                          <div className="text-xs text-charcoal-700 bg-sandstone-100/80 p-2 rounded-lg border border-sandstone-200/80">
                            <span className="font-bold text-terracotta-800 font-serif">Presiding Deity: </span>
                            <span className="text-charcoal-600 truncate">{temple.deity}</span>
                          </div>

                          {/* Accessibility Micro-icons */}
                          <div className="grid grid-cols-3 gap-1.5 pt-1 text-[10px]">
                            <div className="bg-sandstone-100 text-charcoal-700 p-1.5 rounded flex items-center space-x-1 truncate" title="Photography Status">
                              <CameraIcon className="w-3 h-3 text-terracotta-600 flex-shrink-0" />
                              <span className="truncate">{temple.rulesMatrix.photography.badge}</span>
                            </div>
                            <div className="bg-sandstone-100 text-charcoal-700 p-1.5 rounded flex items-center space-x-1 truncate" title="Dress Code">
                              <ShirtIcon className="w-3 h-3 text-brass-700 flex-shrink-0" />
                              <span className="truncate">{temple.rulesMatrix.dressCode.badge}</span>
                            </div>
                            <div className="bg-sandstone-100 text-charcoal-700 p-1.5 rounded flex items-center space-x-1 truncate" title="Wheelchair Facility">
                              <AccessibilityIcon className="w-3 h-3 text-emerald-700 flex-shrink-0" />
                              <span className="truncate">{temple.rulesMatrix.wheelchair.badge}</span>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-4 pt-3 border-t border-sandstone-200/80 flex items-center justify-between gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedTemple(temple);
                              setModalTab('audio');
                            }}
                            className="flex items-center space-x-1.5 text-xs text-brass-800 hover:text-brass-950 font-bold bg-brass-100 hover:bg-brass-200 px-2.5 py-1.5 rounded-lg transition-colors"
                          >
                            <Volume2Icon className="w-3.5 h-3.5 text-terracotta-700" />
                            <span>Audio Legend</span>
                          </button>

                          <span className="inline-flex items-center space-x-1 text-xs font-bold text-terracotta-800 group-hover:translate-x-1 transition-transform">
                            <span>Explore Darshan Specs</span>
                            <ArrowRightIcon className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-sandstone-100 border border-sandstone-300 rounded-2xl p-12 text-center space-y-4">
                <LandmarkIcon className="w-12 h-12 text-charcoal-400 mx-auto" />
                <h3 className="text-lg font-bold font-serif text-terracotta-800">
                  No Temples Match Your Filter Criteria
                </h3>
                <p className="text-xs text-charcoal-600 max-w-md mx-auto">
                  Try clearing your search query or resetting filters to explore all consecrated heritage sites across Bharat.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="bg-terracotta-700 hover:bg-terracotta-800 text-white font-bold text-xs px-4 py-2 rounded-xl"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Architecture Explorer */}
        {activeTab === 'architecture' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Header */}
            <div className="bg-sandstone-100/90 border border-sandstone-300 rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider bg-terracotta-100 text-terracotta-800 px-2.5 py-0.5 rounded border border-terracotta-200">
                      Vastu & Agamic Sthapatya Veda
                    </span>
                    <span className="text-xs text-brass-700 font-bold">Interactive 2D Anatomical Blueprints</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif text-terracotta-800 mt-1">
                    Indian Temple Architectural Anatomy Explorer
                  </h2>
                  <p className="text-sm text-charcoal-600 max-w-3xl mt-1 leading-relaxed">
                    Explore the structural blueprints of classical Indian temple orders. Click any pulsing hotspot on the cross-section diagram to decode its Sanskrit nomenclature, structural engineering, and metaphysical symbolism.
                  </p>
                </div>

                <div className="flex flex-wrap md:flex-nowrap gap-2 bg-sandstone-200/80 p-1.5 rounded-xl border border-sandstone-300">
                  {Object.values(ARCHITECTURE_STYLES).map(style => (
                    <button
                      key={style.id}
                      onClick={() => {
                        setSelectedArchStyle(style.id);
                        setActiveHotspotId(style.hotspots[0].id);
                      }}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap font-serif ${
                        selectedArchStyle === style.id
                          ? 'bg-terracotta-700 text-sandstone-50 shadow-md scale-102'
                          : 'text-charcoal-700 hover:bg-sandstone-100 hover:text-terracotta-800'
                      }`}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Canvas & Inspection */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Canvas */}
              <div className="lg:col-span-7 bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 border-b border-sandstone-200 pb-2">
                  <div>
                    <span className="text-xs font-serif font-bold text-terracotta-800 block">
                      {curArch.sanskritName}
                    </span>
                    <span className="text-[11px] text-charcoal-500">
                      Click any golden hotspot to inspect anatomical details
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sandstone-200 text-charcoal-700">
                    Cross-Section Elevation
                  </span>
                </div>

                <div className="relative aspect-[4/3] w-full bg-sandstone-100/60 rounded-xl border border-sandstone-200/90 overflow-hidden flex items-center justify-center p-2">
                  
                  {/* Nagara SVG */}
                  {selectedArchStyle === 'nagara' && (
                    <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-sm select-none">
                      <rect x="50" y="340" width="400" height="30" rx="3" fill="#8E7760" stroke="#5C4A3A" strokeWidth="2" />
                      <rect x="70" y="320" width="360" height="20" fill="#B49E85" stroke="#5C4A3A" strokeWidth="1.5" />
                      
                      <path d="M 90 320 L 90 250 L 220 250 L 220 320 Z" fill="#E2D1BD" stroke="#7A2E1E" strokeWidth="1.5" />
                      <line x1="110" y1="250" x2="110" y2="320" stroke="#7A2E1E" strokeWidth="3" />
                      <line x1="140" y1="250" x2="140" y2="320" stroke="#7A2E1E" strokeWidth="3" />
                      <line x1="170" y1="250" x2="170" y2="320" stroke="#7A2E1E" strokeWidth="3" />
                      <line x1="200" y1="250" x2="200" y2="320" stroke="#7A2E1E" strokeWidth="3" />

                      <path d="M 80 250 L 155 180 L 230 250 Z" fill="#DC7663" stroke="#7A2E1E" strokeWidth="2" />
                      <path d="M 95 230 L 155 180 L 215 230" fill="none" stroke="#FAF4EB" strokeWidth="1.5" />
                      <path d="M 115 210 L 155 180 L 195 210" fill="none" stroke="#FAF4EB" strokeWidth="1.5" />

                      <rect x="220" y="240" width="40" height="80" fill="#CDB9A1" stroke="#7A2E1E" strokeWidth="1.5" />

                      <rect x="260" y="220" width="150" height="100" fill="#7A2E1E" stroke="#5A1F13" strokeWidth="2" />
                      <rect x="310" y="260" width="50" height="60" rx="4" fill="#3D130B" stroke="#D4AF37" strokeWidth="1.5" />
                      <circle cx="335" cy="285" r="8" fill="#F59E0B" />
                      <circle cx="335" cy="285" r="4" fill="#FDFBF7" />

                      <path d="M 260 220 Q 285 110 335 65 Q 385 110 410 220 Z" fill="#A43E1B" stroke="#5A1F13" strokeWidth="2.5" />
                      <path d="M 280 220 Q 300 130 335 80 Q 370 130 390 220" fill="none" stroke="#FAF4EB" strokeWidth="1.5" opacity="0.6" />
                      <path d="M 300 220 Q 315 150 335 100 Q 355 150 370 220" fill="none" stroke="#FAF4EB" strokeWidth="1.5" opacity="0.6" />

                      <ellipse cx="335" cy="62" rx="36" ry="12" fill="#E5C672" stroke="#7A2E1E" strokeWidth="2" />
                      <path d="M 330 50 C 325 40, 345 40, 340 50 Z" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1.5" />
                      <line x1="335" y1="40" x2="335" y2="25" stroke="#D4AF37" strokeWidth="2.5" />
                      <circle cx="335" cy="23" r="3.5" fill="#D4AF37" />
                    </svg>
                  )}

                  {/* Dravidian SVG */}
                  {selectedArchStyle === 'dravidian' && (
                    <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-sm select-none">
                      <rect x="20" y="340" width="460" height="25" fill="#5C4A3A" stroke="#2D241E" strokeWidth="2" />

                      <path d="M 40 340 L 70 80 L 130 80 L 160 340 Z" fill="#A43E1B" stroke="#3D130B" strokeWidth="2" />
                      <line x1="62" y1="280" x2="138" y2="280" stroke="#FAF4EB" strokeWidth="2" />
                      <line x1="68" y1="220" x2="132" y2="220" stroke="#FAF4EB" strokeWidth="2" />
                      <line x1="74" y1="160" x2="126" y2="160" stroke="#FAF4EB" strokeWidth="2" />
                      <line x1="80" y1="110" x2="120" y2="110" stroke="#FAF4EB" strokeWidth="2" />
                      <ellipse cx="100" cy="75" rx="32" ry="9" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1.5" />
                      <path d="M 80 340 L 80 280 Q 100 260 120 280 L 120 340 Z" fill="#1A1410" />

                      <line x1="190" y1="340" x2="190" y2="210" stroke="#D4AF37" strokeWidth="3" />
                      <polygon points="190,215 210,225 190,235" fill="#D4AF37" />

                      <rect x="220" y="310" width="70" height="30" fill="#38BDF8" rx="2" stroke="#0369A1" strokeWidth="1.5" />

                      <rect x="300" y="270" width="70" height="70" fill="#E2D1BD" stroke="#7A2E1E" strokeWidth="1.5" />
                      <line x1="315" y1="270" x2="315" y2="340" stroke="#7A2E1E" strokeWidth="2" />
                      <line x1="335" y1="270" x2="335" y2="340" stroke="#7A2E1E" strokeWidth="2" />
                      <line x1="355" y1="270" x2="355" y2="340" stroke="#7A2E1E" strokeWidth="2" />

                      <rect x="375" y="250" width="100" height="90" fill="#7A2E1E" stroke="#3D130B" strokeWidth="2" />
                      <rect x="405" y="280" width="40" height="60" fill="#2D241E" rx="3" stroke="#D4AF37" strokeWidth="1.5" />
                      <ellipse cx="425" cy="315" rx="8" ry="12" fill="#F59E0B" />

                      <polygon points="380,250 395,200 455,200 470,250" fill="#C05621" stroke="#3D130B" strokeWidth="1.5" />
                      <polygon points="395,200 410,150 440,150 455,200" fill="#DC7663" stroke="#3D130B" strokeWidth="1.5" />
                      <polygon points="410,150 418,120 432,120 440,150" fill="#EAA69A" stroke="#3D130B" strokeWidth="1.5" />
                      <circle cx="425" cy="110" r="14" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1.5" />
                      <line x1="425" y1="96" x2="425" y2="85" stroke="#D4AF37" strokeWidth="2" />
                    </svg>
                  )}

                  {/* Vesara SVG */}
                  {selectedArchStyle === 'vesara' && (
                    <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-sm select-none">
                      <polygon points="50,340 70,320 100,340 130,320 160,340 200,320 240,340 280,320 320,340 360,320 400,340 440,320 460,340 450,360 60,360" fill="#8E7760" stroke="#5C4A3A" strokeWidth="2" />

                      <rect x="80" y="240" width="180" height="80" fill="#FAF4EB" stroke="#7A2E1E" strokeWidth="1.5" />
                      <line x1="110" y1="240" x2="110" y2="320" stroke="#996515" strokeWidth="4" strokeLinecap="round" />
                      <line x1="150" y1="240" x2="150" y2="320" stroke="#996515" strokeWidth="4" strokeLinecap="round" />
                      <line x1="190" y1="240" x2="190" y2="320" stroke="#996515" strokeWidth="4" strokeLinecap="round" />
                      <line x1="230" y1="240" x2="230" y2="320" stroke="#996515" strokeWidth="4" strokeLinecap="round" />

                      <polygon points="230,240 260,160 290,240" fill="#E5C672" stroke="#7A2E1E" strokeWidth="1.5" />
                      <circle cx="260" cy="190" r="10" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1" />

                      <rect x="270" y="220" width="160" height="100" fill="#996515" stroke="#5A1F13" strokeWidth="2" />
                      <rect x="320" y="260" width="60" height="60" rx="3" fill="#2D241E" stroke="#D4AF37" strokeWidth="1.5" />
                      <circle cx="350" cy="290" r="9" fill="#F59E0B" />

                      <path d="M 270 220 Q 300 120 350 70 Q 400 120 430 220 Z" fill="#DBB144" stroke="#6C480E" strokeWidth="2" />
                      <circle cx="310" cy="180" r="8" fill="#FBF8EE" stroke="#7A2E1E" strokeWidth="1" />
                      <circle cx="350" cy="140" r="9" fill="#FBF8EE" stroke="#7A2E1E" strokeWidth="1" />
                      <circle cx="390" cy="180" r="8" fill="#FBF8EE" stroke="#7A2E1E" strokeWidth="1" />

                      <ellipse cx="350" cy="68" rx="20" ry="8" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1.5" />
                      <line x1="350" y1="60" x2="350" y2="40" stroke="#D4AF37" strokeWidth="2.5" />
                    </svg>
                  )}

                  {/* Hotspots */}
                  {curArch.hotspots.map((hotspot) => {
                    const isActive = activeHotspotId === hotspot.id;
                    return (
                      <button
                        key={hotspot.id}
                        onClick={() => setActiveHotspotId(hotspot.id)}
                        style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-transform ${
                          isActive ? 'scale-125 z-20' : 'hover:scale-115 z-10'
                        }`}
                      >
                        <div className={`relative flex items-center justify-center w-7 h-7 rounded-full shadow-lg transition-all ${
                          isActive
                            ? 'bg-terracotta-800 text-brass-300 ring-4 ring-brass-400 hotspot-pulse'
                            : 'bg-brass-500 text-charcoal-900 ring-2 ring-white hover:bg-brass-400'
                        }`}>
                          <SparklesIcon className="w-3.5 h-3.5 fill-current" />
                        </div>
                        <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[10px] font-bold font-serif whitespace-nowrap shadow-md pointer-events-none transition-all ${
                          isActive ? 'bg-terracotta-900 text-sandstone-50 scale-105' : 'bg-charcoal-900/80 text-sandstone-100 opacity-0 group-hover:opacity-100'
                        }`}>
                          {hotspot.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Hotspots row */}
                <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                  {curArch.hotspots.map((hotspot) => (
                    <button
                      key={hotspot.id}
                      onClick={() => setActiveHotspotId(hotspot.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                        activeHotspotId === hotspot.id
                          ? 'bg-terracotta-700 text-white shadow-xs'
                          : 'bg-sandstone-200 text-charcoal-700 hover:bg-sandstone-300'
                      }`}
                    >
                      {hotspot.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Detail Card */}
              <div className="lg:col-span-5 bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 shadow-sm space-y-4">
                <div className="border-b border-sandstone-200 pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brass-100 text-brass-900 border border-brass-300">
                      {curHotspot.category}
                    </span>
                    <span className="text-xs font-serif text-terracotta-700 font-bold">
                      {curArch.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-terracotta-800 mt-1">
                    {curHotspot.name}
                  </h3>
                  <p className="text-sm font-semibold text-charcoal-600 font-serif">
                    {curHotspot.sanskrit}
                  </p>
                </div>

                <div className="bg-sandstone-100/90 rounded-xl p-3.5 border border-sandstone-200">
                  <h4 className="text-xs font-bold text-charcoal-700 font-serif uppercase tracking-wider mb-1 flex items-center">
                    <InfoIcon className="w-3.5 h-3.5 text-brass-600 mr-1.5" /> Architectural Function & Meaning
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {curHotspot.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold font-serif text-terracotta-800 uppercase tracking-wide block">
                    Architectural Philosophy
                  </span>
                  <p className="text-xs text-charcoal-600 italic bg-sandstone-100/60 p-2.5 rounded-lg border border-sandstone-200">
                    "{curArch.philosophy}"
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold font-serif text-terracotta-800 uppercase tracking-wide block mb-2">
                    Iconic Real-World Examples
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {curArch.examples.map((ex, i) => (
                      <div key={i} className="bg-sandstone-100 border border-sandstone-300/80 rounded-lg p-2 text-xs">
                        <span className="font-bold text-charcoal-900 font-serif block truncate">{ex.name}</span>
                        <span className="text-charcoal-500 text-[11px]">{ex.location} ({ex.year})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Comparative Matrix Table */}
            <div className="bg-sandstone-50 border border-sandstone-300 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold font-serif text-terracotta-800 mb-1 flex items-center">
                <LayersIcon className="w-5 h-5 text-brass-600 mr-2" />
                Comparative Matrix: Nagara vs Dravidian vs Vesara Styles
              </h3>
              <p className="text-xs text-charcoal-500 mb-4">
                Detailed engineering differences across Indian temple architectural schools
              </p>

              <div className="overflow-x-auto rounded-xl border border-sandstone-300">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-sandstone-200/90 text-charcoal-800 font-serif border-b border-sandstone-300">
                      <th className="p-3 font-bold">Feature</th>
                      <th className="p-3 font-bold text-terracotta-800">Nagara (North)</th>
                      <th className="p-3 font-bold text-terracotta-800">Dravidian (South)</th>
                      <th className="p-3 font-bold text-terracotta-800">Vesara (Deccan / Hybrid)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sandstone-200 bg-sandstone-50">
                    <tr className="hover:bg-sandstone-100/60">
                      <td className="p-3 font-bold text-charcoal-800">Main Spire (Tower)</td>
                      <td className="p-3 text-charcoal-700"><strong>Shikhara</strong>: Curvilinear mountain profile rising gently inward.</td>
                      <td className="p-3 text-charcoal-700"><strong>Vimana</strong>: Stepped pyramid with distinct horizontal storeys (Talas).</td>
                      <td className="p-3 text-charcoal-700"><strong>Synthesized Vimana</strong>: Soft curved silhouette over tiered storeys.</td>
                    </tr>
                    <tr className="hover:bg-sandstone-100/60">
                      <td className="p-3 font-bold text-charcoal-800">Gateways</td>
                      <td className="p-3 text-charcoal-700">No monumental entrance towers; direct entry to Mandapa.</td>
                      <td className="p-3 text-charcoal-700">Monumental <strong>Gopurams</strong> often dwarfing the inner Vimana.</td>
                      <td className="p-3 text-charcoal-700">Moderate ornamental gateway porches with Sukanasi.</td>
                    </tr>
                    <tr className="hover:bg-sandstone-100/60">
                      <td className="p-3 font-bold text-charcoal-800">Ground Plan</td>
                      <td className="p-3 text-charcoal-700">Cruciform or square plan with projecting offsets (Rathas).</td>
                      <td className="p-3 text-charcoal-700">Square sanctum enclosed within rectangular walled courtyards.</td>
                      <td className="p-3 text-charcoal-700"><strong>Stellate (Star-shaped)</strong> 16-to-32-pointed ground layout.</td>
                    </tr>
                    <tr className="hover:bg-sandstone-100/60">
                      <td className="p-3 font-bold text-charcoal-800">Apex Finial</td>
                      <td className="p-3 text-charcoal-700">Ribbed stone <strong>Amalaka</strong> disc topped with single Kalasha pot.</td>
                      <td className="p-3 text-charcoal-700">Dome cupola (Shikhara) topped with golden Stupis.</td>
                      <td className="p-3 text-charcoal-700">Kalasha with miniature aedicule spires around neck.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Glossary */}
            <div className="bg-sandstone-100/90 border border-sandstone-300 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold font-serif text-terracotta-800 mb-3 flex items-center">
                <BookOpenIcon className="w-4 h-4 text-brass-600 mr-2" />
                Sanskrit Architectural Glossary (शिल्प शास्त्र शब्दावली)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {ANATOMY_TERMS_GLOSSARY.map((item, idx) => (
                  <div key={idx} className="bg-sandstone-50 border border-sandstone-200 rounded-xl p-3 shadow-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-terracotta-800 text-xs font-serif">{item.term}</span>
                      <span className="text-[11px] text-brass-700 font-serif font-medium">{item.sanskrit}</span>
                    </div>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      {item.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Circuit Planner */}
        {activeTab === 'circuits' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Header */}
            <div className="bg-sandstone-100/90 border border-sandstone-300 rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider bg-terracotta-100 text-terracotta-800 px-2.5 py-0.5 rounded border border-terracotta-200">
                      Tirtha Yatra Route Architecture
                    </span>
                    <span className="text-xs text-brass-700 font-bold">Multi-Stop Itinerary Planner</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif text-terracotta-800 mt-1">
                    Sacred Pilgrimage Circuit Planner
                  </h2>
                  <p className="text-sm text-charcoal-600 max-w-3xl mt-1 leading-relaxed">
                    Explore curated all-India pilgrimage circuits, calculate total transit distances, track your holy darshan progress, and access route-specific dress codes and logistics.
                  </p>
                </div>

                <div className="flex flex-wrap md:flex-nowrap gap-2 bg-sandstone-200/80 p-1.5 rounded-xl border border-sandstone-300">
                  {PILGRIMAGE_CIRCUITS.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCircuitId(c.id)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap font-serif ${
                        selectedCircuitId === c.id
                          ? 'bg-terracotta-700 text-sandstone-50 shadow-md scale-102'
                          : 'text-charcoal-700 hover:bg-sandstone-100 hover:text-terracotta-800'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-sandstone-50 border border-sandstone-300 rounded-xl p-4 shadow-xs">
                <div className="flex items-center space-x-2 text-terracotta-700 mb-1">
                  <NavigationIcon className="w-4 h-4" />
                  <span className="text-xs font-bold font-serif uppercase tracking-wider">Total Mileage</span>
                </div>
                <div className="text-2xl font-bold font-serif text-terracotta-800">
                  {curCircuit.totalDistanceKm.toLocaleString()} km
                </div>
                <span className="text-[11px] text-charcoal-500">Across major sacred corridors</span>
              </div>

              <div className="bg-sandstone-50 border border-sandstone-300 rounded-xl p-4 shadow-xs">
                <div className="flex items-center space-x-2 text-brass-700 mb-1">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-xs font-bold font-serif uppercase tracking-wider">Estimated Duration</span>
                </div>
                <div className="text-2xl font-bold font-serif text-brass-800">
                  {curCircuit.estimatedDays}
                </div>
                <span className="text-[11px] text-charcoal-500">Recommended pacing</span>
              </div>

              <div className="bg-sandstone-50 border border-sandstone-300 rounded-xl p-4 shadow-xs">
                <div className="flex items-center space-x-2 text-charcoal-700 mb-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-xs font-bold font-serif uppercase tracking-wider">Ideal Season</span>
                </div>
                <div className="text-sm font-bold text-charcoal-800 truncate">
                  {curCircuit.bestSeason}
                </div>
                <span className="text-[11px] text-charcoal-500">Weather & access window</span>
              </div>

              <div className="bg-sandstone-50 border border-sandstone-300 rounded-xl p-4 shadow-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold font-serif uppercase tracking-wider text-charcoal-700 flex items-center">
                    <CheckCircle2Icon className="w-4 h-4 text-emerald-600 mr-1" />
                    Yatra Progress
                  </span>
                  <span className="text-xs font-bold text-terracotta-800">
                    {curCircuit.stops.filter((_, i) => visitedStops[`${selectedCircuitId}-${i}`]).length} / {curCircuit.stops.length} Visited
                  </span>
                </div>
                <div className="w-full h-2.5 bg-sandstone-200 rounded-full overflow-hidden mt-2">
                  <div
                    style={{ width: `${(curCircuit.stops.filter((_, i) => visitedStops[`${selectedCircuitId}-${i}`]).length / curCircuit.stops.length) * 100}%` }}
                    className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Stops Timeline */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-serif text-terracotta-800 flex items-center">
                <CompassIcon className="w-5 h-5 text-brass-600 mr-2" />
                Interactive Route Timeline ({curCircuit.stops.length} Sacred Stops)
              </h3>

              <div className="space-y-3">
                {curCircuit.stops.map((stop, idx) => {
                  const isVisited = !!visitedStops[`${selectedCircuitId}-${idx}`];
                  return (
                    <div
                      key={idx}
                      className={`bg-sandstone-50 border rounded-xl p-4 transition-all shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                        isVisited ? 'border-emerald-400 bg-emerald-50/30' : 'border-sandstone-300 hover:border-sandstone-400'
                      }`}
                    >
                      <div className="flex items-start space-x-3.5">
                        <button
                          onClick={() => setVisitedStops(prev => ({ ...prev, [`${selectedCircuitId}-${idx}`]: !prev[`${selectedCircuitId}-${idx}`] }))}
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 transition-transform active:scale-90 ${
                            isVisited ? 'bg-emerald-600 text-white shadow-md' : 'bg-sandstone-200 text-charcoal-700 hover:bg-brass-500'
                          }`}
                        >
                          {isVisited ? '✓' : idx + 1}
                        </button>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="text-sm sm:text-base font-bold font-serif text-terracotta-800">{stop.name}</h4>
                            <span className="text-[11px] font-semibold bg-sandstone-200 text-charcoal-700 px-2 py-0.5 rounded">{stop.state}</span>
                            {stop.direction && <span className="text-[10px] font-bold bg-brass-100 text-brass-900 px-2 py-0.5 rounded border border-brass-300">{stop.direction}</span>}
                            {stop.element && <span className="text-[10px] font-bold bg-blue-100 text-blue-900 px-2 py-0.5 rounded border border-blue-300">{stop.element}</span>}
                          </div>
                          <p className="text-xs text-charcoal-600 leading-relaxed mt-1">{stop.significance || stop.symbolism}</p>
                          {stop.transit && <div className="text-[11px] text-charcoal-500 mt-1">✈️ {stop.transit}</div>}
                        </div>
                      </div>

                      {stop.templeId && (
                        <button
                          onClick={() => {
                            const found = TEMPLES_DATA.find(t => t.id === stop.templeId);
                            if (found) setSelectedTemple(found);
                          }}
                          className="self-end md:self-center px-3 py-1.5 bg-sandstone-100 hover:bg-sandstone-200 text-terracotta-800 rounded-lg text-xs font-bold border border-sandstone-300"
                        >
                          View Temple Specs →
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* Tab 4: Live Aarti & Rush Heatmaps */}
        {activeTab === 'aarti' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-sandstone-100/90 border border-sandstone-300 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-terracotta-100 text-terracotta-800 px-2.5 py-0.5 rounded border border-terracotta-200">
                  Live Darshan Intelligence
                </span>
                <span className="text-xs text-brass-700 font-bold">24-Hour Queue Heatmaps</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-terracotta-800 mt-1">
                Real-Time Darshan Rush & Scheduled Aarti Timings
              </h2>
              <p className="text-sm text-charcoal-600 max-w-3xl mt-1 leading-relaxed">
                Plan your sacred visit with live crowd indicators, optimal darshan time windows (Mangala, afternoon lulls), and daily consecrated Aarti schedules with real bell chimes.
              </p>
            </div>

            <div className="space-y-6">
              {TEMPLES_DATA.slice(0, 4).map((temple) => (
                <div key={temple.id} className="bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sandstone-200 pb-3">
                    <div>
                      <span className="text-xs text-charcoal-500">{temple.city}, {temple.state}</span>
                      <h3 className="text-lg font-bold font-serif text-terracotta-800">{temple.name}</h3>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedTemple(temple);
                        setModalTab('darshan');
                      }}
                      className="px-3 py-1.5 bg-terracotta-700 hover:bg-terracotta-800 text-sandstone-50 rounded-lg text-xs font-bold"
                    >
                      View Full Shrine Specs →
                    </button>
                  </div>

                  {/* Visual Heatmap */}
                  <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-19 gap-1.5 items-end h-24 bg-sandstone-100/80 p-2.5 rounded-xl border border-sandstone-200">
                    {temple.rushHeatmap24h.map((slot, index) => (
                      <div key={index} className="group relative flex flex-col items-center h-full justify-end">
                        <div
                          style={{ height: `${Math.max(15, slot.rush)}%` }}
                          className={`w-full rounded-t-sm ${
                            slot.status === 'Low' ? 'bg-emerald-500' :
                            slot.status === 'Moderate' ? 'bg-amber-400' :
                            slot.status === 'High' ? 'bg-orange-500' : 'bg-rose-600'
                          }`}
                        />
                        <span className="text-[9px] font-medium text-charcoal-500 mt-1 scale-90">{slot.hour}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Floating Diya Action */}
      <button
        onClick={() => setIsDiyaModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-brass-gradient text-charcoal-900 font-serif font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-2xl flex items-center space-x-2 border-2 border-brass-300 hover:scale-105 active:scale-95 transition-all"
      >
        <FlameIcon className="w-5 h-5 text-terracotta-900 animate-diya-flame" />
        <span className="hidden sm:inline">Offer Virtual Diya (दीपम्)</span>
      </button>

      {/* Temple Detail Modal */}
      {selectedTemple && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-900/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-sandstone-50 border border-sandstone-300 rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-fade-in my-auto">
            
            {/* Image Header */}
            <div className="relative h-64 sm:h-72 w-full flex-shrink-0">
              <img src={selectedTemple.image} alt={selectedTemple.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-sandstone-50 via-charcoal-900/40 to-charcoal-900/60" />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-xs font-bold font-serif uppercase tracking-wider bg-sandstone-50/95 text-terracotta-800 px-3 py-1 rounded-full border border-sandstone-300 shadow-sm">
                  {selectedTemple.style} Architecture
                </span>
                <div className="flex items-center space-x-2">
                  <button onClick={handleRingBell} className="w-8 h-8 rounded-full bg-sandstone-50 text-terracotta-800 flex items-center justify-center shadow-md">
                    <BellIcon className="w-4 h-4" />
                  </button>
                  <button onClick={() => toggleBookmark(selectedTemple.id)} className="w-8 h-8 rounded-full bg-sandstone-50 text-charcoal-800 flex items-center justify-center shadow-md">
                    <BookmarkIcon className={`w-4 h-4 ${bookmarkedIds.includes(selectedTemple.id) ? 'fill-current text-brass-600' : ''}`} />
                  </button>
                  <button onClick={() => setSelectedTemple(null)} className="w-8 h-8 rounded-full bg-sandstone-50 text-charcoal-700 flex items-center justify-center shadow-md">
                    <XIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="absolute bottom-4 left-6 right-6 z-10">
                <span className="text-xs text-brass-700 font-serif font-bold">{selectedTemple.city}, {selectedTemple.state} • {selectedTemple.period}</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-terracotta-800">{selectedTemple.name}</h2>
                <p className="text-xs text-charcoal-600 font-serif italic">{selectedTemple.sanskritName}</p>
              </div>
            </div>

            {/* Modal Tabs */}
            <div className="flex border-b border-sandstone-300 px-6 bg-sandstone-100/90 overflow-x-auto no-scrollbar flex-shrink-0">
              {['overview', 'darshan', 'rules', 'audio', 'architecture'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setModalTab(tab)}
                  className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 capitalize transition-all whitespace-nowrap font-serif ${
                    modalTab === tab ? 'border-terracotta-700 text-terracotta-800 bg-sandstone-50/80' : 'border-transparent text-charcoal-600'
                  }`}
                >
                  {tab === 'darshan' ? 'Darshan & Aarti' : tab === 'rules' ? 'Rules Matrix' : tab === 'audio' ? 'Audio Legend' : tab}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              
              {modalTab === 'overview' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-sandstone-100 p-3 rounded-xl border border-sandstone-200">
                      <span className="text-[10px] font-bold text-charcoal-500 uppercase font-serif block">Presiding Deity</span>
                      <span className="text-xs font-bold text-terracotta-800">{selectedTemple.deity}</span>
                    </div>
                    <div className="bg-sandstone-100 p-3 rounded-xl border border-sandstone-200">
                      <span className="text-[10px] font-bold text-charcoal-500 uppercase font-serif block">Ruling Dynasty</span>
                      <span className="text-xs font-bold text-terracotta-800">{selectedTemple.dynasty}</span>
                    </div>
                    <div className="bg-sandstone-100 p-3 rounded-xl border border-sandstone-200">
                      <span className="text-[10px] font-bold text-charcoal-500 uppercase font-serif block">Architecture</span>
                      <span className="text-xs font-bold text-terracotta-800">{selectedTemple.style}</span>
                    </div>
                    <div className="bg-sandstone-100 p-3 rounded-xl border border-sandstone-200">
                      <span className="text-[10px] font-bold text-charcoal-500 uppercase font-serif block">Circuits</span>
                      <span className="text-xs font-bold text-brass-800">{selectedTemple.circuits?.join(', ')}</span>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-700 leading-relaxed bg-sandstone-100/70 p-4 rounded-xl border border-sandstone-200">
                    {selectedTemple.description}
                  </p>
                </div>
              )}

              {modalTab === 'darshan' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold font-serif text-terracotta-800 uppercase tracking-wide">
                    24-Hour Queue Heatmap & Scheduled Aartis
                  </h4>
                  <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-19 gap-1.5 items-end h-28 bg-sandstone-100/80 p-3 rounded-xl border border-sandstone-200">
                    {selectedTemple.rushHeatmap24h.map((slot, i) => (
                      <div key={i} className="flex flex-col items-center h-full justify-end">
                        <div style={{ height: `${Math.max(15, slot.rush)}%` }} className={`w-full rounded-t-sm ${slot.status === 'Low' ? 'bg-emerald-500' : slot.status === 'Moderate' ? 'bg-amber-400' : slot.status === 'High' ? 'bg-orange-500' : 'bg-rose-600'}`} />
                        <span className="text-[9px] font-medium text-charcoal-500 mt-1">{slot.hour}</span>
                      </div>
                    ))}
                  </div>

                  <div className="overflow-hidden rounded-xl border border-sandstone-300">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-sandstone-200/90 text-charcoal-800 font-serif">
                        <tr><th className="p-3">Aarti Ritual</th><th className="p-3">Time</th><th className="p-3">Significance</th></tr>
                      </thead>
                      <tbody className="divide-y divide-sandstone-200 bg-sandstone-50">
                        {selectedTemple.aartiSchedule.map((a, i) => (
                          <tr key={i} className="hover:bg-sandstone-100">
                            <td className="p-3 font-bold text-terracotta-800">{a.name}</td>
                            <td className="p-3 font-semibold">{a.time}</td>
                            <td className="p-3 text-charcoal-600">{a.significance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {modalTab === 'rules' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-sandstone-100 rounded-xl border border-sandstone-200">
                    <div className="font-bold text-xs text-charcoal-800 font-serif flex items-center justify-between mb-1">
                      <span>📸 Photography</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">{selectedTemple.rulesMatrix.photography.badge}</span>
                    </div>
                    <p className="text-xs text-charcoal-600">{selectedTemple.rulesMatrix.photography.details}</p>
                  </div>
                  <div className="p-3.5 bg-sandstone-100 rounded-xl border border-sandstone-200">
                    <div className="font-bold text-xs text-charcoal-800 font-serif flex items-center justify-between mb-1">
                      <span>👗 Dress Code</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-300">{selectedTemple.rulesMatrix.dressCode.badge}</span>
                    </div>
                    <p className="text-xs text-charcoal-600">{selectedTemple.rulesMatrix.dressCode.details}</p>
                  </div>
                  <div className="p-3.5 bg-sandstone-100 rounded-xl border border-sandstone-200">
                    <div className="font-bold text-xs text-charcoal-800 font-serif flex items-center justify-between mb-1">
                      <span>♿ Wheelchair Access</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">{selectedTemple.rulesMatrix.wheelchair.badge}</span>
                    </div>
                    <p className="text-xs text-charcoal-600">{selectedTemple.rulesMatrix.wheelchair.details}</p>
                  </div>
                  <div className="p-3.5 bg-sandstone-100 rounded-xl border border-sandstone-200">
                    <div className="font-bold text-xs text-charcoal-800 font-serif flex items-center justify-between mb-1">
                      <span>👟 Footwear Stands</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-300">{selectedTemple.rulesMatrix.footwear.badge}</span>
                    </div>
                    <p className="text-xs text-charcoal-600">{selectedTemple.rulesMatrix.footwear.details}</p>
                  </div>
                </div>
              )}

              {modalTab === 'audio' && selectedTemple.audioLegend && (
                <div className="space-y-4 bg-sandstone-100 p-5 rounded-2xl border border-sandstone-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase bg-brass-100 text-brass-900 px-2 py-0.5 rounded border border-brass-300">Sthalapurana Audio</span>
                      <h3 className="text-base font-bold font-serif text-terracotta-800 mt-1">{selectedTemple.audioLegend.title}</h3>
                    </div>
                    <button onClick={handleRingBell} className="px-3 py-1 bg-sandstone-50 rounded-lg text-xs font-bold border border-sandstone-300">
                      🔔 Bell Chime
                    </button>
                  </div>

                  <div className="space-y-2">
                    {selectedTemple.audioLegend.paragraphs.map((p, i) => (
                      <div key={i} className="p-3 bg-sandstone-50 rounded-xl border border-sandstone-200 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {modalTab === 'architecture' && selectedTemple.architectureHighlights && (
                <div className="space-y-3">
                  <p className="text-xs text-charcoal-700 bg-sandstone-100 p-3 rounded-xl border border-sandstone-200">
                    {selectedTemple.architectureHighlights.styleDetails}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTemple.architectureHighlights.features.map((f, i) => (
                      <div key={i} className="p-2.5 bg-sandstone-100 rounded-lg text-xs font-medium text-charcoal-800 border border-sandstone-200 flex items-center space-x-2">
                        <span className="text-terracotta-700 font-bold">✓</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="p-4 px-6 border-t border-sandstone-300 bg-sandstone-100/80 flex items-center justify-between">
              <span className="text-xs text-charcoal-500 font-semibold">{selectedTemple.rating} ★★★★★ ({selectedTemple.reviewsCount} records)</span>
              <div className="flex items-center space-x-3">
                {selectedTemple.rulesMatrix?.bookingPass?.officialUrl && (
                  <a
                    href={selectedTemple.rulesMatrix.bookingPass.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-terracotta-700 hover:bg-terracotta-800 text-sandstone-50 text-xs font-bold px-4 py-2 rounded-xl"
                  >
                    <span>Official Trust Pass</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                <button onClick={() => setSelectedTemple(null)} className="text-xs font-semibold px-4 py-2 rounded-xl bg-sandstone-200 text-charcoal-800">
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Virtual Diya Modal */}
      {isDiyaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-sandstone-50 border-2 border-brass-500/60 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative text-center space-y-5">
            <button onClick={() => setIsDiyaModalOpen(false)} className="absolute top-4 right-4 text-charcoal-400 hover:text-charcoal-700">
              <XIcon className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[11px] font-bold font-serif uppercase tracking-widest text-brass-700 bg-brass-100 px-3 py-1 rounded-full border border-brass-300">
                ॥ दीपं ज्योति परंब्रह्म ॥
              </span>
              <h3 className="text-2xl font-bold font-serif text-terracotta-800 mt-2">
                Offer a Consecrated Diya
              </h3>
              <p className="text-xs text-charcoal-600 mt-1">
                Light a sacred lamp of auspicious light (Akhand Jyoti) for universal well-being
              </p>
            </div>

            <div className="py-4 flex flex-col items-center justify-center">
              <div className="w-12 h-16 animate-diya-flame relative">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600 via-amber-400 to-yellow-100 rounded-full blur-[1px]" />
              </div>
              <div className="w-28 h-10 bg-gradient-to-b from-brass-500 to-brass-700 rounded-b-full border-t-2 border-brass-300 shadow-lg flex items-center justify-center -mt-2">
                <span className="text-terracotta-900 text-xs font-serif font-bold">ॐ नमः शिवाय</span>
              </div>
            </div>

            <button
              onClick={() => {
                handleRingBell();
                setIsDiyaModalOpen(false);
              }}
              className="w-full bg-brass-500 hover:bg-brass-600 text-charcoal-900 font-bold font-serif py-3 rounded-xl shadow-lg transition-transform active:scale-98"
            >
              Consecrate & Light Diya (दीप प्रज्वलनम्)
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-charcoal-900 text-sandstone-300 border-t border-sandstone-700 py-10 mt-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-base font-bold font-serif text-sandstone-50">🛕 DEVALAYA HERITAGE PORTAL</span>
              <p className="text-sandstone-400 text-xs mt-1">Dedicated to documenting the monumental stone architecture and living traditions of Indian temples.</p>
            </div>
            <div className="text-brass-400 font-serif italic text-xs">
              ॥ धर्मो रक्षति रक्षितः ॥
            </div>
          </div>
          <div className="pt-4 border-t border-charcoal-800 text-charcoal-400 text-center">
            © 2026 India Temple Heritage & Pilgrimage Information Portal. Handcrafted with warm sandstone & terracotta aesthetics.
          </div>
        </div>
      </footer>

    </div>
  );
}

// Mount the App
ReactDOM.createRoot(document.getElementById('root')).render(<IndiaTemplePortalApp />);
