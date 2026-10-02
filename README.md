# Furrever Inn - Premier Pet Boarding & Daycare (React + Vite + TailwindCSS + Node.js)

A luxury pet sanctuary and daycare web application built with **React.js (Vite)**, **TailwindCSS**, and **Node.js/Express**, organized using a modular, enterprise-grade directory architecture.

---

## 🏛️ Systematic Modular Architecture & Directory Tree

```text
pet-boarding/
├── frontend/                                # React + Vite + TailwindCSS Client
│   ├── public/
│   │   └── assets/
│   │       └── images/                      # High-res photography, trimmed gold crest, avatars
│   ├── src/
│   │   ├── constants/                       # Centralized application constants & data
│   │   │   ├── brand.js                     # Sanctuary identity, dimensions, contacts
│   │   │   ├── navigation.js                # Navbar & footer routing links
│   │   │   ├── pricing.js                   # Daycare packages & extended stay tariffs
│   │   │   ├── routine.js                   # 5-stage circadian rhythm timeline
│   │   │   ├── services.js                  # Standard care pillars & nutrition banner
│   │   │   ├── suites.js                    # Signature suites (Garden Play, Atelier, Veranda)
│   │   │   └── faqs.js                      # Frequently asked inquiries & protocols
│   │   │
│   │   ├── services/                        # API & Network communication layer
│   │   │   └── api.js                       # Endpoints for health, rates, reservation intake
│   │   │
│   │   ├── hooks/                           # Custom React Hooks
│   │   │   ├── useScrollReveal.js           # Continuous IntersectionObserver scroll animations
│   │   │   ├── useCustomCursor.js           # Magnetic trailing dot & ring cursor logic
│   │   │   └── useTariffCalculator.js       # Live stay duration & tariff calculation state
│   │   │
│   │   ├── components/                      # Modular UI Components
│   │   │   ├── common/                      # Shared global layout components
│   │   │   │   ├── Preloader.jsx            # Animated Gold Crest loading screen
│   │   │   │   ├── CustomCursor.jsx         # Trailing garnet luxury cursor
│   │   │   │   ├── Navbar.jsx               # Crest emblem + "FURREVER INN" brand header
│   │   │   │   ├── Footer.jsx               # Editorial footer with accreditation
│   │   │   │   └── FloatingWhatsApp.jsx     # 1-Click WhatsApp Booking badge (8307469390)
│   │   │   └── sections/                    # Page section components
│   │   │       ├── Hero.jsx                 # Sanctuary headline, CTAs & USPs
│   │   │       ├── Philosophy.jsx           # Manifesto & 3 Pillars bento grid
│   │   │       ├── Services.jsx             # Core standard care & gourmet treats
│   │   │       ├── Suites.jsx               # Garden Play Suite (900 sq.ft + ~2,000 sq.ft lawn)
│   │   │       ├── Rates.jsx                # Interactive tariff estimator & hourly rates
│   │   │       ├── ClinicalDossier.jsx      # Resident record #CMS-8841 & intake protocols
│   │   │       ├── DailyRoutine.jsx         # 5-Stage interactive routine diary switcher
│   │   │       ├── Faq.jsx                  # Accordion inquiry system
│   │   │       └── EnquiryForm.jsx          # Reservation dossier with API + WhatsApp
│   │   │
│   │   ├── pages/                           # Page-level Views
│   │   │   └── Home.jsx                     # Master home view orchestrating all sections
│   │   │
│   │   ├── App.jsx                          # Root application wrapper with hooks
│   │   ├── main.jsx                         # React 19 entrypoint
│   │   └── index.css                        # Tailwind v4, custom theme variables, animations
│   │
│   ├── index.html                           # HTML template with Google Fonts & Material Icons
│   ├── vite.config.js                       # Vite config with Tailwind & /api proxy to backend
│   └── package.json                         # Frontend dependencies
│
├── backend/                                 # Node.js & Express REST API Server
│   ├── server.js                            # Express server with /api/health, /api/rates, /api/enquiry
│   └── package.json                         # Backend dependencies (express, cors, dotenv)
│
├── package.json                             # Root scripts runner (concurrently)
├── README.md                                # Project documentation
└── .gitignore                               # Standard git ignore rules
```

---

## 🚀 Running the Project

From the root directory:

```bash
npm run dev
```

Or run individually:
- **Backend API Server**: `cd backend && npm start` (Port `5000`)
- **Frontend Vite Client**: `cd frontend && npm run dev` (Port `3000`)

---

## 💎 Features & Highlights

- **Modular Enterprise Architecture**: Separation of concerns across `constants/`, `services/`, `hooks/`, `components/common/`, `components/sections/`, and `pages/`.
- **Tailored Luxury Aesthetics**: Garnet `#ba1a1a`, Dark Obsidian `#0b090a`, Rose Gold `#ffb4ac`, and Gold Crest accents.
- **Accurate Information**:
  - Location: **Haryana Sanctuary Estate**
  - Direct Phone / WhatsApp: **+91 83074 69390**
  - Dimensions: **900 sq.ft indoor area** + **nearly 2,000 sq.ft lawn**
  - Pricing: Starting at **₹1,199 / night**
- **Interactive Daily Routine Diary**: 5-stage timeline with synchronized photo and description switching.
- **Dynamic Tariff Estimator**: Real-time pricing calculations based on stay duration.
- **REST API Integration**: Clean Express endpoints with fallback WhatsApp direct concierge booking.
