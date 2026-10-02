import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 700);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999999] bg-[#0b090a] flex flex-col items-center justify-center select-none transition-all duration-700 ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        {/* Ambient glowing aura */}
        <div className="absolute -top-10 w-56 h-56 rounded-full bg-[#ba1a1a]/30 blur-3xl animate-pulse pointer-events-none" />

        {/* Gold Crest Logo */}
        <div className="relative z-10 mb-4 transform transition-transform duration-700 hover:scale-105">
          <img
            src="/assets/images/furrever_logo_transparent.png"
            alt="Furrever Inn Gold Crest Logo"
            className="w-40 md:w-48 h-auto object-contain drop-shadow-[0_6px_28px_rgba(212,175,55,0.5)]"
          />
        </div>

        {/* Tagline */}
        <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#ffb4ac] font-semibold mb-5 drop-shadow-md">
          Luxury Stay • Loving Care • Haryana
        </span>

        {/* Expanding loading line */}
        <div className="w-44 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div className="h-full bg-gradient-to-r from-[#ba1a1a] via-[#f5c242] to-[#ba1a1a] w-full animate-[pulse_1s_infinite] transition-all duration-700" />
        </div>
      </div>
    </div>
  );
}
