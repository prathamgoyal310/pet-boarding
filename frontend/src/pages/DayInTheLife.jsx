import React, { useEffect } from 'react';
import { GUEST_DAY_ROUTINE } from '../constants/guestDiary';
import { BRAND } from '../constants/brand';

export default function DayInTheLife({ onNavigateHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto min-h-screen">
      {/* Navigation Breadcrumb / Return */}
      <div className="mb-10 sm:mb-12">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) onNavigateHome();
            else window.location.hash = '';
          }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#cbeef3] hover:text-white px-5 py-2.5 border border-[#cbeef3]/30 hover:border-[#cbeef3] bg-[#121722] transition-colors rounded-lg shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span>Return to Sanctuary Overview</span>
        </a>
      </div>

      {/* Page Header */}
      <div className="text-center space-y-5 mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#121722] border border-[#cbeef3]/40 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#cbeef3] animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#cbeef3]">
            Verified Daily Cadence
          </span>
        </div>

        {/* User-requested exact heading */}
        <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f3e9dc] tracking-wide max-w-4xl mx-auto leading-tight font-bold">
          A day in the life of a happy Furrever Inn guest.
        </h1>

        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 max-w-2xl mx-auto leading-relaxed">
          From peaceful morning trail sniff breaks to affectionate evening updates, explore how our structured circadian schedule ensures holistic well-being for your companion.
        </p>
      </div>

      {/* Routine Cards matching user-provided layout & content */}
      <div className="space-y-8 sm:space-y-10">
        {GUEST_DAY_ROUTINE.map((item) => (
          <div
            key={item.id}
            className="bg-[#121722] border border-white/10 hover:border-[#cbeef3]/50 rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-xl group hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Ambient subtle glow on hover */}
            <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-[#cbeef3]/5 rounded-full blur-2xl group-hover:bg-[#cbeef3]/10 transition-all"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center relative z-10">
              {/* Photo Vignette */}
              <div className="md:col-span-4 relative h-48 sm:h-52 md:h-56 w-full rounded-xl overflow-hidden border border-white/10 group-hover:shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14]/80 via-transparent to-transparent"></div>
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#dd2d4a]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-md">
                    {item.time}
                  </span>
                </div>
              </div>

              {/* Text Narrative */}
              <div className="md:col-span-8 space-y-3">
                {/* Time & Category line */}
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider">
                  <span className="text-[#cbeef3] font-bold font-mono">
                    {item.time}
                  </span>
                  <span className="text-[#f49cbb]/60">•</span>
                  <span className="text-[#f49cbb] uppercase tracking-wider text-[11px] font-medium">
                    {item.category}
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#cbeef3]/70 font-mono">
                    Phase 0{item.id}
                  </span>
                </div>

                {/* Card Title */}
                <h2 className="font-['Fraunces',serif] text-xl sm:text-2xl text-[#f3e9dc] font-bold group-hover:text-white transition-colors">
                  {item.title}
                </h2>

                {/* Card Description - Exact text from user image */}
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/80 font-normal leading-relaxed">
                  {item.description}
                </p>

                {/* Supplemental detail for editorial completeness */}
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#f49cbb]/90 pt-1 leading-normal">
                  {item.extendedDesc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Sanctuary Assurance & CTA */}
      <div className="mt-14 p-8 sm:p-10 bg-gradient-to-r from-[#121722] via-[#1a2336] to-[#121722] border border-[#dd2d4a]/60 rounded-2xl text-center space-y-6 shadow-2xl">
        <div className="space-y-2 max-w-xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#cbeef3]">
            Unmatched Peace of Mind
          </span>
          <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">
            Ready to give your dog this experience?
          </h3>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
            Every guest at Furrever Inn enjoys continuous attendant care, personalized nutrition, and 24x7 CCTV footage available directly on your phone.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a
            href="#enquiry"
            onClick={() => {
              if (onNavigateHome) onNavigateHome();
              setTimeout(() => {
                const el = document.getElementById('enquiry');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-8 py-4 bg-[#dd2d4a] hover:bg-[#b81d36] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(221,45,74,0.5)] rounded-lg cursor-pointer"
          >
            Reserve a Sovereign Suite
          </a>
          <a
            href={`tel:${BRAND.rawPhone}`}
            className="px-8 py-4 border border-[#cbeef3]/40 hover:border-[#cbeef3] text-[#cbeef3] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-lg flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            Speak with Concierge
          </a>
        </div>
      </div>
    </main>
  );
}
