export const TARIFF_PLANS = [
  {
    days: 1,
    label: "Day Sanctuary (Single Day / 8 hrs)",
    breakdown: "₹2,500 / day flat daytime access.",
    total: "₹2,500",
    inclusions: [
      "8h Parkland Access & Dedicated Attendant",
      "Mid-Day Fresh Broth & Supervised Play",
      "Departure Coat Brush & Hygiene Wipe"
    ]
  },
  {
    days: 3,
    label: "Weekend Retreat (3 Nights)",
    breakdown: "₹3,800 / night with weekend care package.",
    total: "₹11,400",
    inclusions: [
      "2 Daily Private Lawn Walks",
      "Hydro-brushing & Aromatherapy Mist",
      "24/7 Encrypted Camera Streaming"
    ]
  },
  {
    days: 10,
    label: "Fortnight Residency (10 Nights)",
    breakdown: "₹3,200 / night with 15% residency privilege applied.",
    total: "₹32,000",
    inclusions: [
      "2x Weekly Hydrotherapy Conditioning",
      "Daily Farm-to-Bowl Organic Nutrition",
      "24/7 Mobile HD Live Camera Access"
    ]
  },
  {
    days: 21,
    label: "Extended Stay (21 Nights)",
    breakdown: "₹2,600 / night with 30% extended residency privilege.",
    total: "₹54,600",
    inclusions: [
      "Weekly Veterinary Clinical Report",
      "3x Weekly Hydrotherapy Flume Sessions",
      "Daily Dedicated Handler WhatsApp Video Log"
    ]
  },
  {
    days: 30,
    label: "Extended Sanctuary (30 Nights)",
    breakdown: "₹2,600 / night with 30% extended residency privilege.",
    total: "₹78,000",
    inclusions: [
      "Weekly Full Health & Mobility Evaluation",
      "Unlimited Hydrotherapy Conditioning",
      "Personalized Canine Sommelier Sourcing"
    ]
  }
];

export const HOURLY_PACKAGES = [
  { id: "1h", duration: "1 Hour", rate: "₹99", name: "Play & Socialize", desc: "Energy burn & supervised play" },
  { id: "3h", duration: "3 Hours", rate: "₹199", name: "Quick Stay", desc: "Cozy rest, snacks & hydration" },
  { id: "6h", duration: "6 Hours", rate: "₹349", name: "Half Day Care", desc: "Meal, play & lawn exercise" },
  { id: "12h", duration: "12 Hours", rate: "₹549", name: "Full Day Retreat", desc: "Complete day schedule & updates" },
  { id: "24h", duration: "24 Hours", rate: "₹799", name: "24-Hr Boarding", desc: "Suite sleep, 24x7 CCTV & meals", featured: true },
  { id: "3d", duration: "3 Days", rate: "₹2,199", name: "Mini-Vacation", desc: "Daily video diary & VIP care" },
  { id: "7d", duration: "7 Days", rate: "₹4,699", name: "Weekly Full Board", desc: "Full wellness & unlimited treats" }
];
