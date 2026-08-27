// Comprehensive Application Script for Devalaya Temple Heritage Portal
const { useState, useEffect, useRef } = React;
const { TEMPLES, ARCHITECTURE, CIRCUITS, TRANSLATIONS, templeAudio } = window.DEVALAYA_DATA;

// Reusable SVG Icons
const Icon = ({ path, className = "w-4 h-4", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
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
const ExternalLinkIcon = (p) => <Icon {...p} path={<><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></>} />;
const XIcon = (p) => <Icon {...p} path={<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>} />;
const ArrowRightIcon = (p) => <Icon {...p} path={<><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>} />;
const LayersIcon = (p) => <Icon {...p} path={<><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>} />;
const InfoIcon = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>} />;
const BotIcon = (p) => <Icon {...p} path={<><rect width="18" height="12" x="3" y="6" rx="2"/><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M12 2v4"/><path d="m4 18-2 4h20l-2-4"/></>} />;
const MicIcon = (p) => <Icon {...p} path={<><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></>} />;
const SendIcon = (p) => <Icon {...p} path={<><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></>} />;
const UserIcon = (p) => <Icon {...p} path={<><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>} />;
const SettingsIcon = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></>} />;
const PlusCircleIcon = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></>} />;
const GlobeIcon = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>} />;

