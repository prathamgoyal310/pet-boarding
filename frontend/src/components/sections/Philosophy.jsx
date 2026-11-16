import React from 'react';
import { PHILOSOPHY_PILLARS } from '../../constants/services';
import { navigate } from '../../constants/navigation';

export default function Philosophy() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 xl:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 reveal-up" id="philosophy">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
        {/* Left Column: Manifesto Text */}
        <div className="lg:col-span-6 space-y-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cbeef3]">
            Sanctuary Manifesto
          </span>
          <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl text-[#f3e9dc] font-bold leading-tight tracking-wide">
            Where Canine Comfort Meets Uncompromised Safety
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 leading-relaxed">
            At Furrever Inn, we believe your dog deserves more than a mere holding cage. We have built an expansive canine sanctuary dedicated to holistic well-being, freedom, personalized nutrition, and non-stop transparency for pet parents.
          </p>
          <div className="pt-1">
            <a
              href="/philosophy"
              onClick={(e) => {
                e.preventDefault();
                navigate('/philosophy');
              }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cbeef3] hover:text-white px-5 py-2.5 border border-[#cbeef3]/40 hover:border-[#cbeef3] bg-[#121722] transition-colors rounded shadow-sm hover:shadow-md"
            >
              <span>Explore Full Page: The Complete Sanctuary Manifesto</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="p-7 sm:p-8 bg-[#121722] border-l-4 border-[#dd2d4a] border border-white/5 space-y-3 shadow-xl">
            <h4 className="font-['Fraunces',serif] font-bold text-lg sm:text-xl text-[#f3e9dc]">
              "Our companions don't just stay — they flourish."
            </h4>
            <p className="text-xs sm:text-sm text-[#f49cbb] leading-relaxed">
              Every routine, meal, walk, and rest interval is tailored to your dog's unique temperament, ensuring absolute peace of mind while you travel.
            </p>
          </div>
        </div>

        {/* Right Column: 3 Pillars Bento Grid */}
        <div className="lg:col-span-6 space-y-6">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-7 sm:p-8 bg-[#121722] border border-white/10 hover:border-[#cbeef3]/60 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-start gap-5">
                <div className="w-13 h-13 rounded-xl bg-[#0b0e14] border border-[#cbeef3]/30 flex items-center justify-center shrink-0 group-hover:bg-[#dd2d4a] group-hover:text-white text-[#cbeef3] transition-colors shadow-md">
                  <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-['Fraunces',serif] font-bold text-lg sm:text-xl text-[#f3e9dc] group-hover:text-white transition-colors">
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
