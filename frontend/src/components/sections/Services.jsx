import React from 'react';
import { SERVICES } from '../../constants/services';

export default function Services() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 xl:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 reveal-up" id="services">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cbeef3]">
          Core Standard Care
        </span>
        <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl text-[#f3e9dc] font-bold tracking-wide">
          Holistic Hospitality &amp; Medical Excellence
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 font-normal leading-relaxed max-w-2xl mx-auto">
          Every stay includes our comprehensive suite of premier services designed to ensure safety, physical vitality, mental enrichment, and total parent transparency.
        </p>
        <div className="pt-2">
          <a
            href="#/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cbeef3] hover:text-white px-5 py-2.5 border border-[#cbeef3]/40 hover:border-[#cbeef3] bg-[#121722] transition-colors rounded shadow-sm hover:shadow-md"
          >
            <span>Explore Full Page: Detailed Services &amp; Medical Protocols</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* 6 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="p-8 sm:p-10 bg-[#121722] border border-white/10 hover:border-[#cbeef3]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#cbeef3] bg-[#0b0e14] px-3.5 py-1.5 border border-[#cbeef3]/30 rounded-sm">
                  {service.tag}
                </span>
                <span className="material-symbols-outlined text-2xl text-[#cbeef3] group-hover:text-[#dd2d4a] transition-colors">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-['Fraunces',serif] text-xl sm:text-2xl text-[#f3e9dc] font-bold group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Gourmet Nutrition Banner */}
      <div className="mt-16 sm:mt-20 p-8 sm:p-10 lg:p-12 bg-gradient-to-r from-[#121722] via-[#1a2336] to-[#121722] border border-[#dd2d4a]/60 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-3 text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3]">
            Culinary &amp; Dietary Sourcing
          </span>
          <h4 className="font-['Fraunces',serif] text-xl sm:text-2xl text-[#f3e9dc] font-bold">
            Unlimited Healthy Gourmet Treats &amp; Custom Home-Cooked Diets
          </h4>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/80 max-w-2xl leading-relaxed">
            We strictly follow your home feeding schedule and portion instructions, complemented by unlimited high-protein organic treats, bone broths, and fresh filtered alkaline water.
          </p>
        </div>
        <a
          href="#enquiry"
          className="px-7 sm:px-8 py-3.5 sm:py-4 bg-[#dd2d4a] hover:bg-[#b81d36] text-white text-xs font-bold uppercase tracking-widest shrink-0 transition-colors shadow-md"
        >
          Discuss Nutrition Plan
        </a>
      </div>
    </section>
  );
}
