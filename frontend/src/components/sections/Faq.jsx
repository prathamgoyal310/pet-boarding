import React, { useState } from 'react';
import { FAQS } from '../../constants/faqs';
import { navigate } from '../../constants/navigation';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 sm:py-28 lg:py-32 xl:py-36 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto border-b border-[#880d1e]/40 reveal-up" id="faq">
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cbeef3]">
          Discretion &amp; Protocols
        </span>
        <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl text-[#f3e9dc] font-bold tracking-wide">
          Frequently Asked Inquiries
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm md:text-base text-[#f3e9dc]/80 font-normal leading-relaxed">
          Detailed assurances concerning safety, bio-security, transparency, and clinical standards.
        </p>
        <div className="pt-2">
          <a
            href="/faq"
            onClick={(e) => {
              e.preventDefault();
              navigate('/faq');
            }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cbeef3] hover:text-white px-5 py-2.5 border border-[#cbeef3]/40 hover:border-[#cbeef3] bg-[#121722] transition-colors rounded shadow-sm hover:shadow-md"
          >
            <span>Explore Full Page: Comprehensive Knowledgebase &amp; FAQs</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border transition-all duration-300 bg-[#121722] rounded-sm ${
                isOpen ? 'border-[#dd2d4a] shadow-[0_8px_30px_rgba(221,45,74,0.3)] ring-1 ring-[#dd2d4a]/40' : 'border-white/10 hover:border-[#cbeef3]/50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full p-6 sm:p-8 md:p-9 text-left flex justify-between items-center cursor-pointer transition-colors gap-6"
              >
                <h4 className="font-['Fraunces',serif] font-bold text-lg sm:text-xl text-[#f3e9dc] pr-2 leading-snug">
                  {faq.question}
                </h4>
                <span
                  className={`material-symbols-outlined text-[#cbeef3] transition-transform duration-300 shrink-0 text-2xl ${
                    isOpen ? 'rotate-180 text-[#dd2d4a]' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 pt-2 sm:px-8 sm:pb-8 sm:pt-3 md:px-9 md:pb-9 md:pt-4 border-t border-white/10 text-[#f3e9dc]/85 font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base leading-relaxed animate-fadeIn">
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
