import React from 'react';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import Services from '../components/sections/Services';
import Suites from '../components/sections/Suites';
import Rates from '../components/sections/Rates';
import ClinicalDossier from '../components/sections/ClinicalDossier';
import DailyRoutine from '../components/sections/DailyRoutine';
import Faq from '../components/sections/Faq';
import EnquiryForm from '../components/sections/EnquiryForm';

export default function Home() {
  return (
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
  );
}
