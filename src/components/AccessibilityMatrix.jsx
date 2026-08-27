import React from 'react';
import { Camera, Shirt, Accessibility, Footprints, Smartphone, ExternalLink, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AccessibilityMatrix({ rulesMatrix }) {
  if (!rulesMatrix) return null;

  const items = [
    {
      title: "Photography Rules",
      icon: Camera,
      badge: rulesMatrix.photography.badge,
      color: rulesMatrix.photography.color,
      details: rulesMatrix.photography.details,
      allowed: rulesMatrix.photography.allowed
    },
    {
      title: "Dress Code Mandate",
      icon: Shirt,
      badge: rulesMatrix.dressCode.badge,
      color: rulesMatrix.dressCode.color,
      details: rulesMatrix.dressCode.details,
      allowed: rulesMatrix.dressCode.allowed
    },
    {
      title: "Wheelchair & Assistance",
      icon: Accessibility,
      badge: rulesMatrix.wheelchair.badge,
      color: rulesMatrix.wheelchair.color,
      details: rulesMatrix.wheelchair.details,
      allowed: rulesMatrix.wheelchair.allowed
    },
    {
      title: "Footwear Deposit",
      icon: Footprints,
      badge: rulesMatrix.footwear.badge,
      color: rulesMatrix.footwear.color,
      details: rulesMatrix.footwear.details,
      allowed: rulesMatrix.footwear.allowed
    },
    {
      title: "Smart Baggage Lockers",
      icon: Smartphone,
      badge: rulesMatrix.mobileLockers.badge,
      color: rulesMatrix.mobileLockers.color,
      details: rulesMatrix.mobileLockers.details,
      allowed: rulesMatrix.mobileLockers.allowed
    }
  ];

  const getBadgeStyle = (color) => {
    switch (color) {
      case 'green':
      case 'emerald':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'amber':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'red':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      case 'blue':
      default:
        return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold font-serif text-terracotta-800 uppercase tracking-wide flex items-center">
          <ShieldCheck className="w-4 h-4 text-brass-600 mr-1.5" />
          Cultural Rules & Accessibility Matrix
        </h4>
        <span className="text-[11px] text-charcoal-500 font-medium">Standardized Shrine Protocols</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className="bg-sandstone-50 border border-sandstone-300/80 rounded-xl p-3.5 hover:border-sandstone-400 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-sandstone-200/80 flex items-center justify-center text-terracotta-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-charcoal-800 font-serif">
                      {item.title}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${getBadgeStyle(item.color)}`}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          );
        })}

        {/* Official Booking Card */}
        {rulesMatrix.bookingPass && (
          <div className="bg-terracotta-50/70 border border-terracotta-200 rounded-xl p-3.5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-terracotta-900 font-serif flex items-center">
                  🎟️ Official Darshan Passes
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brass-100 text-brass-800 border border-brass-300">
                  Verified Trust
                </span>
              </div>
              <p className="text-xs text-charcoal-600 mb-2">
                {rulesMatrix.bookingPass.authority}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {rulesMatrix.bookingPass.passTypes.map((type, i) => (
                  <span key={i} className="text-[10px] bg-sandstone-100 text-charcoal-700 px-2 py-0.5 rounded border border-sandstone-200">
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={rulesMatrix.bookingPass.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1.5 w-full bg-terracotta-700 hover:bg-terracotta-800 text-sandstone-50 text-xs font-bold py-2 px-3 rounded-lg transition-colors shadow-xs"
            >
              <span>Book on Official Trust Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
