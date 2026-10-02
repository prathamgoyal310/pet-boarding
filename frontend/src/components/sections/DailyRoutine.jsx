import React, { useState } from 'react';
import { ROUTINE_STAGES } from '../../constants/routine';

export default function DailyRoutine() {
  const [activeStage, setActiveStage] = useState(0);

  const current = ROUTINE_STAGES[activeStage] || ROUTINE_STAGES[0];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#aa8986]/20 reveal-up" id="routine">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffb4ac]">
          Circadian Rhythm &amp; Well-Being
        </span>
        <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl text-[#ffdad4] tracking-wide">
          A Day in the Life at Furrever Inn
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#dac2bf] font-normal leading-relaxed">
          Structured to balance invigorating lawn exercise, cognitive enrichment, peaceful rest intervals, and joyful dining.
        </p>
      </div>

      {/* Routine Interactive Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Timeline Tabs */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          {ROUTINE_STAGES.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`w-full p-4 text-left border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                  isActive
                    ? 'bg-[#201a1a] border-[#ba1a1a] shadow-lg ring-1 ring-[#ba1a1a]/40'
                    : 'bg-[#161214] border-[#aa8986]/20 hover:border-[#aa8986]/50'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${
                    isActive ? 'bg-[#ba1a1a] text-white' : 'bg-[#0d0a0b] text-[#ffb4ac]'
                  }`}
                >
                  {idx + 1}
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffb4ac]">
                      {stage.time}
                    </span>
                    {isActive && (
                      <span className="material-symbols-outlined text-[#ba1a1a] text-sm">
                        play_arrow
                      </span>
                    )}
                  </div>
                  <h4 className="font-['Playfair_Display',serif] text-base text-[#ffdad4]">
                    {stage.title}
                  </h4>
                  <p className="text-[11px] text-[#dac2bf] line-clamp-1">{stage.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Spotlight Media & Translucent Overlay */}
        <div className="lg:col-span-7 bg-[#161214] border border-[#aa8986]/30 overflow-hidden relative flex flex-col justify-end min-h-[420px] shadow-2xl group">
          <img
            src={current.img}
            alt={current.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b090a] via-[#0b090a]/40 to-transparent"></div>

          {/* Translucent Glass Box Overlay */}
          <div className="relative z-10 m-6 p-6 bg-[#161214]/60 backdrop-blur-md border border-white/15 shadow-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ffb4ac]">
                <span className="material-symbols-outlined text-sm text-[#ba1a1a]">schedule</span>
                <span>{current.time}</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 border border-emerald-800">
                {current.note}
              </span>
            </div>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl text-[#ffdad4]">
              {current.title}
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#dac2bf] leading-relaxed">
              {current.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
