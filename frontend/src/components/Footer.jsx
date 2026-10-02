import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0b090a] border-t border-[#aa8986]/20 w-full transition-all duration-300 ease-out">
      <div className="w-full px-6 lg:px-16 py-16 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Row: Editorial Brand & Brief */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-12 border-b border-[#aa8986]/20">
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3.5">
              <img
                src="/assets/images/furrever_crest.png"
                alt="Furrever Inn Crest"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]"
              />
              <div className="flex flex-col">
                <span className="font-['Cinzel',serif] text-xl tracking-wider uppercase text-[#ffdad4] leading-none">
                  Furrever Inn Pvt. Ltd.
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#ffb4ac] mt-1 font-semibold">
                  Premier Canine Sanctuary • Haryana
                </span>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs md:text-sm text-[#dac2bf] leading-relaxed">
              Haryana's dedicated pet sanctuary offering pick &amp; drop service, 24x7 live CCTV feeds, frequent video updates, hospital-grade sanitization, emergency medical readiness, and unlimited wholesome treats for beloved canine companions.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="text-[10px] font-bold uppercase text-[#aa8986] tracking-wider">Admissions Status</span>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-emerald-400 font-medium">Summer Residency Open</div>
            </div>
            <div className="w-px h-10 bg-[#aa8986]/30"></div>
            <div className="text-right">
              <span className="text-[10px] font-bold uppercase text-[#aa8986] tracking-wider">Haryana Estate</span>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#ffdad4] font-medium">Private Access Only</div>
            </div>
          </div>
        </div>

        {/* Middle Row: Architectural Navigation Links */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 text-xs font-bold uppercase tracking-wider text-[#dac2bf]">
          <a className="hover:text-[#ffb4ac] transition-colors duration-300" href="#suites">
            Suites &amp; Grounds
          </a>
          <a className="hover:text-[#ffb4ac] transition-colors duration-300" href="#services">
            Sommelier Nutrition
          </a>
          <a className="hover:text-[#ffb4ac] transition-colors duration-300" href="#services">
            Medical Spa &amp; Hydrotherapy
          </a>
          <a className="hover:text-[#ffb4ac] transition-colors duration-300" href="#philosophy">
            Sanctuary Manifesto
          </a>
          <a className="hover:text-[#ffb4ac] transition-colors duration-300" href="#faq">
            Admissions &amp; Health Check
          </a>
          <a className="text-[#ffdad4] underline underline-offset-4 hover:text-[#ffb4ac] transition-colors duration-300" href="#enquiry">
            Private Concierge
          </a>
          <a className="hover:text-[#ffb4ac] transition-colors duration-300" href="#">
            Privacy Policy
          </a>
        </div>

        {/* Bottom Row: Copyright text */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[#aa8986]/10 text-[#aa8986] font-['Plus_Jakarta_Sans',sans-serif] text-xs">
          <p>© 2024 Furrever Inn Pvt. Ltd. All Rights Reserved. Premier Pet Boarding, Daycare &amp; Canine Wellness.</p>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider">
            <span>Non-Commercial Kenneling License #KA/BLR/VET-2024-99</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
