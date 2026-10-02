import React, { useState } from 'react';
import { Clock, CheckCircle2, Trees, Utensils, Play, Bed, MessageCircle } from 'lucide-react';

export default function DailyRoutine() {
  const [activeTab, setActiveTab] = useState(0);

  const routineItems = [
    {
      time: '08:00 AM • Morning Walk',
      title: 'Morning Parkland Walk & Sniff Time',
      desc: 'Calm morning trail walks and olfactory enrichment in our nearly 2,000 sq.ft private lawn to gently settle each companion into the day.',
      img: '/assets/images/morning_walk.jpg',
      icon: Trees,
      tag: 'Morning Exploration',
      note: 'Supervised by Dedicated Attendant'
    },
    {
      time: '09:30 AM • Feeding Routine',
      title: 'Custom Diet & Fresh Bone Broth',
      desc: 'Meals prepared exactly according to parent instructions and portions, served in sterilized ceramic bowls with filtered alkaline water.',
      img: '/assets/images/stitch_food.jpg',
      icon: Utensils,
      tag: 'Dietary Protocol',
      note: '100% Home Diet Followed'
    },
    {
      time: '11:30 AM • Agility & Play',
      title: 'Supervised Socialization & Yard Play',
      desc: 'Energy burn on manicured agility lawns with companion-matched play groups, positive reinforcement, and unlimited healthy snacks.',
      img: '/assets/images/stitch_play.jpg',
      icon: Play,
      tag: 'Agility & Play',
      note: 'Temperament-Matched Groups'
    },
    {
      time: '02:00 PM • Midday Rest',
      title: 'Quiet Climate-Controlled Chamber Rest',
      desc: 'Restful nap interval inside acoustic-decoupled suites with orthopedic bedding, soothing diffused lighting, and 24x7 live camera streaming.',
      img: '/assets/images/stitch_suite.jpg',
      icon: Bed,
      tag: 'Rest & CCTV Nap',
      note: 'Continuous Parental CCTV Live Feed'
    },
    {
      time: '05:30 PM • Parent Journal',
      title: 'Evening Brush & WhatsApp Photo Journal',
      desc: 'Gentle coat brushing, hygiene check, and high-definition photo/video recap sent directly to your phone via WhatsApp.',
      img: '/assets/images/stitch_care.jpg',
      icon: MessageCircle,
      tag: 'Parent Journal',
      note: 'Direct Updates to WhatsApp'
    }
  ];

  const current = routineItems[activeTab];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10 relative" id="routine">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ba1a1a]/20 border border-[#ffb4ac]/30 text-[#ffb4ac] text-xs font-semibold uppercase tracking-[0.12em]">
            <Clock className="w-3.5 h-3.5 text-[#ba1a1a]" />
            <span>Daily Life &amp; Care Routine Diary</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-white">
            A Day in the Life of a Furrever Inn Resident
          </h2>
          <p className="text-sm text-[#b1a7a6] font-light leading-relaxed">
            Every moment at our Haryana sanctuary is designed around familiar home routines, peaceful rest intervals, wholesome nutrition, and continuous parental reassurance.
          </p>
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2 border border-white/15 bg-[#131112] text-xs uppercase tracking-wider text-[#8c8281]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live Verified Timeline</span>
        </div>
      </div>

      {/* Interactive Spotlight & Accordion Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 relative z-10">
        {/* Left: Active Spotlight Photo */}
        <div className="lg:col-span-7 relative h-[420px] md:h-[480px] overflow-hidden border border-white/15 shadow-2xl bg-[#080708] group">
          <img
            key={current.img}
            src={current.img}
            alt={current.title}
            className="w-full h-full object-cover transition-all duration-700 ease-out brightness-[0.98] contrast-[1.02] group-hover:scale-105"
          />

          {/* Top Time Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-[#0b090a]/40 backdrop-blur-md px-3.5 py-1.5 border border-white/15 text-xs font-bold text-[#ffb4ac] inline-flex items-center gap-2 tracking-wider uppercase shadow-md">
              <Clock className="w-3.5 h-3.5 text-[#ba1a1a]" />
              <span>{current.time}</span>
            </span>
          </div>

          {/* Bottom Translucent Context Card */}
          <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#0b090a]/30 hover:bg-[#0b090a]/45 backdrop-blur-md p-5 border border-white/15 shadow-2xl space-y-2 transition-all duration-300">
            <h3 className="font-display text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {current.title}
            </h3>
            <p className="text-xs text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] leading-relaxed font-light">
              {current.desc}
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-[#ffb4ac] font-bold uppercase tracking-wider border-t border-white/15 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {current.note}
              </span>
              <span className="text-white/80 font-normal">Live GPS &amp; Yard Access</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Timeline Accordion / Tabs */}
        <div className="lg:col-span-5 space-y-3">
          {routineItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full p-4 text-left border transition-all duration-300 flex items-start gap-4 ${
                  isActive
                    ? 'bg-[#161a1d] border-[#ba1a1a] shadow-lg ring-1 ring-[#ba1a1a]/40'
                    : 'bg-[#131112] border-white/10 hover:border-white/30'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-[#ba1a1a] text-white' : 'bg-[#161a1d] text-[#ffb4ac]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#ffb4ac] uppercase tracking-wider">
                      {item.time.split('•')[0]}
                    </span>
                    <span className="text-[10px] text-[#8c8281]">• {item.tag}</span>
                  </div>
                  <h4 className="font-display text-sm text-white font-semibold">{item.title}</h4>
                  <p className="text-xs text-[#b1a7a6] line-clamp-1 font-light">{item.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
