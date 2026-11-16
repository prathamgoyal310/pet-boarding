import React from 'react';

export default function ClinicalDossier() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 xl:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 reveal-up" id="clinical">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
        {/* Left Column: Intake Protocol */}
        <div className="lg:col-span-6 space-y-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cbeef3]">
            Biosecurity Standards
          </span>
          <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl text-[#f3e9dc] font-bold leading-tight tracking-wide">
            Clinical Verification &amp; Resident Intake
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 leading-relaxed">
            To maintain our fear-free and disease-free environment, every resident canine is screened through an intake protocol verifying up-to-date immunizations and behavioral temperaments.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-5 p-5 sm:p-6 bg-[#121722] border border-white/10 hover:border-[#cbeef3]/40 transition-colors shadow-md rounded-sm">
              <span className="material-symbols-outlined text-[#cbeef3] text-2xl shrink-0 mt-0.5">verified</span>
              <div className="space-y-1">
                <h4 className="font-['Fraunces',serif] font-bold text-base sm:text-lg text-[#f3e9dc]">100% Vaccinated Companions</h4>
                <p className="text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">Mandatory verification of DHPPiL, Anti-Rabies, and Kennel Cough vaccines prior to check-in.</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 sm:p-6 bg-[#121722] border border-white/10 hover:border-[#cbeef3]/40 transition-colors shadow-md rounded-sm">
              <span className="material-symbols-outlined text-[#cbeef3] text-2xl shrink-0 mt-0.5">sanitizer</span>
              <div className="space-y-1">
                <h4 className="font-['Fraunces',serif] font-bold text-base sm:text-lg text-[#f3e9dc]">Hospital-Grade Sanitization</h4>
                <p className="text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">Suites and play areas are disinfected 3x daily using non-toxic veterinary-approved agents.</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 sm:p-6 bg-[#121722] border border-white/10 hover:border-[#cbeef3]/40 transition-colors shadow-md rounded-sm">
              <span className="material-symbols-outlined text-[#cbeef3] text-2xl shrink-0 mt-0.5">medical_services</span>
              <div className="space-y-1">
                <h4 className="font-['Fraunces',serif] font-bold text-base sm:text-lg text-[#f3e9dc]">24x7 Emergency Medical Transit</h4>
                <p className="text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">Dedicated medical transport vehicle and priority arrangements with top multi-specialty veterinary hospitals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Resident Card Mockup */}
        <div className="lg:col-span-6 bg-[#121722] border border-[#cbeef3]/40 p-8 sm:p-10 lg:p-12 shadow-2xl relative rounded-sm">
          <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-7">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#cbeef3] animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#cbeef3]">Verified Resident Record</span>
            </div>
            <span className="text-[10px] font-mono text-[#cbeef3] font-bold">FILE #CMS-8841</span>
          </div>

          <div className="flex items-center gap-5 mb-7">
            <img
              src="/assets/images/loving_care.jpg"
              alt="Verified Resident"
              className="w-18 h-18 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#dd2d4a] shadow-lg"
            />
            <div className="space-y-1">
              <h3 className="font-['Fraunces',serif] font-bold text-xl sm:text-2xl text-[#f3e9dc]">Hugo (Golden Retriever)</h3>
              <p className="text-xs sm:text-sm text-[#f49cbb]">Guardian: Vikramaditya S. • Haryana</p>
              <span className="inline-block mt-1 text-[10px] uppercase font-bold text-[#cbeef3] bg-[#cbeef3]/15 px-2.5 py-1 border border-[#cbeef3]/40 rounded-sm">
                All Immunizations Cleared
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm border-t border-b border-white/10 py-6 mb-7">
            <div className="space-y-1">
              <span className="text-[10px] uppercase text-[#f49cbb] block font-semibold">Assigned Chamber</span>
              <span className="text-[#f3e9dc] font-semibold">Garden Play Suite 02</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase text-[#f49cbb] block font-semibold">Dietary Profile</span>
              <span className="text-[#f3e9dc] font-semibold">Steamed Chicken + Broth</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase text-[#f49cbb] block font-semibold">Temperament</span>
              <span className="text-[#f3e9dc] font-semibold">Playful, Pack-Friendly</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase text-[#f49cbb] block font-semibold">Live Stream ID</span>
              <span className="text-[#cbeef3] font-mono font-semibold">LIVE-CAM-04 ●</span>
            </div>
          </div>

          <div className="p-5 sm:p-6 bg-[#0b0e14] border border-white/10 text-xs sm:text-sm text-[#f3e9dc]/80 space-y-2 rounded-sm">
            <span className="text-[10px] uppercase font-bold text-[#cbeef3] tracking-wider block">Intake Note</span>
            <p className="leading-relaxed">Parent receives WhatsApp video journals at 09:30 AM and 05:30 PM daily. Continuous 4K camera access verified.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
