import React from 'react';
import { BRAND } from '../../constants/brand';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#aa8986]/20 py-20 px-6 lg:px-12 reveal-up">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero.jpg"
          alt="Canine Sanctuary Grounds"
          className="w-full h-full object-cover object-center opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b090a] via-[#0b090a]/75 to-transparent"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#0b090a]/50 to-[#0b090a]"></div>
      </div>

      {/* Floating Ambient Glow Orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#660708]/30 blur-3xl opacity-50 ambient-float"></div>
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#ba1a1a]/20 blur-3xl opacity-40 ambient-float"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ffb4ac]/30 bg-[#161214]/80 backdrop-blur-md shadow-[0_0_20px_rgba(186,26,26,0.3)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#ffb4ac]">
            Premier Pet Sanctuary • {BRAND.location}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-['Cinzel',serif] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#ffdad4] leading-[1.1]">
          {BRAND.tagline.split(',')[0]}, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb4ac] via-[#ffffff] to-[#ba1a1a]">
            {BRAND.tagline.split(',')[1] || "The Care You Trust"}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base sm:text-lg lg:text-xl text-[#dac2bf] max-w-2xl mx-auto leading-relaxed font-normal">
          An ultra-luxurious sanctuary featuring a <strong>900 sq.ft indoor suite</strong>, <strong>nearly 2,000 sq.ft private lawn</strong>, dedicated doorstep pick &amp; drop, 24x7 live CCTV camera streaming, and 100% verified vaccinated companions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#enquiry"
            className="w-full sm:w-auto px-8 py-4 bg-[#ba1a1a] hover:bg-[#93000a] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-[0_0_25px_rgba(186,26,26,0.6)] hover:shadow-[0_0_35px_rgba(186,26,26,0.9)] hover:scale-105"
          >
            Request Private Admission
          </a>
          <a
            href="#suites"
            className="w-full sm:w-auto px-8 py-4 bg-[#161214]/80 hover:bg-[#201a1a] text-[#ffdad4] hover:text-white border border-[#aa8986]/40 hover:border-[#ffb4ac] text-xs font-bold uppercase tracking-[0.2em] transition-all backdrop-blur-md"
          >
            Explore Sanctuary Suites
          </a>
        </div>

        {/* Key USPs Mini-Grid */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-[#aa8986]/20">
          <div className="p-3 bg-[#161214]/60 border border-[#aa8986]/20">
            <span className="text-[10px] uppercase tracking-wider text-[#ffb4ac] font-bold block">Sanctuary Grounds</span>
            <span className="text-xs text-[#f3dfdd] font-semibold">900 sq.ft + 2,000 sq.ft Lawn</span>
          </div>
          <div className="p-3 bg-[#161214]/60 border border-[#aa8986]/20">
            <span className="text-[10px] uppercase tracking-wider text-[#ffb4ac] font-bold block">Live Feeds</span>
            <span className="text-xs text-[#f3dfdd] font-semibold">24x7 Encrypted CCTV</span>
          </div>
          <div className="p-3 bg-[#161214]/60 border border-[#aa8986]/20">
            <span className="text-[10px] uppercase tracking-wider text-[#ffb4ac] font-bold block">Doorstep Care</span>
            <span className="text-xs text-[#f3dfdd] font-semibold">Pick &amp; Drop across Haryana</span>
          </div>
          <div className="p-3 bg-[#161214]/60 border border-[#aa8986]/20">
            <span className="text-[10px] uppercase tracking-wider text-[#ffb4ac] font-bold block">Safety Protocol</span>
            <span className="text-xs text-[#f3dfdd] font-semibold">100% Vaccinated Companions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
