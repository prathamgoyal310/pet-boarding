import React, { useState } from 'react';
import { ROUTINE_STAGES } from '../../constants/routine';
import { navigate } from '../../constants/navigation';

export default function DailyRoutine() {
  const [activeStage, setActiveStage] = useState(0);

  const current = ROUTINE_STAGES[activeStage] || ROUTINE_STAGES[0];

  return (
    <section className="py-24 sm:py-28 lg:py-32 xl:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 reveal-up" id="routine">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-16 sm:mb-20 space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cbeef3]">
          Circadian Rhythm &amp; Well-Being
        </span>
        <h2 className="font-['Fraunces',serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#f3e9dc] font-bold tracking-wide sm:whitespace-nowrap">
          A Day in the Life at Furrever Inn
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 font-normal leading-relaxed max-w-2xl mx-auto">
          Structured to balance invigorating lawn exercise, cognitive enrichment, peaceful rest intervals, and joyful dining.
        </p>
        <div className="pt-3">
          <a
            href="/day-in-the-life"
            onClick={(e) => {
              e.preventDefault();
              navigate('/day-in-the-life');
            }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cbeef3] hover:text-white px-5 py-2.5 border border-[#cbeef3]/40 hover:border-[#cbeef3] bg-[#121722] transition-colors rounded shadow-sm hover:shadow-md"
          >
            <span>Explore Full Page: A day in the life of a happy Furrever Inn guest</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Routine Interactive Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-stretch">
        {/* Left Column: Timeline Tabs */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3.5 sm:gap-4">
          {ROUTINE_STAGES.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`w-full p-5 sm:p-6 text-left border transition-all duration-300 flex items-start gap-4 sm:gap-5 cursor-pointer rounded-sm ${
                  isActive
                    ? 'bg-[#1a2336] border-[#dd2d4a] shadow-lg ring-1 ring-[#dd2d4a]/50'
                    : 'bg-[#121722] border-white/10 hover:border-[#cbeef3]/40 hover:bg-[#151c2b]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${
                    isActive ? 'bg-[#dd2d4a] text-white shadow-md' : 'bg-[#0b0e14] text-[#cbeef3] border border-white/10'
                  }`}
                >
                  {idx + 1}
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#cbeef3]">
                      {stage.time}
                    </span>
                    {isActive && (
                      <span className="material-symbols-outlined text-[#dd2d4a] text-sm">
                        play_arrow
                      </span>
                    )}
                  </div>
                  <h4 className="font-['Fraunces',serif] text-base sm:text-lg text-[#f3e9dc] font-bold">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-[#f49cbb] line-clamp-1">{stage.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Spotlight Media & Translucent Overlay */}
        <div className="lg:col-span-7 bg-[#121722] border border-white/10 overflow-hidden relative flex flex-col justify-end min-h-[460px] lg:min-h-[520px] xl:min-h-[560px] shadow-2xl group rounded-sm">
          <img
            src={current.img}
            alt={current.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/50 to-transparent"></div>

          {/* Translucent Glass Box Overlay */}
          <div className="relative z-10 m-6 sm:m-8 lg:m-10 p-6 sm:p-8 bg-[#0b0e14]/90 backdrop-blur-md border border-white/15 shadow-2xl space-y-3.5 rounded-sm">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cbeef3]">
                <span className="material-symbols-outlined text-sm text-[#dd2d4a]">schedule</span>
                <span>{current.time}</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#cbeef3] bg-[#cbeef3]/15 px-2.5 py-1 border border-[#cbeef3]/40 rounded-sm">
                {current.note}
              </span>
            </div>
            <h3 className="font-['Fraunces',serif] text-xl sm:text-2xl lg:text-3xl text-[#f3e9dc] font-bold">
              {current.title}
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/85 leading-relaxed">
              {current.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
