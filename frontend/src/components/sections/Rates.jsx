import React from 'react';
import { HOURLY_PACKAGES } from '../../constants/pricing';

export default function Rates() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 xl:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 relative overflow-hidden reveal-up" id="rates">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cbeef3]">
          Transparent Honorarium
        </span>
        <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl text-[#f3e9dc] font-bold tracking-wide">
          Daycare &amp; Boarding Packages
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 font-normal leading-relaxed max-w-2xl mx-auto">
          All-inclusive care packages with 24x7 CCTV footage available, zero hidden surcharges, and loving certified attendants.
        </p>
        <div className="pt-2">
          <a
            href="#/rates"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cbeef3] hover:text-white px-5 py-2.5 border border-[#cbeef3]/40 hover:border-[#cbeef3] bg-[#121722] transition-colors rounded shadow-sm hover:shadow-md"
          >
            <span>Explore Full Page: Detailed Packages &amp; Inclusions Breakdown</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Hourly / Daycare Quick Rates Grid */}
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-4 lg:gap-4.5">
          {HOURLY_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-5 sm:p-6 text-center border transition-all duration-300 rounded-sm flex flex-col justify-between ${
                pkg.featured
                  ? 'bg-[#1a2336] border-2 border-[#dd2d4a] shadow-[0_0_20px_rgba(221,45,74,0.45)] scale-105 z-10'
                  : 'bg-[#121722] border-white/10 hover:border-[#cbeef3]/60'
              }`}
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#cbeef3] block mb-1">
                  {pkg.duration}
                </span>
                <div className="font-['Fraunces',serif] text-xl sm:text-2xl text-[#f3e9dc] font-bold my-2">
                  {pkg.rate}
                </div>
                <p className="text-[11px] font-semibold text-[#f3e9dc]">{pkg.name}</p>
              </div>
              <p className="text-[10px] text-[#f49cbb] mt-2 leading-relaxed">{pkg.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
