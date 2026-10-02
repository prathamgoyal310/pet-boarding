import { useEffect } from 'react';

/**
 * Custom hook for viewport scroll reveals
 */
export function useScrollReveal(selector = '.reveal-up, .reveal-scale') {
  useEffect(() => {
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

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selector]);
}
