import React, { useEffect } from 'react';
import { BRAND } from '../constants/brand';
import EnquiryForm from '../components/sections/EnquiryForm';

export default function AdmissionsPage({ onNavigateHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const admissionSteps = [
    {
      step: '01',
      title: 'Digital Reservation Dossier Submission',
      badge: 'Step 1 • Intake Request',
      image: '/assets/images/real_admissions_welcome.jpg',
      desc: 'Submit your requested stay dates, canine breed, weight, medical history notes, and preferred sovereign chamber online or via WhatsApp.',
      detail: 'Our private concierge reviews availability and reaches out within 2 hours to confirm calendar slots and share customized intake forms.'
    },
    {
      step: '02',
      title: 'Clinical Immunization Verification',
      badge: 'Step 2 • Medical Shield',
      image: '/assets/images/photo_admissions_vet.jpg',
      desc: 'To protect every resident guest from communicable illnesses, 100% of admitted canines must possess verified veterinary vaccination records.',
      detail: 'Our veterinary officer reviews proof of DHPPiL (Distemper, Parvo, Hepatitis), Anti-Rabies Vaccine, and Kennel Cough (Bordetella).'
    },
    {
      step: '03',
      title: 'Complimentary Temperament Trial',
      badge: 'Step 3 • Behavioral Match',
      image: '/assets/images/photo_admissions_trial.jpg',
      desc: 'First-time guests are invited for a complimentary 30-minute lawn orientation to meet our attendants and explore the sensory grounds.',
      detail: 'We observe your companion’s sociability level to assign them the ideal play group (Pack-Friendly, Selective, Solo Explorer, or Senior).'
    },
    {
      step: '04',
      title: 'Stress-Free Doorstep Transit or Arrival',
      badge: 'Step 4 • Smooth Check-in',
      image: '/assets/images/photo_admissions_arrival.jpg',
      desc: 'Opt for our climate-controlled sanitized pickup van with live GPS tracking, or drop your pet off directly at our estate in Sector 76, Faridabad.',
      detail: 'Upon arrival, your companion is escorted into their sovereign suite, given fresh filtered alkaline water, and sent a greeting photo update.'
    }
  ];

  const vaccineRequirements = [
    {
      vaccine: 'DHPPiL Core Vaccine',
      protectsAgainst: 'Distemper, Hepatitis, Parvovirus, Parainfluenza & Leptospirosis',
      validity: 'Administered within the last 12 months',
      status: 'Strictly Mandatory'
    },
    {
      vaccine: 'Anti-Rabies Vaccine (ARV)',
      protectsAgainst: 'Rabies Virus',
      validity: 'Administered within the last 12 months',
      status: 'Strictly Mandatory'
    },
    {
      vaccine: 'Kennel Cough (Bordetella)',
      protectsAgainst: 'Bordetella bronchiseptica & Canine Respiratory Complex',
      validity: 'Administered at least 7 to 10 days prior to boarding',
      status: 'Strictly Mandatory'
    },
    {
      vaccine: 'External Parasite Prevention',
      protectsAgainst: 'Ticks, Fleas & Mite infestation',
      validity: 'Veterinary spot-on / chewable given within past 30 days',
      status: 'Strictly Mandatory'
    }
  ];

  const packingChecklist = [
    {
      category: 'What You Should Bring',
      icon: 'luggage',
      items: [
        'Updated physical or digital Veterinary Health Booklet',
        'Specific prescription medication or daily joint supplements (if any)',
        'Preferred commercial kibble or raw meat (if custom home diet is not chosen)',
        'Comfort item with home scent: favorite chew toy or unwashed t-shirt'
      ]
    },
    {
      category: 'What We Provide (Included Free)',
      icon: 'hotel',
      items: [
        'High-density orthopedic memory-foam mattress with hypoallergenic bamboo sheath',
        'Stainless steel sanitized food & fresh alkaline filtered water bowls',
        'Continuous 24x7 HD night-vision CCTV stream on your smartphone',
        'Chef-cooked chicken & broth bowls, organic pumpkin puree, and organic dehydrated treats',
        '24/7 dedicated attendant monitoring, daily brush-out & ear cleaning'
      ]
    }
  ];

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

      {/* Hero Header */}
      <div className="text-center space-y-5 mb-16 sm:mb-20 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#121722] border border-[#cbeef3]/40 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#cbeef3] animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#cbeef3]">
            Private Admissions &amp; Intake Protocol
          </span>
        </div>
        <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f3e9dc] font-bold tracking-wide leading-tight">
          Bespoke Guest Admissions &amp; Clinical Verification.
        </h1>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 max-w-2xl mx-auto leading-relaxed">
          Due to our strict cap of just 16 sovereign suites, each resident is onboarded through our fear-free clinical intake process.
        </p>
      </div>

      {/* 4 Step Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
        {admissionSteps.map((st) => (
          <div
            key={st.step}
            className="p-6 sm:p-7 bg-[#121722] border border-white/10 rounded-sm shadow-xl flex flex-col justify-between space-y-5 hover:border-[#dd2d4a]/70 transition-all group"
          >
            <div className="space-y-4">
              {/* Ultra-HD Real Step Photo */}
              <div className="relative h-40 w-full overflow-hidden rounded-sm">
                <img
                  src={st.image}
                  alt={st.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="font-['Fraunces',serif] text-2xl text-white font-bold bg-[#dd2d4a]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-sm">
                    {st.step}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#cbeef3] bg-[#0b0e14] px-2.5 py-1 rounded-sm border border-[#cbeef3]/30">
                  {st.badge}
                </span>
              </div>
              <h3 className="font-['Fraunces',serif] text-lg text-[#f3e9dc] font-bold leading-snug">
                {st.title}
              </h3>
              <p className="text-xs text-[#f3e9dc]/80 leading-relaxed font-normal">
                {st.desc}
              </p>
            </div>
            <div className="p-3 bg-[#0b0e14] border border-white/10 text-[11px] text-[#f49cbb] rounded-sm leading-relaxed">
              {st.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Vaccination Standards Table */}
      <div className="p-8 sm:p-12 lg:p-14 bg-[#121722] border border-white/10 shadow-2xl rounded-sm mb-20 space-y-8">
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3]">Biosecurity Mandate</span>
          <h2 className="font-['Fraunces',serif] text-2xl sm:text-3xl lg:text-4xl text-[#f3e9dc] font-bold">
            Mandatory Immunization Checklist
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/80 max-w-2xl leading-relaxed">
            Our 100% vaccinated policy protects every puppy, adult, and senior canine from contagious disease outbreaks. We verify all physical veterinary booklets or digital vet records prior to entry.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/15 text-[11px] uppercase tracking-wider text-[#cbeef3]">
                <th className="py-4 px-4 font-bold">Vaccine / Protection</th>
                <th className="py-4 px-4 font-bold">Pathogens Guarded</th>
                <th className="py-4 px-4 font-bold">Validity Requirement</th>
                <th className="py-4 px-4 font-bold text-right">Requirement Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-xs sm:text-sm text-[#f3e9dc]">
              {vaccineRequirements.map((v, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-bold text-[#f3e9dc]">{v.vaccine}</td>
                  <td className="py-4 px-4 text-[#f3e9dc]/80">{v.protectsAgainst}</td>
                  <td className="py-4 px-4 text-[#f49cbb]">{v.validity}</td>
                  <td className="py-4 px-4 text-right">
                    <span className="inline-block px-3 py-1 bg-[#880d1e]/30 border border-[#dd2d4a]/60 text-white text-[10px] uppercase font-bold tracking-wider rounded-sm">
                      {v.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Packing Checklist Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {packingChecklist.map((col, idx) => (
          <div key={idx} className="p-8 sm:p-10 bg-[#121722] border border-white/10 rounded-sm shadow-xl space-y-6">
            <div className="flex items-center gap-3.5">
              <span className="material-symbols-outlined text-[#cbeef3] text-3xl">{col.icon}</span>
              <h3 className="font-['Fraunces',serif] text-xl sm:text-2xl text-[#f3e9dc] font-bold">
                {col.category}
              </h3>
            </div>
            <ul className="space-y-3.5">
              {col.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#f3e9dc]/85 leading-relaxed">
                  <span className="material-symbols-outlined text-[#cbeef3] text-sm shrink-0 mt-0.5">
                    {idx === 0 ? 'check' : 'verified'}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* First-Time Guest Dog Enrolment Callout Banner */}
      <div className="mb-14 p-6 sm:p-8 bg-gradient-to-r from-[#1a2336] via-[#121722] to-[#1a2336] border-2 border-[#cbeef3]/40 rounded-sm shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#880d1e]/50 border border-[#dd2d4a]/60 text-white text-[10px] font-bold uppercase tracking-widest">
            🐾 First-Time Boarding Guest
          </div>
          <h3 className="font-['Fraunces',serif] text-xl sm:text-2xl text-[#f3e9dc] font-bold">
            Complete the Official Dog Enrolment Dossier
          </h3>
          <p className="text-xs sm:text-sm text-[#f3e9dc]/80 max-w-xl">
            First-time canines must be registered in our verified boarding database with their immunization records, dietary habits, parent IDs, and emergency veterinarian details.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <a
            href="#/enrollment"
            className="px-6 py-3.5 bg-[#dd2d4a] hover:bg-[#b81d36] text-white text-xs font-bold uppercase tracking-widest rounded shadow-xl hover:shadow-[0_0_20px_rgba(221,45,74,0.6)] transition-all text-center flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">assignment</span>
            <span>Fill Enrolment Form</span>
          </a>
        </div>
      </div>

      {/* Embedded Booking Dossier Form */}
      <div className="mb-20">
        <div className="text-center space-y-3 mb-10 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3]">Direct Reservation</span>
          <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl text-[#f3e9dc] font-bold">
            Submit Your Stay Dossier
          </h2>
          <p className="text-xs sm:text-sm text-[#f3e9dc]/80">
            Fill out the form below to lock in reservation availability for your companion.
          </p>
        </div>
        <EnquiryForm />
      </div>
    </main>
  );
}
