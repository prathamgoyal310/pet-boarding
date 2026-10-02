import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-12 -left-20 w-96 h-96 rounded-full bg-[#660708]/30 blur-3xl opacity-60 z-0 ambient-float" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#ba1a1a]/15 blur-3xl opacity-50 z-0" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end relative z-10">
        {/* Left Column: Headlines & Call to actions */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
          <div className="inline-flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffb4ac] border border-white/20 px-3.5 py-1.5 bg-[#161a1d]/80 backdrop-blur-sm flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#ba1a1a]" />
              Private Estate Sanctuary • Haryana
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.12] tracking-tight">
              The fun they crave,<br />
              <span className="italic text-[#ffb4ac]">the care you trust.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#b1a7a6] max-w-xl leading-relaxed font-light">
              Furrever Inn Pvt. Ltd. is Haryana's dedicated luxury canine retreat. Featuring 900 sq.ft private suites, nearly 2,000 sq.ft private outdoor agility lawns, 24x7 live parental camera feeds, and 1:1 dedicated care.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 bg-[#ba1a1a] hover:bg-[#a4161a] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>Explore Accommodations</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#rates"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-[#ffb4ac] text-white px-7 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-white/5"
            >
              <span>View Transparent Tariffs</span>
            </a>
          </div>

          {/* Reassurance Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs text-[#b1a7a6]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ba1a1a]" />
              <span>100% Vaccinated Intake</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#ba1a1a]" />
              <span>1:1 Dedicated Attendant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>24x7 Live HD Feeds</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Spotlight Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative overflow-hidden border border-white/20 shadow-2xl group bg-[#161a1d]">
            <img
              src="/assets/images/stitch_hero.jpg"
              alt="Luxury suite with private garden lawn at Furrever Inn"
              className="w-full h-[420px] sm:h-[500px] object-cover brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b090a]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0b090a]/80 backdrop-blur-md border border-white/15">
              <div className="flex justify-between items-center text-xs">
                <div>
                  <span className="uppercase tracking-widest text-[#8c8281] block text-[10px]">Sanctuary Grounds</span>
                  <span className="font-display text-base text-white font-medium">Private 2,000 sq.ft Agility Lawn</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-[#ffb4ac] block">Capacity</span>
                  <span className="text-xs text-white font-bold">Limited to 8 Guests</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
