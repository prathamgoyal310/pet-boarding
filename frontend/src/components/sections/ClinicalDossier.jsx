import React from 'react';

export default function ClinicalDossier() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#aa8986]/20 reveal-up" id="clinical">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Intake Protocol */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffb4ac]">
            Biosecurity Standards
          </span>
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl text-[#ffdad4] leading-tight tracking-wide">
            Clinical Verification &amp; Resident Intake
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#dac2bf] leading-relaxed">
            To maintain our fear-free and disease-free environment, every resident canine is screened through an intake protocol verifying up-to-date immunizations and behavioral temperaments.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-4 p-4 bg-[#161214] border border-[#aa8986]/30">
              <span className="material-symbols-outlined text-[#ba1a1a] text-2xl shrink-0">verified</span>
              <div>
                <h4 className="font-['Playfair_Display',serif] text-base text-[#ffdad4]">100% Vaccinated Companions</h4>
                <p className="text-xs text-[#dac2bf] mt-0.5">Mandatory verification of DHPPiL, Anti-Rabies, and Kennel Cough vaccines prior to check-in.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#161214] border border-[#aa8986]/30">
              <span className="material-symbols-outlined text-[#ba1a1a] text-2xl shrink-0">sanitizer</span>
              <div>
                <h4 className="font-['Playfair_Display',serif] text-base text-[#ffdad4]">Hospital-Grade Sanitization</h4>
                <p className="text-xs text-[#dac2bf] mt-0.5">Suites and play areas are disinfected 3x daily using non-toxic veterinary-approved agents.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#161214] border border-[#aa8986]/30">
              <span className="material-symbols-outlined text-[#ba1a1a] text-2xl shrink-0">medical_services</span>
              <div>
                <h4 className="font-['Playfair_Display',serif] text-base text-[#ffdad4]">24x7 Emergency Medical Transit</h4>
                <p className="text-xs text-[#dac2bf] mt-0.5">Dedicated medical transport vehicle and priority arrangements with top multi-specialty veterinary hospitals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Resident Card Mockup */}
        <div className="lg:col-span-6 bg-[#161214] border border-[#ba1a1a]/40 p-8 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-[#aa8986]/20 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffb4ac]">Verified Resident Record</span>
            </div>
            <span className="text-[10px] font-mono text-[#aa8986]">FILE #CMS-8841</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <img
              src="/assets/images/loving_care.jpg"
              alt="Verified Resident"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#ba1a1a]"
            />
            <div>
              <h3 className="font-['Cinzel',serif] text-xl text-[#ffdad4]">Hugo (Golden Retriever)</h3>
              <p className="text-xs text-[#dac2bf]">Guardian: Vikramaditya S. • Haryana</p>
              <span className="inline-block mt-1 text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 border border-emerald-800">
                All Immunizations Cleared
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs border-t border-b border-[#aa8986]/20 py-4 mb-6">
            <div>
              <span className="text-[10px] uppercase text-[#aa8986] block">Assigned Chamber</span>
              <span className="text-[#f3dfdd] font-semibold">Garden Play Suite 02</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#aa8986] block">Dietary Profile</span>
              <span className="text-[#f3dfdd] font-semibold">Steamed Chicken + Broth</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#aa8986] block">Temperament</span>
              <span className="text-[#f3dfdd] font-semibold">Playful, Pack-Friendly</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#aa8986] block">Live Stream ID</span>
              <span className="text-emerald-400 font-mono font-semibold">LIVE-CAM-04 ●</span>
            </div>
          </div>

          <div className="p-4 bg-[#0d0a0b] border border-[#aa8986]/20 text-xs text-[#dac2bf] space-y-1">
            <span className="text-[10px] uppercase font-bold text-[#ffb4ac]">Intake Note</span>
            <p>Parent receives WhatsApp video journals at 09:30 AM and 05:30 PM daily. Continuous 4K camera access verified.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
