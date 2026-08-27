import React, { useState } from 'react';
import { Sparkles, Info, BookOpen, Layers, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { ARCHITECTURE_STYLES, ANATOMY_TERMS_GLOSSARY } from '../data/architecture';

export default function ArchitectureExplorer({ onSelectTempleById }) {
  const [selectedStyleId, setSelectedStyleId] = useState('nagara');
  const [activeHotspotId, setActiveHotspotId] = useState('kalasha');

  const currentStyle = ARCHITECTURE_STYLES[selectedStyleId];
  const activeHotspot = currentStyle.hotspots.find(h => h.id === activeHotspotId) || currentStyle.hotspots[0];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Intro Banner */}
      <div className="bg-sandstone-100/90 border border-sandstone-300 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider bg-terracotta-100 text-terracotta-800 px-2.5 py-0.5 rounded border border-terracotta-200">
                Vastu & Agamic Sthapatya Veda
              </span>
              <span className="text-xs text-brass-700 font-bold">Interactive 2D Anatomical Diagrams</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-terracotta-800 mt-1">
              Indian Temple Architectural Anatomy Explorer
            </h2>
            <p className="text-sm text-charcoal-600 max-w-3xl mt-1 leading-relaxed">
              Explore the structural blueprints of classical Indian temple orders. Click any pulsing hotspot on the cross-section diagram to decode its Sanskrit nomenclature, structural engineering, and metaphysical symbolism.
            </p>
          </div>

          {/* Style Selector Tabs */}
          <div className="flex flex-wrap md:flex-nowrap gap-2 bg-sandstone-200/80 p-1.5 rounded-xl border border-sandstone-300">
            {Object.values(ARCHITECTURE_STYLES).map(style => (
              <button
                key={style.id}
                onClick={() => {
                  setSelectedStyleId(style.id);
                  setActiveHotspotId(style.hotspots[0].id);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap font-serif ${
                  selectedStyleId === style.id
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

      {/* Main Interactive Diagram & Inspection Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left / Center: Interactive SVG Cross-Section Canvas */}
        <div className="lg:col-span-7 bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 border-b border-sandstone-200 pb-2">
            <div>
              <span className="text-xs font-serif font-bold text-terracotta-800 block">
                {currentStyle.sanskritName}
              </span>
              <span className="text-[11px] text-charcoal-500">
                Click any golden hotspot to inspect anatomical details
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sandstone-200 text-charcoal-700">
              Cross-Section Elevation
            </span>
          </div>

          {/* SVG Architectural Canvas */}
          <div className="relative aspect-[4/3] w-full bg-sandstone-100/60 rounded-xl border border-sandstone-200/90 overflow-hidden flex items-center justify-center p-2">
            
            {/* Custom SVG Diagrams based on selected style */}
            {selectedStyleId === 'nagara' && (
              <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-sm select-none">
                <defs>
                  <linearGradient id="nagaraStone" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C05621" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#7A2E1E" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="goldFinial" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#B8860B" />
                  </linearGradient>
                </defs>

                {/* Ground Plinth / Jagati */}
                <rect x="50" y="340" width="400" height="30" rx="3" fill="#8E7760" stroke="#5C4A3A" strokeWidth="2" />
                <rect x="70" y="320" width="360" height="20" fill="#B49E85" stroke="#5C4A3A" strokeWidth="1.5" />
                
                {/* Mandapa (Pillared Hall with Phamsana stepped roof) */}
                <path d="M 90 320 L 90 250 L 220 250 L 220 320 Z" fill="#E2D1BD" stroke="#7A2E1E" strokeWidth="1.5" />
                {/* Mandapa Pillars */}
                <line x1="110" y1="250" x2="110" y2="320" stroke="#7A2E1E" strokeWidth="3" />
                <line x1="140" y1="250" x2="140" y2="320" stroke="#7A2E1E" strokeWidth="3" />
                <line x1="170" y1="250" x2="170" y2="320" stroke="#7A2E1E" strokeWidth="3" />
                <line x1="200" y1="250" x2="200" y2="320" stroke="#7A2E1E" strokeWidth="3" />
                {/* Mandapa Stepped Tiered Roof (Phamsana) */}
                <path d="M 80 250 L 155 180 L 230 250 Z" fill="#DC7663" stroke="#7A2E1E" strokeWidth="2" />
                <path d="M 95 230 L 155 180 L 215 230" fill="none" stroke="#FAF4EB" strokeWidth="1.5" />
                <path d="M 115 210 L 155 180 L 195 210" fill="none" stroke="#FAF4EB" strokeWidth="1.5" />

                {/* Antarala (Vestibule connection) */}
                <rect x="220" y="240" width="40" height="80" fill="#CDB9A1" stroke="#7A2E1E" strokeWidth="1.5" />

                {/* Garbhagriha (Sanctum Wall Base) */}
                <rect x="260" y="220" width="150" height="100" fill="#7A2E1E" stroke="#5A1F13" strokeWidth="2" />
                {/* Inner Sanctum Murti / Diya chamber */}
                <rect x="310" y="260" width="50" height="60" rx="4" fill="#3D130B" stroke="#D4AF37" strokeWidth="1.5" />
                <circle cx="335" cy="285" r="8" fill="#F59E0B" />
                <circle cx="335" cy="285" r="4" fill="#FDFBF7" />

                {/* Curvilinear Shikhara Tower */}
                <path d="M 260 220 Q 285 110 335 65 Q 385 110 410 220 Z" fill="url(#nagaraStone)" stroke="#5A1F13" strokeWidth="2.5" />
                {/* Shikhara Decorative Urushringas / Ridges */}
                <path d="M 280 220 Q 300 130 335 80 Q 370 130 390 220" fill="none" stroke="#FAF4EB" strokeWidth="1.5" opacity="0.6" />
                <path d="M 300 220 Q 315 150 335 100 Q 355 150 370 220" fill="none" stroke="#FAF4EB" strokeWidth="1.5" opacity="0.6" />

                {/* Amalaka (Ribbed Stone Disc) */}
                <ellipse cx="335" cy="62" rx="36" ry="12" fill="#E5C672" stroke="#7A2E1E" strokeWidth="2" />
                <path d="M 305 62 Q 335 55 365 62" stroke="#7A2E1E" strokeWidth="1" fill="none" />

                {/* Kalasha (Golden Finial Pot) */}
                <path d="M 330 50 C 325 40, 345 40, 340 50 Z" fill="url(#goldFinial)" stroke="#7A2E1E" strokeWidth="1.5" />
                <line x1="335" y1="40" x2="335" y2="25" stroke="#D4AF37" strokeWidth="2.5" />
                <circle cx="335" cy="23" r="3.5" fill="#D4AF37" />
              </svg>
            )}

            {selectedStyleId === 'dravidian' && (
              <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-sm select-none">
                <defs>
                  <linearGradient id="dravidianGopuram" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A43E1B" />
                    <stop offset="100%" stopColor="#7A2E1E" />
                  </linearGradient>
                  <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#0284C7" />
                  </linearGradient>
                </defs>

                {/* Outer Prakara Wall */}
                <rect x="20" y="340" width="460" height="25" fill="#5C4A3A" stroke="#2D241E" strokeWidth="2" />

                {/* Raja Gopuram (Tall Towering Gateway at Left) */}
                <path d="M 40 340 L 70 80 L 130 80 L 160 340 Z" fill="url(#dravidianGopuram)" stroke="#3D130B" strokeWidth="2" />
                {/* Gopuram Tiers / Talas */}
                <line x1="62" y1="280" x2="138" y2="280" stroke="#FAF4EB" strokeWidth="2" />
                <line x1="68" y1="220" x2="132" y2="220" stroke="#FAF4EB" strokeWidth="2" />
                <line x1="74" y1="160" x2="126" y2="160" stroke="#FAF4EB" strokeWidth="2" />
                <line x1="80" y1="110" x2="120" y2="110" stroke="#FAF4EB" strokeWidth="2" />
                {/* Gopuram Barrel Vault Crown (Shala Shikhara) & Kalashams */}
                <ellipse cx="100" cy="75" rx="32" ry="9" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1.5" />
                <circle cx="85" cy="65" r="3" fill="#D4AF37" />
                <circle cx="100" cy="63" r="3.5" fill="#D4AF37" />
                <circle cx="115" cy="65" r="3" fill="#D4AF37" />
                {/* Gateway Opening */}
                <path d="M 80 340 L 80 280 Q 100 260 120 280 L 120 340 Z" fill="#1A1410" />

                {/* Flagstaff (Dhwajastambha) */}
                <line x1="190" y1="340" x2="190" y2="210" stroke="#D4AF37" strokeWidth="3" />
                <polygon points="190,215 210,225 190,235" fill="#D4AF37" />

                {/* Pushkarini (Temple Water Tank) */}
                <rect x="220" y="310" width="70" height="30" fill="url(#waterGrad)" rx="2" stroke="#0369A1" strokeWidth="1.5" />
                <line x1="225" y1="318" x2="285" y2="318" stroke="#E0F2FE" strokeWidth="1" opacity="0.6" />

                {/* Kalyana Mandapam (Pillared Hall) */}
                <rect x="300" y="270" width="70" height="70" fill="#E2D1BD" stroke="#7A2E1E" strokeWidth="1.5" />
                <line x1="315" y1="270" x2="315" y2="340" stroke="#7A2E1E" strokeWidth="2" />
                <line x1="335" y1="270" x2="335" y2="340" stroke="#7A2E1E" strokeWidth="2" />
                <line x1="355" y1="270" x2="355" y2="340" stroke="#7A2E1E" strokeWidth="2" />

                {/* Vimana (Stepped Pyramid over Sanctum at Right) */}
                <rect x="375" y="250" width="100" height="90" fill="#7A2E1E" stroke="#3D130B" strokeWidth="2" />
                {/* Inner Sanctum */}
                <rect x="405" y="280" width="40" height="60" fill="#2D241E" rx="3" stroke="#D4AF37" strokeWidth="1.5" />
                <ellipse cx="425" cy="315" rx="8" ry="12" fill="#F59E0B" />

                {/* Stepped Vimana Pyramidal Tiers */}
                <polygon points="380,250 395,200 455,200 470,250" fill="#C05621" stroke="#3D130B" strokeWidth="1.5" />
                <polygon points="395,200 410,150 440,150 455,200" fill="#DC7663" stroke="#3D130B" strokeWidth="1.5" />
                <polygon points="410,150 418,120 432,120 440,150" fill="#EAA69A" stroke="#3D130B" strokeWidth="1.5" />
                {/* Golden Dome & Stupi */}
                <circle cx="425" cy="110" r="14" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1.5" />
                <line x1="425" y1="96" x2="425" y2="85" stroke="#D4AF37" strokeWidth="2" />
                <circle cx="425" cy="83" r="2.5" fill="#D4AF37" />
              </svg>
            )}

            {selectedStyleId === 'vesara' && (
              <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-sm select-none">
                <defs>
                  <linearGradient id="vesaraStone" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DBB144" />
                    <stop offset="100%" stopColor="#996515" />
                  </linearGradient>
                </defs>

                {/* Stellate / Star Plinth Base */}
                <polygon points="50,340 70,320 100,340 130,320 160,340 200,320 240,340 280,320 320,340 360,320 400,340 440,320 460,340 450,360 60,360" fill="#8E7760" stroke="#5C4A3A" strokeWidth="2" />

                {/* Navaranga (Assembly Hall with Lathe-turned pillars) */}
                <rect x="80" y="240" width="180" height="80" fill="#FAF4EB" stroke="#7A2E1E" strokeWidth="1.5" />
                <line x1="110" y1="240" x2="110" y2="320" stroke="#996515" strokeWidth="4" strokeLinecap="round" />
                <line x1="150" y1="240" x2="150" y2="320" stroke="#996515" strokeWidth="4" strokeLinecap="round" />
                <line x1="190" y1="240" x2="190" y2="320" stroke="#996515" strokeWidth="4" strokeLinecap="round" />
                <line x1="230" y1="240" x2="230" y2="320" stroke="#996515" strokeWidth="4" strokeLinecap="round" />

                {/* Sukanasi (Frontal projection / Nose of Vimana) */}
                <polygon points="230,240 260,160 290,240" fill="#E5C672" stroke="#7A2E1E" strokeWidth="1.5" />
                <circle cx="260" cy="190" r="10" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1" />

                {/* Stellate Garbhagriha Sanctum Base */}
                <rect x="270" y="220" width="160" height="100" fill="#996515" stroke="#5A1F13" strokeWidth="2" />
                <rect x="320" y="260" width="60" height="60" rx="3" fill="#2D241E" stroke="#D4AF37" strokeWidth="1.5" />
                <circle cx="350" cy="290" r="9" fill="#F59E0B" />

                {/* Hybrid Vesara Curvilinear Stepped Spire */}
                <path d="M 270 220 Q 300 120 350 70 Q 400 120 430 220 Z" fill="url(#vesaraStone)" stroke="#6C480E" strokeWidth="2" />
                {/* Miniature Aedicules on Spire */}
                <circle cx="310" cy="180" r="8" fill="#FBF8EE" stroke="#7A2E1E" strokeWidth="1" />
                <circle cx="350" cy="140" r="9" fill="#FBF8EE" stroke="#7A2E1E" strokeWidth="1" />
                <circle cx="390" cy="180" r="8" fill="#FBF8EE" stroke="#7A2E1E" strokeWidth="1" />

                {/* Crown Kalasha */}
                <ellipse cx="350" cy="68" rx="20" ry="8" fill="#D4AF37" stroke="#7A2E1E" strokeWidth="1.5" />
                <line x1="350" y1="60" x2="350" y2="40" stroke="#D4AF37" strokeWidth="2.5" />
                <circle cx="350" cy="38" r="3.5" fill="#D4AF37" />
              </svg>
            )}

            {/* Clickable Hotspot Markers */}
            {currentStyle.hotspots.map((hotspot) => {
              const isActive = activeHotspotId === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-transform ${
                    isActive ? 'scale-125 z-20' : 'hover:scale-115 z-10'
                  }`}
                  title={`${hotspot.name} (${hotspot.sanskrit})`}
                >
                  <div className={`relative flex items-center justify-center w-7 h-7 rounded-full shadow-lg transition-all ${
                    isActive
                      ? 'bg-terracotta-800 text-brass-300 ring-4 ring-brass-400 hotspot-pulse'
                      : 'bg-brass-500 text-charcoal-900 ring-2 ring-white hover:bg-brass-400'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[10px] font-bold font-serif whitespace-nowrap shadow-md pointer-events-none transition-all ${
                    isActive
                      ? 'bg-terracotta-900 text-sandstone-50 scale-105'
                      : 'bg-charcoal-900/80 text-sandstone-100 opacity-0 group-hover:opacity-100'
                  }`}>
                    {hotspot.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Hotspot Pills Selection Row */}
          <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
            {currentStyle.hotspots.map((hotspot) => (
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

        {/* Right: Detailed Anatomical Breakdown Card */}
        <div className="lg:col-span-5 bg-sandstone-50 border border-sandstone-300 rounded-2xl p-5 shadow-sm space-y-4">
          
          {/* Active Hotspot Header */}
          <div className="border-b border-sandstone-200 pb-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brass-100 text-brass-900 border border-brass-300">
                {activeHotspot.category}
              </span>
              <span className="text-xs font-serif text-terracotta-700 font-bold">
                {currentStyle.name}
              </span>
            </div>
            <h3 className="text-xl font-bold font-serif text-terracotta-800 mt-1">
              {activeHotspot.name}
            </h3>
            <p className="text-sm font-semibold text-charcoal-600 font-serif">
              {activeHotspot.sanskrit}
            </p>
          </div>

          {/* Description */}
          <div className="bg-sandstone-100/90 rounded-xl p-3.5 border border-sandstone-200">
            <h4 className="text-xs font-bold text-charcoal-700 font-serif uppercase tracking-wider mb-1 flex items-center">
              <Info className="w-3.5 h-3.5 text-brass-600 mr-1.5" /> Architectural Function & Meaning
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              {activeHotspot.description}
            </p>
          </div>

          {/* Style Philosophy & Sub-styles */}
          <div className="space-y-2">
            <span className="text-xs font-bold font-serif text-terracotta-800 uppercase tracking-wide block">
              Architectural Philosophy
            </span>
            <p className="text-xs text-charcoal-600 italic bg-sandstone-100/60 p-2.5 rounded-lg border border-sandstone-200">
              "{currentStyle.philosophy}"
            </p>
          </div>

          {/* Real-world Masterpieces */}
          <div>
            <span className="text-xs font-bold font-serif text-terracotta-800 uppercase tracking-wide block mb-2">
              Iconic Real-World Examples
            </span>
            <div className="grid grid-cols-2 gap-2">
              {currentStyle.examples.map((ex, i) => (
                <div key={i} className="bg-sandstone-100 border border-sandstone-300/80 rounded-lg p-2 text-xs">
                  <span className="font-bold text-charcoal-900 font-serif block truncate">{ex.name}</span>
                  <span className="text-charcoal-500 text-[11px]">{ex.location} ({ex.year})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparative Architecture Matrix */}
      <div className="bg-sandstone-50 border border-sandstone-300 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold font-serif text-terracotta-800 mb-1 flex items-center">
          <Layers className="w-5 h-5 text-brass-600 mr-2" />
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
              <tr className="hover:bg-sandstone-100/60">
                <td className="p-3 font-bold text-charcoal-800">Water Body</td>
                <td className="p-3 text-charcoal-700">Kund or river ghaut located externally outside temple plinth.</td>
                <td className="p-3 text-charcoal-700"><strong>Pushkarini / Teppakulam</strong> integrated inside inner courtyard.</td>
                <td className="p-3 text-charcoal-700">Stepped Kalyani tank located at axial approach.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Glossary of Terms */}
      <div className="bg-sandstone-100/90 border border-sandstone-300 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold font-serif text-terracotta-800 mb-3 flex items-center">
          <BookOpen className="w-4 h-4 text-brass-600 mr-2" />
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
  );
}
