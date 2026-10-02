import React, { useEffect } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Suites from './components/Suites';
import Rates from './components/Rates';
import ClinicalDossier from './components/ClinicalDossier';
import DailyRoutine from './components/DailyRoutine';
import Faq from './components/Faq';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  useEffect(() => {
    // Intersection Observer for continuous reveal-up animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            const rect = entry.target.getBoundingClientRect();
            if (rect.top > window.innerHeight * 0.9 || rect.bottom < 0) {
              entry.target.classList.remove('is-visible');
            }
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-up, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b090a] text-[#f3dfdd] selection:bg-[#ba1a1a] selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Animated Luxury Preloader */}
      <Preloader />

      {/* Trailing Custom Cursor */}
      <CustomCursor />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Suites />
        <Rates />
        <ClinicalDossier />
        <DailyRoutine />
        <Faq />
        <EnquiryForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 1-Click WhatsApp Booking */}
      <FloatingWhatsApp />
    </div>
  );
}
