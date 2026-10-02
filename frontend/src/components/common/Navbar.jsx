import React, { useState } from 'react';
import { BRAND } from '../../constants/brand';
import { NAV_LINKS } from '../../constants/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b090a]/90 backdrop-blur-md border-b border-[#aa8986]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <img
            src={BRAND.crestLogo}
            alt="Furrever Inn Crest"
            className="h-10 sm:h-11 w-auto object-contain drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform"
          />
          <span className="font-['Cinzel',serif] text-lg sm:text-xl font-bold tracking-[0.16em] uppercase text-[#ffdad4] group-hover:text-white transition-colors">
            FURREVER INN
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] font-semibold text-[#dac2bf] hover:text-[#ffb4ac] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${BRAND.rawPhone}`}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#dac2bf] hover:text-white border border-[#aa8986]/30 hover:border-[#ffb4ac] transition-colors"
          >
            <span className="material-symbols-outlined text-sm text-[#ba1a1a]">call</span>
            <span>{BRAND.phone}</span>
          </a>
          <a
            href="#enquiry"
            className="px-4 py-2 text-xs font-bold uppercase tracking-widest bg-[#ba1a1a] hover:bg-[#93000a] text-white transition-all shadow-[0_0_15px_rgba(186,26,26,0.4)] hover:shadow-[0_0_20px_rgba(186,26,26,0.7)]"
          >
            Reserve Suite
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#dac2bf] hover:text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161214] border-b border-[#aa8986]/30 px-6 py-6 space-y-4 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider font-semibold text-[#dac2bf] hover:text-[#ffb4ac] py-2 border-b border-[#aa8986]/10"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${BRAND.rawPhone}`}
              className="flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-[#aa8986]/40"
            >
              <span className="material-symbols-outlined text-sm text-[#ba1a1a]">call</span>
              {BRAND.phone}
            </a>
            <a
              href="#enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest bg-[#ba1a1a] text-white"
            >
              Reserve Suite
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
