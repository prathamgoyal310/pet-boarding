import React from 'react';
import { SUITES } from '../../constants/suites';
import { navigate } from '../../constants/navigation';

export default function Suites() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 xl:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 reveal-up" id="suites">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cbeef3]">
          Architectural Sanctuaries
        </span>
        <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl text-[#f3e9dc] font-bold tracking-wide">
          Sovereign Chambers &amp; Grounds
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 font-normal leading-relaxed max-w-2xl mx-auto">
          Crafted with acoustic decoupling, orthopedic comfort, and direct lawn connectivity to ensure an anxiety-free stay.
        </p>
        <div className="pt-2">
          <a
            href="/suites"
            onClick={(e) => {
              e.preventDefault();
              navigate('/suites');
            }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cbeef3] hover:text-white px-5 py-2.5 border border-[#cbeef3]/40 hover:border-[#cbeef3] bg-[#121722] transition-colors rounded shadow-sm hover:shadow-md"
          >
            <span>Explore Full Page: Architectural Blueprints &amp; Specifications</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Featured Suite: The Garden Play Suite */}
      <div className="mb-16 sm:mb-20 bg-[#121722] border border-[#dd2d4a]/70 p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden group rounded-sm">
        <div className="absolute top-0 right-0 bg-[#dd2d4a] text-white px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-md">
          Signature Sanctuary
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative overflow-hidden h-72 lg:h-96 rounded-sm">
            <img
              src={SUITES[0].image}
              alt="Garden Play Suite"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0b0e14]/90 backdrop-blur-md p-3.5 border border-white/10">
              <span className="text-xs font-semibold text-[#f3e9dc]">
                900 sq.ft Indoor Area • ~2,000 sq.ft Private Manicured Lawn
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3]">
                Primary Flagship Experience
              </span>
              <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">
                The Garden Play Suite
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#f3e9dc]/80 leading-relaxed">
                Our signature expansive suite engineered for active canine guests desiring unrestrained movement, direct manicured lawn access, and dedicated attendant monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#f3e9dc]/85">
                <span className="material-symbols-outlined text-[#cbeef3] text-sm">check_circle</span>
                <span>900 sq.ft Indoor Climate Suite</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#f3e9dc]/85">
                <span className="material-symbols-outlined text-[#cbeef3] text-sm">check_circle</span>
                <span>~2,000 sq.ft Private Lawn</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#f3e9dc]/85">
                <span className="material-symbols-outlined text-[#cbeef3] text-sm">check_circle</span>
                <span>24x7 HD Live Night-Vision CCTV</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#f3e9dc]/85">
                <span className="material-symbols-outlined text-[#cbeef3] text-sm">check_circle</span>
                <span>Unlimited Healthy Treats &amp; Play</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-5 border-t border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#f49cbb] font-semibold">Starting from</span>
                <div className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f26a8d] font-bold">
                  ₹1,199 <span className="text-xs font-normal text-[#f3e9dc]/80 font-sans">/ night</span>
                </div>
              </div>
              <a
                href="#enquiry"
                className="px-7 py-3.5 bg-[#dd2d4a] hover:bg-[#b81d36] text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-lg"
              >
                Reserve Garden Suite
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Other Suites Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {SUITES.slice(1).map((suite) => (
          <div
            key={suite.name}
            className="bg-[#121722] border border-white/10 hover:border-[#cbeef3]/60 transition-all duration-300 group shadow-lg flex flex-col justify-between rounded-sm"
          >
            <div className="relative overflow-hidden h-64 sm:h-72">
              <img
                src={suite.image}
                alt={suite.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-3 left-3 bg-[#0b0e14]/90 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-[11px] font-semibold text-[#f3e9dc]">
                {suite.dimensions}
              </div>
            </div>

            <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3]">
                  {suite.type}
                </span>
                <h3 className="font-['Fraunces',serif] text-xl sm:text-2xl text-[#f3e9dc] font-bold">
                  {suite.name}
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
                  {suite.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-white/10">
                {suite.features.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#f3e9dc]/80">
                    <span className="material-symbols-outlined text-[#cbeef3] text-sm">check</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-white/10 mt-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#f49cbb] font-semibold">Starting Tariff</span>
                  <div className="font-['Fraunces',serif] text-xl sm:text-2xl text-[#f26a8d] font-bold">
                    {suite.price} <span className="text-xs font-normal text-[#f3e9dc]/80 font-sans">/ night</span>
                  </div>
                </div>
                <a
                  href="#enquiry"
                  className="px-5 py-2.5 border border-[#dd2d4a] hover:bg-[#dd2d4a] text-[#f3e9dc] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Reserve
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
