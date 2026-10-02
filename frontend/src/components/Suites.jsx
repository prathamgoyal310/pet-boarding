import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Suites() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10" id="suites">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-widest text-[#ffb4ac] font-bold">
          Private Living Quarters
        </span>
        <h2 className="font-display text-3xl sm:text-4xl text-white mt-2">
          Architectural Chambers Designed for Canine Rest
        </h2>
      </div>

      {/* Featured Large Suite: The Garden Play Suite */}
      <div className="bg-[#f5f3f4] text-[#0b090a] p-8 lg:p-12 mb-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0b090a] text-[#f5f3f4] text-[10px] font-bold uppercase tracking-widest">
              Our Largest Suite
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-normal leading-tight text-[#0b090a]">
              The Garden Play Suite
            </h3>
            <p className="text-sm md:text-base text-[#161a1d] leading-relaxed">
              An expansive 900-square-foot private indoor living area with a nearly 2,000 sq.ft outdoor playing grass lawn. Ideal for all breeds, active dogs, and companions who love open space and joyful outdoor playtime.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-[#0b090a]/15">
              <div>
                <div className="text-[10px] uppercase font-bold text-[#660708]">Indoor Living</div>
                <div className="font-display text-2xl text-[#0b090a]">900 sq.ft</div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-[#660708]">Outdoor Playing Area</div>
                <div className="font-display text-2xl text-[#0b090a]">Nearly 2,000 sq.ft</div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-[#660708]">Attendant Ratio</div>
                <div className="font-display text-2xl text-[#0b090a]">1 : 1 Dedicated</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="#enquiry"
                className="bg-[#ba1a1a] text-white px-8 py-3.5 hover:bg-[#a4161a] transition-all font-bold text-xs uppercase tracking-widest shadow-md hover:scale-105"
              >
                Check Availability
              </a>
              <span className="font-display text-3xl font-bold text-[#0b090a]">
                ₹1,199 <span className="text-xs uppercase text-[#660708] font-normal tracking-wider">/ Night</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden border border-[#0b090a]/20 shadow-xl group">
              <img
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                src="/assets/images/stitch_play.jpg"
                alt="The Garden Play Suite at Furrever Inn"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Comparative Suite Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Suite 1 */}
        <div className="bg-[#131112] border border-white/10 p-8 flex flex-col justify-between hover:border-[#ba1a1a] transition-all duration-300">
          <div>
            <div className="relative overflow-hidden mb-6 border border-white/10">
              <img
                src="/assets/images/stitch_care.jpg"
                alt="The Courtyard Atelier"
                className="w-full h-56 object-cover brightness-95 transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8c8281] font-bold">Category 02</span>
                  <h4 className="font-display text-2xl text-white">The Courtyard Atelier</h4>
                </div>
                <div className="text-right">
                  <span className="font-display text-2xl text-[#ffb4ac] font-bold">₹3,800</span>
                  <span className="block text-[10px] uppercase text-[#8c8281]">/ Night</span>
                </div>
              </div>
              <p className="text-xs text-[#b1a7a6] leading-relaxed">
                320 sq.ft private climate-controlled salon featuring custom Danish timber daybeds, direct sliding door access to a sheltered sun patio, and continuous HEPA circulation.
              </p>
              <ul className="space-y-2 border-t border-white/10 pt-4 text-xs text-[#b1a7a6]">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ba1a1a]" /> 320 sq.ft living + 150 sq.ft terrace</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ba1a1a]" /> 2 Daily private sensory trail walks</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ba1a1a]" /> 24/7 Access to personal HD camera stream</li>
              </ul>
            </div>
          </div>
          <div className="pt-8">
            <a
              href="#enquiry"
              className="block text-center w-full py-3 border border-white/20 hover:border-[#ba1a1a] text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300"
            >
              Book Courtyard Atelier
            </a>
          </div>
        </div>

        {/* Suite 2 */}
        <div className="bg-[#131112] border border-white/10 p-8 flex flex-col justify-between hover:border-[#ba1a1a] transition-all duration-300">
          <div>
            <div className="relative overflow-hidden mb-6 border border-white/10">
              <img
                src="/assets/images/stitch_food.jpg"
                alt="The Veranda Chamber"
                className="w-full h-56 object-cover brightness-95 transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8c8281] font-bold">Category 03</span>
                  <h4 className="font-display text-2xl text-white">The Veranda Chamber</h4>
                </div>
                <div className="text-right">
                  <span className="font-display text-2xl text-[#ffb4ac] font-bold">₹3,200</span>
                  <span className="block text-[10px] uppercase text-[#8c8281]">/ Night</span>
                </div>
              </div>
              <p className="text-xs text-[#b1a7a6] leading-relaxed">
                220 sq.ft tranquil sanctuary with elevated sleeping platform, orthopedic memory support, full acoustic baffling, and soothing diffused daylight through fluted architectural glass.
              </p>
              <ul className="space-y-2 border-t border-white/10 pt-4 text-xs text-[#b1a7a6]">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ba1a1a]" /> 220 sq.ft tranquil interior</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ba1a1a]" /> Custom farm-to-bowl culinary inclusion</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ba1a1a]" /> Daily evening brush &amp; botanical coat mist</li>
              </ul>
            </div>
          </div>
          <div className="pt-8">
            <a
              href="#enquiry"
              className="block text-center w-full py-3 border border-white/20 hover:border-[#ba1a1a] text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300"
            >
              Book Veranda Chamber
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
