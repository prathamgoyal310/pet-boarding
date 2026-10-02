import React from 'react';
import { SERVICES } from '../../constants/services';

export default function Services() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#aa8986]/20 reveal-up" id="services">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffb4ac]">
          Core Standard Care
        </span>
        <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl text-[#ffdad4] tracking-wide">
          Holistic Hospitality &amp; Medical Excellence
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#dac2bf] font-normal leading-relaxed">
          Every stay includes our comprehensive suite of premier services designed to ensure safety, physical vitality, mental enrichment, and total parent transparency.
        </p>
      </div>

      {/* 6 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            className="p-8 bg-[#161214] border border-[#aa8986]/30 hover:border-[#ba1a1a]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffb4ac] bg-[#201a1a] px-3 py-1 border border-[#ba1a1a]/30">
                {service.tag}
              </span>
              <span className="material-symbols-outlined text-2xl text-[#ba1a1a] group-hover:text-[#ffb4ac] transition-colors">
                {service.icon}
              </span>
            </div>
            <h3 className="font-['Playfair_Display',serif] text-xl text-[#ffdad4] group-hover:text-white transition-colors mb-2">
              {service.title}
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#dac2bf] leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Gourmet Nutrition Banner */}
      <div className="mt-12 p-8 bg-gradient-to-r from-[#161214] via-[#201a1a] to-[#161214] border border-[#ba1a1a]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffb4ac]">
            Culinary &amp; Dietary Sourcing
          </span>
          <h4 className="font-['Cinzel',serif] text-xl text-[#ffdad4]">
            Unlimited Healthy Gourmet Treats &amp; Custom Home-Cooked Diets
          </h4>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#dac2bf] max-w-2xl">
            We strictly follow your home feeding schedule and portion instructions, complemented by unlimited high-protein organic treats, bone broths, and fresh filtered alkaline water.
          </p>
        </div>
        <a
          href="#enquiry"
          className="px-6 py-3 bg-[#ba1a1a] hover:bg-[#93000a] text-white text-xs font-bold uppercase tracking-widest shrink-0 transition-colors"
        >
          Discuss Nutrition Plan
        </a>
      </div>
    </section>
  );
}
