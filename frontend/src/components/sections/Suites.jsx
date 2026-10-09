import React from 'react';
import { SUITES } from '../../constants/suites';

export default function Suites() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 reveal-up" id="suites">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f26a8d]">
          Architectural Sanctuaries
        </span>
        <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl text-[#f3e9dc] tracking-wide">
          Sovereign Chambers &amp; Grounds
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 font-normal leading-relaxed">
          Crafted with acoustic decoupling, orthopedic comfort, and direct lawn connectivity to ensure an anxiety-free stay.
        </p>
      </div>

      {/* Featured Suite: The Garden Play Suite */}
      <div className="mb-12 bg-[#26070d] border border-[#dd2d4a]/60 p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 bg-[#dd2d4a] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest shadow-md">
          Signature Sanctuary
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative overflow-hidden h-72 lg:h-96">
            <img
              src="/assets/images/play_area.jpg"
              alt="Garden Play Suite"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140205]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-[#140205]/85 backdrop-blur-md p-3 border border-[#880d1e]/50">
              <span className="text-xs font-semibold text-[#f3e9dc]">
                900 sq.ft Indoor Area • ~2,000 sq.ft Private Manicured Lawn
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f26a8d]">
                Primary Flagship Experience
              </span>
              <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl text-[#f3e9dc]">
                The Garden Play Suite
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#f3e9dc]/80 leading-relaxed">
                Our signature expansive suite engineered for active canine guests desiring unrestrained movement, direct manicured lawn access, and dedicated attendant monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#f3e9dc]/85">
                <span className="material-symbols-outlined text-[#cbeef3] text-sm">check_circle</span>
                <span>900 sq.ft Indoor Climate Suite</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#f3e9dc]/85">
                <span className="material-symbols-outlined text-[#cbeef3] text-sm">check_circle</span>
                <span>~2,000 sq.ft Private Lawn</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#f3e9dc]/85">
                <span className="material-symbols-outlined text-[#cbeef3] text-sm">check_circle</span>
                <span>24x7 HD Live Night-Vision CCTV</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#f3e9dc]/85">
                <span className="material-symbols-outlined text-[#cbeef3] text-sm">check_circle</span>
                <span>Unlimited Healthy Treats &amp; Play</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#880d1e]/40">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#f49cbb] font-semibold">Starting from</span>
                <div className="font-['Cinzel',serif] text-2xl text-[#f26a8d] font-bold">
                  ₹1,199 <span className="text-xs font-normal text-[#f3e9dc]/80 font-sans">/ night</span>
                </div>
              </div>
              <a
                href="#enquiry"
                className="px-6 py-3 bg-[#dd2d4a] hover:bg-[#b81d36] text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-lg"
              >
                Reserve Garden Suite
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Other Suites Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SUITES.slice(1).map((suite) => (
          <div
            key={suite.name}
            className="bg-[#26070d] border border-[#880d1e]/45 hover:border-[#f26a8d]/60 transition-all duration-300 group shadow-lg flex flex-col justify-between"
          >
            <div className="relative overflow-hidden h-60">
              <img
                src={suite.image}
                alt={suite.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140205]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 bg-[#140205]/85 backdrop-blur-md px-3 py-1 border border-[#880d1e]/50 text-[11px] font-semibold text-[#f3e9dc]">
                {suite.dimensions}
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#f26a8d]">
                  {suite.type}
                </span>
                <h3 className="font-['Playfair_Display',serif] text-xl text-[#f3e9dc]">
                  {suite.name}
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#f3e9dc]/80 leading-relaxed">
                  {suite.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#880d1e]/30">
                {suite.features.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#f3e9dc]/80">
                    <span className="material-symbols-outlined text-[#cbeef3] text-sm">check</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#880d1e]/30 mt-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#f49cbb] font-semibold">Starting Tariff</span>
                  <div className="font-['Cinzel',serif] text-lg text-[#f26a8d] font-bold">
                    {suite.price} <span className="text-xs font-normal text-[#f3e9dc]/80 font-sans">/ night</span>
                  </div>
                </div>
                <a
                  href="#enquiry"
                  className="px-4 py-2 border border-[#dd2d4a] hover:bg-[#dd2d4a] text-[#f26a8d] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
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
