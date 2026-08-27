import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Heart, Shield, Sparkles, ExternalLink, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t-4 border-amber-600">
      {/* Upper Footer: Heritage Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-lg">
                <Landmark className="w-6 h-6 text-amber-100" />
              </div>
              <span className="text-xl font-bold tracking-tight font-serif-heading text-white">
                DEVALAYA
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed pr-6">
              A centralized digital heritage initiative dedicated to authentic documentation, discovery, and pilgrimage planning for India’s sacred temples, architectural monuments, rituals, and centuries-old cultural traditions.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-amber-400 font-medium">
              <span className="flex items-center gap-1.5 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
                <Sparkles className="w-3.5 h-3.5" /> Incredible India Heritage Partner
              </span>
              <span className="flex items-center gap-1.5 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
                <Shield className="w-3.5 h-3.5" /> Verified Spiritual Data
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-serif-heading">
              Explore Shrines
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/temples" className="hover:text-amber-400 transition-colors">
                  All Indian Temples
                </Link>
              </li>
              <li>
                <Link to="/temples?category=jyotirlinga" className="hover:text-amber-400 transition-colors">
                  12 Jyotirlingas
                </Link>
              </li>
              <li>
                <Link to="/temples?category=char-dham" className="hover:text-amber-400 transition-colors">
                  Maha Char Dham
                </Link>
              </li>
              <li>
                <Link to="/temples?category=shakti-peetha" className="hover:text-amber-400 transition-colors">
                  51 Shakti Peethas
                </Link>
              </li>
              <li>
                <Link to="/temples?category=unesco-heritage" className="hover:text-amber-400 transition-colors">
                  UNESCO World Heritage
                </Link>
              </li>
            </ul>
          </div>

          {/* Pilgrimage & Planning */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-serif-heading">
              Pilgrimage & Yatra
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/circuits" className="hover:text-amber-400 transition-colors">
                  Sacred Circuits & Routes
                </Link>
              </li>
              <li>
                <Link to="/festivals" className="hover:text-amber-400 transition-colors">
                  Festival Calendar & Tithis
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-amber-400 transition-colors">
                  Saved Yatra Planner
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  Heritage Documentation Scope
                </Link>
              </li>
            </ul>
          </div>

          {/* Assistance & Helpline */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-serif-heading">
              Visitor Information
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>National Heritage Information Desk, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>heritage@devalaya.gov.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Pilgrim Toll-Free: 1800-111-363</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-amber-600/20 text-amber-300 border border-amber-500/40 rounded-lg hover:bg-amber-600/30 transition-all"
              >
                Helpdesk & FAQs
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Copyright Strip */}
      <div className="bg-black/50 border-t border-stone-800 py-6 px-4 text-center text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} India Temple Heritage & Pilgrimage Information Portal. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 sm:mt-0">
          Crafted with reverence for cultural preservation & pilgrimage discovery.
        </p>
      </div>
    </footer>
  );
}