function DevalayaApp() {
  const [activeTab, setActiveTab] = useState('temples');
  const [lang, setLang] = useState('en'); // 'en' | 'hi' | 'mr' | 'bn' | 'ta' | 'te' | 'gu'
  const [theme, setTheme] = useState('sandstone'); // 'sandstone' | 'midnight' | 'gold' | 'saffron'
  const [fontSize, setFontSize] = useState('normal'); // 'normal' | 'large' | 'xlarge'
  const [speechRate, setSpeechRate] = useState(0.95);

  // Filters & State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCircuit, setSelectedCircuit] = useState('all');
  const [selectedRush, setSelectedRush] = useState('all');
  const [selectedAccessibility, setSelectedAccessibility] = useState('all');
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [selectedDossierTemple, setSelectedDossierTemple] = useState(null);
  
  // Modals
  const [isDiyaModalOpen, setIsDiyaModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [modalTab, setModalTab] = useState('overview');

  // User Profile & Sacred Yatra Log
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('devalaya_user');
      return saved ? JSON.parse(saved) : { name: "Rajesh Sharma (Devotee)", email: "rajesh.devotee@bharat.in", avatar: "🕉️", loggedIn: true };
    } catch {
      return { name: "Rajesh Sharma (Devotee)", email: "rajesh.devotee@bharat.in", avatar: "🕉️", loggedIn: true };
    }
  });

  const [yatraJourneys, setYatraJourneys] = useState(() => {
    try {
      const saved = localStorage.getItem('devalaya_journeys');
      return saved ? JSON.parse(saved) : [
        { id: 1, templeId: 'kedarnath-temple', templeName: 'Kedarnath Dham', date: '2025-06-12', notes: 'Completed 16 km trek from Gaurikund at sunrise. Performed Maha Abhishek at 4:30 AM in freezing mist.', rating: 5, prasad: 'Brahma Kamal & Bhasma' },
        { id: 2, templeId: 'meenakshi-amman', templeName: 'Meenakshi Amman Temple', date: '2025-11-20', notes: 'Witnessed the Sayarakshai golden lamp Aarti. The musical stone pillars sounded pure musical swaras.', rating: 5, prasad: 'Madurai Temple Laddu & Kumkum' }
      ];
    } catch {
      return [];
    }
  });

  const [newJourneyTempleId, setNewJourneyTempleId] = useState('tirupati-balaji');
  const [newJourneyDate, setNewJourneyDate] = useState('2026-08-15');
  const [newJourneyNotes, setNewJourneyNotes] = useState('');

  // AI Heritage Bot State
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [botMessages, setBotMessages] = useState([
    {
      sender: 'bot',
      text: "॥ ॐ नमः शिवाय ॥ Namaste & Pranam! I am Acharya Deva, your Cultural Heritage AI Guide. How may I guide your sacred Yatra today in your preferred language?",
      suggestions: [
        "What is the dress code for Tirupati & Rameswaram?",
        "Plan a 5-day Char Dham route",
        "Which temples have wheelchair & battery car access?",
        "Explain Nagara vs Dravidian architecture"
      ]
    }
  ]);
  const [botInput, setBotInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatBottomRef = useRef(null);

  // Architecture state
  const [selectedArchStyle, setSelectedArchStyle] = useState('nagara');
  const [activeHotspotId, setActiveHotspotId] = useState('kalasha');

  // Circuit state
  const [selectedCircuitId, setSelectedCircuitId] = useState('char-dham');
  const [visitedStops, setVisitedStops] = useState({});

  // Bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('devalaya_bookmarks');
      return saved ? JSON.parse(saved) : ['meenakshi-amman', 'tirupati-balaji', 'kedarnath-temple'];
    } catch {
      return ['meenakshi-amman', 'tirupati-balaji'];
    }
  });

  // Translation helper
  const t = (key) => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || key;
  };

  const toggleBookmark = (id) => {
    setBookmarkedIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try { localStorage.setItem('devalaya_bookmarks', JSON.stringify(next)); } catch (e) {}
      return next;
    });
  };

  const toggleAmbientAudio = () => {
    if (isAudioPlaying) {
      templeAudio.stopAmbientDrone();
      setIsAudioPlaying(false);
    } else {
      templeAudio.startAmbientDrone();
      setIsAudioPlaying(true);
    }
  };

  const handleRingBell = () => {
    templeAudio.playTempleBell(587.33, 4.5);
  };

  // Text-To-Speech — Always in Hindi (hi-IN) voice
  const speakText = (text, customLang = 'hi') => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speechRate;
    utterance.pitch = 1.0;

    // Always pick Hindi (hi-IN) voice
    const voices = window.speechSynthesis.getVoices();
    const hindiCodes = ['hi-IN', 'hi'];
    let matchedVoice = null;
    for (const code of hindiCodes) {
      matchedVoice = voices.find(v => v.lang.toLowerCase().includes(code.toLowerCase()));
      if (matchedVoice) break;
    }
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }
    utterance.lang = 'hi-IN';

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // AI Heritage Bot logic
  const handleSendBotMessage = (messageText) => {
    const textToSend = messageText || botInput;
    if (!textToSend.trim()) return;

    const userMsg = { sender: 'user', text: textToSend };
    setBotMessages(prev => [...prev, userMsg]);
    setBotInput('');
    setIsBotTyping(true);

    setTimeout(() => {
      const query = textToSend.toLowerCase();
      let botResponse = "";
      let matchedTemple = null;

      if (query.includes('tirupati') || query.includes('balaji')) {
        matchedTemple = TEMPLES.find(t => t.id === 'tirupati-balaji');
        botResponse = "Sri Venkateswara Swamy Temple at Tirumala enforces strict traditional dress: White Dhoti/Kurta for men and Sari/Salwar with dupatta for women. Senior citizens and divyangjan devotees have a dedicated fast lane (Supatham) with battery cars!";
      } else if (query.includes('kedarnath')) {
        matchedTemple = TEMPLES.find(t => t.id === 'kedarnath-temple');
        botResponse = "Kedarnath Dham sits at 3,583m in the Garhwal Himalayas. The best darshan window is 04:30 AM – 06:00 AM (Maha Abhishek). Heavy thermals are required. Registration via BKTC is mandatory!";
      } else if (query.includes('dress code') || query.includes('clothing') || query.includes('wear')) {
        botResponse = "Traditional temple etiquette across Indian shrines: \n• South India (Tirupati, Meenakshi, Padmanabhaswamy): Dhoti/Veshti for men (shirts removed in sanctum in Kerala/TN), Saris/Salwar for women. \n• North India: Modest traditional wear. Leather belts and wallets are strictly barred inside most sanctums!";
      } else if (query.includes('char dham') || query.includes('circuit') || query.includes('itinerary')) {
        botResponse = "The Maha Char Dham encompasses the 4 cosmic corners: \n1. Puri (East - Satya Yuga)\n2. Rameswaram (South - Treta Yuga)\n3. Dwarka (West - Dvapara Yuga)\n4. Badrinath (North - Kali Yuga)\nTotal distance is approx. 6,280 km over 18–21 days. The ideal visiting window is May to October!";
      } else if (query.includes('wheelchair') || query.includes('accessibility') || query.includes('elderly') || query.includes('senior')) {
        botResponse = "Top Barrier-Free Accessible Temples:\n• Tirupati Balaji: Free battery cars & dedicated Supatham lane.\n• Kashi Vishwanath: Complete 5-lakh sq ft corridor with escalators & ramps directly from the Ganges.\n• Golden Temple: Dedicated Seva wheelchairs at all 4 gates.\n• Meenakshi Amman: Battery carts around outer Prakaram.";
      } else if (query.includes('nagara') || query.includes('dravidian') || query.includes('vesara') || query.includes('architecture')) {
        botResponse = "Classical Indian Temple Architectural Orders:\n• Nagara (North): Curvilinear mountain spire (Shikhara) crowned by Amalaka disc and Kalasha.\n• Dravidian (South): Stepped pyramidal tower (Vimana) and towering gateway towers (Gopurams) with sacred Pushkarini tanks.\n• Vesara (Hybrid): Stellate star-shaped plans with lathe-turned soapstone pillars.";
      } else if (query.includes('konark') || query.includes('magnetic') || query.includes('sun')) {
        matchedTemple = TEMPLES.find(t => t.id === 'konark-sun-temple');
        botResponse = "Konark Sun Temple was designed as a 24-wheeled colossal chariot for Surya. Its 24 stone wheels function as high-precision sundials accurate to minutes! Legend tells of 12-year-old Dharmapada who placed the crowning lodestone to save 1,200 sculptors.";
      } else {
        botResponse = "Thank you for asking! In our sacred heritage portal, you can explore detailed 24-hour rush heatmaps, daily Aarti timetables, cultural rules, and architectural blueprints for 22 iconic heritage shrines across Bharat. Would you like a recommendation based on your region or circuit?";
      }

      setBotMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: botResponse,
          templeSuggestion: matchedTemple
        }
      ]);
      setIsBotTyping(false);
    }, 600);
  };

  // Add Journey Handler
  const handleAddJourney = (e) => {
    e.preventDefault();
    const tFound = TEMPLES.find(t => t.id === newJourneyTempleId) || TEMPLES[0];
    const newEntry = {
      id: Date.now(),
      templeId: tFound.id,
      templeName: tFound.name,
      date: newJourneyDate,
      notes: newJourneyNotes || "Visited for auspicious Darshan and offered prayers.",
      rating: 5,
      prasad: "Sacred Prasad & Holy Ash/Flowers"
    };
    const updated = [newEntry, ...yatraJourneys];
    setYatraJourneys(updated);
    try { localStorage.setItem('devalaya_journeys', JSON.stringify(updated)); } catch (e) {}
    setNewJourneyNotes('');
    alert("Jai Sri Ram! Your Sacred Darshan Journey has been recorded in your Yatra Passport.");
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedStyle('all');
    setSelectedRegion('all');
    setSelectedCircuit('all');
    setSelectedRush('all');
    setSelectedAccessibility('all');
  };

  const filteredTemples = TEMPLES.filter(temple => {
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
    if (selectedAccessibility === 'wheelchair' && (!temple.rulesMatrix?.wheelchair?.allowed)) return false;
    return true;
  });

  const curArch = ARCHITECTURE[selectedArchStyle] || ARCHITECTURE.nagara;
  const curHotspot = curArch.hotspots.find(h => h.id === activeHotspotId) || curArch.hotspots[0];
  const curCircuit = CIRCUITS.find(c => c.id === selectedCircuitId) || CIRCUITS[0];

  const fontClasses = fontSize === 'xlarge' ? 'text-lg leading-relaxed' : fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm';
  
  // Theme Background & Accents
  const themeClasses = 
    theme === 'midnight' ? 'bg-[#120e0d] text-sandstone-100' :
    theme === 'gold' ? 'bg-[#FAF4EB] text-charcoal-900 border-brass-600' :
    theme === 'saffron' ? 'bg-[#FFF8F2] text-charcoal-900' :
    'bg-sandstone-50 text-charcoal-800';

  return (
    <div className={`min-h-screen ${themeClasses} flex flex-col font-sans selection:bg-brass-500 selection:text-charcoal-900`}>
      
      {/* Auspicious Top Banner with Accessibility & Language Toolbar */}
      <div className="bg-terracotta-gradient text-sandstone-100 text-xs py-1.5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          <div className="flex items-center space-x-2 font-medium tracking-wide">
            <span className="text-brass-300 font-serif">ॐ</span>
            <span className="font-serif">{t('topMotto')}</span>
          </div>

          {/* Accessibility & Language Quick Switcher */}
          <div className="flex items-center space-x-3">
            
            {/* Language Selector */}
            <div className="flex items-center space-x-1 bg-terracotta-800/90 px-2 py-0.5 rounded border border-sandstone-300/30">
              <GlobeIcon className="w-3 h-3 text-brass-300" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-brass-200 text-[11px] font-bold focus:outline-none cursor-pointer"
              >
                <option value="en" className="bg-terracotta-900 text-sandstone-50">English (EN)</option>
                <option value="hi" className="bg-terracotta-900 text-sandstone-50">हिन्दी (Hindi)</option>
                <option value="mr" className="bg-terracotta-900 text-sandstone-50">मराठी (Marathi)</option>
                <option value="bn" className="bg-terracotta-900 text-sandstone-50">বাংলা (Bengali)</option>
                <option value="ta" className="bg-terracotta-900 text-sandstone-50">தமிழ் (Tamil)</option>
                <option value="te" className="bg-terracotta-900 text-sandstone-50">తెలుగు (Telugu)</option>
                <option value="gu" className="bg-terracotta-900 text-sandstone-50">ગુજરાતી (Gujarati)</option>
              </select>
            </div>

            {/* TTS Voice Reader */}
            <button
              onClick={() => {
                if (isSpeaking) {
                  stopSpeaking();
                } else {
                  speakText(t('topMotto'), lang);
                }
              }}
              className={`flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-semibold border transition-all ${
                isSpeaking ? 'bg-brass-500 text-charcoal-900 border-brass-600 animate-pulse' : 'bg-terracotta-800/80 text-brass-200 border-sandstone-300/30'
              }`}
            >
              <MicIcon className="w-3 h-3" />
              <span>{isSpeaking ? t('stopVoice') : t('listenVoice')}</span>
            </button>

            {/* Bell Chime */}
            <button
              onClick={handleRingBell}
              className="flex items-center space-x-1 text-brass-300 hover:text-brass-100 transition-colors py-0.5 px-2 rounded hover:bg-terracotta-800/60"
            >
              <BellIcon className="w-3.5 h-3.5 text-brass-300" />
              <span className="text-[11px] font-semibold">{t('ringBell')}</span>
            </button>

            {/* Diya Button */}
            <button
              onClick={() => setIsDiyaModalOpen(true)}
              className="flex items-center space-x-1.5 bg-brass-500 hover:bg-brass-600 text-charcoal-900 font-bold px-3 py-0.5 rounded-full text-[11px] shadow-sm transition-transform active:scale-95"
            >
              <FlameIcon className="w-3.5 h-3.5 text-terracotta-800 animate-diya-flame" />
              <span>{t('offerDiya')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 ${theme === 'midnight' ? 'bg-charcoal-900/95 border-charcoal-800' : 'bg-sandstone-50/95 border-sandstone-300'} backdrop-blur-md border-b shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            
            {/* Logo */}
            <div className="flex items-center justify-between">
              <div onClick={() => setActiveTab('temples')} className="flex items-center space-x-3 cursor-pointer group">
                <div className="w-10 h-10 rounded-xl bg-terracotta-700 text-brass-400 flex items-center justify-center shadow-md border border-brass-500/40 group-hover:scale-105 transition-transform">
                  <LandmarkIcon className="w-6 h-6 text-brass-400" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h1 className="text-xl sm:text-2xl font-bold font-serif text-terracotta-800 tracking-tight leading-none group-hover:text-terracotta-600 transition-colors">
                      {t('portalName')}
                    </h1>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brass-100 text-brass-800 px-2 py-0.5 rounded border border-brass-300">
                      Heritage Portal
                    </span>
                  </div>
                  <p className="text-[11px] text-charcoal-500 font-medium tracking-wide mt-0.5">
                    {t('portalSubtitle')}
                  </p>
                </div>
              </div>

              {/* Mobile Quick Actions */}
              <div className="flex items-center space-x-2 md:hidden">
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="p-2 rounded-lg border bg-sandstone-100 text-charcoal-700"
                >
                  <SettingsIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2 bg-sandstone-100/90 border border-sandstone-300 focus:border-terracotta-600 rounded-full text-xs sm:text-sm text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20 shadow-inner"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal-400 hover:text-charcoal-700 px-1 py-0.5 rounded-full bg-sandstone-200">
                  ✕
                </button>
              )}
            </div>

            {/* Action Bar: Dashboard, Settings, Bot */}
            <div className="hidden md:flex items-center space-x-3">
              
              {/* Sacred Yatra Dashboard Button */}
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                  activeTab === 'dashboard' ? 'bg-terracotta-700 text-sandstone-50 border-terracotta-800' : 'bg-sandstone-100 hover:bg-sandstone-200 text-charcoal-800 border-sandstone-300'
                }`}
              >
                <UserIcon className="w-4 h-4 text-terracotta-700" />
                <span>{user.name.split(' ')[0]}</span>
                <span className="bg-brass-500 text-charcoal-900 text-[10px] px-1.5 py-0.2 rounded-full">{yatraJourneys.length}</span>
              </button>

              {/* Settings Hub Button */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 rounded-xl border bg-sandstone-100 hover:bg-sandstone-200 text-charcoal-700 border-sandstone-300 transition-colors"
                title="Settings & Appearance"
              >
                <SettingsIcon className="w-4 h-4" />
              </button>

              {/* Ask AI Bot Button */}
              <button
                onClick={() => setIsBotOpen(true)}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-full border text-xs font-bold bg-terracotta-700 text-sandstone-50 hover:bg-terracotta-800 shadow-sm transition-transform active:scale-95"
              >
                <BotIcon className="w-4 h-4 text-brass-400" />
                <span>{t('askAI')}</span>
              </button>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="flex space-x-1 sm:space-x-2 mt-3 pt-2 border-t border-sandstone-200 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('temples')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'temples' ? 'bg-terracotta-700 text-sandstone-50 shadow-sm' : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
              }`}
            >
              <LandmarkIcon className="w-4 h-4" />
              <span>{t('tabTemples')} ({TEMPLES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'architecture' ? 'bg-terracotta-700 text-sandstone-50 shadow-sm' : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
              }`}
            >
              <SparklesIcon className="w-4 h-4 text-brass-400" />
              <span>{t('tabArchitecture')}</span>
            </button>

            <button
              onClick={() => setActiveTab('circuits')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'circuits' ? 'bg-terracotta-700 text-sandstone-50 shadow-sm' : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
              }`}
            >
              <CompassIcon className="w-4 h-4" />
              <span>{t('tabCircuits')}</span>
            </button>

            <button
              onClick={() => setActiveTab('aarti')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'aarti' ? 'bg-terracotta-700 text-sandstone-50 shadow-sm' : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
              }`}
            >
              <ClockIcon className="w-4 h-4" />
              <span>{t('tabAarti')}</span>
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'dashboard' ? 'bg-terracotta-700 text-sandstone-50 shadow-sm' : 'text-charcoal-700 hover:bg-sandstone-200 hover:text-terracotta-800'
              }`}
            >
              <UserIcon className="w-4 h-4 text-brass-400" />
              <span>{t('tabDashboard')}</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className={`flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 ${fontClasses}`}>
        
        {/* Tab 1: Temples Directory */}
        {activeTab === 'temples' && (
          <div className="space-y-8">
            
            {/* Cultural Hero Banner */}
            <div className="relative rounded-3xl overflow-hidden bg-terracotta-gradient text-sandstone-50 p-6 sm:p-10 shadow-heritage-lg border border-brass-500/30">
              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center space-x-2 bg-brass-500/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-brass-400/40 text-brass-300 text-xs font-bold">
                  <SparklesIcon className="w-3.5 h-3.5 text-brass-400" />
                  <span>Multilingual Indian Temple Heritage Intelligence</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight leading-tight text-sandstone-50">
                  Discover the Divine Geometry & Living Temples of Bharat
                </h1>

                <p className="text-sm sm:text-base text-sandstone-200 leading-relaxed max-w-2xl font-light">
                  A curated cultural intelligence platform documenting over 22 monumental temple sanctuaries across South, North, East, West, Central, and North-East India. Explore interactive 2D blueprints, real-time rush heatmaps, multi-stop pilgrimage circuits, and verified accessibility data.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-sandstone-900/40 backdrop-blur-sm p-3 rounded-xl border border-sandstone-200/20">
                    <span className="text-2xl font-bold font-serif text-brass-400 block">{TEMPLES.length}+</span>
                    <span className="text-xs text-sandstone-200">Heritage Sanctuaries</span>
                  </div>
                  <div className="bg-sandstone-900/40 backdrop-blur-sm p-3 rounded-xl border border-sandstone-200/20">
                    <span className="text-2xl font-bold font-serif text-brass-400 block">7 Languages</span>
                    <span className="text-xs text-sandstone-200">EN, HI, MR, BN, TA, TE, GU</span>
                  </div>
                  <div className="bg-sandstone-900/40 backdrop-blur-sm p-3 rounded-xl border border-sandstone-200/20">
                    <span className="text-2xl font-bold font-serif text-brass-400 block">3 Styles</span>
                    <span className="text-xs text-sandstone-200">Nagara, Dravid, Vesara</span>
                  </div>
                  <div className="bg-sandstone-900/40 backdrop-blur-sm p-3 rounded-xl border border-sandstone-200/20">
                    <span className="text-2xl font-bold font-serif text-brass-400 block">Voice TTS</span>
                    <span className="text-xs text-sandstone-200">Multilingual Narration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="rounded-2xl p-4 sm:p-5 border bg-sandstone-100/90 border-sandstone-300 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-terracotta-100 border border-terracotta-200 flex items-center justify-center text-terracotta-800">
                    <FilterIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-serif text-terracotta-800 tracking-wide uppercase">{t('filterTitle')}</h3>
                    <p className="text-xs text-charcoal-500">Showing <span className="font-bold text-terracotta-700">{filteredTemples.length}</span> of {TEMPLES.length} sanctuaries</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 flex-1 lg:max-w-4xl">
                  <div>
                    <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">{t('architectureStyle')}</label>
                    <select
                      value={selectedStyle}
                      onChange={(e) => setSelectedStyle(e.target.value)}
                      className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                    >
                      <option value="all">{t('allStyles')}</option>
                      <option value="Nagara">Nagara (North)</option>
                      <option value="Dravidian">Dravidian (South)</option>
                      <option value="Vesara">Vesara (Hybrid)</option>
                      <option value="Kalinga">Kalinga (Odisha)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">Region</label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                    >
                      <option value="all">{t('allRegions')}</option>
                      <option value="South">South India</option>
                      <option value="North">North India</option>
                      <option value="East">East India</option>
                      <option value="West">West India</option>
                      <option value="Central">Central India</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">{t('circuits')}</label>
                    <select
                      value={selectedCircuit}
                      onChange={(e) => setSelectedCircuit(e.target.value)}
                      className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                    >
                      <option value="all">{t('allCircuits')}</option>
                      <option value="Char Dham">Char Dham</option>
                      <option value="12 Jyotirlingas">12 Jyotirlingas</option>
                      <option value="Pancha Bhoota Stalam">Pancha Bhoota Stalam</option>
                      <option value="108 Divya Desams">108 Divya Desams</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">Live Rush</label>
                    <select
                      value={selectedRush}
                      onChange={(e) => setSelectedRush(e.target.value)}
                      className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                    >
                      <option value="all">{t('allRush')}</option>
                      <option value="Low">🟢 Low Rush</option>
                      <option value="Moderate">🟡 Moderate Flow</option>
                      <option value="High">🟠 High Queue</option>
                      <option value="Peak">🔴 Peak Darshan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-charcoal-600 mb-1">Accessibility</label>
                    <select
                      value={selectedAccessibility}
                      onChange={(e) => setSelectedAccessibility(e.target.value)}
                      className="w-full bg-sandstone-50 border border-sandstone-300 text-xs text-charcoal-800 font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                    >
                      <option value="all">{t('allAccessibility')}</option>
                      <option value="wheelchair">{t('wheelchairOnly')}</option>
                    </select>
                  </div>
                </div>

                {(selectedStyle !== 'all' || selectedRegion !== 'all' || selectedCircuit !== 'all' || selectedRush !== 'all' || selectedAccessibility !== 'all' || searchQuery) && (
                  <button onClick={handleResetFilters} className="flex items-center justify-center space-x-1 px-3 py-1.5 bg-sandstone-200 hover:bg-sandstone-300 text-charcoal-700 rounded-lg text-xs font-semibold">
                    <RotateCcwIcon className="w-3.5 h-3.5" />
                    <span>{t('reset')}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Bento Grid of Temples */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemples.map((temple, idx) => {
                const isFeatured = idx === 0 && searchQuery === '' && selectedStyle === 'all' && selectedRegion === 'all';
                const isBookmarked = bookmarkedIds.includes(temple.id);

                return (
                  <div 
                    key={temple.id}
                    onClick={() => { setSelectedTemple(temple); setModalTab('overview'); }}
                    className={`group cursor-pointer rounded-2xl overflow-hidden terracotta-card flex flex-col justify-between ${
                      isFeatured ? 'md:col-span-2 md:flex-row' : ''
                    }`}
                  >
                    <div className={`relative overflow-hidden ${isFeatured ? 'md:w-1/2 min-h-[260px]' : 'h-52 w-full'}`}>
                      <img 
                        src={temple.image} 
                        alt={temple.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <span className="text-[11px] font-bold font-serif uppercase tracking-wider bg-sandstone-50/95 text-terracotta-800 px-2.5 py-1 rounded-full border border-sandstone-300 shadow-sm">
                          {temple.style}
                        </span>
                        
                        <div className="flex items-center space-x-1.5">
                          {/* Info Deep Dossier Button */}
                          <button
                            onClick={(e) => { e.stopPropagation(); setSelectedDossierTemple(temple); }}
                            className="w-8 h-8 rounded-full bg-sandstone-50/95 hover:bg-brass-400 text-terracotta-800 flex items-center justify-center shadow-md transition-colors"
                            title="Open Deep Heritage Dossier"
                          >
                            <InfoIcon className="w-4 h-4" />
                          </button>

                          {/* Bookmark */}
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleBookmark(temple.id); }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-transform active:scale-90 ${
                              isBookmarked ? 'bg-brass-500 text-charcoal-900 shadow-md' : 'bg-charcoal-900/50 text-sandstone-100'
                            }`}
                          >
                            <BookmarkIcon className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                      </div>

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

                    <div className={`p-4 sm:p-5 flex flex-col justify-between flex-1 ${isFeatured ? 'md:w-1/2' : ''}`}>
                      <div className="space-y-2.5">
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
                          <span className="font-bold text-terracotta-800 font-serif">{t('presidingDeity')}: </span>
                          <span className="text-charcoal-600 truncate">{temple.deity}</span>
                        </div>

                        <div className="grid grid-cols-3 gap-1.5 pt-1 text-[10px]">
                          <div className="bg-sandstone-100 text-charcoal-700 p-1.5 rounded flex items-center space-x-1 truncate">
                            <CameraIcon className="w-3 h-3 text-terracotta-600 flex-shrink-0" />
                            <span className="truncate">{temple.rulesMatrix?.photography?.badge || 'Restricted'}</span>
                          </div>
                          <div className="bg-sandstone-100 text-charcoal-700 p-1.5 rounded flex items-center space-x-1 truncate">
                            <ShirtIcon className="w-3 h-3 text-brass-700 flex-shrink-0" />
                            <span className="truncate">{temple.rulesMatrix?.dressCode?.badge || 'Traditional'}</span>
                          </div>
                          <div className="bg-sandstone-100 text-charcoal-700 p-1.5 rounded flex items-center space-x-1 truncate">
                            <AccessibilityIcon className="w-3 h-3 text-emerald-700 flex-shrink-0" />
                            <span className="truncate">{temple.rulesMatrix?.wheelchair?.badge || 'Available'}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-sandstone-200/80 flex items-center justify-between gap-2">
                        <button
                          onClick={(e) => { e.stopPropagation(); setSelectedDossierTemple(temple); }}
                          className="flex items-center space-x-1.5 text-xs text-terracotta-800 hover:text-terracotta-950 font-bold bg-terracotta-100 hover:bg-terracotta-200 px-2.5 py-1.5 rounded-lg transition-colors"
                        >
                          <InfoIcon className="w-3.5 h-3.5 text-terracotta-700" />
                          <span>{t('deepDossier')}</span>
                        </button>

                        <button
                          onClick={(e) => { e.stopPropagation(); speakText(temple.description, lang); }}
                          className="p-1.5 rounded-lg bg-sandstone-200 hover:bg-brass-300 text-charcoal-800"
                          title="Read Aloud"
                        >
                          <MicIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Architecture Explorer */}
        {activeTab === 'architecture' && (
          <div className="space-y-8">
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
                  {Object.values(ARCHITECTURE).map(style => (
                    <button
                      key={style.id}
                      onClick={() => { setSelectedArchStyle(style.id); setActiveHotspotId(style.hotspots[0].id); }}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap font-serif ${
                        selectedArchStyle === style.id ? 'bg-terracotta-700 text-sandstone-50 shadow-md scale-102' : 'text-charcoal-700 hover:bg-sandstone-100'
                      }`}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7 bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 border-b border-sandstone-200 pb-2">
                  <div>
                    <span className="text-xs font-serif font-bold text-terracotta-800 block">{curArch.sanskritName}</span>
                    <span className="text-[11px] text-charcoal-500">Click any golden hotspot to inspect anatomical details</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sandstone-200 text-charcoal-700">Elevation Blueprint</span>
                </div>

                <div className="relative aspect-[4/3] w-full bg-sandstone-100/60 rounded-xl border border-sandstone-200/90 overflow-hidden flex items-center justify-center p-2">
                  {selectedArchStyle === 'nagara' && (
                    <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-sm select-none">
                      <rect x="50" y="340" width="400" height="30" rx="3" fill="#8E7760" stroke="#5C4A3A" strokeWidth="2" />
                      <rect x="70" y="320" width="360" height="20" fill="#B49E85" stroke="#5C4A3A" strokeWidth="1.5" />
                      <path d="M 90 320 L 90 250 L 220 250 L 220 320 Z" fill="#E2D1BD" stroke="#7A2E1E" strokeWidth="1.5" />
                      <line x1="110" y1="250" x2="110" y2="320" stroke="#7A2E1E" strokeWidth="3" />
                      <line x1="140" y1="250" x2="140" y2="320" stroke="#7A2E1E" strokeWidth="3" />
                      <line x1="170" y1="250" x2="170" y2="320" stroke="#7A2E1E" strokeWidth="3" />
                      <path d="M 80 250 L 155 180 L 230 250 Z" fill="#DC7663" stroke="#7A2E1E" strokeWidth="2" />
                      <rect x="220" y="240" width="40" height="80" fill="#CDB9A1" stroke="#7A2E1E" strokeWidth="1.5" />
                      <rect x="260" y="220" width="150" height="100" fill="#7A2E1E" stroke="#5A1F13" strokeWidth="2" />
                      <rect x="310" y="260" width="50" height="60" rx="4" fill="#3D130B" stroke="#D4AF37" strokeWidth="1.5" />
                      <circle cx="335" cy="285" r="8" fill="#F59E0B" />
                      <path d="M 260 220 Q 285 110 335 65 Q 385 110 410 220 Z" fill="#A43E1B" stroke="#5A1F13" strokeWidth="2.5" />
                      <ellipse cx="335" cy="62" rx="36" ry="12" fill="#E5C672" stroke="#7A2E1E" strokeWidth="2" />
                      <path d="M 330 50 C 325 40, 345 40, 340 50 Z" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1.5" />
                      <circle cx="335" cy="23" r="3.5" fill="#D4AF37" />
                    </svg>
                  )}

                  {selectedArchStyle === 'dravidian' && (
                    <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-sm select-none">
                      <rect x="20" y="340" width="460" height="25" fill="#5C4A3A" stroke="#2D241E" strokeWidth="2" />
                      <path d="M 40 340 L 70 80 L 130 80 L 160 340 Z" fill="#A43E1B" stroke="#3D130B" strokeWidth="2" />
                      <line x1="62" y1="280" x2="138" y2="280" stroke="#FAF4EB" strokeWidth="2" />
                      <ellipse cx="100" cy="75" rx="32" ry="9" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1.5" />
                      <rect x="220" y="310" width="70" height="30" fill="#38BDF8" rx="2" stroke="#0369A1" strokeWidth="1.5" />
                      <rect x="300" y="270" width="70" height="70" fill="#E2D1BD" stroke="#7A2E1E" strokeWidth="1.5" />
                      <rect x="375" y="250" width="100" height="90" fill="#7A2E1E" stroke="#3D130B" strokeWidth="2" />
                      <rect x="405" y="280" width="40" height="60" fill="#2D241E" rx="3" stroke="#D4AF37" strokeWidth="1.5" />
                      <circle cx="425" cy="315" rx="8" ry="12" fill="#F59E0B" />
                      <polygon points="380,250 395,200 455,200 470,250" fill="#C05621" stroke="#3D130B" strokeWidth="1.5" />
                      <circle cx="425" cy="110" r="14" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1.5" />
                    </svg>
                  )}

                  {selectedArchStyle === 'vesara' && (
                    <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-sm select-none">
                      <polygon points="50,340 70,320 100,340 130,320 160,340 200,320 240,340 280,320 320,340 360,320 400,340 440,320 460,340 450,360 60,360" fill="#8E7760" stroke="#5C4A3A" strokeWidth="2" />
                      <rect x="80" y="240" width="180" height="80" fill="#FAF4EB" stroke="#7A2E1E" strokeWidth="1.5" />
                      <line x1="110" y1="240" x2="110" y2="320" stroke="#996515" strokeWidth="4" strokeLinecap="round" />
                      <rect x="270" y="220" width="160" height="100" fill="#996515" stroke="#5A1F13" strokeWidth="2" />
                      <rect x="320" y="260" width="60" height="60" rx="3" fill="#2D241E" stroke="#D4AF37" strokeWidth="1.5" />
                      <circle cx="350" cy="290" r="9" fill="#F59E0B" />
                      <path d="M 270 220 Q 300 120 350 70 Q 400 120 430 220 Z" fill="#DBB144" stroke="#6C480E" strokeWidth="2" />
                      <ellipse cx="350" cy="68" rx="20" ry="8" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1.5" />
                    </svg>
                  )}

                  {curArch.hotspots.map((hotspot) => {
                    const isActive = activeHotspotId === hotspot.id;
                    return (
                      <button
                        key={hotspot.id}
                        onClick={() => setActiveHotspotId(hotspot.id)}
                        style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-transform ${isActive ? 'scale-125 z-20' : 'hover:scale-115 z-10'}`}
                      >
                        <div className={`relative flex items-center justify-center w-7 h-7 rounded-full shadow-lg transition-all ${
                          isActive ? 'bg-terracotta-800 text-brass-300 ring-4 ring-brass-400 hotspot-pulse' : 'bg-brass-500 text-charcoal-900 ring-2 ring-white'
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
              </div>

              <div className="lg:col-span-5 bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 shadow-sm space-y-4">
                <div className="border-b border-sandstone-200 pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brass-100 text-brass-900 border border-brass-300">{curHotspot.category}</span>
                    <span className="text-xs font-serif text-terracotta-700 font-bold">{curArch.name}</span>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-terracotta-800 mt-1">{curHotspot.name}</h3>
                  <p className="text-sm font-semibold text-charcoal-600 font-serif">{curHotspot.sanskrit}</p>
                </div>

                <div className="bg-sandstone-100/90 rounded-xl p-3.5 border border-sandstone-200">
                  <h4 className="text-xs font-bold text-charcoal-700 font-serif uppercase tracking-wider mb-1 flex items-center">
                    <InfoIcon className="w-3.5 h-3.5 text-brass-600 mr-1.5" /> Architectural Function & Meaning
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">{curHotspot.description}</p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold font-serif text-terracotta-800 uppercase tracking-wide block">Architectural Philosophy</span>
                  <p className="text-xs text-charcoal-600 italic bg-sandstone-100/60 p-2.5 rounded-lg border border-sandstone-200">"{curArch.philosophy}"</p>
                </div>

                <div>
                  <span className="text-xs font-bold font-serif text-terracotta-800 uppercase tracking-wide block mb-2">Iconic Real-World Examples</span>
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
          </div>
        )}

        {/* Tab 3: Circuit Planner */}
        {activeTab === 'circuits' && (
          <div className="space-y-8">
            <div className="bg-sandstone-100/90 border border-sandstone-300 rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider bg-terracotta-100 text-terracotta-800 px-2.5 py-0.5 rounded border border-terracotta-200">Tirtha Yatra Route Planner</span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif text-terracotta-800 mt-1">Sacred Pilgrimage Circuit Planner</h2>
                  <p className="text-sm text-charcoal-600 max-w-3xl mt-1">{curCircuit.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {CIRCUITS.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCircuitId(c.id)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold font-serif ${
                        selectedCircuitId === c.id ? 'bg-terracotta-700 text-sandstone-50 shadow-md' : 'bg-sandstone-200 text-charcoal-700'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-sandstone-50 border border-sandstone-300 rounded-xl p-4">
                <span className="text-xs font-bold text-terracotta-700 font-serif">TOTAL MILEAGE</span>
                <div className="text-2xl font-bold font-serif text-terracotta-800 mt-1">{curCircuit.totalDistanceKm.toLocaleString()} km</div>
              </div>
              <div className="bg-sandstone-50 border border-sandstone-300 rounded-xl p-4">
                <span className="text-xs font-bold text-brass-700 font-serif">ESTIMATED PACING</span>
                <div className="text-2xl font-bold font-serif text-brass-800 mt-1">{curCircuit.estimatedDays}</div>
              </div>
              <div className="bg-sandstone-50 border border-sandstone-300 rounded-xl p-4">
                <span className="text-xs font-bold text-charcoal-700 font-serif">RECOMMENDED SEASON</span>
                <div className="text-sm font-bold text-charcoal-800 mt-1">{curCircuit.bestSeason}</div>
              </div>
            </div>

            <div className="space-y-3">
              {curCircuit.stops.map((stop, idx) => {
                const isVisited = !!visitedStops[`${selectedCircuitId}-${idx}`];
                return (
                  <div key={idx} className={`bg-sandstone-50 border rounded-xl p-4 flex items-center justify-between gap-4 ${isVisited ? 'border-emerald-400 bg-emerald-50/30' : 'border-sandstone-300'}`}>
                    <div className="flex items-start space-x-3">
                      <button
                        onClick={() => setVisitedStops(prev => ({ ...prev, [`${selectedCircuitId}-${idx}`]: !prev[`${selectedCircuitId}-${idx}`] }))}
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${isVisited ? 'bg-emerald-600 text-white' : 'bg-sandstone-200'}`}
                      >
                        {isVisited ? '✓' : idx + 1}
                      </button>
                      <div>
                        <h4 className="font-bold font-serif text-terracotta-800">{stop.name} ({stop.state})</h4>
                        <p className="text-xs text-charcoal-600 mt-0.5">{stop.significance}</p>
                        {stop.transit && <span className="text-[11px] text-charcoal-500 mt-1 block">✈️ {stop.transit}</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Live Aarti */}
        {activeTab === 'aarti' && (
          <div className="space-y-6">
            <div className="bg-sandstone-100/90 border border-sandstone-300 rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-terracotta-800">Real-Time Darshan Rush & Scheduled Aarti Timings</h2>
              <p className="text-sm text-charcoal-600 mt-1">24-Hour crowd density and live consecrated Aarti schedules with real bell chimes.</p>
            </div>

            {TEMPLES.slice(0, 6).map((temple) => (
              <div key={temple.id} className="bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 shadow-xs space-y-4">
                <div className="flex justify-between items-center border-b border-sandstone-200 pb-2">
                  <h3 className="text-lg font-bold font-serif text-terracotta-800">{temple.name} ({temple.city}, {temple.state})</h3>
                  <button onClick={() => { setSelectedTemple(temple); setModalTab('darshan'); }} className="px-3 py-1.5 bg-terracotta-700 text-white rounded-lg text-xs font-bold">
                    View Full Specs →
                  </button>
                </div>

                <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 gap-1.5 items-end h-20 bg-sandstone-100/80 p-2.5 rounded-xl border border-sandstone-200">
                  {temple.rushHeatmap24h.map((slot, index) => (
                    <div key={index} className="flex flex-col items-center h-full justify-end">
                      <div
                        style={{ height: `${Math.max(15, slot.rush)}%` }}
                        className={`w-full rounded-t-sm ${slot.status === 'Low' ? 'bg-emerald-500' : slot.status === 'Moderate' ? 'bg-amber-400' : slot.status === 'High' ? 'bg-orange-500' : 'bg-rose-600'}`}
                      />
                      <span className="text-[9px] text-charcoal-500 mt-1">{slot.hour}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: My Sacred Yatra Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            
            {/* User Profile Header */}
            <div className="bg-sandstone-100 border border-sandstone-300 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-terracotta-700 text-brass-400 border-2 border-brass-500 flex items-center justify-center text-3xl shadow-md">
                  {user.avatar}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-2xl font-bold font-serif text-terracotta-800">{user.name}</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-300">Verified Pilgrim</span>
                  </div>
                  <p className="text-xs text-charcoal-500 mt-0.5">{user.email} • Member since 2024</p>
                  <div className="flex items-center space-x-3 mt-2 text-xs text-charcoal-700">
                    <span className="font-bold text-terracotta-700">{yatraJourneys.length} Shrines Visited</span>
                    <span>•</span>
                    <span className="font-bold text-brass-700">{bookmarkedIds.length} Wishlist Bookmarks</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="px-4 py-2 bg-sandstone-200 hover:bg-sandstone-300 text-charcoal-800 rounded-xl text-xs font-bold"
                >
                  Switch Account
                </button>
              </div>
            </div>

            {/* Badges Grid */}
            <div className="bg-sandstone-50 border border-sandstone-300 rounded-2xl p-6 shadow-xs space-y-3">
              <h3 className="text-sm font-bold font-serif text-terracotta-800 uppercase tracking-wider">{t('pilgrimBadges')}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-brass-50 border border-brass-300 rounded-xl flex items-center space-x-3">
                  <div className="text-2xl">🕉️</div>
                  <div>
                    <span className="font-bold text-xs text-charcoal-900 block">Dravidian Explorer</span>
                    <span className="text-[10px] text-charcoal-500">Visited Meenakshi Temple</span>
                  </div>
                </div>
                <div className="p-3 bg-sandstone-100 border border-sandstone-300 rounded-xl flex items-center space-x-3">
                  <div className="text-2xl">🏔️</div>
                  <div>
                    <span className="font-bold text-xs text-charcoal-900 block">Himalayan Seeker</span>
                    <span className="text-[10px] text-charcoal-500">Kedarnath Abhishek</span>
                  </div>
                </div>
                <div className="p-3 bg-sandstone-100 border border-sandstone-300 rounded-xl flex items-center space-x-3">
                  <div className="text-2xl">🪔</div>
                  <div>
                    <span className="font-bold text-xs text-charcoal-900 block">Akhand Jyoti Seva</span>
                    <span className="text-[10px] text-charcoal-500">Offered 5+ Virtual Diyas</span>
                  </div>
                </div>
                <div className="p-3 bg-sandstone-100 border border-sandstone-300 rounded-xl flex items-center space-x-3 opacity-60">
                  <div className="text-2xl">🌊</div>
                  <div>
                    <span className="font-bold text-xs text-charcoal-900 block">Maha Char Dham Yatri</span>
                    <span className="text-[10px] text-charcoal-500">2 / 4 Dhams Completed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Log New Darshan Form */}
            <div className="bg-sandstone-50 border border-sandstone-300 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold font-serif text-terracotta-800 flex items-center">
                <PlusCircleIcon className="w-5 h-5 text-terracotta-700 mr-2" />
                <span>{t('addJourney')}</span>
              </h3>

              <form onSubmit={handleAddJourney} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-600 mb-1">Select Shrine Visited</label>
                  <select
                    value={newJourneyTempleId}
                    onChange={(e) => setNewJourneyTempleId(e.target.value)}
                    className="w-full bg-sandstone-100 border border-sandstone-300 rounded-xl text-xs px-3 py-2.5"
                  >
                    {TEMPLES.map(t => (
                      <option key={t.id} value={t.id}>{t.name} ({t.city})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-600 mb-1">Darshan Date</label>
                  <input
                    type="date"
                    value={newJourneyDate}
                    onChange={(e) => setNewJourneyDate(e.target.value)}
                    className="w-full bg-sandstone-100 border border-sandstone-300 rounded-xl text-xs px-3 py-2"
                  />
                </div>

                <div className="md:col-span-3">
                  <label className="block text-xs font-semibold text-charcoal-600 mb-1">Spiritual Notes / Darshan Experience</label>
                  <textarea
                    rows={2}
                    placeholder="Write your prayers, Aarti experienced, sacred prasad received..."
                    value={newJourneyNotes}
                    onChange={(e) => setNewJourneyNotes(e.target.value)}
                    className="w-full bg-sandstone-100 border border-sandstone-300 rounded-xl text-xs p-3 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                  />
                </div>

                <div className="md:col-span-3">
                  <button
                    type="submit"
                    className="bg-terracotta-700 hover:bg-terracotta-800 text-sandstone-50 text-xs font-bold px-6 py-2.5 rounded-xl shadow-md transition-transform active:scale-95"
                  >
                    Save to Pilgrimage Passport (यात्रा संस्मरण सहेजें)
                  </button>
                </div>
              </form>
            </div>

            {/* Visited History List */}
            <div className="space-y-4">
              <h3 className="text-base font-bold font-serif text-terracotta-800">{t('visitedJourneys')}</h3>
              
              {yatraJourneys.length === 0 ? (
                <div className="p-8 text-center bg-sandstone-100 rounded-2xl border border-sandstone-300">
                  <p className="text-xs text-charcoal-500">No journeys logged yet. Record your first darshan above!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {yatraJourneys.map(j => (
                    <div key={j.id} className="p-4 bg-sandstone-50 border border-sandstone-300 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold font-serif text-terracotta-800 text-sm">{j.templeName}</h4>
                          <span className="text-[10px] bg-brass-100 text-brass-900 px-2 py-0.5 rounded font-bold">{j.date}</span>
                        </div>
                        <p className="text-xs text-charcoal-600 mt-1 italic">"{j.notes}"</p>
                        <span className="text-[11px] text-charcoal-500 mt-1 block">Prasad: {j.prasad}</span>
                      </div>

                      <div className="text-brass-500 text-sm">★★★★★</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

      </main>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        <button
          onClick={() => setIsBotOpen(!isBotOpen)}
          className="bg-terracotta-700 hover:bg-terracotta-800 text-sandstone-50 font-serif font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-2xl flex items-center space-x-2 border-2 border-brass-400 hover:scale-105 active:scale-95 transition-all"
        >
          <BotIcon className="w-5 h-5 text-brass-300" />
          <span>{t('askAI')}</span>
        </button>

        <button
          onClick={() => setIsDiyaModalOpen(true)}
          className="bg-brass-gradient text-charcoal-900 font-serif font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-xl flex items-center space-x-2 border-2 border-brass-300 hover:scale-105 active:scale-95 transition-all"
        >
          <FlameIcon className="w-4 h-4 text-terracotta-900 animate-diya-flame" />
          <span className="hidden sm:inline">{t('offerDiya')}</span>
        </button>
      </div>

      {/* AI Heritage Guide Bot Drawer */}
      {isBotOpen && (
        <div className="fixed bottom-24 right-4 sm:right-8 z-50 w-96 max-w-[92vw] h-[520px] bg-sandstone-50 border-2 border-brass-500 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-terracotta-gradient text-sandstone-50 p-3.5 px-4 flex items-center justify-between border-b border-brass-500/40">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-brass-500 text-charcoal-900 flex items-center justify-center font-bold text-xs shadow-md">
                🕉️
              </div>
              <div>
                <h4 className="text-sm font-bold font-serif leading-none text-sandstone-50">Acharya Deva</h4>
                <span className="text-[10px] text-brass-300 font-medium">Cultural Heritage & Pilgrimage AI</span>
              </div>
            </div>
            <button onClick={() => setIsBotOpen(false)} className="text-sandstone-200 hover:text-white p-1 rounded-full">
              <XIcon className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-sandstone-100/60 text-xs">
            {botMessages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  msg.sender === 'user' ? 'bg-terracotta-700 text-sandstone-50 rounded-tr-none' : 'bg-sandstone-50 text-charcoal-800 border border-sandstone-300 rounded-tl-none shadow-xs'
                }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {msg.suggestions && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                    {msg.suggestions.map((sug, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendBotMessage(sug)}
                        className="text-[10px] bg-sandstone-50 hover:bg-brass-100 text-charcoal-700 border border-sandstone-300 px-2.5 py-1 rounded-full transition-colors text-left"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}

                {msg.templeSuggestion && (
                  <div className="mt-2 p-2.5 bg-sandstone-50 border border-brass-400 rounded-xl shadow-xs flex items-center justify-between gap-2 w-full max-w-[90%]">
                    <div>
                      <span className="font-bold text-terracotta-800 font-serif block">{msg.templeSuggestion.name}</span>
                      <span className="text-[10px] text-charcoal-500">{msg.templeSuggestion.city}, {msg.templeSuggestion.state}</span>
                    </div>
                    <button
                      onClick={() => { setSelectedTemple(msg.templeSuggestion); setModalTab('overview'); }}
                      className="px-2.5 py-1 bg-terracotta-700 hover:bg-terracotta-800 text-sandstone-50 text-[10px] font-bold rounded-lg whitespace-nowrap"
                    >
                      View Specs →
                    </button>
                  </div>
                )}
              </div>
            ))}
            {isBotTyping && <div className="text-xs text-charcoal-500 italic p-2">Acharya Deva is meditating on your answer...</div>}
            <div ref={chatBottomRef} />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleSendBotMessage(); }} className="p-2.5 bg-sandstone-50 border-t border-sandstone-300 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask about dress codes, rituals, history..."
              value={botInput}
              onChange={(e) => setBotInput(e.target.value)}
              className="flex-1 bg-sandstone-100 border border-sandstone-300 text-xs px-3 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-terracotta-500"
            />
            <button type="submit" className="w-8 h-8 rounded-full bg-terracotta-700 text-sandstone-50 flex items-center justify-center shadow-md active:scale-95">
              <SendIcon className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Deep Heritage Review / Detailed Dossier Modal */}
      {selectedDossierTemple && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-900/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-sandstone-50 border-2 border-brass-500 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto">
            
            <div className="bg-terracotta-gradient text-sandstone-50 p-6 flex items-center justify-between border-b border-brass-500/40">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-brass-500 text-charcoal-900 flex items-center justify-center text-xl font-bold shadow-md">
                  ℹ️
                </div>
                <div>
                  <span className="text-xs text-brass-300 font-bold uppercase tracking-wider">Deep Heritage Review & Archaeological Dossier</span>
                  <h2 className="text-2xl font-bold font-serif">{selectedDossierTemple.name}</h2>
                </div>
              </div>
              <button onClick={() => setSelectedDossierTemple(null)} className="text-sandstone-200 hover:text-white p-1 rounded-full">
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
              
              {/* Archaeological facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-sandstone-100 p-4 rounded-xl border border-sandstone-300 space-y-1">
                  <span className="text-[11px] font-bold font-serif text-terracotta-800 uppercase block">Stone Composition & Structural Engineering</span>
                  <p className="text-charcoal-700">{selectedDossierTemple.dossier?.stoneType || "Monolithic Granite and Sandstone Masonry"}</p>
                </div>
                <div className="bg-sandstone-100 p-4 rounded-xl border border-sandstone-300 space-y-1">
                  <span className="text-[11px] font-bold font-serif text-terracotta-800 uppercase block">ASI & Legal Heritage Classification</span>
                  <p className="text-charcoal-700">{selectedDossierTemple.dossier?.asiStatus || "National Monument of Cultural Significance"}</p>
                </div>
              </div>

              {/* Inscriptions & History */}
              <div className="bg-sandstone-100/70 p-4 rounded-xl border border-sandstone-200 space-y-2">
                <span className="text-xs font-bold font-serif text-terracotta-800 uppercase block">Epigraphical Inscriptions & Royal Grants</span>
                <p className="text-charcoal-700 leading-relaxed">{selectedDossierTemple.dossier?.inscriptions || "Ancient Sanskrit and Regional epigraphs recording divine consecrations and royal patronage."}</p>
              </div>

              {/* Pilgrimage Logistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-sandstone-100 rounded-xl border border-sandstone-200">
                  <span className="text-[10px] font-bold text-charcoal-500 uppercase block">Nearest Transit</span>
                  <p className="text-xs font-semibold text-charcoal-800 mt-1">{selectedDossierTemple.dossier?.nearestTransit}</p>
                </div>
                <div className="p-3 bg-sandstone-100 rounded-xl border border-sandstone-200">
                  <span className="text-[10px] font-bold text-charcoal-500 uppercase block">Sacred Prasadam</span>
                  <p className="text-xs font-semibold text-charcoal-800 mt-1">{selectedDossierTemple.dossier?.prasadam}</p>
                </div>
                <div className="p-3 bg-sandstone-100 rounded-xl border border-sandstone-200">
                  <span className="text-[10px] font-bold text-charcoal-500 uppercase block">Holy Theerthams / Rivers</span>
                  <p className="text-xs font-semibold text-charcoal-800 mt-1">{selectedDossierTemple.dossier?.theerthams}</p>
                </div>
              </div>

              {/* Pilgrim Tips */}
              <div className="p-4 bg-brass-50 border border-brass-300 rounded-xl space-y-1">
                <span className="text-xs font-bold font-serif text-terracotta-900 uppercase block">Verified Devotee Community Advice</span>
                <p className="text-xs text-charcoal-700 leading-relaxed">{selectedDossierTemple.dossier?.communityTips}</p>
              </div>

            </div>

            <div className="p-4 px-6 border-t border-sandstone-300 bg-sandstone-100 flex items-center justify-between">
              {selectedDossierTemple.rulesMatrix?.bookingPass?.officialUrl && (
                <a
                  href={selectedDossierTemple.rulesMatrix.bookingPass.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 bg-terracotta-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs"
                >
                  <span>{t('officialPass')}</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={() => setSelectedDossierTemple(null)}
                className="px-5 py-2 bg-sandstone-200 text-charcoal-800 text-xs font-bold rounded-xl"
              >
                {t('close')}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Settings & Appearance Hub Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/75 backdrop-blur-sm">
          <div className="bg-sandstone-50 border-2 border-brass-500 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-6 text-xs sm:text-sm">
            
            <div className="flex items-center justify-between border-b border-sandstone-200 pb-3">
              <h3 className="text-lg font-bold font-serif text-terracotta-800 flex items-center">
                <SettingsIcon className="w-5 h-5 mr-2 text-brass-600" />
                <span>{t('settingsTitle')}</span>
              </h3>
              <button onClick={() => setIsSettingsOpen(false)} className="text-charcoal-500 hover:text-charcoal-800">
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Language Selector */}
            <div className="space-y-2">
              <label className="font-bold text-charcoal-800 block">{t('languageSelector')}</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { code: 'en', label: 'English (EN)' },
                  { code: 'hi', label: 'हिन्दी (Hindi)' },
                  { code: 'mr', label: 'मराठी (Marathi)' },
                  { code: 'bn', label: 'বাংলা (Bengali)' },
                  { code: 'ta', label: 'தமிழ் (Tamil)' },
                  { code: 'te', label: 'తెలుగు (Telugu)' },
                  { code: 'gu', label: 'ગુજરાતી (Gujarati)' }
                ].map(l => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                      lang === l.code ? 'bg-terracotta-700 text-sandstone-50 border-terracotta-800 shadow-sm' : 'bg-sandstone-100 text-charcoal-700 border-sandstone-300'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Theme Selector */}
            <div className="space-y-2">
              <label className="font-bold text-charcoal-800 block">{t('themeSelector')}</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTheme('sandstone')}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left ${theme === 'sandstone' ? 'ring-2 ring-terracotta-600 bg-sandstone-100' : 'bg-sandstone-50'}`}
                >
                  🏺 {t('themeSandstone')}
                </button>
                <button
                  onClick={() => setTheme('midnight')}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left ${theme === 'midnight' ? 'ring-2 ring-brass-400 bg-charcoal-900 text-white' : 'bg-sandstone-50'}`}
                >
                  🌙 {t('themeMidnight')}
                </button>
                <button
                  onClick={() => setTheme('gold')}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left ${theme === 'gold' ? 'ring-2 ring-brass-600 bg-brass-100' : 'bg-sandstone-50'}`}
                >
                  ✨ {t('themeGold')}
                </button>
                <button
                  onClick={() => setTheme('saffron')}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left ${theme === 'saffron' ? 'ring-2 ring-orange-500 bg-orange-50' : 'bg-sandstone-50'}`}
                >
                  🚩 {t('themeSaffron')}
                </button>
              </div>
            </div>

            {/* Speech Rate Control */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-bold text-charcoal-800">{t('speechRate')}</label>
                <span className="text-xs text-charcoal-500 font-semibold">{speechRate}x</span>
              </div>
              <input
                type="range"
                min="0.75"
                max="1.25"
                step="0.05"
                value={speechRate}
                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                className="w-full accent-terracotta-700"
              />
            </div>

            <button
              onClick={() => setIsSettingsOpen(false)}
              className="w-full bg-terracotta-700 text-white font-bold py-2.5 rounded-xl"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* Login / Auth Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/75 backdrop-blur-sm">
          <div className="bg-sandstone-50 border-2 border-brass-500 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5 text-center">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold font-serif uppercase tracking-widest text-brass-700 bg-brass-100 px-3 py-1 rounded-full border border-brass-300">
                ॥ तीर्थाटनम् ॥
              </span>
              <button onClick={() => setIsLoginModalOpen(false)} className="text-charcoal-400 hover:text-charcoal-700">
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-serif text-terracotta-800 mt-1">{t('loginTitle')}</h3>
              <p className="text-xs text-charcoal-600 mt-1">{t('loginSubtitle')}</p>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => {
                  setUser({ name: "Rajesh Sharma (Google Devotee)", email: "rajesh.sharma@gmail.com", avatar: "👤", loggedIn: true });
                  setIsLoginModalOpen(false);
                }}
                className="w-full p-3 bg-white hover:bg-sandstone-100 border border-sandstone-300 rounded-xl font-bold text-xs text-charcoal-800 shadow-sm flex items-center justify-center space-x-2"
              >
                <span>🌐 {t('googleLogin')}</span>
              </button>

              <button
                onClick={() => {
                  setUser({ name: "Ananya Iyer (Phone Pilgrim)", email: "+91 98450 XXXXX", avatar: "🕉️", loggedIn: true });
                  setIsLoginModalOpen(false);
                }}
                className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-sm flex items-center justify-center space-x-2"
              >
                <span>📱 {t('facebookLogin')}</span>
              </button>

              <button
                onClick={() => {
                  setUser({ name: "Devotee Pilgrim", email: "pilgrim@bharat.in", avatar: "🛕", loggedIn: true });
                  setIsLoginModalOpen(false);
                }}
                className="w-full p-3 bg-sandstone-200 hover:bg-sandstone-300 text-charcoal-800 rounded-xl font-bold text-xs"
              >
                <span>{t('guestLogin')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Temple Detail Modal */}
      {selectedTemple && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-900/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-sandstone-50 border border-sandstone-300 rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
            
            <div className="relative h-64 sm:h-72 w-full flex-shrink-0">
              <img src={selectedTemple.image} alt={selectedTemple.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-sandstone-50 via-charcoal-900/40 to-charcoal-900/60" />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-xs font-bold font-serif uppercase tracking-wider bg-sandstone-50/95 text-terracotta-800 px-3 py-1 rounded-full border border-sandstone-300 shadow-sm">
                  {selectedTemple.style} Architecture
                </span>
                <div className="flex items-center space-x-2">
                  <button onClick={() => speakText(selectedTemple.description, lang)} className="w-8 h-8 rounded-full bg-sandstone-50 text-terracotta-800 flex items-center justify-center shadow-md">
                    <MicIcon className="w-4 h-4" />
                  </button>
                  <button onClick={handleRingBell} className="w-8 h-8 rounded-full bg-sandstone-50 text-terracotta-800 flex items-center justify-center shadow-md">
                    <BellIcon className="w-4 h-4" />
                  </button>
                  <button onClick={() => toggleBookmark(selectedTemple.id)} className="w-8 h-8 rounded-full bg-sandstone-50 text-charcoal-800 flex items-center justify-center shadow-md">
                    <BookmarkIcon className={`w-4 h-4 ${bookmarkedIds.includes(selectedTemple.id) ? 'fill-current text-brass-600' : ''}`} />
                  </button>
                  <button onClick={() => { setSelectedTemple(null); stopSpeaking(); }} className="w-8 h-8 rounded-full bg-sandstone-50 text-charcoal-700 flex items-center justify-center shadow-md">
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

            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {modalTab === 'overview' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-sandstone-100 p-3 rounded-xl border border-sandstone-200">
                      <span className="text-[10px] font-bold text-charcoal-500 uppercase font-serif block">{t('presidingDeity')}</span>
                      <span className="text-xs font-bold text-terracotta-800">{selectedTemple.deity}</span>
                    </div>
                    <div className="bg-sandstone-100 p-3 rounded-xl border border-sandstone-200">
                      <span className="text-[10px] font-bold text-charcoal-500 uppercase font-serif block">{t('dynasty')}</span>
                      <span className="text-xs font-bold text-terracotta-800">{selectedTemple.dynasty}</span>
                    </div>
                    <div className="bg-sandstone-100 p-3 rounded-xl border border-sandstone-200">
                      <span className="text-[10px] font-bold text-charcoal-500 uppercase font-serif block">{t('architectureStyle')}</span>
                      <span className="text-xs font-bold text-terracotta-800">{selectedTemple.style}</span>
                    </div>
                    <div className="bg-sandstone-100 p-3 rounded-xl border border-sandstone-200">
                      <span className="text-[10px] font-bold text-charcoal-500 uppercase font-serif block">{t('circuits')}</span>
                      <span className="text-xs font-bold text-brass-800">{selectedTemple.circuits?.join(', ') || 'Independent'}</span>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-700 leading-relaxed bg-sandstone-100/70 p-4 rounded-xl border border-sandstone-200">
                    {selectedTemple.description}
                  </p>
                </div>
              )}

              {modalTab === 'darshan' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold font-serif text-terracotta-800 uppercase tracking-wide">24-Hour Darshan Rush Heatmap</h4>
                  <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 gap-1.5 items-end h-28 bg-sandstone-100/80 p-3 rounded-xl border border-sandstone-200">
                    {selectedTemple.rushHeatmap24h.map((slot, i) => (
                      <div key={i} className="flex flex-col items-center h-full justify-end">
                        <div style={{ height: `${Math.max(15, slot.rush)}%` }} className={`w-full rounded-t-sm ${slot.status === 'Low' ? 'bg-emerald-500' : slot.status === 'Moderate' ? 'bg-amber-400' : slot.status === 'High' ? 'bg-orange-500' : 'bg-rose-600'}`} />
                        <span className="text-[9px] text-charcoal-500 mt-1">{slot.hour}</span>
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
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">{selectedTemple.rulesMatrix?.photography?.badge || 'Restricted'}</span>
                    </div>
                    <p className="text-xs text-charcoal-600">{selectedTemple.rulesMatrix?.photography?.details}</p>
                  </div>
                  <div className="p-3.5 bg-sandstone-100 rounded-xl border border-sandstone-200">
                    <div className="font-bold text-xs text-charcoal-800 font-serif flex items-center justify-between mb-1">
                      <span>👗 Dress Code</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-300">{selectedTemple.rulesMatrix?.dressCode?.badge || 'Traditional'}</span>
                    </div>
                    <p className="text-xs text-charcoal-600">{selectedTemple.rulesMatrix?.dressCode?.details}</p>
                  </div>
                  <div className="p-3.5 bg-sandstone-100 rounded-xl border border-sandstone-200">
                    <div className="font-bold text-xs text-charcoal-800 font-serif flex items-center justify-between mb-1">
                      <span>♿ Wheelchair Access</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">{selectedTemple.rulesMatrix?.wheelchair?.badge || 'Available'}</span>
                    </div>
                    <p className="text-xs text-charcoal-600">{selectedTemple.rulesMatrix?.wheelchair?.details}</p>
                  </div>
                  <div className="p-3.5 bg-sandstone-100 rounded-xl border border-sandstone-200">
                    <div className="font-bold text-xs text-charcoal-800 font-serif flex items-center justify-between mb-1">
                      <span>👟 Footwear Stands</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-300">{selectedTemple.rulesMatrix?.footwear?.badge || 'Available'}</span>
                    </div>
                    <p className="text-xs text-charcoal-600">{selectedTemple.rulesMatrix?.footwear?.details}</p>
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
                    <span>{t('officialPass')}</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                <button onClick={() => { setSelectedTemple(null); stopSpeaking(); }} className="text-xs font-semibold px-4 py-2 rounded-xl bg-sandstone-200 text-charcoal-800">
                  {t('close')}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Diya Modal */}
      {isDiyaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/70 backdrop-blur-sm">
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
              <span className="text-base font-bold font-serif text-sandstone-50">🛕 {t('portalName')} HERITAGE PORTAL</span>
              <p className="text-sandstone-400 text-xs mt-1">Documenting the monumental stone architecture and living traditions of 22+ Indian temples.</p>
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

// Mount cleanly into #root
ReactDOM.createRoot(document.getElementById('root')).render(<DevalayaApp />);
