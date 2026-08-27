import React, { useState } from 'react';
import { Flame, Bell, Sparkles, Heart, X, CheckCircle } from 'lucide-react';
import { templeAudio } from '../utils/audioEngine';

export default function VirtualDiya({ isOpen, onClose, templeName = "Sacred Shrine" }) {
  const [isLit, setIsLit] = useState(false);
  const [intention, setIntention] = useState('peace');
  const [diyaCount, setDiyaCount] = useState(14820);
  const [devoteeName, setDevoteeName] = useState('');

  if (!isOpen) return null;

  const handleLightDiya = () => {
    setIsLit(true);
    setDiyaCount(prev => prev + 1);
    templeAudio.playTempleBell(659.25, 6.0); // E5 resonant bell
    setTimeout(() => {
      templeAudio.playShankha();
    }, 500);
  };

  const intentionsList = [
    { id: 'peace', label: 'Universal Peace (लोकाः समस्ताः सुखिनो भवन्तु)', emoji: '🕊️' },
    { id: 'health', label: 'Family Well-being & Arogyam (आरोग्यम्)', emoji: '🌿' },
    { id: 'wisdom', label: 'Spiritual Wisdom & Vidya (ज्ञानम्)', emoji: '✨' },
    { id: 'moksha', label: 'Devotion & Liberation (मुक्तिः)', emoji: '🕉️' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-sandstone-50 border-2 border-brass-500/60 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative overflow-hidden text-center space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal-400 hover:text-charcoal-700 bg-sandstone-200/80 p-1.5 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div>
          <span className="text-[11px] font-bold font-serif uppercase tracking-widest text-brass-700 bg-brass-100 px-3 py-1 rounded-full border border-brass-300">
            ॥ दीपं ज्योति परंब्रह्म दीपं सर्वतमोपहम् ॥
          </span>
          <h3 className="text-2xl font-bold font-serif text-terracotta-800 mt-2">
            Offer a Consecrated Diya
          </h3>
          <p className="text-xs text-charcoal-600 mt-1">
            Light a sacred lamp of auspicious light (Akhand Jyoti) at <span className="font-bold text-terracotta-700">{templeName}</span>
          </p>
        </div>

        {/* Diya Visual Container */}
        <div className="relative py-6 flex flex-col items-center justify-center">
          <div className="relative">
            {/* Glowing Aura if Lit */}
            {isLit && (
              <div className="absolute -inset-10 bg-radial-gradient from-brass-400/50 via-amber-500/20 to-transparent rounded-full animate-pulse pointer-events-none" />
            )}

            {/* Flame SVG */}
            <div className="flex flex-col items-center">
              {isLit ? (
                <div className="w-12 h-16 animate-diya-flame relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600 via-amber-400 to-yellow-100 rounded-full blur-[1px]" />
                  <div className="absolute inset-x-2 bottom-1 top-4 bg-white rounded-full blur-[2px] opacity-90" />
                </div>
              ) : (
                <div className="w-12 h-16 flex items-center justify-center text-charcoal-300">
                  <Flame className="w-8 h-8 opacity-40" />
                </div>
              )}

              {/* Clay / Brass Diya Base */}
              <div className="w-28 h-10 bg-gradient-to-b from-brass-500 to-brass-700 rounded-b-full border-t-2 border-brass-300 shadow-lg flex items-center justify-center relative -mt-2">
                <span className="text-terracotta-900 text-xs font-serif font-bold">ॐ नमः शिवाय</span>
              </div>
            </div>
          </div>

          <span className="text-xs text-charcoal-500 font-semibold mt-4">
            🔥 <span className="font-bold text-terracotta-700">{diyaCount.toLocaleString()}</span> Diyas lit by pilgrims today
          </span>
        </div>

        {/* Intention Picker */}
        {!isLit ? (
          <div className="space-y-3 text-left">
            <label className="text-xs font-bold font-serif text-terracotta-800 uppercase tracking-wide block">
              Select Your Sacred Prayer Intention (सङ्कल्प):
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              {intentionsList.map(item => (
                <button
                  key={item.id}
                  onClick={() => setIntention(item.id)}
                  className={`p-2.5 rounded-xl border text-xs text-left font-medium transition-all flex items-center justify-between ${
                    intention === item.id
                      ? 'bg-brass-100/90 border-brass-500 text-charcoal-900 font-bold shadow-xs'
                      : 'bg-sandstone-100 border-sandstone-200 text-charcoal-700 hover:bg-sandstone-200'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
                  </div>
                  {intention === item.id && <CheckCircle className="w-4 h-4 text-brass-700" />}
                </button>
              ))}
            </div>

            {/* Devotee Name (Optional) */}
            <input
              type="text"
              placeholder="Your Name / Gotram (Optional)"
              value={devoteeName}
              onChange={(e) => setDevoteeName(e.target.value)}
              className="w-full bg-sandstone-100 border border-sandstone-300 rounded-xl px-3 py-2 text-xs text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-1 focus:ring-terracotta-500 mt-2"
            />

            <button
              onClick={handleLightDiya}
              className="w-full bg-brass-500 hover:bg-brass-600 text-charcoal-900 font-bold font-serif py-3 rounded-xl shadow-lg transition-transform active:scale-98 flex items-center justify-center space-x-2 text-sm mt-3"
            >
              <Flame className="w-4 h-4 fill-current text-terracotta-800" />
              <span>Consecrate & Light Diya (दीप प्रज्वलनम्)</span>
            </button>
          </div>
        ) : (
          <div className="space-y-4 bg-brass-50 border border-brass-300 rounded-2xl p-4 animate-fade-in">
            <div className="flex items-center justify-center space-x-1.5 text-terracotta-800 font-bold text-sm font-serif">
              <Sparkles className="w-4 h-4 text-brass-600" />
              <span>Sacred Diya Consecrated Successfully</span>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed">
              May the eternal light of {templeName} dispel darkness, illuminate your spiritual path, and bring peace to all beings.
            </p>
            <div className="flex items-center justify-center space-x-3 pt-2">
              <button
                onClick={() => setIsLit(false)}
                className="text-xs text-charcoal-600 hover:text-charcoal-900 font-semibold px-3 py-1.5 rounded-lg border border-sandstone-300 bg-sandstone-100"
              >
                Light Another Lamp
              </button>
              <button
                onClick={onClose}
                className="text-xs text-sandstone-50 bg-terracotta-700 hover:bg-terracotta-800 font-bold px-4 py-1.5 rounded-lg"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
