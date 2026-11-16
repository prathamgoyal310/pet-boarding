import React, { useEffect, useState } from 'react';
import { BRAND } from '../constants/brand';

export default function FaqPage({ onNavigateHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      category: 'safety',
      question: 'What happens in the rare event of a sudden medical emergency?',
      answer: 'Our estate maintains a dedicated standby veterinary transit vehicle on premises 24/7. We operate an on-call emergency partnership with top multi-specialty veterinary hospitals and ICUs in Faridabad and South Delhi NCR, guaranteeing in-clinic arrival within 15 minutes. Guardians are contacted immediately upon symptom detection, and full emergency medical triage protocols are enacted with zero delay.'
    },
    {
      id: 2,
      category: 'safety',
      question: 'How do you prevent disease transmission and parasite infestations?',
      answer: 'We enforce an absolute 100% immunization prerequisite: every guest must possess verified records for DHPPiL, Anti-Rabies, and Kennel Cough (Bordetella), alongside proof of veterinary flea/tick prevention within the last 30 days. Furthermore, all suites, verandas, and play zones are sterilized 3 times daily using veterinary-grade F10SC disinfectant, combined with hospital-grade HEPA air filtration and UV-C bedding sanitization.'
    },
    {
      id: 3,
      category: 'safety',
      question: 'Are human attendants present during the night while dogs sleep?',
      answer: 'Yes, absolutely. Furrever Inn is never left unstaffed. Our certified overnight attendants sleep in stationed residences directly adjoining the guest chambers with acoustic listening monitors and 24x7 night-vision cameras. If a companion whines, needs an unexpected potty break, or desires comfort at 03:00 AM, our staff are by their side immediately.'
    },
    {
      id: 4,
      category: 'safety',
      question: 'What is your attendant training and canine-to-staff ratio?',
      answer: 'We strictly maintain an attentive ratio of 1:1 to 1:3 attendants per guest canine. Every attendant is full-time, background-checked, and certified in low-stress handling, canine body language interpretation, and emergency CPR. We strictly prohibit physical punishment, loud voices, or adverse training tools.'
    },
    {
      id: 5,
      category: 'nutrition',
      question: 'Can I bring my dog’s home-cooked food or preferred commercial kibble brand?',
      answer: 'Yes! We encourage guardians to bring their pet’s preferred diet to maintain digestive continuity. Whether your companion eats commercial kibble (Royal Canin, Farmina, Orijen), raw BARF diets, or home-cooked chicken and rice, our canine kitchen preserves it in dedicated temperature-controlled refrigeration and serves your exact measuring portions.'
    },
    {
      id: 6,
      category: 'nutrition',
      question: 'Do you provide freshly cooked sanctuary meals if I do not bring food?',
      answer: 'Yes, we prepare wholesome culinary meals daily in our canine kitchen. Options include steamed antibiotic-free chicken breast, brown rice, bone broth reduction, organic pumpkin puree, and gently scrambled eggs. All meals are prepared without salt, spices, onions, or artificial preservatives.'
    },
    {
      id: 7,
      category: 'nutrition',
      question: 'How do you handle severe food allergies or medical dietary restrictions?',
      answer: 'All dietary sensitivities (gluten, grain, specific poultry, or beef allergies) are permanently tagged to your dog’s digital dossier and physical suite clipboard. We use color-coded preparation boards and dedicated stainless steel bowls to prevent any trace cross-contamination.'
    },
    {
      id: 8,
      category: 'nutrition',
      question: 'Do you charge extra for administering daily prescribed medications?',
      answer: 'No. At Furrever Inn, medication administration is completely free of charge. Whether your pet requires daily insulin injections, thyroid pills, eye drops, or joint supplements, our certified staff log every dose on schedule at ₹0 additional surcharge.'
    },
    {
      id: 9,
      category: 'cctv',
      question: 'How do guardians access the 24x7 HD live CCTV video stream?',
      answer: 'Upon completing check-in, guardians receive secure encrypted mobile app credentials sent directly to their registered WhatsApp. You can log in from any iOS, Android, or desktop device to stream live 1080p video of your companion’s private chamber and outdoor play lawn anytime, day or night.'
    },
    {
      id: 10,
      category: 'cctv',
      question: 'Can multiple family members log into the CCTV camera simultaneously?',
      answer: 'Yes. Our cloud streaming servers support concurrent logins so parents, siblings, or family members in different time zones can all view the dog’s sanctuary room at the same time.'
    },
    {
      id: 11,
      category: 'cctv',
      question: 'At what times are the structured WhatsApp video journals sent?',
      answer: 'Guardians receive structured video journals twice daily without asking: Morning Digest at 09:30 AM (covering morning wake-up, breakfast bowl, and lawn sniff walk), and Evening Digest at 07:30 PM (covering afternoon playtime, dinner bowl, and tuck-in reassurance). Candid photo cards are sent during agility sessions.'
    },
    {
      id: 12,
      category: 'booking',
      question: 'How does the doorstep pick & drop transit service operate?',
      answer: 'We provide specialized climate-controlled transport vehicles across Faridabad, Gurugram, South Delhi, and NCR. Each van features impact-tested travel crates, anti-anxiety bedding, and a live WhatsApp GPS tracking link. A certified canine attendant accompanies the driver to monitor and comfort your pet throughout the journey.'
    },
    {
      id: 13,
      category: 'booking',
      question: 'What are your standard check-in and check-out timing windows?',
      answer: 'Standard check-in and check-out hours are between 08:00 AM and 08:00 PM. A full 24-hour cycle begins at your time of check-in. We offer a complimentary 2-hour grace window to accommodate unexpected city traffic or flight delays.'
    },
    {
      id: 14,
      category: 'booking',
      question: 'What is your reschedule and cancellation refund policy?',
      answer: 'We provide a 100% full refund for cancellations made at least 48 hours prior to the scheduled check-in date. If your travel dates shift, you can reschedule your stay to any future available dates within 6 months with 24 hours advance notice at zero penalty.'
    },
    {
      id: 15,
      category: 'booking',
      question: 'Are discounts available for long stays or multi-pet families?',
      answer: 'Yes! We provide a 15% discount for a second dog from the same household sharing a sovereign suite. Additionally, stays exceeding 14 nights receive extended privilege pricing with complimentary luxury departure grooming.'
    },
    {
      id: 16,
      category: 'booking',
      question: 'Can I visit the estate for a walkthrough before making a reservation?',
      answer: 'We warmly encourage in-person visits! Pet parents are invited to tour our suites, inspect our manicured lawns, meet our attendants, and review our kitchen in Sector 76, Faridabad. Please notify us on WhatsApp so we can schedule an uninterrupted private tour.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Inquiries (16)' },
    { id: 'safety', label: 'Safety & Clinical Medical (4)' },
    { id: 'nutrition', label: 'Nutrition & Daily Living (4)' },
    { id: 'cctv', label: 'Live CCTV & Video Journals (3)' },
    { id: 'booking', label: 'Pricing, Booking & Transit (5)' }
  ];

  const filtered = activeCategory === 'all'
    ? faqData
    : faqData.filter((f) => f.category === activeCategory);

  const toggle = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

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
            Guardian Knowledgebase &amp; Protocols
          </span>
        </div>
        <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f3e9dc] font-bold tracking-wide leading-tight">
          Comprehensive Inquiries &amp; Discretion Assurances.
        </h1>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 max-w-2xl mx-auto leading-relaxed">
          Detailed, transparent answers concerning safety, biosecurity, dietary customization, 24x7 live feeds, and emergency transit readiness.
        </p>

        {/* Real Guardian Reassurance Showcase */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-sm overflow-hidden my-8 border border-white/10 shadow-2xl group text-left">
          <img
            src="/assets/images/real_reunion_joy.jpg"
            alt="Joyful reunion and absolute peace of mind at Furrever Inn"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbeef3] bg-[#0b0e14]/85 backdrop-blur-sm px-3 py-1 border border-[#cbeef3]/30 rounded-sm inline-block">
                Zero Anxiety • 100% Verified Care
              </span>
              <h2 className="font-['Fraunces',serif] text-xl sm:text-2xl text-white font-bold drop-shadow">
                Everything You Need to Know Before Your Pet’s Stay.
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-[#0b0e14]/90 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded-sm text-xs text-[#f3e9dc]">
              <span className="material-symbols-outlined text-[#cbeef3] text-sm">verified_user</span>
              <span>16 FAQs Answered with Total Clarity</span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center pt-2">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full border cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-[#dd2d4a] text-white border-[#dd2d4a] shadow-lg'
                  : 'bg-[#121722] text-[#f3e9dc]/80 border-white/10 hover:border-[#cbeef3]/40'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-5 sm:space-y-6 mb-20 max-w-4xl mx-auto">
        {filtered.map((item) => {
          const isOpen = openQuestion === item.id;
          return (
            <div
              key={item.id}
              className={`border transition-all duration-300 bg-[#121722] rounded-sm ${
                isOpen
                  ? 'border-[#dd2d4a] shadow-[0_8px_30px_rgba(221,45,74,0.3)] ring-1 ring-[#dd2d4a]/40'
                  : 'border-white/10 hover:border-[#cbeef3]/50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="w-full p-6 sm:p-8 text-left flex justify-between items-center cursor-pointer transition-colors gap-6"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#cbeef3] block">
                    {item.category.toUpperCase()} PROTOCOL
                  </span>
                  <h3 className="font-['Fraunces',serif] font-bold text-lg sm:text-xl text-[#f3e9dc] leading-snug">
                    {item.question}
                  </h3>
                </div>
                <span
                  className={`material-symbols-outlined text-[#cbeef3] transition-transform duration-300 shrink-0 text-2xl ${
                    isOpen ? 'rotate-180 text-[#dd2d4a]' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 sm:px-8 sm:pb-8 sm:pt-2 border-t border-white/10 text-[#f3e9dc]/85 font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base leading-relaxed animate-fadeIn">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Concierge Contact Card */}
      <div className="p-8 sm:p-12 bg-gradient-to-r from-[#121722] via-[#1a2336] to-[#121722] border border-[#dd2d4a]/60 text-center space-y-6 shadow-2xl rounded-sm">
        <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">
          Have a unique inquiry not listed here?
        </h3>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/85 max-w-xl mx-auto leading-relaxed">
          Our private attendant concierge is on duty 7 days a week to answer specific clinical, dietary, or behavioral questions.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a
            href={`https://wa.me/${BRAND.rawPhone}?text=Hi%20Furrever%20Inn,%20I%20have%20a%20question%20about%20boarding.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#128C7E] hover:bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 rounded-sm"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span>Ask via WhatsApp ({BRAND.cleanPhone})</span>
          </a>
          <a
            href={`mailto:${BRAND.email}`}
            className="px-8 py-4 border border-[#cbeef3]/40 hover:border-[#cbeef3] text-[#cbeef3] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-sm flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            <span>Email Inquiries ({BRAND.email})</span>
          </a>
        </div>
      </div>
    </main>
  );
}
