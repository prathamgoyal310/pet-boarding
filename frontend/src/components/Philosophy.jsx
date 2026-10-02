import React from 'react';
import { VolumeX, ShieldAlert, Sparkles, HeartHandshake } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10" id="philosophy">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Sticky Column */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#ffb4ac] font-bold">
              Sanctuary Manifesto
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-normal leading-tight">
              Refined Care,<br />Zero Compromise.
            </h2>
            <p className="text-sm text-[#b1a7a6] leading-relaxed">
              At Furrever Inn Pvt. Ltd., we reject the industrial paradigm of traditional cramped kennels. Every guest receives genuine family love, 100% vaccinated companionship, 3x daily hospital-grade sanitization, and continuous parental streaming.
            </p>
            <div className="pt-4">
              <blockquote className="border-l-2 border-[#ba1a1a] pl-4 text-xs text-[#8c8281] italic leading-relaxed">
                "Quiet luxury is not an aesthetic here; it is a clinical intervention against canine separation distress."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Right Bento Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 1 */}
          <div className="bg-[#131112] border border-white/10 p-8 space-y-4 hover:border-[#ba1a1a]/40 transition-colors duration-300">
            <div className="w-10 h-10 flex items-center justify-center border border-white/15 bg-[#161a1d] text-[#ffb4ac]">
              <VolumeX className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl text-white">Acoustic Decoupling</h3>
            <p className="text-xs text-[#b1a7a6] leading-relaxed">
              Triple-glazed perimeter glass and sound-dampening architectural basswood slats guarantee baseline interior noise remains below 32 decibels, eliminating fear-induced auditory spikes.
            </p>
            <div className="text-[10px] uppercase tracking-wider text-[#8c8281] pt-2 border-t border-white/5">
              STC Rating: 58 Acoustic Isolation
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#131112] border border-white/10 p-8 space-y-4 hover:border-[#ba1a1a]/40 transition-colors duration-300">
            <div className="w-10 h-10 flex items-center justify-center border border-white/15 bg-[#161a1d] text-[#ffb4ac]">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl text-white">100% Zero Cage Policy</h3>
            <p className="text-xs text-[#b1a7a6] leading-relaxed">
              Absolute zero-confinement design. Every dog enjoys private indoor suites with attached grassy terraces, continuous human companionship, and free-roam enrichment.
            </p>
            <div className="text-[10px] uppercase tracking-wider text-[#8c8281] pt-2 border-t border-white/5">
              Zero Wire Enclosures • Open Comfort
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#131112] border border-white/10 p-8 space-y-4 hover:border-[#ba1a1a]/40 transition-colors duration-300">
            <div className="w-10 h-10 flex items-center justify-center border border-white/15 bg-[#161a1d] text-[#ffb4ac]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl text-white">Triple Air Sanitization</h3>
            <p className="text-xs text-[#b1a7a6] leading-relaxed">
              Medical-grade continuous HEPA-14 air scrubbers and UV-C germicidal filtration ensure hospital-grade bio-security, zero kennel cough transmission, and fresh mountain-pure airflow.
            </p>
            <div className="text-[10px] uppercase tracking-wider text-[#8c8281] pt-2 border-t border-white/5">
              100% Fresh Air Exchange • Zero Ozone
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-[#131112] border border-white/10 p-8 space-y-4 hover:border-[#ba1a1a]/40 transition-colors duration-300">
            <div className="w-10 h-10 flex items-center justify-center border border-white/15 bg-[#161a1d] text-[#ffb4ac]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl text-white">1:1 Attendant Ratio</h3>
            <p className="text-xs text-[#b1a7a6] leading-relaxed">
              Every resident is assigned a dedicated canine caregiver responsible for meal hand-feeding, personalized trail play, continuous coat hygiene, and WhatsApp photo updates.
            </p>
            <div className="text-[10px] uppercase tracking-wider text-[#8c8281] pt-2 border-t border-white/5">
              Continuous Human Bonding
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
