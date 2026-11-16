import React, { useState, useEffect } from 'react';
import Preloader from './components/common/Preloader';
import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import Home from './pages/Home';
import DayInTheLife from './pages/DayInTheLife';
import RatesPage from './pages/RatesPage';
import ServicesPage from './pages/ServicesPage';
import SuitesPage from './pages/SuitesPage';
import PhilosophyPage from './pages/PhilosophyPage';
import AdmissionsPage from './pages/AdmissionsPage';
import DogEnrollmentPage from './pages/DogEnrollmentPage';
import FaqPage from './pages/FaqPage';
import { useScrollReveal } from './hooks/useScrollReveal';
import ThemeToggle from './components/common/ThemeToggle';
import { useTheme } from './context/ThemeContext';
import { navigate } from './constants/navigation';

export default function App() {
  const { theme } = useTheme();

  const parseRoute = () => {
    // If an old hash URL is accessed (e.g. #/rates), seamlessly redirect to /rates
    if (typeof window !== 'undefined' && window.location.hash && window.location.hash.startsWith('#/')) {
      const cleanHash = window.location.hash.replace(/^#\/?/, '').split('?')[0];
      const search = window.location.hash.includes('?') ? '?' + window.location.hash.split('?')[1] : '';
      window.history.replaceState({}, '', '/' + cleanHash + search);
    }

    const pathname = typeof window !== 'undefined' ? window.location.pathname || '/' : '/';
    const clean = pathname.replace(/^\/+/, '').split('?')[0].split('#')[0].trim();
    if (!clean) return 'home';
    return clean;
  };

  const [currentRoute, setCurrentRoute] = useState(parseRoute);

  // Initialize continuous scroll reveal animation observer with route dependency
  useScrollReveal(currentRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      const route = parseRoute();
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const navigateHome = () => {
    navigate('/');
  };

  const navigateToDayInTheLife = () => {
    navigate('/day-in-the-life');
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'philosophy':
        return <PhilosophyPage onNavigateHome={navigateHome} />;
      case 'services':
        return <ServicesPage onNavigateHome={navigateHome} />;
      case 'suites':
        return <SuitesPage onNavigateHome={navigateHome} />;
      case 'rates':
        return <RatesPage onNavigateHome={navigateHome} />;
      case 'day-in-the-life':
        return <DayInTheLife onNavigateHome={navigateHome} />;
      case 'faq':
        return <FaqPage onNavigateHome={navigateHome} />;
      case 'admissions':
        return <AdmissionsPage onNavigateHome={navigateHome} />;
      case 'enrollment':
      case 'dog-enrollment':
        return <DogEnrollmentPage onNavigateHome={navigateHome} />;
      default:
        return <Home />;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${theme === 'light' ? 'bg-[#faf6f0] text-[#190509]' : 'bg-[#0b0e14] text-[#f3e9dc]'
        } selection:bg-[#dd2d4a] selection:text-white font-['Plus_Jakarta_Sans',sans-serif]`}
    >
      {/* Animated Luxury Gold Crest Preloader */}
      <Preloader />

      {/* Magnetic Trailing Custom Cursor */}
      <CustomCursor />

      {/* Main Header & Brand Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigateHome={navigateHome}
        onNavigateDayInTheLife={navigateToDayInTheLife}
      />

      {/* Modular Dedicated Page View */}
      {renderCurrentPage()}

      {/* Editorial Footer & Sanctuary Credentials */}
      <Footer />

      {/* Quick Theme Switcher Floating Pill */}
      <ThemeToggle variant="floating" />

      {/* Floating 1-Click WhatsApp Booking */}
      <FloatingWhatsApp />
    </div>
  );
}
