import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Rates() {
  const [selectedDuration, setSelectedDuration] = useState('24h');

  const durationData = {
    '1h': {
      label: '1-Hour Play & Socialization',
      rate: '₹99',
      breakdown: '₹99 flat fee for supervised socialization.',
      inclusions: [
        'Supervised agility lawn access',
        'Friendly temperament matching',
        'Filtered water & quick brush'
      ]
    },
    '3h': {
      label: '3-Hour Quick Stay',
      rate: '₹199',
      breakdown: '₹199 for short errands & outings.',
      inclusions: [
        'Parkland walks & play breaks',
        'Personal handler attention',
        'Fresh broth hydration'
      ]
    },
    '6h': {
      label: '6-Hour Half Day Retreat',
      rate: '₹349',
      breakdown: '₹349 curated half-day care.',
      inclusions: [
        'Healthy organic treats included',
        'Sensory lawn agility play',
        'Mid-day rest & photo update'
      ]
    },
    '12h': {
      label: '12-Hour Full Day Care',
      rate: '₹549',
      breakdown: '₹549 comprehensive work-day protection.',
      inclusions: [
        'Unlimited healthy gourmet snacks',
        'Multiple private trail runs',
        'Scheduled WhatsApp video clips'
      ]
    },
    '24h': {
      label: '24-Hour Day & Night Boarding',
      rate: '₹799',
      breakdown: '₹799 flat tariff with overnight accommodation.',
      inclusions: [
        '24x7 Live CCTV Camera Access',
        'Regular WhatsApp Photo & Video Updates',
        'Unlimited Healthy Gourmet Treats & 3x Sanitization'
      ]
    },
    '3d': {
      label: '3-Day Weekend Retreat',
      rate: '₹2,199',
      breakdown: '₹2,199 long weekend getaway package.',
      inclusions: [
        'Daily WhatsApp video journals',
        'Personalized home diet compliance',
        'Complimentary departure coat brushing'
      ]
    },
    '7d': {
      label: '7-Day Weekly Boarding',
      rate: '₹4,699',
      breakdown: '₹4,699 complete full-week vacation stay.',
      inclusions: [
        '24x7 Live CCTV & Video logs',
        'Unlimited organic gourmet treats',
        'Doorstep Pick & Drop coordination'
      ]
    }
  };

  const current = durationData[selectedDuration] || durationData['24h'];

  const durations = [
    { id: '1h', label: '1 Hour' },
    { id: '3h', label: '3 Hours' },
    { id: '6h', label: '6 Hours' },
    { id: '12h', label: '12 Hours' },
    { id: '24h', label: '24 Hours' },
    { id: '3d', label: '3 Days' },
    { id: '7d', label: '7 Days' }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10 relative" id="rates">
      <div className="max-w-3xl mb-16">
        <span className="text-xs uppercase tracking-widest text-[#ffb4ac] font-bold">
          Transparent Pricing
        </span>
        <h2 className="font-display text-3xl sm:text-4xl text-white mt-2">
          Furrever Inn Staying Period &amp; Duration Rates
        </h2>
        <p className="text-sm text-[#b1a7a6] mt-4 font-light leading-relaxed">
          Choose the perfect stay for your furry family member. Transparent hourly, daytime, 24-hour boarding, and weekly packages with zero hidden fees.
        </p>
      </div>

      {/* Interactive Tariff Calculator Module */}
      <div className="bg-[#161a1d] border border-white/15 p-8 lg:p-10 shadow-2xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#ffb4ac] font-bold">
              Interactive Estimator
            </span>
            <h3 className="font-display text-2xl text-white mt-1">Instant Stay Valuation</h3>
            <p className="text-xs text-[#b1a7a6] mt-1 font-light">
              Select your intended duration to evaluate package privileges and daily tariff tiers.
            </p>
          </div>

          {/* Segmented Control */}
          <div className="flex flex-wrap gap-2 bg-[#080708] p-1.5 border border-white/10">
            {durations.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDuration(d.id)}
                className={`px-3.5 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                  selectedDuration === d.id
                    ? 'bg-[#ba1a1a] text-white shadow-md'
                    : 'text-[#b1a7a6] hover:text-white'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Package Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#8c8281] font-bold block">Selected Itinerary</span>
            <div className="font-display text-xl text-white mt-1">{current.label}</div>
            <p className="text-xs text-[#b1a7a6] mt-1 font-light">{current.breakdown}</p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#8c8281] font-bold block">Inclusive Privileges</span>
            <ul className="text-xs text-[#f5f3f4] mt-2 space-y-1.5 font-light">
              {current.inclusions.map((inc, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ba1a1a]" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <span className="text-[10px] uppercase tracking-widest text-[#ffb4ac] font-bold block">Estimated Tariff</span>
            <div className="font-display text-4xl text-[#ffb4ac] font-bold my-1">{current.rate}</div>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-1.5 mt-2 text-xs uppercase tracking-wider text-white underline underline-offset-4 hover:text-[#ffb4ac] transition-colors"
            >
              <span>Book This Stay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
