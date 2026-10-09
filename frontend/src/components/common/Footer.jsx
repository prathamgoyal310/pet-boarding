import React from 'react';
import { BRAND } from '../../constants/brand';
import { FOOTER_LINKS } from '../../constants/navigation';

export default function Footer() {
  return (
    <footer className="bg-[#150a0e] border-t border-[#773344]/35 w-full transition-all duration-300 ease-out">
      <div className="w-full px-6 lg:px-16 py-16 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Row: Editorial Brand & Brief */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-12 border-b border-[#773344]/30">
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3.5">
              <img
                src={BRAND.crestLogo}
                alt="Furrever Inn Crest"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(227,181,164,0.4)]"
              />
              <div className="flex flex-col">
                <span className="font-['Cinzel',serif] text-xl tracking-wider uppercase text-[#f5e9e2] leading-none">
                  {BRAND.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#e3b5a4] mt-1 font-semibold">
                  Premier Canine Sanctuary • {BRAND.location}
                </span>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs md:text-sm text-[#f5e9e2]/80 leading-relaxed">
              Haryana's dedicated pet sanctuary offering pick &amp; drop service, 24x7 live CCTV feeds, frequent video updates, hospital-grade sanitization, emergency medical readiness, and unlimited wholesome treats for beloved canine companions.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="text-[10px] font-bold uppercase text-[#e3b5a4]/80 tracking-wider">Admissions Status</span>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-emerald-300 font-medium">Summer Residency Open</div>
            </div>
            <div className="w-px h-10 bg-[#773344]/35"></div>
            <div className="text-right">
              <span className="text-[10px] font-bold uppercase text-[#e3b5a4]/80 tracking-wider">Haryana Estate</span>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#f5e9e2] font-medium">Private Access Only</div>
            </div>
          </div>
        </div>

        {/* Middle Row: Architectural Navigation Links */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 text-xs font-bold uppercase tracking-wider text-[#f5e9e2]/80">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors duration-300 ${
                link.highlight ? 'text-[#f5e9e2] underline underline-offset-4 hover:text-[#e3b5a4]' : 'hover:text-[#e3b5a4]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Row: Copyright text */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[#773344]/20 text-[#f5e9e2]/60 font-['Plus_Jakarta_Sans',sans-serif] text-xs font-semibold">
          <p>© 2024 {BRAND.name} All Rights Reserved. Premier Pet Boarding, Daycare &amp; Canine Wellness.</p>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-[#e3b5a4]">
            <span>{BRAND.license}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
