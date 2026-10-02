import React from 'react';
import Preloader from './components/common/Preloader';
import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import Home from './pages/Home';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Initialize continuous scroll reveal animation observer
  useScrollReveal('.reveal-up, .reveal-scale');

  return (
    <div className="min-h-screen bg-[#0b090a] text-[#f3dfdd] selection:bg-[#ba1a1a] selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Animated Luxury Gold Crest Preloader */}
      <Preloader />

      {/* Magnetic Trailing Custom Cursor */}
      <CustomCursor />

      {/* Main Header & Brand Navigation */}
      <Navbar />

      {/* Modular Page View */}
      <Home />

      {/* Editorial Footer & Sanctuary Credentials */}
      <Footer />

      {/* Floating 1-Click WhatsApp Booking */}
      <FloatingWhatsApp />
    </div>
  );
}
