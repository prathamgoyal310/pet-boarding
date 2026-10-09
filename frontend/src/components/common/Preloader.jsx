import React, { useState, useEffect } from 'react';
import { BRAND } from '../../constants/brand';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setFadeOut(true), 200);
          setTimeout(() => setVisible(false), 700);
          return 100;
        }
        return prev + 25;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="site-preloader"
      className={`fixed inset-0 z-[999999] bg-[#140205] flex flex-col items-center justify-center transition-all duration-700 ease-out ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#dd2d4a]/40 blur-2xl animate-pulse"></div>
          <img
            src={BRAND.crestLogo}
            alt="Furrever Inn Crest"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain relative z-10 animate-bounce duration-1000 drop-shadow-[0_0_25px_rgba(242,106,141,0.6)]"
          />
        </div>
        <div className="text-center space-y-2">
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl tracking-[0.25em] text-[#f3e9dc] uppercase font-bold">
            Furrever Inn
          </h2>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#f49cbb]">
            {BRAND.subtitle}
          </p>
        </div>
        <div className="w-48 h-0.5 bg-[#880d1e]/40 overflow-hidden mt-4 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-[#880d1e] via-[#dd2d4a] via-[#f26a8d] to-[#cbeef3] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
