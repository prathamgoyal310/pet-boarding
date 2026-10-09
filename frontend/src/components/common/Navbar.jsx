import React, { useState } from 'react';
import { BRAND } from '../../constants/brand';
import { NAV_LINKS } from '../../constants/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#140205]/90 backdrop-blur-md border-b border-[#880d1e]/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 lg:h-20 flex items-center justify-between gap-3 lg:gap-5 xl:gap-8">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <img
            src={BRAND.crestLogo}
            alt="Furrever Inn Crest"
            className="h-9 sm:h-10 lg:h-11 w-auto object-contain drop-shadow-[0_2px_10px_rgba(242,106,141,0.4)] group-hover:scale-105 transition-transform"
          />
          <span className="font-['Cinzel',serif] text-base sm:text-lg lg:text-xl font-bold tracking-[0.14em] [word-spacing:0.35em] uppercase text-[#f3e9dc] group-hover:text-white transition-colors">
            FURREVER INN
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] xl:text-xs uppercase tracking-[0.1em] xl:tracking-[0.12em] font-semibold text-[#f3e9dc]/80 hover:text-[#f26a8d] transition-colors whitespace-nowrap py-1 px-1 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.5px] after:bg-[#dd2d4a] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
          <a
            href={`tel:${BRAND.rawPhone}`}
            className="flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3.5 py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-[#f3e9dc]/85 hover:text-white border border-[#880d1e]/50 hover:border-[#f26a8d] transition-colors whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-sm text-[#cbeef3]">call</span>
            <span>{BRAND.phone}</span>
          </a>
          <a
            href="#enquiry"
            className="px-3 xl:px-4 py-2 text-[11px] xl:text-xs font-bold uppercase tracking-wider xl:tracking-widest [word-spacing:0.15em] bg-[#dd2d4a] hover:bg-[#b81d36] text-white transition-all shadow-[0_0_15px_rgba(221,45,74,0.4)] hover:shadow-[0_0_20px_rgba(221,45,74,0.7)] whitespace-nowrap"
          >
            Reserve Suite
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#f3e9dc] hover:text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#26070d] border-b border-[#880d1e]/40 px-6 py-6 space-y-4 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider font-semibold text-[#f3e9dc]/85 hover:text-[#f26a8d] py-2 border-b border-[#880d1e]/25"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${BRAND.rawPhone}`}
              className="flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-[#f3e9dc] border border-[#880d1e]/50"
            >
              <span className="material-symbols-outlined text-sm text-[#cbeef3]">call</span>
              {BRAND.phone}
            </a>
            <a
              href="#enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest bg-[#dd2d4a] text-white"
            >
              Reserve Suite
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
