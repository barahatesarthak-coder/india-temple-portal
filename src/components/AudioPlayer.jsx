import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Bell, Wind, BookOpen, Sparkles, RotateCcw } from 'lucide-react';
import { templeAudio } from '../utils/audioEngine';

export default function AudioPlayer({ audioLegend, templeName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeParagraph, setActiveParagraph] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            templeAudio.stopAmbientDrone();
            return 0;
          }
          const next = prev + 1;
          // Synchronize paragraph highlight based on progress
          if (audioLegend?.paragraphs) {
            const totalParas = audioLegend.paragraphs.length;
            const currentIdx = Math.min(totalParas - 1, Math.floor((next / 100) * totalParas));
            setActiveParagraph(currentIdx);
          }
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, audioLegend]);

  const togglePlay = () => {
    if (isPlaying) {
      templeAudio.stopAmbientDrone();
      setIsPlaying(false);
    } else {
      templeAudio.startAmbientDrone();
      setIsPlaying(true);
    }
  };

  const handleRingBell = () => {
    templeAudio.playTempleBell(587.33, 4.5);
  };

  const handleBlowShankha = () => {
    templeAudio.playShankha();
  };

  const handleParagraphClick = (index) => {
    if (!audioLegend?.paragraphs) return;
    const totalParas = audioLegend.paragraphs.length;
    const targetProgress = (index / totalParas) * 100;
    setProgress(targetProgress);
    setActiveParagraph(index);
    if (!isPlaying) {
      templeAudio.startAmbientDrone();
      setIsPlaying(true);
    }
  };

  if (!audioLegend) return null;

  return (
    <div className="bg-sandstone-100/90 border border-sandstone-300 rounded-2xl p-4 sm:p-6 shadow-sm space-y-5">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sandstone-300/80 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-brass-100 text-brass-900 border border-brass-300">
              Sthalapurana & Legend Audio
            </span>
            <span className="text-xs text-charcoal-500 font-medium">
              Duration: {audioLegend.duration}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold font-serif text-terracotta-800 mt-1">
            {audioLegend.title}
          </h3>
          <p className="text-xs text-charcoal-500">
            Narrated by <span className="font-semibold text-charcoal-700">{audioLegend.narrator}</span> • {templeName}
          </p>
        </div>

        {/* Quick Acoustic Triggers */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleRingBell}
            className="flex items-center space-x-1.5 bg-sandstone-50 hover:bg-sandstone-200 text-charcoal-800 border border-sandstone-300 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95 shadow-xs"
            title="Ring Consecrated Brass Bell"
          >
            <Bell className="w-3.5 h-3.5 text-brass-700" />
            <span>Bell (घण्टा)</span>
          </button>

          <button
            onClick={handleBlowShankha}
            className="flex items-center space-x-1.5 bg-sandstone-50 hover:bg-sandstone-200 text-charcoal-800 border border-sandstone-300 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95 shadow-xs"
            title="Blow Sacred Shankha Conch"
          >
            <Wind className="w-3.5 h-3.5 text-terracotta-700" />
            <span>Shankha (शङ्ख)</span>
          </button>
        </div>
      </div>

      {/* Audio Player Controls Bar */}
      <div className="bg-sandstone-50 border border-sandstone-300 rounded-xl p-3.5 flex flex-col sm:flex-row items-center gap-3">
        
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={`w-11 h-11 rounded-full flex items-center justify-center text-white transition-all shadow-md active:scale-95 ${
            isPlaying ? 'bg-terracotta-800 ring-4 ring-terracotta-300 animate-pulse' : 'bg-terracotta-700 hover:bg-terracotta-800'
          }`}
        >
          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
        </button>

        {/* Scrubber Progress Bar */}
        <div className="flex-1 w-full space-y-1">
          <div className="flex justify-between text-[11px] font-semibold text-charcoal-600">
            <span className="flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-brass-600" />
              <span>{isPlaying ? 'Playing Vedic Resonance...' : 'Paused'}</span>
            </span>
            <span>{Math.round(progress)}% Completed</span>
          </div>
          <div className="relative w-full h-2 bg-sandstone-200 rounded-full overflow-hidden cursor-pointer"
               onClick={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 const pos = (e.clientX - rect.left) / rect.width;
                 setProgress(pos * 100);
               }}>
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-brass-gradient rounded-full transition-all duration-300"
            />
          </div>
        </div>

        {/* Ambient Wave Graphic */}
        <div className="hidden md:flex items-center space-x-1 h-6 px-2">
          {[40, 75, 50, 90, 60, 85, 45, 95, 70, 55].map((h, i) => (
            <span
              key={i}
              style={{ height: isPlaying ? `${h}%` : '20%' }}
              className={`w-1 bg-terracotta-600 rounded-full transition-all duration-300 ${
                isPlaying ? 'opacity-90' : 'opacity-30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Synchronized Interactive Transcript Reader */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold font-serif text-terracotta-800 uppercase tracking-wide">
          <span className="flex items-center">
            <BookOpen className="w-3.5 h-3.5 text-brass-600 mr-1.5" />
            Interactive Sthalapurana Transcript (Click paragraph to navigate)
          </span>
          <span className="text-[11px] text-charcoal-400 font-sans font-normal lowercase">
            auto-synchronized
          </span>
        </div>

        <div className="space-y-2.5">
          {audioLegend.paragraphs && audioLegend.paragraphs.map((para, idx) => {
            const isActive = activeParagraph === idx;
            return (
              <div
                key={idx}
                onClick={() => handleParagraphClick(idx)}
                className={`p-3.5 rounded-xl border text-xs sm:text-sm leading-relaxed transition-all cursor-pointer ${
                  isActive
                    ? 'bg-brass-50/80 border-brass-400 text-charcoal-900 shadow-sm ring-1 ring-brass-400/50 pl-4 border-l-4 border-l-brass-600'
                    : 'bg-sandstone-50 border-sandstone-300/80 text-charcoal-600 hover:bg-sandstone-200/60 hover:text-charcoal-800'
                }`}
              >
                <div className="flex items-start space-x-2">
                  <span className={`text-[10px] font-bold font-serif px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-brass-600 text-white' : 'bg-sandstone-200 text-charcoal-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <p className="flex-1">{para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
