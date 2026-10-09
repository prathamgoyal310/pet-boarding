import React from 'react';
import stitchHero from '../../assets/images/stitch_hero.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center py-8 sm:py-10 lg:py-12 xl:py-14 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 overflow-hidden reveal-up">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-12 -left-20 w-96 h-96 rounded-full bg-[#880d1e]/40 blur-3xl opacity-60 z-0"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none absolute top-1/2 right-10 w-80 h-80 rounded-full bg-[#dd2d4a]/20 blur-3xl opacity-40 z-0"
        aria-hidden="true"
      ></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center relative z-10">
        {/* Headline & Subheadline (6 cols on desktop) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-3">
            <span className="font-['Metrophobic',sans-serif] text-[0.6875rem] uppercase tracking-[0.18em] text-[#f26a8d] border border-[#880d1e]/60 px-3 py-1 bg-[#26070d]">
              Private Estate • Haryana
            </span>
          </div>

          <div className="space-y-3 lg:space-y-4">
            <h1 className="font-['EB_Garamond',serif] text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#f3e9dc] font-normal leading-[1.06] tracking-tight">
              The Fun They Crave, The Care You Trust.
            </h1>
            <p className="font-['Metrophobic',sans-serif] text-sm sm:text-base lg:text-lg text-[#f3e9dc]/85 max-w-xl font-normal leading-relaxed">
              Welcome to Furrever Inn Pvt. Ltd. — Haryana's premier canine sanctuary offering 24x7 CCTV access, dedicated pick &amp; drop, frequent video updates, hospital-grade hygiene, and uncompromised veterinary care.
            </p>
          </div>

          {/* Metric Badges with striking Light Cyan contrast */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-[#880d1e]/40">
            <div>
              <div className="font-['EB_Garamond',serif] text-2xl lg:text-3xl text-[#cbeef3] font-medium drop-shadow-[0_0_10px_rgba(203,238,243,0.3)]">
                24/7
              </div>
              <div className="font-['Metrophobic',sans-serif] text-[10px] sm:text-xs lg:text-[0.6875rem] uppercase tracking-wider text-[#f49cbb] mt-1 font-semibold">
                Veterinary ICU On-Call
              </div>
            </div>
            <div className="border-l border-[#880d1e]/40 pl-3 sm:pl-4">
              <div className="font-['EB_Garamond',serif] text-2xl lg:text-3xl text-[#cbeef3] font-medium drop-shadow-[0_0_10px_rgba(203,238,243,0.3)]">
                1 : 1
              </div>
              <div className="font-['Metrophobic',sans-serif] text-[10px] sm:text-xs lg:text-[0.6875rem] uppercase tracking-wider text-[#f49cbb] mt-1 font-semibold">
                Caregiver Dedicated Ratio
              </div>
            </div>
            <div className="border-l border-[#880d1e]/40 pl-3 sm:pl-4">
              <div className="font-['EB_Garamond',serif] text-2xl lg:text-3xl text-[#cbeef3] font-medium drop-shadow-[0_0_10px_rgba(203,238,243,0.3)]">
                100%
              </div>
              <div className="font-['Metrophobic',sans-serif] text-[10px] sm:text-xs lg:text-[0.6875rem] uppercase tracking-wider text-[#f49cbb] mt-1 font-semibold">
                Farm-to-Bowl Organic
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              className="bg-[#dd2d4a] text-white px-6 sm:px-8 py-3.5 sm:py-4 border border-[#f26a8d]/40 hover:bg-[#b81d36] transition-all duration-300 font-['Metrophobic',sans-serif] text-xs uppercase tracking-widest font-semibold shadow-[0_0_15px_rgba(221,45,74,0.4)]"
              href="#rates"
            >
              Explore Suites &amp; Rates
            </a>
            <a
              className="bg-transparent text-[#f3e9dc] px-6 sm:px-8 py-3.5 sm:py-4 border border-[#880d1e]/60 hover:border-[#f26a8d] hover:bg-[#f26a8d]/10 transition-all duration-300 font-['Metrophobic',sans-serif] text-xs uppercase tracking-widest font-semibold"
              href="#philosophy"
            >
              The Sanctuary Manifesto
            </a>
          </div>
        </div>

        {/* Architectural Feature Image (6 cols on desktop) */}
        <div className="lg:col-span-6 relative">
          <div className="relative overflow-hidden bg-[#26070d] border border-[#880d1e]/50 group shadow-2xl">
            <img
              alt="The Comfort Stay Suite at Furrever Inn featuring a Weimaraner reposing on an emerald tufted ottoman in a minimalist timber-accented architectural salon with floor-to-ceiling garden panorama."
              className="w-full h-[360px] sm:h-[440px] lg:h-[460px] xl:h-[520px] 2xl:h-[580px] object-cover filter brightness-[0.95] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              src={stitchHero}
            />
            {/* Bottom Vignette / Overlay Specs */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#140205] via-[#140205]/85 to-transparent p-4 sm:p-6 pt-10 sm:pt-12 flex justify-between items-end border-t border-[#880d1e]/35">
              <div>
                <span className="font-['Metrophobic',sans-serif] text-[0.6875rem] uppercase text-[#f26a8d] tracking-widest block mb-1 font-semibold">
                  Suite 01 Spotlight
                </span>
                <h3 className="font-['EB_Garamond',serif] text-lg sm:text-xl lg:text-2xl text-[#f3e9dc] font-medium leading-tight">
                  The Comfort Stay Suite
                </h3>
                <p className="font-['Metrophobic',sans-serif] text-[11px] sm:text-xs text-[#f49cbb] mt-0.5">
                  Radiant hydronic thermal flooring • Acoustically isolated forest exposure
                </p>
              </div>
              <div className="text-right shrink-0 ml-3 sm:ml-4">
                <span className="font-['Metrophobic',sans-serif] text-[0.6875rem] uppercase text-[#cbeef3] block mb-1 font-semibold">
                  Sanctuary Scale
                </span>
                <div className="font-['EB_Garamond',serif] text-base sm:text-lg lg:text-xl text-[#f3e9dc]">
                  420 sq.ft + Private Lawn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
