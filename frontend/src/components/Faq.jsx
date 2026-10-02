import React, { useState } from 'react';

const faqs = [
  {
    question: "How does the dedicated Pick & Drop service operate?",
    answer: "Furrever Inn provides temperature-controlled pet transport vehicles equipped with secure travel crates, soft bedding, and an accompanied handler. Doorstep pick-up and drop-off can be easily scheduled across Haryana with real-time GPS tracking shared with parents."
  },
  {
    question: "How do parents access the 24x7 CCTV live stream and video recordings?",
    answer: "Immediately upon check-in, pet parents receive secure encrypted login credentials to our high-definition camera network. You can view crystal-clear live video with night-vision from your phone anytime, plus access recorded playback anytime during the stay."
  },
  {
    question: "How often will I receive photo and video updates?",
    answer: "Our handlers send regular photo and video journals directly via WhatsApp multiple times daily — capturing meal times, play sessions, grooming, and cozy sleep intervals so you never miss a moment."
  },
  {
    question: "What is Furrever Inn's 100% vaccinated companions policy?",
    answer: "To protect all resident pets, we enforce an absolute zero-exception vaccination rule. Every pet must have up-to-date vaccination records (DHPPiL, Rabies, and Kennel Cough) checked and verified by our clinical team before entering the premises."
  },
  {
    question: "What are the daily sanitization and emergency medical protocols?",
    answer: "Our facility undergoes 3x daily hospital-grade sanitization using pet-safe, non-toxic disinfectants. Additionally, we have certified veterinary staff on-site and 24x7 emergency medical transport ready for any immediate health requirement."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto border-b border-[#aa8986]/20 reveal-up" id="faq">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffb4ac]">Discretion &amp; Protocols</span>
        <h2 className="font-['Cinzel',serif] text-3xl md:text-4xl text-[#ffdad4] mt-2 tracking-wide">Frequently Asked Inquiries</h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm md:text-base text-[#dac2bf] mt-3 font-normal">
          Detailed assurances concerning safety, bio-security, transparency, and clinical standards.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border transition-all duration-300 bg-[#161214] ${
                isOpen ? 'border-[#ba1a1a]/50 shadow-[0_4px_24px_rgba(186,26,26,0.15)]' : 'border-[#aa8986]/25 hover:border-[#aa8986]/50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex justify-between items-center cursor-pointer transition-colors"
              >
                <h4 className="font-['Playfair_Display',serif] text-lg md:text-xl text-[#f3dfdd] pr-4">
                  {faq.question}
                </h4>
                <span
                  className={`material-symbols-outlined text-[#ffb4ac] transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#ba1a1a]' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-[#aa8986]/20 text-[#dac2bf] font-['Plus_Jakarta_Sans',sans-serif] text-sm md:text-base leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
