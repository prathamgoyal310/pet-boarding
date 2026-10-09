import React from 'react';

export default function ClinicalDossier() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 reveal-up" id="clinical">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Intake Protocol */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f26a8d]">
            Biosecurity Standards
          </span>
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl text-[#f3e9dc] leading-tight tracking-wide">
            Clinical Verification &amp; Resident Intake
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#f3e9dc]/85 leading-relaxed">
            To maintain our fear-free and disease-free environment, every resident canine is screened through an intake protocol verifying up-to-date immunizations and behavioral temperaments.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-4 p-4 bg-[#26070d] border border-[#880d1e]/45">
              <span className="material-symbols-outlined text-[#cbeef3] text-2xl shrink-0">verified</span>
              <div>
                <h4 className="font-['Playfair_Display',serif] text-base text-[#f3e9dc]">100% Vaccinated Companions</h4>
                <p className="text-xs text-[#f3e9dc]/80 mt-0.5">Mandatory verification of DHPPiL, Anti-Rabies, and Kennel Cough vaccines prior to check-in.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#26070d] border border-[#880d1e]/45">
              <span className="material-symbols-outlined text-[#cbeef3] text-2xl shrink-0">sanitizer</span>
              <div>
                <h4 className="font-['Playfair_Display',serif] text-base text-[#f3e9dc]">Hospital-Grade Sanitization</h4>
                <p className="text-xs text-[#f3e9dc]/80 mt-0.5">Suites and play areas are disinfected 3x daily using non-toxic veterinary-approved agents.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#26070d] border border-[#880d1e]/45">
              <span className="material-symbols-outlined text-[#cbeef3] text-2xl shrink-0">medical_services</span>
              <div>
                <h4 className="font-['Playfair_Display',serif] text-base text-[#f3e9dc]">24x7 Emergency Medical Transit</h4>
                <p className="text-xs text-[#f3e9dc]/80 mt-0.5">Dedicated medical transport vehicle and priority arrangements with top multi-specialty veterinary hospitals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Resident Card Mockup */}
        <div className="lg:col-span-6 bg-[#26070d] border border-[#dd2d4a]/50 p-8 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-[#880d1e]/40 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#cbeef3] animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f26a8d]">Verified Resident Record</span>
            </div>
            <span className="text-[10px] font-mono text-[#cbeef3] font-bold">FILE #CMS-8841</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <img
              src="/assets/images/loving_care.jpg"
              alt="Verified Resident"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#dd2d4a]"
            />
            <div>
              <h3 className="font-['Cinzel',serif] text-xl text-[#f3e9dc]">Hugo (Golden Retriever)</h3>
              <p className="text-xs text-[#f49cbb]">Guardian: Vikramaditya S. • Haryana</p>
              <span className="inline-block mt-1 text-[10px] uppercase font-bold text-[#cbeef3] bg-[#cbeef3]/15 px-2 py-0.5 border border-[#cbeef3]/40">
                All Immunizations Cleared
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs border-t border-b border-[#880d1e]/40 py-4 mb-6">
            <div>
              <span className="text-[10px] uppercase text-[#f49cbb] block font-semibold">Assigned Chamber</span>
              <span className="text-[#f3e9dc] font-semibold">Garden Play Suite 02</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#f49cbb] block font-semibold">Dietary Profile</span>
              <span className="text-[#f3e9dc] font-semibold">Steamed Chicken + Broth</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#f49cbb] block font-semibold">Temperament</span>
              <span className="text-[#f3e9dc] font-semibold">Playful, Pack-Friendly</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#f49cbb] block font-semibold">Live Stream ID</span>
              <span className="text-[#cbeef3] font-mono font-semibold">LIVE-CAM-04 ●</span>
            </div>
          </div>

          <div className="p-4 bg-[#140205] border border-[#880d1e]/40 text-xs text-[#f3e9dc]/80 space-y-1">
            <span className="text-[10px] uppercase font-bold text-[#f26a8d]">Intake Note</span>
            <p>Parent receives WhatsApp video journals at 09:30 AM and 05:30 PM daily. Continuous 4K camera access verified.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
