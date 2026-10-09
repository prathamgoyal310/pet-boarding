import React, { useState } from 'react';
import { ROUTINE_STAGES } from '../../constants/routine';

export default function DailyRoutine() {
  const [activeStage, setActiveStage] = useState(0);

  const current = ROUTINE_STAGES[activeStage] || ROUTINE_STAGES[0];

  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 reveal-up" id="routine">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f26a8d]">
          Circadian Rhythm &amp; Well-Being
        </span>
        <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl text-[#f3e9dc] tracking-wide">
          A Day in the Life at Furrever Inn
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 font-normal leading-relaxed">
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
                    ? 'bg-[#3d0d17] border-[#dd2d4a] shadow-lg ring-1 ring-[#dd2d4a]/50'
                    : 'bg-[#26070d] border-[#880d1e]/40 hover:border-[#f26a8d]/50'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${
                    isActive ? 'bg-[#dd2d4a] text-white' : 'bg-[#140205] text-[#f26a8d]'
                  }`}
                >
                  {idx + 1}
                </div>
                <div className="space-y-0.5 flex-1">
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
                  <h4 className="font-['Playfair_Display',serif] text-base text-[#f3e9dc]">
                    {stage.title}
                  </h4>
                  <p className="text-[11px] text-[#f49cbb] line-clamp-1">{stage.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Spotlight Media & Translucent Overlay */}
        <div className="lg:col-span-7 bg-[#26070d] border border-[#880d1e]/45 overflow-hidden relative flex flex-col justify-end min-h-[420px] shadow-2xl group">
          <img
            src={current.img}
            alt={current.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140205] via-[#140205]/40 to-transparent"></div>

          {/* Translucent Glass Box Overlay */}
          <div className="relative z-10 m-6 p-6 bg-[#140205]/80 backdrop-blur-md border border-white/15 shadow-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cbeef3]">
                <span className="material-symbols-outlined text-sm text-[#dd2d4a]">schedule</span>
                <span>{current.time}</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#cbeef3] bg-[#cbeef3]/15 px-2 py-0.5 border border-[#cbeef3]/40">
                {current.note}
              </span>
            </div>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl text-[#f3e9dc]">
              {current.title}
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
              {current.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
