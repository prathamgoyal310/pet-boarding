export const NAV_LINKS = [
  { label: "Philosophy", href: "/philosophy", route: "philosophy", isPage: true },
  { label: "Services", href: "/services", route: "services", isPage: true },
  { label: "Suites", href: "/suites", route: "suites", isPage: true },
  { label: "Rates", href: "/rates", route: "rates", isPage: true },
  { label: "A Day in Life", href: "/day-in-the-life", route: "day-in-the-life", isPage: true },
  { label: "FAQ", href: "/faq", route: "faq", isPage: true },
  { label: "Admissions", href: "/admissions", route: "admissions", isPage: true }
];

export const FOOTER_LINKS = [
  { label: "Suites & Grounds", href: "/suites" },
  { label: "Sommelier Nutrition", href: "/services" },
  { label: "Medical Spa & Hydrotherapy", href: "/services" },
  { label: "A Day in the Life", href: "/day-in-the-life" },
  { label: "Sanctuary Manifesto", href: "/philosophy" },
  { label: "Admissions & Health Check", href: "/admissions" },
  { label: "First-Time Dog Enrolment", href: "/enrollment", highlight: true },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Private Concierge", href: "/admissions", highlight: true }
];

/**
 * Clean path-based navigation helper
 */
export const navigate = (path) => {
  if (typeof window !== 'undefined') {
    const target = path.startsWith('/') ? path : `/${path}`;
    if (window.location.pathname !== target) {
      window.history.pushState({}, '', target);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
};
