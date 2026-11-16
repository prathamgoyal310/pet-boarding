import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '', showLabel = true, variant = 'navbar' }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  if (variant === 'floating') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
        title={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
        className={`fixed bottom-6 left-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 cursor-pointer group backdrop-blur-md border ${
          isLight
            ? 'bg-[#ffffff]/95 border-[#880d1e]/30 text-[#880d1e] hover:border-[#880d1e] hover:shadow-[0_4px_25px_rgba(136,13,30,0.18)]'
            : 'bg-[#121722]/95 border-[#cbeef3]/40 text-[#cbeef3] hover:border-[#cbeef3] hover:shadow-[0_4px_25px_rgba(203,238,243,0.3)]'
        } ${className}`}
      >
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-180 ${
            isLight ? 'bg-[#f7ece4] text-[#880d1e]' : 'bg-[#0b0e14] text-[#cbeef3]'
          }`}
        >
          <span className="material-symbols-outlined text-[17px]">
            {isLight ? 'light_mode' : 'dark_mode'}
          </span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[9px] uppercase tracking-wider font-semibold opacity-70 leading-none">
            Theme
          </span>
          <span className="text-[11px] font-bold tracking-wider uppercase leading-tight font-['Quicksand',sans-serif]">
            {isLight ? 'Bright Mode' : 'Dark Mode'}
          </span>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
      title={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer select-none group ${
        isLight
          ? 'bg-[#ffffff] border-[#880d1e]/25 text-[#880d1e] shadow-xs hover:border-[#880d1e] hover:shadow-sm'
          : 'bg-[#121722] border-[#cbeef3]/40 text-[#cbeef3] hover:border-[#cbeef3] hover:bg-[#cbeef3]/10'
      } ${className}`}
    >
      <span
        className={`material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-45 ${
          isLight ? 'text-[#880d1e]' : 'text-[#cbeef3]'
        }`}
      >
        {isLight ? 'light_mode' : 'dark_mode'}
      </span>

      {showLabel && (
        <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase font-['Quicksand',sans-serif]">
          {isLight ? 'Bright' : 'Dark'}
        </span>
      )}
    </button>
  );
}
