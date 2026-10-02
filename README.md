# Furrever Inn - Premier Pet Boarding & Daycare (React + Vite + TailwindCSS + Node.js)

A luxury pet sanctuary and daycare web application built with **React.js (Vite)**, **TailwindCSS**, and **Node.js/Express**.

---

## 🏛️ Project Architecture & File Structure

```text
pet-boarding/
├── frontend/                     # React + Vite + TailwindCSS Client
│   ├── public/
│   │   └── assets/
│   │       └── images/           # Ultra HD images, Gold Crest logo, avatars
│   ├── src/
│   │   ├── components/
│   │   │   ├── Preloader.jsx       # Gold Crest animated loading screen
│   │   │   ├── CustomCursor.jsx    # Garnet magnetic dot & ring trailing cursor
│   │   │   ├── Navbar.jsx          # Aligned Crest Logo + "FURREVER INN" & navigation
│   │   │   ├── Hero.jsx            # Hero section with headline, CTAs & badges
│   │   │   ├── Philosophy.jsx      # Sanctuary Manifesto & 3 Pillars bento grid
│   │   │   ├── Services.jsx        # Core standard care & gourmet nutrition
│   │   │   ├── Suites.jsx          # Garden Play Suite (900 sq.ft & ~2,000 sq.ft lawn)
│   │   │   ├── Rates.jsx           # Interactive Stay Duration Tariff Estimator
│   │   │   ├── ClinicalDossier.jsx # Intake protocol & verified resident profile
│   │   │   ├── DailyRoutine.jsx    # Interactive 5-Stage Routine Diary Switcher
│   │   │   ├── Faq.jsx             # Accordion inquiries (pick & drop, CCTV, updates)
│   │   │   ├── EnquiryForm.jsx     # Reservation form connected to backend API & WhatsApp
│   │   │   ├── Footer.jsx          # Editorial footer with Crest & licenses
│   │   │   └── FloatingWhatsApp.jsx# 1-Click WhatsApp Booking badge (8307469390)
│   │   ├── App.jsx               # Master component with scroll reveal observer
│   │   ├── main.jsx              # React entrypoint
│   │   └── index.css             # Tailwind v4, custom theme variables, animations
│   ├── index.html                # HTML entrypoint with Cinzel, Playfair & Jakarta fonts
│   ├── vite.config.js            # Vite config with Tailwind & /api proxy to backend
│   └── package.json              # Frontend dependencies (lucide-react, tailwindcss)
│
├── backend/                      # Node.js & Express REST API Server
│   ├── server.js                 # Express server with /api/health, /api/rates, /api/enquiry
│   └── package.json              # Backend dependencies (express, cors, dotenv)
│
├── package.json                  # Root runner scripts (concurrently)
└── README.md                     # Project documentation
```

---

## 🚀 Getting Started

### 1. Install Dependencies

You can install all dependencies from the root directory or inside each folder:

```bash
# In frontend
cd frontend
npm install

# In backend
cd ../backend
npm install
```

### 2. Run the Development Servers

#### Option A: Run Both Together (from Root)
```bash
npm run dev
```

#### Option B: Run Individually
```bash
# Terminal 1: Backend API (runs on port 5000)
cd backend
npm start

# Terminal 2: Frontend Vite Dev Server (runs on port 3000)
cd frontend
npm run dev
```

---

## 🌟 Key Features & Highlights

- **Tailored Luxury Garnet Aesthetic**: `#ba1a1a` primary garnet, `#0b090a` dark obsidian, `#ffb4ac` rose gold highlights, `#d4af37` gold crest.
- **Gold Crest & Logo Alignment**: Trimmed gold crest beside "FURREVER INN" in the navigation bar.
- **Accurate Information**:
  - **Location**: Haryana Sanctuary Estate
  - **Direct Contact / WhatsApp**: `+91 83074 69390`
  - **Tagline**: *"The fun they crave, the care you trust."*
  - **Facility Dimensions**: **900 sq.ft indoor area** + **nearly 2,000 sq.ft lawn**.
  - **Pricing**: Starting at **₹1,199 / night**.
- **Interactive Daily Routine Diary**: 5-stage timeline with synchronized photo and description switching.
- **Dynamic Tariff Estimator**: Real-time pricing calculation based on stay length.
- **REST API Integration**: Clean Express endpoints for enquiries and rates with instant feedback and WhatsApp direct booking fallback.
