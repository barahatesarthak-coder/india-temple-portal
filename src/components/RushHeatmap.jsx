import React, { useState, useEffect } from 'react';
import { Clock, Users, Flame, Sparkles, CheckCircle, AlertTriangle, Play, Bell } from 'lucide-react';
import { templeAudio } from '../utils/audioEngine';

export default function RushHeatmap({ heatmapData, aartiSchedule, bestSlots, templeName }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [activeAartiPlaying, setActiveAartiPlaying] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTimeStr(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const getRushBarColor = (status) => {
    switch (status) {
      case 'Low':
        return 'bg-emerald-500 hover:bg-emerald-600';
      case 'Moderate':
        return 'bg-amber-400 hover:bg-amber-500';
      case 'High':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'Peak':
        return 'bg-rose-600 hover:bg-rose-700';
      default:
        return 'bg-sandstone-300';
    }
  };

  const getRushBadge = (status) => {
    switch (status) {
      case 'Low':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Moderate':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'High':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Peak':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      default:
        return 'bg-sandstone-200 text-charcoal-700';
    }
  };

  const handlePlayAartiChime = (aartiName) => {
    setActiveAartiPlaying(aartiName);
    templeAudio.playTempleBell(659.25, 5.0); // E5 bell chime
    setTimeout(() => {
      templeAudio.playShankha();
    }, 400);
    setTimeout(() => setActiveAartiPlaying(null), 5500);
  };

  return (
    <div className="space-y-6">
      {/* 24-Hour Rush Heatmap Section */}
      <div className="bg-sandstone-50 border border-sandstone-300/90 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h4 className="text-sm font-bold font-serif text-terracotta-800 uppercase tracking-wide flex items-center">
              <Users className="w-4 h-4 text-brass-600 mr-1.5" />
              Daily Darshan Rush Heatmap (24-Hour Timeline)
            </h4>
            <p className="text-xs text-charcoal-500 mt-0.5">
              Hover over or click any hourly bar to inspect expected queue wait time and ritual crowd flow
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-1"></span> Low</span>
            <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 mr-1"></span> Mod</span>
            <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-orange-500 mr-1"></span> High</span>
            <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-rose-600 mr-1"></span> Peak</span>
          </div>
        </div>

        {/* The Visual Heatmap Bars */}
        <div className="relative pt-2 pb-1">
          <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 lg:grid-cols-19 gap-1.5 items-end h-28 bg-sandstone-100/80 p-2.5 rounded-xl border border-sandstone-200">
            {heatmapData && heatmapData.map((slot, index) => {
              const heightPercent = Math.max(15, slot.rush);
              const isSelected = selectedSlot?.hour === slot.hour;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedSlot(slot)}
                  className="group relative flex flex-col items-center h-full justify-end cursor-pointer"
                >
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full rounded-t-sm transition-all duration-200 ${getRushBarColor(slot.status)} ${
                      isSelected ? 'ring-2 ring-terracotta-800 scale-105 shadow-md' : 'opacity-85 group-hover:opacity-100 group-hover:scale-105'
                    }`}
                  />
                  <span className="text-[9px] font-medium text-charcoal-500 mt-1 scale-90">
                    {slot.hour}
                  </span>

                  {/* Hover Tooltip */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-30 pointer-events-none w-32">
                    <div className="bg-charcoal-900 text-sandstone-50 text-[10px] rounded-lg py-1.5 px-2 shadow-xl text-center border border-brass-500/40">
                      <div className="font-bold text-brass-300">{slot.hour} hrs</div>
                      <div className="font-semibold text-white">{slot.status} Rush ({slot.rush}%)</div>
                      <div className="text-[9px] text-sandstone-300 mt-0.5 leading-tight">{slot.note}</div>
                    </div>
                    <div className="w-2 h-2 bg-charcoal-900 rotate-45 -mt-1"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Slot Information Bar */}
        {selectedSlot ? (
          <div className="mt-3 p-3 bg-sandstone-200/80 rounded-xl flex items-center justify-between border border-sandstone-300 text-xs">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-terracotta-900 font-serif">Selected Hour: {selectedSlot.hour}</span>
              <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${getRushBadge(selectedSlot.status)}`}>
                {selectedSlot.status} ({selectedSlot.rush}% Queue Density)
              </span>
            </div>
            <div className="text-charcoal-700 italic">
              {selectedSlot.note}
            </div>
          </div>
        ) : (
          <div className="mt-3 text-center text-xs text-charcoal-500 italic">
            Tip: Click any bar to view ritual specifics for that hour.
          </div>
        )}

        {/* Best Darshan Recommendation Cards */}
        {bestSlots && bestSlots.length > 0 && (
          <div className="mt-4 pt-4 border-t border-sandstone-200">
            <div className="text-xs font-bold font-serif text-terracotta-800 uppercase tracking-wider mb-2 flex items-center">
              <Sparkles className="w-3.5 h-3.5 text-brass-600 mr-1" />
              Recommended Darshan Time Windows
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {bestSlots.map((slot, i) => (
                <div key={i} className="bg-sandstone-100/90 border border-sandstone-300 rounded-xl p-3 flex items-start space-x-2.5">
                  <div className="w-6 h-6 rounded-full bg-brass-100 text-brass-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-charcoal-900 block font-serif">
                      {slot.time}
                    </span>
                    <span className="text-xs text-charcoal-600">
                      {slot.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Daily Aarti Schedule Timeline */}
      <div className="bg-sandstone-50 border border-sandstone-300/90 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-sm font-bold font-serif text-terracotta-800 uppercase tracking-wide flex items-center">
              <Flame className="w-4 h-4 text-terracotta-600 mr-1.5 animate-diya-flame" />
              Daily Aarti & Ritual Timings
            </h4>
            <p className="text-xs text-charcoal-500 mt-0.5">
              Consecrated daily Vedic worship schedule at {templeName}
            </p>
          </div>
          <span className="text-[11px] font-semibold bg-sandstone-200 text-charcoal-700 px-2.5 py-1 rounded-full border border-sandstone-300">
            Standard Daily Schedule
          </span>
        </div>

        <div className="overflow-hidden rounded-xl border border-sandstone-300">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-sandstone-200/90 text-charcoal-800 border-b border-sandstone-300 font-serif">
                <th className="py-2.5 px-3.5 font-bold">Aarti Name & Ritual</th>
                <th className="py-2.5 px-3 font-bold">Scheduled Time</th>
                <th className="py-2.5 px-3 font-bold hidden sm:table-cell">Spiritual Significance</th>
                <th className="py-2.5 px-3 text-right font-bold">Listen / Chime</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sandstone-200 bg-sandstone-50">
              {aartiSchedule && aartiSchedule.map((aarti, index) => (
                <tr key={index} className="hover:bg-sandstone-100/80 transition-colors">
                  <td className="py-3 px-3.5 font-semibold text-charcoal-900">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-brass-500"></span>
                      <span>{aarti.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 font-bold text-terracotta-800 whitespace-nowrap">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-charcoal-400" />
                      <span>{aarti.time}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-charcoal-600 hidden sm:table-cell text-xs leading-relaxed">
                    {aarti.significance}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => handlePlayAartiChime(aarti.name)}
                      className={`inline-flex items-center space-x-1 text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-all ${
                        activeAartiPlaying === aarti.name
                          ? 'bg-brass-500 text-charcoal-900 border-brass-600 shadow-sm animate-pulse'
                          : 'bg-sandstone-100 hover:bg-sandstone-200 text-charcoal-700 border-sandstone-300'
                      }`}
                      title="Play consecrated Aarti bell and conch resonance"
                    >
                      <Bell className="w-3 h-3 text-terracotta-700" />
                      <span>{activeAartiPlaying === aarti.name ? 'Playing Chime...' : 'Bell Chime'}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
