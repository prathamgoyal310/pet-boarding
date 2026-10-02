import React from 'react';
import { ShieldCheck, Brain, Heart, Activity } from 'lucide-react';

export default function ClinicalDossier() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Intake Protocol */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#ffb4ac] font-bold">
            Clinical Intake Protocol
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white font-normal">
            The Canine Guest Dossier
          </h2>
          <p className="text-sm text-[#b1a7a6] font-light leading-relaxed">
            Prior to suite confirmation, our clinical veterinary director compiles an individualized behavioral, orthopedic, and physiological matrix for each resident.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3.5">
              <div className="p-2 bg-[#161a1d] border border-white/15 text-[#ffb4ac]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display text-base text-white">Mandatory Health Clearance</h4>
                <p className="text-xs text-[#b1a7a6] leading-relaxed">
                  DHPPiL, Anti-Rabies, Bordetella (Kennel Cough), and negative fecal smear verified prior to arrival.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2 bg-[#161a1d] border border-white/15 text-[#ffb4ac]">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display text-base text-white">Acoustic &amp; Social Baseline</h4>
                <p className="text-xs text-[#b1a7a6] leading-relaxed">
                  Evaluation of sensitivity to thunderstorms, separation anxiety, and favorite enrichment cues.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Dossier Card */}
        <div className="lg:col-span-7 bg-[#131112] border border-white/15 p-8 shadow-2xl relative">
          <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] uppercase font-mono text-[#8c8281]">Verified Resident File #CMS-8841</span>
              </div>
              <h3 className="font-display text-2xl text-white mt-1">Baron • Weimaraner</h3>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold bg-[#ba1a1a] px-3 py-1 text-white">
                Premium Suite Stay
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-white/10 text-xs">
            <div>
              <span className="text-[10px] uppercase text-[#8c8281] block">Age &amp; Weight</span>
              <div className="text-white font-medium">3.5 Yrs • 34 kg</div>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#8c8281] block">Temperament</span>
              <div className="text-emerald-400 font-medium">Gentle &amp; Playful</div>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#8c8281] block">Caregiver</span>
              <div className="text-white font-medium">Devan K. (Lead)</div>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#8c8281] block">Dietary Protocol</span>
              <div className="text-[#ffb4ac] font-medium">Warm Bone Broth</div>
            </div>
          </div>

          {/* Telemetry Grid */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#161a1d] p-4 border border-white/10">
              <div className="flex justify-between items-center text-[#8c8281]">
                <span className="text-[10px] uppercase">Resting Respiration</span>
                <Heart className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="font-display text-xl text-white mt-2">
                18 <span className="text-[10px] uppercase text-[#8c8281]">bpm (Optimal)</span>
              </div>
            </div>

            <div className="bg-[#161a1d] p-4 border border-white/10">
              <div className="flex justify-between items-center text-[#8c8281]">
                <span className="text-[10px] uppercase">Daily Trail Dist.</span>
                <Activity className="w-3.5 h-3.5 text-[#ffb4ac]" />
              </div>
              <div className="font-display text-xl text-white mt-2">
                4.8 <span className="text-[10px] uppercase text-[#8c8281]">km (Curated)</span>
              </div>
            </div>

            <div className="bg-[#161a1d] p-4 border border-white/10">
              <div className="flex justify-between items-center text-[#8c8281]">
                <span className="text-[10px] uppercase">Hydration Logs</span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#ffb4ac]" />
              </div>
              <div className="font-display text-xl text-white mt-2">
                3.2 <span className="text-[10px] uppercase text-[#8c8281]">Liters Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
