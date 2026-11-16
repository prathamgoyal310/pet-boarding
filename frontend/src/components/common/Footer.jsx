import React from 'react';
import { BRAND } from '../../constants/brand';
import { FOOTER_LINKS } from '../../constants/navigation';

export default function Footer() {
  return (
    <footer className="bg-[#0b0e14] border-t border-white/10 w-full transition-all duration-300 ease-out">
      <div className="w-full px-6 sm:px-8 lg:px-16 py-20 sm:py-24 max-w-7xl mx-auto flex flex-col gap-14 sm:gap-16">
        {/* Top Row: Editorial Brand & Brief */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pb-14 border-b border-white/10">
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3.5">
              <img
                src={BRAND.crestLogo}
                alt="Furrever Inn Crest"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(203,238,243,0.3)]"
              />
              <div className="flex flex-col">
                <span className="font-['Fraunces',serif] text-xl font-bold tracking-wider uppercase text-[#f3e9dc] leading-none">
                  {BRAND.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#cbeef3] mt-1 font-semibold">
                  Premier Canine Sanctuary • {BRAND.location}
                </span>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs md:text-sm text-[#f3e9dc]/80 leading-relaxed">
              Haryana's dedicated pet sanctuary offering pick &amp; drop service, 24x7 live CCTV feeds, frequent video updates, hospital-grade sanitization, emergency medical readiness, and unlimited wholesome treats for beloved canine companions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a href={`tel:${BRAND.rawPhone}`} className="text-left md:text-right group">
              <span className="text-[10px] font-bold uppercase text-[#cbeef3] tracking-wider block">Direct Concierge</span>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#f3e9dc] group-hover:text-[#dd2d4a] transition-colors font-medium">{BRAND.phone}</div>
            </a>
            <div className="hidden sm:block w-px h-10 bg-white/10"></div>
            <a href={`mailto:${BRAND.email}`} className="text-left md:text-right group">
              <span className="text-[10px] font-bold uppercase text-[#f49cbb] tracking-wider block">Email Inquiries</span>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#f3e9dc] group-hover:text-[#dd2d4a] transition-colors font-medium">{BRAND.email}</div>
            </a>
          </div>
        </div>

        {/* Middle Row: Architectural Navigation Links */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 text-xs font-bold uppercase tracking-wider text-[#f3e9dc]/80">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors duration-300 ${
                link.highlight ? 'text-[#cbeef3] underline underline-offset-4 hover:text-white' : 'hover:text-[#cbeef3]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Row: Copyright text */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 text-[#f3e9dc]/60 font-['Plus_Jakarta_Sans',sans-serif] text-xs font-semibold">
          <p>© 2024 {BRAND.name} All Rights Reserved. Premier Pet Boarding, Daycare &amp; Canine Wellness.</p>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-[#cbeef3]">
            <span>{BRAND.license}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
