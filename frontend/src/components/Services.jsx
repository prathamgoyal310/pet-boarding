import React from 'react';
import { Truck, Video, Camera, HeartPulse, Sparkles, ShieldCheck, Cookie } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      icon: Truck,
      title: 'Pick & Drop Service',
      desc: 'Dedicated safe transport with temperature control, sanitized crates, and doorstep chaperone for total peace of mind across Haryana.',
      tag: 'Climate Controlled'
    },
    {
      icon: Video,
      title: '24x7 CCTV & Live Access',
      desc: "Crystal clear HD streaming directly to parents' smartphones plus archived footage accessible at any time day or night.",
      tag: 'HD Night Vision'
    },
    {
      icon: Camera,
      title: 'Regular Photo & Video Updates',
      desc: 'Hourly and scheduled high-resolution photo journals and playful video clips sent directly to pet parents via WhatsApp.',
      tag: 'Direct Updates'
    },
    {
      icon: HeartPulse,
      title: 'Emergency Medical Services',
      desc: 'On-call emergency veterinary response, on-site first aid triage clinic, and 24/7 tie-up with multi-specialty pet hospitals.',
      tag: 'Vet Supervised'
    },
    {
      icon: Sparkles,
      title: '3x Daily Sanitization',
      desc: 'Hospital-grade disinfection protocols, deep-cleaned resting suites, and odor-free antimicrobial play turf maintained thrice daily.',
      tag: 'High Hygiene'
    },
    {
      icon: ShieldCheck,
      title: '100% Vaccinated Companions',
      desc: 'Strict mandatory vaccination certification for all neighbour dogs (DHPPiL, Rabies & Kennel Cough) with zero exceptions.',
      tag: 'Strict Intake'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10 relative" id="services">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#ffb4ac] font-bold">
            Core Offerings &amp; Standards
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white mt-2">
            Comprehensive Pet Care &amp; Dedicated Services
          </h2>
        </div>
        <p className="text-sm text-[#b1a7a6] max-w-md font-light leading-relaxed">
          From air-conditioned pick &amp; drop to transparent 24x7 live feeds and unlimited gourmet treats, explore the signature services of Furrever Inn Pvt. Ltd.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceList.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <div
              key={i}
              className="bg-[#131112] border border-white/10 p-6 flex flex-col justify-between group hover:border-[#ba1a1a]/50 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 flex items-center justify-center border border-white/15 bg-[#161a1d] text-[#ffb4ac]">
                  <Icon className="w-5 h-5 text-[#ffb4ac]" />
                </div>
                <h3 className="font-display text-xl text-white">{svc.title}</h3>
                <p className="text-xs text-[#b1a7a6] leading-relaxed font-light">{svc.desc}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[10px] font-bold uppercase tracking-wider text-[#8c8281] flex items-center justify-between">
                <span>{svc.tag}</span>
                <span className="text-[#ffb4ac]">●</span>
              </div>
            </div>
          );
        })}

        {/* Featured Card: Gourmet Nutrition */}
        <div className="bg-[#131112] border border-white/10 p-6 flex flex-col justify-between group hover:border-[#ba1a1a]/50 transition-all duration-300 lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 flex items-center justify-center border border-white/15 bg-[#161a1d] text-[#ffb4ac]">
                  <Cookie className="w-5 h-5 text-[#ffb4ac]" />
                </div>
                <h3 className="font-display text-2xl text-white">Unlimited Healthy Treats &amp; Gourmet Care</h3>
                <p className="text-xs text-[#b1a7a6] leading-relaxed font-light">
                  Wholesome, vet-approved organic treats, customized dietary nutrition, dehydrated single-ingredient snacks, and loving pampering throughout the day.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-[10px] font-bold uppercase tracking-wider text-[#8c8281] flex items-center justify-between">
                <span>Vet-Approved Goodies</span>
                <span className="text-[#ffb4ac]">100% Organic Sourcing</span>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative overflow-hidden border border-white/15">
                <img
                  src="/assets/images/stitch_suite.jpg"
                  alt="Bespoke canine dining setup with organic treats"
                  className="w-full h-48 object-cover brightness-95 transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
