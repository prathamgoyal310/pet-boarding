import React, { useEffect, useState } from 'react';
import { BRAND } from '../constants/brand';
import { navigate } from '../constants/navigation';

export default function RatesPage({ onNavigateHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const detailedPackages = [
    {
      id: '1h',
      name: 'Play & Socialize Session',
      duration: '1 Hour',
      rate: '₹99',
      category: 'daycare',
      tag: 'Hourly Socialization',
      badge: 'Quick Burn',
      image: '/assets/images/photo_rate_starter.jpg',
      description: 'Engineered for high-energy companions requiring supervised parkland socialization, energy dissipation, and fresh hydration without full-day commitment.',
      inclusions: [
        'Full access to manicured 2,000 sq.ft agility parkland',
        '1:1 attendant-monitored temperament-matched group play',
        'Continuous fresh alkaline filtered water bowls',
        'Departure coat brushing & paw sanitization wipe',
        'Post-play digital photo card via WhatsApp'
      ],
      idealFor: 'Work-from-home pet parents needing an energy burn session or lunch-break socialization.'
    },
    {
      id: '3h',
      name: 'Quick Stay Refresh',
      duration: '3 Hours',
      rate: '₹199',
      category: 'daycare',
      tag: 'Short Respite',
      badge: 'Parent Freedom',
      image: '/assets/images/photo_rate_explorer.jpg',
      description: 'Ideal while running city errands or attending appointments. Your dog enjoys curated sensory garden exploration and calm resting intervals.',
      inclusions: [
        'Lawn playtime & cognitive puzzle toy session',
        'Private resting suite access with orthopedic bedding',
        'Organic bone broth or healthy organic dehydrated treats',
        'WhatsApp video update at completion of stay',
        'Filtered alkaline water & coat freshening'
      ],
      idealFor: 'Parents attending short family functions, salon sessions, or doctor appointments.'
    },
    {
      id: '6h',
      name: 'Half Day Retreat',
      duration: '6 Hours',
      rate: '₹349',
      category: 'daycare',
      tag: 'Half-Day Cadence',
      badge: 'Popular Daycare',
      image: '/assets/images/photo_rate_family.jpg',
      description: 'A structured 6-hour circadian balance of energetic lawn agility, afternoon shaded veranda rest, and wholesome treat enrichment.',
      inclusions: [
        'Two scheduled lawn play intervals (morning & midday)',
        'Private acoustic-decoupled quiet chamber rest period',
        'Home-cooked fresh meal or parent-supplied kibble feeding',
        'Continuous 24x7 live HD camera access on parent phone',
        'Midday WhatsApp video & photo journal update'
      ],
      idealFor: 'Office workers requiring dependable half-day care without nighttime separation.'
    },
    {
      id: '12h',
      name: 'Full Day Care',
      duration: '12 Hours',
      rate: '₹549',
      category: 'daycare',
      tag: 'Full-Day Sanctuary',
      badge: 'Comprehensive Care',
      image: '/assets/images/photo_rate_monthly.jpg',
      description: 'Complete daytime immersion from 08:00 AM to 08:00 PM. Full routine featuring exercise, relaxation, mental games, and loving companionship.',
      inclusions: [
        'Three guided lawn play & scent-trail walks',
        'Midday sensory relaxation session with calming ambient audio',
        'Two customized nutritious meals adhering to parent dietary specs',
        'Live 4K night-vision camera streaming with mobile login',
        'Two detailed WhatsApp journal videos (11:00 AM & 05:00 PM)',
        'Full complimentary coat hygiene brushing before pickup'
      ],
      idealFor: 'Busy workdays, day trips, or home renovation days.'
    },
    {
      id: '24h',
      name: '24-Hour Day & Night Boarding',
      duration: '24 Hours (Full Overnight)',
      rate: '₹799',
      category: 'overnight',
      tag: 'Signature Boarding',
      badge: 'Most Popular',
      featured: true,
      image: '/assets/images/real_overnight_rest.jpg',
      description: 'Our benchmark overnight experience. A full 24-hour cycle including climate-controlled private suite lodging, nighttime attendant monitoring, and non-stop safety.',
      inclusions: [
        'Private sovereign climate chamber with memory-foam mattress',
        'Direct access to manicured lawn play areas',
        '24x7 HD live stream directly on guardian’s smartphone',
        'Two chef-prepared gourmet meals + unlimited healthy treats',
        'Morning (09:30 AM) & Evening (07:30 PM) WhatsApp video updates',
        'Nighttime attendant stationed on sanctuary grounds 24/7',
        'Medication administration (if needed) at ₹0 extra fee'
      ],
      idealFor: 'Weekend getaways, overnight travel, and private leisure trips.'
    },
    {
      id: '3d',
      name: 'Extended Mini-Stay',
      duration: '3 Days / 3 Nights',
      rate: '₹2,199',
      category: 'extended',
      tag: 'Weekend Vacation',
      badge: 'Great Value',
      image: '/assets/images/photo_rate_extended.jpg',
      description: 'Designed for short business trips and holiday weekends. Provides deep routine stabilization with familiar attendant bonding and enriched wellness.',
      inclusions: [
        'Continuous 24-hour boarding across 3 full calendar days',
        'Personalized daily routine calendar with consistent handler',
        'Twice-daily video journals + daily clinical wellness check',
        'Gourmet meal plans with steamed protein & bone broth',
        'Agility lawn play, pack socialization, and pool splash (seasonal)',
        'Departure coat wash, hygiene wipe & brush-out'
      ],
      idealFor: '3-day family holidays, wedding trips, and long weekends.'
    },
    {
      id: '7d',
      name: 'Weekly Full Boarding',
      duration: '7 Days / 7 Nights',
      rate: '₹4,699',
      category: 'extended',
      tag: 'Extended Sanctuary',
      badge: 'Best Luxury Value',
      image: '/assets/images/photo_rate_fortnight.jpg',
      description: 'Comprehensive week-long sanctuary retreat. Significant honorarium saving with complete peace of mind while traveling overseas or on vacations.',
      inclusions: [
        '7 complete 24-hour cycles of private sanctuary lodging',
        'Dedicated senior attendant assigned to your companion',
        'Unlimited organic dehydrated treats, bone broths & fruit bites',
        'Daily WhatsApp video digests with playful highlights',
        'Complimentary luxury bath & coat conditioning before reunion',
        'Priority emergency hospital transit standby insurance',
        'Free doorstep pickup & drop discount within Faridabad'
      ],
      idealFor: 'Vacation travel, business trips abroad, or medical recovery periods.'
    }
  ];

  const filtered = selectedCategory === 'all'
    ? detailedPackages
    : detailedPackages.filter((p) => p.category === selectedCategory);

  return (
    <main className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Return Breadcrumb */}
      <div className="mb-10 sm:mb-12">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) onNavigateHome();
            else navigate('/');
          }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#cbeef3] hover:text-white px-5 py-2.5 border border-[#cbeef3]/30 hover:border-[#cbeef3] bg-[#121722] transition-colors rounded-lg shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span>Return to Sanctuary Overview</span>
        </a>
      </div>

      {/* Page Hero Header */}
      <div className="text-center space-y-5 mb-16 sm:mb-20 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#121722] border border-[#cbeef3]/40 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#cbeef3] animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#cbeef3]">
            Transparent Honorarium Architecture
          </span>
        </div>
        <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f3e9dc] font-bold tracking-wide leading-tight">
          Comprehensive Care Tariffs &amp; Package Inclusions.
        </h1>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 max-w-2xl mx-auto leading-relaxed">
          At Furrever Inn, we believe in total financial transparency. No surprise surcharges for CCTV feeds, medication dosing, or healthy organic treats. Every tier is all-inclusive.
        </p>

        {/* Real Sanctuary Grounds Photographic Feature */}
        <div className="relative w-full h-80 sm:h-96 md:h-[460px] lg:h-[520px] rounded-sm overflow-hidden my-8 border border-white/10 shadow-2xl group text-left">
          <img
            src="/assets/images/real_rates_hero.jpg"
            alt="Furrever Inn Parkland Sanctuary"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            style={{ objectPosition: 'center 24%' }}
          />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0b0e14]/90 via-[#0b0e14]/40 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3] bg-[#0b0e14]/85 backdrop-blur-sm px-3 py-1 border border-[#cbeef3]/30 rounded-sm inline-block">
                Authentic Sanctuary Grounds • Sector 76, Faridabad
              </span>
              <h2 className="font-['Fraunces',serif] text-xl sm:text-2xl md:text-3xl text-white font-bold drop-shadow">
                Pure Freedom. 100% Cage-Free Hospitality.
              </h2>
            </div>
            <div className="flex items-center gap-2.5 bg-[#0b0e14]/90 backdrop-blur-md px-4 py-2 border border-white/10 rounded-sm text-xs text-[#f3e9dc]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold">Strict 16-Suite Cap • Zero Hidden Surcharges</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 justify-center pt-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full border cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#dd2d4a] text-white border-[#dd2d4a] shadow-lg'
                : 'bg-[#121722] text-[#f3e9dc]/80 border-white/10 hover:border-[#cbeef3]/40'
            }`}
          >
            All Packages (7)
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('daycare')}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full border cursor-pointer ${
              selectedCategory === 'daycare'
                ? 'bg-[#dd2d4a] text-white border-[#dd2d4a] shadow-lg'
                : 'bg-[#121722] text-[#f3e9dc]/80 border-white/10 hover:border-[#cbeef3]/40'
            }`}
          >
            Hourly &amp; Day Care (4)
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('overnight')}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full border cursor-pointer ${
              selectedCategory === 'overnight'
                ? 'bg-[#dd2d4a] text-white border-[#dd2d4a] shadow-lg'
                : 'bg-[#121722] text-[#f3e9dc]/80 border-white/10 hover:border-[#cbeef3]/40'
            }`}
          >
            24-Hour Overnight (1)
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('extended')}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full border cursor-pointer ${
              selectedCategory === 'extended'
                ? 'bg-[#dd2d4a] text-white border-[#dd2d4a] shadow-lg'
                : 'bg-[#121722] text-[#f3e9dc]/80 border-white/10 hover:border-[#cbeef3]/40'
            }`}
          >
            Multi-Day &amp; Weekly (2)
          </button>
        </div>
      </div>

      {/* Package Detail Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
        {filtered.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-[#121722] border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group rounded-sm shadow-xl ${
              pkg.featured
                ? 'border-2 border-[#dd2d4a] ring-2 ring-[#dd2d4a]/30 shadow-[0_12px_40px_rgba(221,45,74,0.25)]'
                : 'border-white/10 hover:border-[#dd2d4a]/70 hover:-translate-y-1'
            }`}
          >
            <div className="space-y-6">
              {/* Ultra-HD Real Image Header */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-sm border border-white/10 group-hover:shadow-lg transition-shadow">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3] bg-[#0b0e14]/90 backdrop-blur-sm px-3 py-1 border border-[#cbeef3]/30 rounded-sm">
                    {pkg.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#dd2d4a]/90 backdrop-blur-sm px-2.5 py-1 rounded-sm shadow">
                    {pkg.badge}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-['Fraunces',serif] text-2xl text-[#f3e9dc] font-bold">
                  {pkg.name}
                </h3>
                <div className="font-['Fraunces',serif] text-3xl sm:text-4xl text-[#f26a8d] font-bold mt-2">
                  {pkg.rate}{' '}
                  <span className="text-xs font-normal text-[#f3e9dc]/70 font-sans tracking-normal">
                    / {pkg.duration}
                  </span>
                </div>
              </div>

              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
                {pkg.description}
              </p>

              {/* Inclusions List */}
              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#cbeef3] block mb-2">
                  Care Inclusions Included Free
                </span>
                {pkg.inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#f3e9dc]/85">
                    <span className="material-symbols-outlined text-[#cbeef3] text-sm shrink-0 mt-0.5">check_circle</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Ideal for note */}
              <div className="p-3.5 bg-[#0b0e14] border border-white/10 text-[11px] text-[#f49cbb] rounded-sm leading-relaxed">
                <strong className="text-[#f3e9dc]">Ideal For:</strong> {pkg.idealFor}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-6">
              <a
                href="#enquiry"
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  setTimeout(() => {
                    const el = document.getElementById('enquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 120);
                }}
                className="block w-full py-3.5 text-center text-xs font-bold uppercase tracking-widest bg-[#dd2d4a] hover:bg-[#b81d36] text-white transition-all shadow-md rounded-sm"
              >
                Reserve This Package
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Zero Hidden Fees Code of Honor */}
      <div className="mb-20 bg-[#121722] border border-white/10 p-8 sm:p-12 lg:p-14 shadow-2xl rounded-sm">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cbeef3]">
            Ethical Care Commitment
          </span>
          <h2 className="font-['Fraunces',serif] text-2xl sm:text-3xl lg:text-4xl text-[#f3e9dc] font-bold">
            The Zero-Hidden-Fee Guarantee
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/80">
            Many facilities add surcharges for cameras, medication, or outdoor play. At Furrever Inn, these are fundamental rights of every guest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#0b0e14] border border-white/10 space-y-3 rounded-sm">
            <span className="material-symbols-outlined text-[#cbeef3] text-3xl">videocam</span>
            <h4 className="font-['Fraunces',serif] text-base text-[#f3e9dc] font-bold">24x7 HD Live CCTV</h4>
            <p className="text-xs text-[#f3e9dc]/75 leading-relaxed">
              Included at ₹0. Direct credentials sent to your smartphone to view your pet anytime, day or night.
            </p>
          </div>

          <div className="p-6 bg-[#0b0e14] border border-white/10 space-y-3 rounded-sm">
            <span className="material-symbols-outlined text-[#cbeef3] text-3xl">medication</span>
            <h4 className="font-['Fraunces',serif] text-base text-[#f3e9dc] font-bold">Medication Administration</h4>
            <p className="text-xs text-[#f3e9dc]/75 leading-relaxed">
              Included at ₹0. Our trained attendants strictly administer veterinary supplements, drops, and oral pills per schedule.
            </p>
          </div>

          <div className="p-6 bg-[#0b0e14] border border-white/10 space-y-3 rounded-sm">
            <span className="material-symbols-outlined text-[#cbeef3] text-3xl">restaurant</span>
            <h4 className="font-['Fraunces',serif] text-base text-[#f3e9dc] font-bold">Gourmet Treats &amp; Broths</h4>
            <p className="text-xs text-[#f3e9dc]/75 leading-relaxed">
              Included at ₹0. Unlimited natural single-ingredient dehydrated treats, warm bone broth, and organic bites.
            </p>
          </div>

          <div className="p-6 bg-[#0b0e14] border border-white/10 space-y-3 rounded-sm">
            <span className="material-symbols-outlined text-[#cbeef3] text-3xl">chat</span>
            <h4 className="font-['Fraunces',serif] text-base text-[#f3e9dc] font-bold">Twice-Daily Video Journals</h4>
            <p className="text-xs text-[#f3e9dc]/75 leading-relaxed">
              Included at ₹0. Direct WhatsApp HD video clips sent to parents every morning and evening without asking.
            </p>
          </div>
        </div>
      </div>

      {/* Reservation Terms & Check-in Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#121722] border border-white/10 p-8 sm:p-12 rounded-sm mb-20">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3]">Policies &amp; Booking Guidelines</span>
          <h3 className="font-['Fraunces',serif] text-2xl text-[#f3e9dc] font-bold">
            Intake Protocols &amp; Timing
          </h3>
          <ul className="space-y-3.5 text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#cbeef3] text-sm shrink-0 mt-0.5">schedule</span>
              <span><strong>Check-in &amp; Check-out Window:</strong> Standard hours are 08:00 AM to 08:00 PM. A flexible 2-hour grace period is honored for unforeseen travel traffic.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#cbeef3] text-sm shrink-0 mt-0.5">pets</span>
              <span><strong>Multi-Pet Privilege:</strong> 15% honorarium reduction for a second canine from the same family sharing a sovereign suite.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#cbeef3] text-sm shrink-0 mt-0.5">verified_user</span>
              <span><strong>Immunization Prerequisite:</strong> Up-to-date DHPPiL, Anti-Rabies, and Kennel Cough vaccines verified prior to check-in.</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-6 space-y-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#f49cbb]">Reschedule &amp; Cancellation</span>
          <h3 className="font-['Fraunces',serif] text-2xl text-[#f3e9dc] font-bold">
            100% Risk-Free Cancellation
          </h3>
          <ul className="space-y-3.5 text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#cbeef3] text-sm shrink-0 mt-0.5">check_circle</span>
              <span><strong>Full 100% Refund:</strong> Cancel with 48 hours notice prior to scheduled check-in for an immediate refund.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#cbeef3] text-sm shrink-0 mt-0.5">event_repeat</span>
              <span><strong>Complimentary Reschedule:</strong> Flight delayed or plans shifted? Reschedule your stay dates anytime with 24 hours notice.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#cbeef3] text-sm shrink-0 mt-0.5">lock</span>
              <span><strong>Deposit Terms:</strong> A 50% reservation token reserves the suite, with the balance settled upon seamless check-out.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Concierge Booking Strip */}
      <div className="p-8 sm:p-12 bg-gradient-to-r from-[#121722] via-[#1a2336] to-[#121722] border border-[#dd2d4a]/60 text-center space-y-6 shadow-2xl rounded-sm">
        <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">
          Ready to reserve your pet’s sovereign chamber?
        </h3>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/85 max-w-xl mx-auto leading-relaxed">
          Due to our strict cap of just 16 sovereign chambers, reservations fill up fast during weekends and holiday seasons.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a
            href={`https://wa.me/${BRAND.rawPhone}?text=Hi%20Furrever%20Inn,%20I%20would%20like%20to%20reserve%20a%20stay%20for%20my%20dog.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#128C7E] hover:bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 rounded-sm"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span>Instant Quote on WhatsApp ({BRAND.cleanPhone})</span>
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
