import React, { useEffect } from 'react';
import { BRAND } from '../constants/brand';
import { PHILOSOPHY_PILLARS } from '../constants/services';
import { navigate } from '../constants/navigation';

export default function PhilosophyPage({ onNavigateHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const manifestoArticles = [
    {
      num: '01',
      title: 'The Abolition of Cage Confinement',
      badge: 'Ethical Foundation',
      image: '/assets/images/real_cagefree_freedom.jpg',
      imageAlt: 'Dog experiencing joyful open freedom in green sanctuary lawn',
      quote: '“A cage is a warehouse for an animal. A sanctuary is a home for a soul.”',
      lead: 'Traditional boarding facilities rely on cold steel wire crates and concrete isolation boxes measuring barely 15 to 25 sq.ft. In these environments, dogs experience profound sensory deprivation, auditory panic from surrounding barking, and intense separation trauma.',
      paragraphs: [
        'At Furrever Inn, we instituted a foundational ban on confining cages. Every guest resides in an expansive sovereign suite ranging from 350 to 1,200 sq.ft, complete with climate control, natural daylight, orthopedic beds, and direct private lawn connectivity.',
        'Canine mental health requires freedom of movement. When dogs can stretch, look out onto greenery, choose where to lie, and breathe fresh outdoor air, their stress hormone (cortisol) drops by up to 70% within the first two hours.'
      ]
    },
    {
      num: '02',
      title: 'Circadian Biology & Temperament Matching',
      badge: 'Canine Psychology',
      image: '/assets/images/photo_philosophy_circadian.jpg',
      imageAlt: 'Compatible canine companions enjoying outdoor play in natural sunlight',
      quote: '“True well-being is synchronizing life with a dog’s internal biological clock.”',
      lead: 'Canines are ancestral creatures of rhythmic habit. Irregular feeding, haphazard potty breaks, and forced socialization with incompatible dogs cause severe anxiety and behavioral regression.',
      paragraphs: [
        'We structure each day around a verified circadian rhythm: invigorating morning trail walks at 08:00 AM, cognitive enrichment & play at 11:30 AM, quiet acoustic-isolated naps at 02:00 PM, twilight garden exercise at 05:30 PM, and affectionate evening tuck-in at 08:30 PM.',
        'Not all dogs desire pack socialization. We utilize a scientifically validated 4-tier intake assessment: Pack Play Lovers, Selective Socializers, Solo Sniffers, and Senior Rest Seekers. Dogs are matched exclusively with compatible companions under active 1:1 attendant supervision.'
      ]
    },
    {
      num: '03',
      title: 'The Attendant Compassion & Certification Code',
      badge: 'Human Touch',
      image: '/assets/images/real_handler_bond.jpg',
      imageAlt: 'Certified canine attendant bonding gently with golden retriever',
      quote: '“Tools and buildings mean nothing without handlers who love with their whole heart.”',
      lead: 'The difference between an ordinary boarding kennel and an elite sanctuary is the caliber, empathy, and vigilance of the people on the ground.',
      paragraphs: [
        'Every attendant at Furrever Inn is a dedicated, full-time canine hospitality professional. Our staff undergo rigorous certification in canine body language reading, low-stress handling, fear-free handling techniques, and emergency canine CPR.',
        'We maintain a permanent dedicated attendant-to-guest ratio of 1:1 to 1:3. Attendants do not rotate away; your dog bonds with a familiar, loving caretaker who learns their quirks, favorite ear scratches, and feeding pace throughout their entire stay.'
      ]
    },
    {
      num: '04',
      title: 'Radical Transparency as a Moral Duty',
      badge: 'Guardian Assurance',
      image: '/assets/images/photo_philosophy_transparency.jpg',
      imageAlt: 'Pet guardian receiving live video check-in and WhatsApp journal',
      quote: '“If a facility cannot show you everything, they are hiding something.”',
      lead: 'Pet parents should never spend their vacations worrying in the dark, wondering if their companion was fed, walked, or left alone in silence.',
      paragraphs: [
        'We practice 100% radical transparency. We provide unedited 24x7 HD live camera streaming directly to your phone, covering your dog’s private chamber and outdoor lawns without any extra fee or blackout windows.',
        'Furthermore, our attendants send two comprehensive WhatsApp video digests every day—showing your dog eating their breakfast, running on the grass, and resting happily. We invite guardians to tour every inch of our sanctuary in person.'
      ]
    }
  ];

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

      {/* Hero Header */}
      <div className="text-center space-y-5 mb-16 sm:mb-20 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#121722] border border-[#cbeef3]/40 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#cbeef3] animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#cbeef3]">
            The Furrever Inn Philosophy
          </span>
        </div>
        <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f3e9dc] font-bold tracking-wide leading-tight">
          Where Canine Comfort Meets Uncompromised Safety.
        </h1>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 max-w-2xl mx-auto leading-relaxed">
          The Sanctuary Manifesto: An unwavering declaration of why we built Haryana’s premier cage-free sanctuary for the dogs we cherish.
        </p>
      </div>

      {/* Featured Quote Box */}
      <div className="p-8 sm:p-12 lg:p-14 bg-[#121722] border-l-4 border-[#dd2d4a] border border-white/10 shadow-2xl rounded-sm mb-20 space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3]">Our Guiding Compass</span>
        <blockquote className="font-['Fraunces',serif] text-2xl sm:text-3xl lg:text-4xl text-[#f3e9dc] font-bold leading-snug">
          “Our companions don’t just stay — they flourish. When guardians travel, their dogs deserve a vacation of equal luxury, affection, and freedom.”
        </blockquote>
        <p className="text-xs sm:text-sm text-[#f49cbb] font-semibold pt-2">
          — Furrever Inn Founding Charter • Sector 76, Faridabad
        </p>
      </div>

      {/* 4 In-Depth Manifesto Chapters */}
      <div className="space-y-12 sm:space-y-16 mb-20">
        {manifestoArticles.map((art, artIdx) => (
          <div
            key={art.num}
            className="p-8 sm:p-12 lg:p-14 bg-[#121722] border border-white/10 rounded-sm shadow-xl space-y-8 hover:border-[#dd2d4a]/60 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3.5">
                <span className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#dd2d4a] font-bold">
                  {art.num}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#cbeef3]">
                  {art.badge}
                </span>
              </div>
              <span className="text-xs font-serif italic text-[#f49cbb]/90">
                {art.quote}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className={`space-y-6 ${artIdx % 2 === 1 ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'}`}>
                <h2 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">
                  {art.title}
                </h2>

                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc] font-semibold leading-relaxed">
                  {art.lead}
                </p>

                <div className="space-y-4 text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed font-normal">
                  {art.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Ultra-HD Real Image Vignette */}
              <div className={`relative h-64 sm:h-80 lg:h-96 w-full rounded-sm overflow-hidden border border-white/10 group shadow-lg ${artIdx % 2 === 1 ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'}`}>
                <img
                  src={art.image}
                  alt={art.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-[#0b0e14]/80 backdrop-blur-sm p-3 border border-white/10 text-[11px] text-[#f3e9dc] font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#cbeef3] text-sm shrink-0">verified</span>
                  <span>{art.imageAlt}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3 Pillars Summary Grid */}
      <div className="mb-20 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3]">Foundational Pillars</span>
          <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">
            The Three Tenets of Sanctuary Excellence
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 bg-[#121722] border border-white/10 rounded-sm space-y-4 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-[#0b0e14] border border-[#cbeef3]/30 flex items-center justify-center text-[#cbeef3] shadow-md">
                  <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                </div>
                <h4 className="font-['Fraunces',serif] text-xl text-[#f3e9dc] font-bold">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Concierge Contact Strip */}
      <div className="p-8 sm:p-12 bg-gradient-to-r from-[#121722] via-[#1a2336] to-[#121722] border border-[#dd2d4a]/60 text-center space-y-6 shadow-2xl rounded-sm">
        <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">
          Experience our philosophy in action
        </h3>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/85 max-w-xl mx-auto leading-relaxed">
          Schedule a personalized private tour or discuss your dog’s specific behavioral temperament with our head attendant.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a
            href={`https://wa.me/${BRAND.rawPhone}?text=Hi%20Furrever%20Inn,%20I%20would%20like%20to%20learn%20more%20about%20your%20sanctuary%20philosophy.`}
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
