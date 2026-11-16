import React, { useState } from 'react';
import { BRAND } from '../../constants/brand';
import { NAV_LINKS, navigate } from '../../constants/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ currentRoute, onNavigateHome, onNavigateDayInTheLife }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(link.href);
  };

  const handleReserveClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate('/admissions');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0b0e14] border-b border-[#880d1e]/50 shadow-xl transition-all duration-300">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 h-18 lg:h-20 flex items-center justify-between gap-4 lg:gap-6">
        {/* Brand Logo & Name */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) onNavigateHome();
            else navigate('/');
          }}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0 py-1"
        >
          <img
            src={BRAND.crestLogo}
            alt="Furrever Inn Crest"
            className="h-9 sm:h-10 lg:h-10 w-auto object-contain drop-shadow-[0_2px_10px_rgba(203,238,243,0.35)] group-hover:scale-105 transition-transform shrink-0"
          />
          <span className="font-['Fraunces',serif] text-base sm:text-xl lg:text-2xl font-bold tracking-[0.06em] [word-spacing:0.15em] uppercase text-[#f3e9dc] group-hover:text-white transition-colors whitespace-nowrap leading-none flex items-center pt-0.5 sm:pt-1">
            FURREVER INN
          </span>
        </a>

        {/* Desktop Navigation Links (Centered) */}
        <nav className="hidden xl:flex items-center justify-center gap-4 2xl:gap-6 flex-1 px-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-xs uppercase tracking-[0.1em] font-semibold transition-colors whitespace-nowrap py-1 px-1 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.5px] after:bg-[#cbeef3] hover:after:w-full after:transition-all after:duration-300 ${
                currentRoute === link.route
                  ? 'text-[#cbeef3] after:w-full font-bold'
                  : 'text-[#f3e9dc]/85 hover:text-[#cbeef3]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Compact Navigation for mid-sized laptops (lg to xl) */}
        <nav className="hidden lg:flex xl:hidden items-center justify-center gap-2.5 flex-1 px-2">
          {NAV_LINKS.slice(0, 5).map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-[11px] uppercase tracking-wider font-semibold transition-colors whitespace-nowrap py-1 px-1 ${
                currentRoute === link.route
                  ? 'text-[#cbeef3] font-bold'
                  : 'text-[#f3e9dc]/85 hover:text-[#cbeef3]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons (lg and up) */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          <ThemeToggle showLabel={false} />
          <a
            href="/enrollment"
            onClick={(e) => {
              e.preventDefault();
              navigate('/enrollment');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#cbeef3] hover:text-white border border-[#cbeef3]/40 hover:border-[#cbeef3] hover:bg-[#cbeef3]/10 transition-colors whitespace-nowrap rounded"
            title="First-Time Enrolment Form & Dog Database"
          >
            <span className="material-symbols-outlined text-sm text-[#cbeef3]">assignment</span>
            <span>First-Time Enrolment</span>
          </a>
          <a
            href={`tel:${BRAND.rawPhone}`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#cbeef3] hover:text-white border border-[#cbeef3]/40 hover:border-[#cbeef3] hover:bg-[#cbeef3]/10 transition-colors whitespace-nowrap rounded"
            title={`Call Concierge: ${BRAND.phone}`}
          >
            <span className="material-symbols-outlined text-sm text-[#cbeef3]">call</span>
            <span className="hidden 2xl:inline">{BRAND.phone}</span>
          </a>
        </div>

        {/* Mobile & Tablet Controls (< lg) */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle showLabel={false} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#f3e9dc] hover:text-white cursor-pointer rounded"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121722] border-b border-[#880d1e]/40 px-6 py-6 space-y-4 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="block text-sm uppercase tracking-wider font-semibold text-[#f3e9dc]/85 hover:text-[#cbeef3] py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center justify-between py-2.5 border-b border-white/10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#f3e9dc]">Theme Mode</span>
              <ThemeToggle showLabel={true} />
            </div>
            <a
              href="/enrollment"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                navigate('/enrollment');
              }}
              className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider border border-[#cbeef3]/50 text-[#cbeef3] hover:bg-[#cbeef3]/10 rounded flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">assignment</span>
              <span>First-Time Dog Enrolment</span>
            </a>
            <a
              href={`tel:${BRAND.rawPhone}`}
              className="flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-[#cbeef3] border border-[#cbeef3]/40"
            >
              <span className="material-symbols-outlined text-sm text-[#cbeef3]">call</span>
              {BRAND.phone}
            </a>
            <a
              href="/admissions"
              onClick={handleReserveClick}
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
