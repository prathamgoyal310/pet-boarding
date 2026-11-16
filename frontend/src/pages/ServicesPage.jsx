import React, { useEffect, useState } from 'react';
import { BRAND } from '../constants/brand';

export default function ServicesPage({ onNavigateHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const servicesDetailed = [
    {
      id: 'transit',
      icon: 'local_shipping',
      title: 'Doorstep Pick & Drop Transit',
      tag: 'Safe Travel Protocol',
      image: '/assets/images/real_transit_safe.jpg',
      lead: 'Stress-free, climate-controlled, sanitized transit from your doorstep in Faridabad & NCR directly to our sanctuary estate.',
      features: [
        {
          name: 'Air-Conditioned Climate Fleet',
          desc: 'Our transport vehicles are equipped with dual-zone climate systems maintained between 21°C to 23°C regardless of external summer heat.'
        },
        {
          name: 'Impact-Tested Travel Crates',
          desc: 'High-strength, airline-grade travel crates lined with memory-foam anti-anxiety bedding and non-slip rubber mats.'
        },
        {
          name: 'Real-Time WhatsApp Live GPS',
          desc: 'A live Google Maps tracking beacon is shared with the guardian from the moment the van departs your driveway until safe arrival at the inn.'
        },
        {
          name: 'Trained Accompanying Handler',
          desc: 'Every trip features a certified canine attendant seated directly beside the guests to comfort nervous pets and provide water.'
        }
      ],
      specs: [
        { label: 'Vehicle Cleaning', val: 'Disinfected with veterinary grade F10SC after every trip' },
        { label: 'Coverage Area', val: 'Faridabad, Gurugram, South Delhi & surrounding NCR' },
        { label: 'Handler Ratio', val: '1 Driver + 1 Dedicated Canine Attendant per vehicle' },
        { label: 'Booking Notice', val: '24 hours advance notice recommended' }
      ]
    },
    {
      id: 'cctv',
      icon: 'videocam',
      title: '24x7 HD Night-Vision CCTV Streaming',
      tag: 'Parent Transparency',
      image: '/assets/images/real_cctv_monitoring.jpg',
      lead: 'Complete digital peace of mind with continuous, unrestricted access to your companion’s private suite and play lawns directly on your phone.',
      features: [
        {
          name: 'Private Encrypted Parent Login',
          desc: 'Upon intake check-in, guardians receive unique encrypted mobile credentials to securely stream high-definition feeds 24 hours a day.'
        },
        {
          name: 'Full Infrared Night-Vision',
          desc: 'Zero-glow infrared LED sensors provide crisp, black-and-white night vision without disturbing your companion’s natural sleep cycle.'
        },
        {
          name: 'Zero Hidden Paywalls',
          desc: 'Unlike traditional kennels that charge extra hourly fees for camera viewing, our CCTV stream is 100% complimentary and unlimited.'
        },
        {
          name: 'Lawn & Chamber Multi-Angle Views',
          desc: 'Switch effortlessly between indoor chamber feeds and outdoor manicured lawn camera angles with optical pan-tilt-zoom.'
        }
      ],
      specs: [
        { label: 'Resolution', val: '1080p Full HD / 2K Wide Angle' },
        { label: 'Night Mode', val: 'Infrared zero-light illumination' },
        { label: 'Platform Support', val: 'iOS, Android, and Desktop browser viewer' },
        { label: 'Concurrent Users', val: 'Multiple family members can watch simultaneously' }
      ]
    },
    {
      id: 'updates',
      icon: 'chat',
      title: 'Structured WhatsApp Video Journals',
      tag: 'Daily Highlights',
      image: '/assets/images/real_video_update.jpg',
      lead: 'Receive personalized video updates, playful lawn clips, and clinical feeding reports twice every single day without having to request them.',
      features: [
        {
          name: '09:30 AM Morning Wake-Up Digest',
          desc: 'Video snippet showing your companion stretching, morning lawn sniffing, potty completion, and enthusiastic breakfast consumption.'
        },
        {
          name: '02:00 PM Midday Rest Check',
          desc: 'Photo updates of relaxed naps in acoustic-insulated chambers, post-agility socialization, and refreshing alkaline water refills.'
        },
        {
          name: '07:30 PM Evening Tuck-In Digest',
          desc: 'Detailed summary of the day’s activities, dinner bowl video, coat brushing, and tuck-in reassurance before peaceful lights-out.'
        },
        {
          name: 'Direct Concierge Chat Access',
          desc: 'Message our on-duty attendants anytime to check on your pet’s mood, request an extra treat, or verify medication dosing.'
        }
      ],
      specs: [
        { label: 'Update Frequency', val: 'Minimum 2 Video Journals daily + instant photo cards' },
        { label: 'Content Type', val: 'Full HD MP4 video clips & high-res candid photos' },
        { label: 'Response Window', val: 'Dedicated WhatsApp concierge responds within 15 mins' },
        { label: 'Archive', val: 'All clips permanently saved for guardian memories' }
      ]
    },
    {
      id: 'hygiene',
      icon: 'sanitizer',
      title: 'Hospital-Grade Bio-Sanitization',
      tag: 'Biosecurity Protocols',
      image: '/assets/images/real_sanitization_clean.jpg',
      lead: 'Strict zero-compromise environmental hygiene preventing ticks, fleas, kennel cough, and bacterial cross-contamination.',
      features: [
        {
          name: 'Veterinary F10SC Disinfection 3x Daily',
          desc: 'All suites, verandas, and common zones are sterilized using F10SC veterinary disinfectant, an organic agent that eliminates 99.9% of pathogens with zero toxic fumes.'
        },
        {
          name: 'UV-C Bedding Sterilization',
          desc: 'Orthopedic memory-foam beds and organic bamboo covers undergo dual laundering and germicidal UV-C light sanitation between guests.'
        },
        {
          name: 'Acoustic & Thermal Tile Decoupling',
          desc: 'Non-porous, non-slip clinical architectural tiles prevent bacterial absorption and are steam-cleaned at 120°C daily.'
        },
        {
          name: 'Continuous HEPA Air Purification',
          desc: 'Indoor chambers feature hospital-grade HEPA H13 filtration capturing airborne dander, seasonal allergens, and particulate dust.'
        }
      ],
      specs: [
        { label: 'Disinfectant Agent', val: 'F10SC Veterinary Surface & Air Sterilizer' },
        { label: 'Cleaning Cadence', val: '08:00 AM, 02:00 PM, and 08:30 PM daily' },
        { label: 'Pest Management', val: 'Eco-friendly organic tick & flea lawn barrier treatments' },
        { label: 'Water Hygiene', val: 'Alkaline multi-stage RO purification tested weekly' }
      ]
    },
    {
      id: 'medical',
      icon: 'medical_services',
      title: '24x7 Emergency Medical Transit & Care',
      tag: 'Clinical Safety',
      image: '/assets/images/real_vet_care.jpg',
      lead: 'On-call veterinary surgeons and a dedicated emergency transit vehicle on standby 24 hours a day, 365 days a year.',
      features: [
        {
          name: 'On-Call Veterinary Medical Officers',
          desc: 'Top canine physicians visit our sanctuary for intake screenings and remain on emergency standby 24/7.'
        },
        {
          name: '15-Minute Priority Transit Network',
          desc: 'Pre-arranged priority emergency admissions with top multi-specialty veterinary hospitals across Faridabad and Delhi NCR.'
        },
        {
          name: 'Full Clinical Dossier Verification',
          desc: 'We store digital copies of your companion’s past clinical records, known allergies, blood group notes, and primary vet contact info.'
        },
        {
          name: 'Zero-Fee Prescribed Medicine Administration',
          desc: 'Whether eye drops, insulin injections, cardiac medications, or joint supplements, our certified staff administer strictly per schedule.'
        }
      ],
      specs: [
        { label: 'On-Call Vet Response', val: 'Immediate phone triage & <20 min in-person arrival' },
        { label: 'Emergency Van', val: 'Standby oxygen-equipped vehicle on estate premises' },
        { label: 'Partner Hospitals', val: 'Tier-1 veterinary ICU hospitals in Faridabad/NCR' },
        { label: 'Intake Policy', val: '100% vaccinated companions verified before entry' }
      ]
    },
    {
      id: 'nutrition',
      icon: 'restaurant',
      title: 'Gourmet Culinary & Custom Nutrition',
      tag: 'Farm-to-Bowl Wellness',
      image: '/assets/images/real_gourmet_bowl.jpg',
      lead: 'Tailored home-cooked and raw diets prepared in our pristine canine kitchen to preserve digestion and boost immune vitality.',
      features: [
        {
          name: 'Custom Home-Cooked Bowls',
          desc: 'Freshly prepared steamed chicken breast, brown rice, organic pumpkin puree, turmeric broth, and steamed carrots cooked without salt or oil.'
        },
        {
          name: 'BARF Raw Feeding Accommodation',
          desc: 'Dedicated cold-storage freezer compartments for raw meat diets, organ meats, and raw meaty bones supplied by guardians.'
        },
        {
          name: 'Strict Brand Kibble Following',
          desc: 'If your pet is on a specific commercial diet (Royal Canin, Farmina N&D, Orijen), we adhere to your exact measuring cup portions.'
        },
        {
          name: 'Unlimited Wholesome Dehydrated Treats',
          desc: 'Single-ingredient dehydrated chicken jerky, liver crisps, sweet potato chews, and collagen bone broths given during training.'
        }
      ],
      specs: [
        { label: 'Kitchen Hygiene', val: 'Dedicated canine chef facility with commercial refrigeration' },
        { label: 'Meal Frequency', val: '1, 2, or 3 meals daily matching guardian schedule' },
        { label: 'Allergy Shield', val: 'Individual color-coded prep boards for gluten/protein allergies' },
        { label: 'Hydration', val: 'Filtered alkaline water refreshed every 2 hours' }
      ]
    }
  ];

  const current = servicesDetailed[activeTab];

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
            Uncompromising Standard of Care
          </span>
        </div>
        <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f3e9dc] font-bold tracking-wide leading-tight">
          Holistic Hospitality &amp; Clinical Services Dossier.
        </h1>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 max-w-2xl mx-auto leading-relaxed">
          Explore the exhaustive specifications, biosecurity protocols, and veterinary standards that govern every second your companion spends in our care.
        </p>
      </div>

      {/* Interactive Tabs Navigation */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center mb-12 sm:mb-16">
        {servicesDetailed.map((svc, idx) => (
          <button
            key={svc.id}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2.5 px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer border ${
              activeTab === idx
                ? 'bg-[#dd2d4a] text-white border-[#dd2d4a] shadow-[0_8px_25px_rgba(221,45,74,0.35)] scale-102'
                : 'bg-[#121722] text-[#f3e9dc]/80 border-white/10 hover:border-[#cbeef3]/50 hover:bg-[#1a2336]'
            }`}
          >
            <span className="material-symbols-outlined text-base">{svc.icon}</span>
            <span>{svc.title.split(' ')[0]} {svc.title.split(' ')[1]}</span>
          </button>
        ))}
      </div>

      {/* Active Service Showcase Card */}
      <div className="bg-[#121722] border border-white/10 p-8 sm:p-12 lg:p-16 rounded-sm shadow-2xl mb-20 space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3] bg-[#0b0e14] px-3.5 py-1.5 border border-[#cbeef3]/30 rounded-sm">
              {current.tag}
            </span>
            <h2 className="font-['Fraunces',serif] text-2xl sm:text-3xl lg:text-4xl text-[#f3e9dc] font-bold">
              {current.title}
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 max-w-3xl leading-relaxed">
              {current.lead}
            </p>
          </div>
          <div className="w-18 h-18 rounded-2xl bg-[#0b0e14] border border-[#cbeef3]/40 flex items-center justify-center text-[#cbeef3] shrink-0 shadow-lg">
            <span className="material-symbols-outlined text-4xl">{current.icon}</span>
          </div>
        </div>

        {/* Real Ultra-HD Service Image Feature */}
        <div className="relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[600px] rounded-sm overflow-hidden border border-white/10 group shadow-2xl bg-[#0b0e14] flex items-center justify-center p-3 sm:p-6 pb-20 sm:pb-20">
          {/* Ambient blurred backdrop so wide frame is filled naturally */}
          <img
            src={current.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-35 scale-110 pointer-events-none"
          />
          <div className="absolute inset-0 bg-[#0b0e14]/40 pointer-events-none"></div>

          {/* Full uncropped photo */}
          <img
            src={current.image}
            alt={current.title}
            className="relative z-10 max-h-[400px] sm:max-h-[460px] md:max-h-[520px] w-auto max-w-full object-contain rounded-sm shadow-2xl group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14]/90 via-transparent to-transparent pointer-events-none z-20"></div>
          <div className="absolute top-4 left-4 bg-[#dd2d4a] text-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest shadow-md z-30">
            {current.tag}
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-[#0b0e14]/90 backdrop-blur-md p-3.5 border border-white/10 text-xs font-semibold text-[#f3e9dc] flex items-center justify-between z-30">
            <span>Verified Sanctuary Standard • {current.title}</span>
            <span className="text-[#cbeef3] hidden sm:inline">100% Genuine Clinical &amp; Hospitality Protocols</span>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {current.features.map((feat, idx) => (
            <div key={idx} className="p-7 sm:p-8 bg-[#0b0e14] border border-white/10 space-y-3 rounded-sm hover:border-[#dd2d4a]/60 transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#dd2d4a] text-white flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </span>
                <h4 className="font-['Fraunces',serif] text-lg text-[#f3e9dc] font-bold">
                  {feat.name}
                </h4>
              </div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed pl-9">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Specification Matrix */}
        <div className="p-8 bg-[#0b0e14] border border-white/10 rounded-sm space-y-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#f49cbb] block">
            Technical &amp; Operational Standards
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {current.specs.map((spec, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#cbeef3] font-bold block">
                  {spec.label}
                </span>
                <span className="text-xs sm:text-sm text-[#f3e9dc] font-medium leading-relaxed block">
                  {spec.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All 6 Services Summary Cards */}
      <div className="mb-20 space-y-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3]">Complete Overview</span>
          <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">
            All Comprehensive Standard Inclusions
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesDetailed.map((svc, idx) => (
            <div
              key={svc.id}
              onClick={() => {
                setActiveTab(idx);
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }}
              className="p-5 sm:p-6 bg-[#121722] border border-white/10 hover:border-[#dd2d4a] rounded-sm transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative h-44 w-full overflow-hidden rounded-sm border border-white/10">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="material-symbols-outlined text-lg text-white bg-[#0b0e14]/80 p-1.5 rounded-sm">
                      {svc.icon}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3] bg-[#0b0e14] px-2.5 py-1 border border-[#cbeef3]/30 rounded-sm">
                    {svc.tag}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-[#f49cbb]">Inspect Details →</span>
                </div>
                <h4 className="font-['Fraunces',serif] text-lg text-[#f3e9dc] font-bold">
                  {svc.title}
                </h4>
                <p className="text-xs text-[#f3e9dc]/75 leading-relaxed line-clamp-2">
                  {svc.lead}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Concierge Contact Strip */}
      <div className="p-8 sm:p-12 bg-gradient-to-r from-[#121722] via-[#1a2336] to-[#121722] border border-[#dd2d4a]/60 text-center space-y-6 shadow-2xl rounded-sm">
        <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">
          Require a tailored care plan for your companion?
        </h3>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/85 max-w-xl mx-auto leading-relaxed">
          Our private attendant concierge coordinates custom feeding schedules, medication doses, and door-to-door transit across Haryana and NCR.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a
            href={`https://wa.me/${BRAND.rawPhone}?text=Hi%20Furrever%20Inn,%20I%20have%20questions%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#128C7E] hover:bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 rounded-sm"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span>Connect on WhatsApp ({BRAND.cleanPhone})</span>
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
