import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b090a]/90 backdrop-blur-md shadow-2xl border-b border-[#ba1a1a]/20 py-3'
          : 'bg-[#0b090a]/60 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2 group mr-6 md:mr-10 lg:mr-14" aria-label="Furrever Inn Home">
          <img
            src="/assets/images/furrever_crest.png"
            alt="Furrever Inn Crest"
            className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
          />
          <span className="font-display text-lg md:text-xl font-bold tracking-widest uppercase text-[#f5f3f4] group-hover:text-[#ffb4ac] transition-colors duration-300 leading-none">
            Furrever Inn
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#suites" className="text-xs uppercase tracking-widest text-[#f5f3f4]/80 hover:text-[#ffb4ac] transition-colors">Suites</a>
          <a href="#philosophy" className="text-xs uppercase tracking-widest text-[#f5f3f4]/80 hover:text-[#ffb4ac] transition-colors">Philosophy</a>
          <a href="#services" className="text-xs uppercase tracking-widest text-[#f5f3f4]/80 hover:text-[#ffb4ac] transition-colors">Services</a>
          <a href="#routine" className="text-xs uppercase tracking-widest text-[#f5f3f4]/80 hover:text-[#ffb4ac] transition-colors">Daily Routine</a>
          <a href="#rates" className="text-xs uppercase tracking-widest text-[#f5f3f4]/80 hover:text-[#ffb4ac] transition-colors">Rates</a>
          <a href="#enquiry" className="text-xs uppercase tracking-widest text-[#f5f3f4]/80 hover:text-[#ffb4ac] transition-colors">Enquiry</a>
        </nav>

        {/* Call & CTA buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+918307469390"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#f5f3f4]/90 hover:text-[#ffb4ac] transition-colors px-3 py-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#ba1a1a]" />
            <span>+91 83074 69390</span>
          </a>
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 bg-[#ba1a1a] hover:bg-[#a4161a] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-[#ba1a1a]/40 shadow-lg hover:scale-105 active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Stay</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#f5f3f4] hover:text-[#ffb4ac] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b090a]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          <a href="#suites" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-white py-2 border-b border-white/5">Suites</a>
          <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-white py-2 border-b border-white/5">Philosophy</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-white py-2 border-b border-white/5">Services</a>
          <a href="#routine" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-white py-2 border-b border-white/5">Daily Routine</a>
          <a href="#rates" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-white py-2 border-b border-white/5">Rates</a>
          <a href="#enquiry" onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase tracking-wider text-white py-2">Enquiry</a>
          <div className="pt-4 flex flex-col gap-3">
            <a href="tel:+918307469390" className="flex items-center justify-center gap-2 py-3 border border-white/20 text-xs uppercase tracking-wider">
              <Phone className="w-4 h-4 text-[#ba1a1a]" />
              <span>+91 83074 69390</span>
            </a>
            <a href="#enquiry" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 py-3 bg-[#ba1a1a] text-white text-xs uppercase tracking-wider font-bold">
              <Calendar className="w-4 h-4" />
              <span>Reserve Stay</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
