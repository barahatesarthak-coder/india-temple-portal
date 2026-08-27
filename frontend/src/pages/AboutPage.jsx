import React from 'react';
import { Landmark, ShieldCheck, Sparkles, BookOpen, Compass, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Hero */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="w-14 h-14 bg-amber-100 text-amber-800 rounded-3xl flex items-center justify-center mx-auto shadow-sm">
          <Landmark className="w-7 h-7" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
          Cultural Heritage Documentation
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-heading text-stone-900 leading-tight">
          About the India Temple Heritage & Pilgrimage Information Portal
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          A centralized digital repository providing authentic, well-organized, and verified information about sacred shrines, architectural marvels, and pilgrimage routes across the Indian subcontinent.
        </p>
      </div>

      {/* Problem & Objective Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-stone-900 font-serif-heading flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-600" />
            The Problem Statement
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Pilgrims, tourists, and researchers across the globe frequently encounter fragmented, unverified, or outdated temple details. Critical aspects such as exact darshan timings, sacred aarti schedules, strict dress code regulations, historical inscriptions, and connecting pilgrimage routes are often scattered across unofficial websites.
          </p>
        </div>

        <div className="bg-amber-50/70 rounded-3xl p-8 border border-amber-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-amber-950 font-serif-heading flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-700" />
            Our Core Mission & Standards
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            Devalaya establishes an open, structured digital standard for Indian temple heritage. Every record documents historical background, architectural classification (Nagara, Dravidian, Vesara, Katyuri), daily pooja timings, festival calendars, and visitor guidelines verified against authentic temple devasthanams and archaeological sources.
          </p>
        </div>
      </div>

      {/* Pillars */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl font-bold font-serif-heading text-amber-400">
            Four Pillars of Devalaya
          </h3>
          <p className="text-xs sm:text-sm text-stone-400">
            Built for pilgrims, cultural explorers, historians, and researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-5 bg-stone-800/80 rounded-2xl border border-stone-700 space-y-2">
            <Sparkles className="w-6 h-6 text-amber-400 mx-auto" />
            <h4 className="font-bold text-sm font-serif-heading">Authenticity</h4>
            <p className="text-[11px] text-stone-400">Verified facts from archaeological & religious authorities.</p>
          </div>

          <div className="p-5 bg-stone-800/80 rounded-2xl border border-stone-700 space-y-2">
            <Compass className="w-6 h-6 text-amber-400 mx-auto" />
            <h4 className="font-bold text-sm font-serif-heading">Pilgrimage Planning</h4>
            <p className="text-[11px] text-stone-400">Logistics, travel routes, nearby stays, and pooja schedules.</p>
          </div>

          <div className="p-5 bg-stone-800/80 rounded-2xl border border-stone-700 space-y-2">
            <Landmark className="w-6 h-6 text-amber-400 mx-auto" />
            <h4 className="font-bold text-sm font-serif-heading">Architectural Preservation</h4>
            <p className="text-[11px] text-stone-400">In-depth coverage of temple spires, vimanas, and mandapas.</p>
          </div>

          <div className="p-5 bg-stone-800/80 rounded-2xl border border-stone-700 space-y-2">
            <Award className="w-6 h-6 text-amber-400 mx-auto" />
            <h4 className="font-bold text-sm font-serif-heading">Cultural Respect</h4>
            <p className="text-[11px] text-stone-400">Clear dress codes, sanctum protocols, and sacred traditions.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
