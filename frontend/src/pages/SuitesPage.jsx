import React, { useEffect, useState } from 'react';
import { BRAND } from '../constants/brand';

export default function SuitesPage({ onNavigateHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [selectedSuite, setSelectedSuite] = useState(0);

  const suitesExpanded = [
    {
      name: 'The Garden Play Suite',
      badge: 'Primary Flagship Sanctuary',
      tag: 'Signature Architectural Suite',
      price: '₹1,199',
      unit: '/ night',
      indoorSqFt: '900 sq.ft',
      outdoorSqFt: '~2,000 sq.ft private manicured lawn',
      image: '/assets/images/real_suite_garden.jpg',
      headline: 'The pinnacle of expansive canine freedom with private lawn connectivity.',
      description: 'Engineered specifically for active, social, and energetic guests who crave uninhibited physical movement. Features a weather-sealed private doggy portal providing direct access to a private, fenced, manicured grass lawn.',
      features: [
        '900 sq.ft climate-controlled acoustic-isolated chamber',
        '~2,000 sq.ft private manicured grass lawn exclusively for this suite',
        'Weather-sealed automated canine access portal to private lawn',
        'Orthopedic 6-inch memory foam bed with washable hypoallergenic organic bamboo sheath',
        'Dual 4K infrared night-vision CCTV cameras with optical zoom',
        'Direct attendant monitoring station situated outside suite portal',
        'Unlimited healthy organic dehydrated treats and filtered alkaline water'
      ],
      blueprint: [
        { label: 'Total Footprint', val: '2,900 sq.ft total sovereign enclosure' },
        { label: 'Ceiling Clearance', val: '14-foot architectural airy ceiling' },
        { label: 'Acoustic Rating', val: '32 dB sound absorption decoupling' },
        { label: 'Climate Specs', val: 'Independent VRF climate unit (22°C year-round)' }
      ]
    },
    {
      name: 'The Courtyard Atelier Suite',
      badge: 'Sensory Audio Sanctuary',
      tag: 'Acoustic Decoupled Chamber',
      price: '₹1,499',
      unit: '/ night',
      indoorSqFt: '450 sq.ft',
      outdoorSqFt: '250 sq.ft shaded veranda lounge',
      image: '/assets/images/real_suite_atelier.jpg',
      headline: 'Curated for senior or sound-sensitive guests desiring gentle serenity.',
      description: 'Features triple-glazed acoustic insulation that completely dampens thunderstorm rumbles and external noise. Embedded with ambient psychoacoustic music calibrated specifically for canine heart-rate calming.',
      features: [
        '450 sq.ft triple-glazed acoustic-insulated interior salon',
        '250 sq.ft private covered veranda with non-slip timber composite decking',
        'Embedded high-fidelity audio system streaming canine-calming bio-music',
        'Hydronic radiant temperature-regulated thermal flooring',
        'Medical-grade orthopedic memory-foam docking mattress',
        'Continuous gentle aromatherapy diffusers (lavender & chamomile)',
        '24x7 HD night-vision CCTV streaming on parent smartphone'
      ],
      blueprint: [
        { label: 'Total Footprint', val: '700 sq.ft private sanctuary suite' },
        { label: 'Acoustic Shield', val: '38 dB acoustic isolation (thunder-safe)' },
        { label: 'Flooring Type', val: 'Hydronic radiant thermal porcelain' },
        { label: 'Best Suited For', val: 'Senior dogs, anxious rescues, noise-sensitive breeds' }
      ]
    },
    {
      name: 'The Veranda Chamber',
      badge: 'Sunlit Panoramic Haven',
      tag: 'Sunlight & Sensory Suite',
      price: '₹1,299',
      unit: '/ night',
      indoorSqFt: '350 sq.ft',
      outdoorSqFt: '300 sq.ft pergola shade deck',
      image: '/assets/images/real_suite_veranda.jpg',
      headline: 'Sun-drenched haven with floor-to-ceiling panoramic views of nature.',
      description: 'Positioned to maximize natural vitamin D and natural circadian daylight cycles. Features panoramic safety glass looking out over the sanctuary’s blooming organic garden and shaded pergola seating.',
      features: [
        '350 sq.ft naturally lit chamber with UV-shielded panoramic glass',
        '300 sq.ft private shaded pergola deck with cooling misting nozzles',
        'Raised orthopedic cot + plush velvet resting cushion',
        'Direct attendant sightline and continuous visual engagement',
        'Interactive cognitive puzzle feeder toys rotated daily',
        'Twice-daily WhatsApp video reports showing outdoor sunbathing',
        '24x7 CCTV footage available with HD night-vision'
      ],
      blueprint: [
        { label: 'Total Footprint', val: '650 sq.ft combined indoor-veranda zone' },
        { label: 'Natural Light', val: 'Floor-to-ceiling double-laminated panoramic glazing' },
        { label: 'Summer Cooling', val: 'High-pressure micro-droplet misting pergola' },
        { label: 'Best Suited For', val: 'Sight hounds, curious explorers, lap-dog companions' }
      ]
    },
    {
      name: 'The Royal Penthouse Suite',
      badge: 'Ultra-Luxury Master Sanctuary',
      tag: 'VIP Presidential Suite',
      price: '₹2,199',
      unit: '/ night',
      indoorSqFt: '1,200 sq.ft',
      outdoorSqFt: '1,000 sq.ft private sensory park',
      image: '/assets/images/real_suite_penthouse.jpg',
      headline: 'Unparalleled exclusivity with private 1-on-1 attendant companionship.',
      description: 'Our most expansive and luxurious residential chamber. Includes a private 1-on-1 handler dedicated exclusively to your pet, private living salon with dog-safe sofa lounge, and private sensory walking garden.',
      features: [
        '1,200 sq.ft sovereign master suite with designer dog sofa docks',
        '1,000 sq.ft exclusive private sensory garden with agility tunnel',
        'Dedicated 1-on-1 senior handler assigned 24 hours exclusively to your pet',
        'Smart TV streaming continuous dog-friendly nature visuals (DogTV)',
        'Four 4K multi-angle cameras covering every corner of the master suite',
        'Custom chef-cooked multi-course meals & organic bone broth tastings',
        'Complimentary luxury spa bath & grooming session before checkout'
      ],
      blueprint: [
        { label: 'Total Footprint', val: '2,200 sq.ft presidential enclosure' },
        { label: 'Dedicated Staff', val: '1:1 Private Handler stationed 24/7' },
        { label: 'Entertainment', val: 'High-definition DogTV visual & audio system' },
        { label: 'Best Suited For', val: 'Ultra-luxury travelers, bonded multi-dog families' }
      ]
    }
  ];

  const current = suitesExpanded[selectedSuite];

  return (
    <main className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Return Breadcrumb */}
      <div className="mb-10 sm:mb-12">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) onNavigateHome();
            else window.location.hash = '';
          }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#cbeef3] hover:text-white px-5 py-2.5 border border-[#cbeef3]/30 hover:border-[#cbeef3] bg-[#121722] transition-colors rounded-lg shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span>Return to Sanctuary Overview</span>
        </a>
      </div>

      {/* Page Header */}
      <div className="text-center space-y-5 mb-16 sm:mb-20 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#121722] border border-[#cbeef3]/40 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#cbeef3] animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#cbeef3]">
            Architectural Sanctuaries &amp; Grounds
          </span>
        </div>
        <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f3e9dc] font-bold tracking-wide leading-tight">
          Sovereign Chambers &amp; Private Manicured Grounds.
        </h1>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 max-w-2xl mx-auto leading-relaxed">
          Crafted with acoustic decoupling, orthopedic comfort, and direct lawn connectivity to guarantee zero confinement and zero anxiety.
        </p>

        {/* Suite Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center pt-4">
          {suitesExpanded.map((suite, idx) => (
            <button
              key={suite.name}
              type="button"
              onClick={() => setSelectedSuite(idx)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer border ${
                selectedSuite === idx
                  ? 'bg-[#dd2d4a] text-white border-[#dd2d4a] shadow-[0_8px_25px_rgba(221,45,74,0.35)] scale-102'
                  : 'bg-[#121722] text-[#f3e9dc]/80 border-white/10 hover:border-[#cbeef3]/50 hover:bg-[#1a2336]'
              }`}
            >
              {suite.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Suite Detailed Blueprint Card */}
      <div className="bg-[#121722] border border-[#dd2d4a]/60 p-8 sm:p-12 lg:p-16 rounded-sm shadow-2xl mb-20 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Suite Image */}
          <div className="lg:col-span-6 relative overflow-hidden h-80 sm:h-96 lg:h-[420px] rounded-sm group">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-[#dd2d4a] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest shadow-md">
              {current.badge}
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-[#0b0e14]/90 backdrop-blur-md p-4 border border-white/10 text-xs font-semibold text-[#f3e9dc]">
              {current.indoorSqFt} Indoor Chamber • {current.outdoorSqFt}
            </div>
          </div>

          {/* Suite Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3]">
                {current.tag}
              </span>
              <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl text-[#f3e9dc] font-bold">
                {current.name}
              </h2>
              <div className="font-['Fraunces',serif] text-3xl text-[#f26a8d] font-bold">
                {current.price} <span className="text-xs font-normal text-[#f3e9dc]/70 font-sans">{current.unit}</span>
              </div>
            </div>

            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 leading-relaxed font-normal">
              {current.description}
            </p>

            {/* Features Checklist */}
            <div className="space-y-2.5 pt-3 border-t border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#cbeef3] block mb-2">
                Architectural Inclusions
              </span>
              {current.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#f3e9dc]/85">
                  <span className="material-symbols-outlined text-[#cbeef3] text-sm shrink-0 mt-0.5">check_circle</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action button */}
            <div className="pt-6">
              <a
                href="#enquiry"
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  setTimeout(() => {
                    const el = document.getElementById('enquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 120);
                }}
                className="inline-block px-8 py-4 bg-[#dd2d4a] hover:bg-[#b81d36] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg rounded-sm"
              >
                Reserve {current.name}
              </a>
            </div>
          </div>
        </div>

        {/* Blueprint Specifications Grid */}
        <div className="p-8 bg-[#0b0e14] border border-white/10 rounded-sm space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#f49cbb] block">
            Engineering &amp; Environmental Specifications
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {current.blueprint.map((bp, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#cbeef3] font-bold block">
                  {bp.label}
                </span>
                <span className="text-xs sm:text-sm text-[#f3e9dc] font-medium leading-relaxed block">
                  {bp.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Gallery of All 4 Sovereign Suites */}
      <div className="mb-20 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3]">Chamber Portfolio</span>
          <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">
            Explore All 4 Sovereign Chamber Types
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {suitesExpanded.map((s, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedSuite(idx);
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }}
              className={`p-4 bg-[#121722] border rounded-sm transition-all cursor-pointer group shadow-lg flex flex-col justify-between ${
                selectedSuite === idx
                  ? 'border-[#dd2d4a] ring-1 ring-[#dd2d4a]'
                  : 'border-white/10 hover:border-[#cbeef3]/50'
              }`}
            >
              <div className="space-y-3">
                <div className="relative h-44 w-full overflow-hidden rounded-sm">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white bg-[#dd2d4a]/90 backdrop-blur-sm px-2 py-0.5 rounded-sm">
                      {s.price} {s.unit}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#cbeef3] block">
                    {s.tag}
                  </span>
                  <h4 className="font-['Fraunces',serif] text-base text-[#f3e9dc] font-bold group-hover:text-white transition-colors">
                    {s.name}
                  </h4>
                  <p className="text-xs text-[#f3e9dc]/70 line-clamp-2 leading-relaxed">
                    {s.headline}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 mt-3 text-[10px] font-bold uppercase text-[#f49cbb] flex items-center justify-between">
                <span>{s.indoorSqFt}</span>
                <span>Select &amp; View Blueprint →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comprehensive Architectural Standards Breakdown */}
      <div className="mb-20 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3]">Scientific Architecture</span>
          <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl lg:text-4xl text-[#f3e9dc] font-bold">
            Built for Canine Biological Comfort
          </h3>
          <p className="text-xs sm:text-sm text-[#f3e9dc]/80">
            How our structural engineering protects dogs from sensory overload, auditory panic, and joint strain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#121722] border border-white/10 rounded-sm space-y-4 shadow-lg">
            <span className="material-symbols-outlined text-[#cbeef3] text-3xl">volume_off</span>
            <h4 className="font-['Fraunces',serif] text-xl text-[#f3e9dc] font-bold">32dB Acoustic Decoupling</h4>
            <p className="text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
              Traditional kennels echo bark reverberations up to 110dB, inducing chronic cortisol spikes. Our suites use triple-layer rockwool insulation and acoustic baffles to maintain library-level peace under 45dB.
            </p>
          </div>

          <div className="p-8 bg-[#121722] border border-white/10 rounded-sm space-y-4 shadow-lg">
            <span className="material-symbols-outlined text-[#cbeef3] text-3xl">air</span>
            <h4 className="font-['Fraunces',serif] text-xl text-[#f3e9dc] font-bold">100% Fresh Air Cycles</h4>
            <p className="text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
              Zero air recirculation between suites. Specialized ventilation exchangers bring in 100% fresh, HEPA-filtered outdoor air every 8 minutes, eradicating airborne dander and preventing any cross-suite odor anxiety.
            </p>
          </div>

          <div className="p-8 bg-[#121722] border border-white/10 rounded-sm space-y-4 shadow-lg">
            <span className="material-symbols-outlined text-[#cbeef3] text-3xl">bed</span>
            <h4 className="font-['Fraunces',serif] text-xl text-[#f3e9dc] font-bold">Orthopedic Joint Relief</h4>
            <p className="text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
              Cold concrete floors cause painful arthritis flare-ups. Every suite features radiant hydronic warmth coupled with high-density medical memory foam to cushion hip joints and spinal alignment.
            </p>
          </div>
        </div>
      </div>

      {/* Concierge Contact Strip */}
      <div className="p-8 sm:p-12 bg-gradient-to-r from-[#121722] via-[#1a2336] to-[#121722] border border-[#dd2d4a]/60 text-center space-y-6 shadow-2xl rounded-sm">
        <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">
          Tour our sanctuary chambers in person
        </h3>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/85 max-w-xl mx-auto leading-relaxed">
          We welcome pet parents for a complimentary walkthrough at our estate in Sector 76, Faridabad.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a
            href={`https://wa.me/${BRAND.rawPhone}?text=Hi%20Furrever%20Inn,%20I%20would%20like%20to%20schedule%20a%20walkthrough%20of%20your%20suites.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#128C7E] hover:bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 rounded-sm"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span>Book Walkthrough on WhatsApp ({BRAND.cleanPhone})</span>
          </a>
          <a
            href={`tel:${BRAND.rawPhone}`}
            className="px-8 py-4 border border-[#cbeef3]/40 hover:border-[#cbeef3] text-[#cbeef3] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-sm flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            <span>Call Concierge: {BRAND.phone}</span>
          </a>
        </div>
      </div>
    </main>
  );
}
