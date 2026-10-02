import React from 'react';
import { BRAND } from '../../constants/brand';

export default function FloatingWhatsApp() {
  return (
    <aside className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        href={`https://wa.me/${BRAND.rawPhone}?text=Hi%20Furrever%20Inn,%20I%20would%20like%20to%20inquire%20about%20boarding%20and%20daycare%20for%20my%20pet.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[#128C7E] hover:bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 backdrop-blur-md cursor-pointer"
        id="floating-whatsapp-btn"
        aria-label="Chat with Furrever Inn on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="text-xs uppercase tracking-wider font-bold">Book via WhatsApp</span>
        <span className="bg-[#075E54] group-hover:bg-[#128C7E] text-[11px] px-2.5 py-1 rounded-full font-mono transition-colors">
          8307469390
        </span>
      </a>
    </aside>
  );
}
