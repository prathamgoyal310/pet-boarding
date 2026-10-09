import React from 'react';
import { PHILOSOPHY_PILLARS } from '../../constants/services';

export default function Philosophy() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 reveal-up" id="philosophy">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Manifesto Text */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f26a8d]">
            Sanctuary Manifesto
          </span>
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl text-[#f3e9dc] leading-tight tracking-wide">
            Where Canine Comfort Meets Uncompromised Safety
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 leading-relaxed">
            At Furrever Inn, we believe your dog deserves more than a mere holding cage. We have built an expansive canine sanctuary dedicated to holistic well-being, freedom, personalized nutrition, and non-stop transparency for pet parents.
          </p>
          <div className="p-6 bg-[#26070d] border-l-4 border-[#dd2d4a] space-y-2">
            <h4 className="font-['Playfair_Display',serif] text-lg text-[#f3e9dc]">
              "Our companions don't just stay — they flourish."
            </h4>
            <p className="text-xs text-[#f49cbb]">
              Every routine, meal, walk, and rest interval is tailored to your dog's unique temperament, ensuring absolute peace of mind while you travel.
            </p>
          </div>
        </div>

        {/* Right Column: 3 Pillars Bento Grid */}
        <div className="lg:col-span-6 space-y-4">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 bg-[#26070d] border border-[#880d1e]/45 hover:border-[#f26a8d]/70 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#1c050a] border border-[#880d1e]/60 flex items-center justify-center shrink-0 group-hover:bg-[#dd2d4a] group-hover:text-white text-[#cbeef3] transition-colors">
                  <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-['Playfair_Display',serif] text-lg text-[#f3e9dc] group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
