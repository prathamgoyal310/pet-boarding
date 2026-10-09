import React from 'react';
import { SERVICES } from '../../constants/services';

export default function Services() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 reveal-up" id="services">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f26a8d]">
          Core Standard Care
        </span>
        <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl text-[#f3e9dc] tracking-wide">
          Holistic Hospitality &amp; Medical Excellence
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 font-normal leading-relaxed">
          Every stay includes our comprehensive suite of premier services designed to ensure safety, physical vitality, mental enrichment, and total parent transparency.
        </p>
      </div>

      {/* 6 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="p-8 bg-[#26070d] border border-[#880d1e]/45 hover:border-[#f26a8d]/70 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#f26a8d] bg-[#1c050a] px-3 py-1 border border-[#880d1e]/60">
                {service.tag}
              </span>
              <span className="material-symbols-outlined text-2xl text-[#cbeef3] group-hover:text-[#f49cbb] transition-colors">
                {service.icon}
              </span>
            </div>
            <h3 className="font-['Playfair_Display',serif] text-xl text-[#f3e9dc] group-hover:text-white transition-colors mb-2">
              {service.title}
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Gourmet Nutrition Banner */}
      <div className="mt-12 p-8 bg-gradient-to-r from-[#26070d] via-[#3d0d17] to-[#26070d] border border-[#dd2d4a]/45 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#f26a8d]">
            Culinary &amp; Dietary Sourcing
          </span>
          <h4 className="font-['Cinzel',serif] text-xl text-[#f3e9dc]">
            Unlimited Healthy Gourmet Treats &amp; Custom Home-Cooked Diets
          </h4>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#f3e9dc]/80 max-w-2xl">
            We strictly follow your home feeding schedule and portion instructions, complemented by unlimited high-protein organic treats, bone broths, and fresh filtered alkaline water.
          </p>
        </div>
        <a
          href="#enquiry"
          className="px-6 py-3 bg-[#dd2d4a] hover:bg-[#b81d36] text-white text-xs font-bold uppercase tracking-widest shrink-0 transition-colors shadow-md"
        >
          Discuss Nutrition Plan
        </a>
      </div>
    </section>
  );
}
