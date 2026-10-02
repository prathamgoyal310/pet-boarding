import React from 'react';
import { PHILOSOPHY_PILLARS } from '../../constants/services';

export default function Philosophy() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#aa8986]/20 reveal-up" id="philosophy">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Manifesto Text */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffb4ac]">
            Sanctuary Manifesto
          </span>
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl text-[#ffdad4] leading-tight tracking-wide">
            Where Canine Comfort Meets Uncompromised Safety
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#dac2bf] leading-relaxed">
            At Furrever Inn, we believe your dog deserves more than a mere holding cage. We have built an expansive canine sanctuary dedicated to holistic well-being, freedom, personalized nutrition, and non-stop transparency for pet parents.
          </p>
          <div className="p-6 bg-[#161214] border-l-4 border-[#ba1a1a] space-y-2">
            <h4 className="font-['Playfair_Display',serif] text-lg text-[#ffdad4]">
              "Our companions don't just stay — they flourish."
            </h4>
            <p className="text-xs text-[#dac2bf]">
              Every routine, meal, walk, and rest interval is tailored to your dog's unique temperament, ensuring absolute peace of mind while you travel.
            </p>
          </div>
        </div>

        {/* Right Column: 3 Pillars Bento Grid */}
        <div className="lg:col-span-6 space-y-4">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 bg-[#161214] border border-[#aa8986]/30 hover:border-[#ba1a1a]/60 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#201a1a] border border-[#ba1a1a]/40 flex items-center justify-center shrink-0 group-hover:bg-[#ba1a1a] group-hover:text-white text-[#ffb4ac] transition-colors">
                  <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-['Playfair_Display',serif] text-lg text-[#ffdad4] group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#dac2bf] leading-relaxed">
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
