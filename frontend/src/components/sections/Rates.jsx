import React from 'react';
import { useTariffCalculator } from '../../hooks/useTariffCalculator';
import { HOURLY_PACKAGES } from '../../constants/pricing';

export default function Rates() {
  const { selectedDays, activePlan, handleSelectDays, plans } = useTariffCalculator();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 relative overflow-hidden reveal-up" id="rates">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f26a8d]">
          Transparent Honorarium
        </span>
        <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl text-[#f3e9dc] tracking-wide">
          Stay Duration &amp; Tariff Estimator
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 font-normal leading-relaxed">
          Select anticipated duration to preview comprehensive care inclusions and calculated honorarium.
        </p>
      </div>

      {/* Hourly / Daycare Quick Rates Grid */}
      <div className="mb-12">
        <h3 className="font-['Cinzel',serif] text-xl text-[#f3e9dc] mb-6 text-center">
          Daycare &amp; Boarding Packages
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-3">
          {HOURLY_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-4 text-center border transition-all duration-300 ${
                pkg.featured
                  ? 'bg-[#3d0d17] border-[#dd2d4a] shadow-[0_0_20px_rgba(221,45,74,0.45)] scale-105 z-10'
                  : 'bg-[#26070d] border-[#880d1e]/40 hover:border-[#f26a8d]/60'
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#cbeef3] block">
                {pkg.duration}
              </span>
              <div className="font-['Cinzel',serif] text-xl text-[#f3e9dc] font-bold my-1">
                {pkg.rate}
              </div>
              <p className="text-[11px] font-semibold text-[#f3e9dc]">{pkg.name}</p>
              <p className="text-[10px] text-[#f49cbb] mt-1">{pkg.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Extended Stay Duration Estimator */}
      <div className="bg-[#26070d] border border-[#880d1e]/50 p-8 lg:p-12 shadow-2xl">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {plans.map((plan) => (
            <button
              key={plan.days}
              type="button"
              onClick={() => handleSelectDays(plan.days)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedDays === plan.days
                  ? 'bg-[#dd2d4a] text-white shadow-[0_0_15px_rgba(221,45,74,0.5)] border border-[#f26a8d]/60'
                  : 'bg-[#140205] text-[#f3e9dc]/80 hover:text-white border border-[#880d1e]/40 hover:border-[#f26a8d]/50'
              }`}
            >
              {plan.days} {plan.days === 1 ? 'Day' : 'Nights'}
            </button>
          ))}
        </div>

        {/* Selected Tier Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#140205] border border-[#880d1e]/40 p-6 lg:p-8">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#f26a8d]">
              Included In This Tier
            </span>
            <h3 className="font-['Playfair_Display',serif] text-2xl text-[#f3e9dc]">
              {activePlan.label}
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#f3e9dc]/80">
              {activePlan.breakdown}
            </p>
            <ul className="space-y-2 pt-2">
              {activePlan.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-[#f3e9dc]">
                  <span className="material-symbols-outlined text-[#cbeef3] text-sm">check</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 text-center lg:text-right border-t lg:border-t-0 lg:border-l border-[#880d1e]/40 pt-6 lg:pt-0 lg:pl-8 space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#f49cbb] block font-semibold">
                Calculated Honorarium
              </span>
              <div className="font-['Cinzel',serif] text-3xl sm:text-4xl text-[#f26a8d] font-bold">
                {activePlan.total}
              </div>
              <span className="text-[10px] text-[#f3e9dc]/75 block mt-1">
                All-inclusive with 24x7 CCTV &amp; daily journals
              </span>
            </div>
            <a
              href="#enquiry"
              className="inline-block w-full sm:w-auto px-8 py-3 bg-[#dd2d4a] hover:bg-[#b81d36] text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-lg"
            >
              Book This Duration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
