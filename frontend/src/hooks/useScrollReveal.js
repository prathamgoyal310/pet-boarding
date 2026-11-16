import { useEffect } from 'react';

/**
 * Custom hook for continuous scroll reveals, parallax image motion,
 * and ambient floating orbs across all viewport interactions.
 */
export function useScrollReveal(routeDependency = null) {
  useEffect(() => {
    const observedElements = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 80px 0px' }
    );

    const initRevealElements = () => {
      // 1. Gather all explicit reveal targets
      const candidateElements = document.querySelectorAll(
        '.reveal-up, .reveal-scale, .reveal-left, .reveal-right, .line-reveal, section, .grid > *, h2, h3'
      );

      candidateElements.forEach((el) => {
        // Skip preloader, custom cursor, scripts, or nested children inside headers
        if (el.closest('#site-preloader, #cursor-dot, #cursor-ring, header')) return;

        // If no animation class assigned yet, assign based on element role
        if (
          !el.classList.contains('reveal-up') &&
          !el.classList.contains('reveal-scale') &&
          !el.classList.contains('reveal-left') &&
          !el.classList.contains('reveal-right')
        ) {
          const tag = el.tagName.toLowerCase();
          if (tag === 'img' || tag === 'figure') {
            el.classList.add('reveal-scale');
          } else if (tag === 'h2') {
            el.classList.add('reveal-up', 'line-reveal');
          } else {
            el.classList.add('reveal-up');
          }
        }

        // Check if already in viewport on mount (e.g., hero section)
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          el.classList.add('is-visible');
        }

        if (!observedElements.has(el)) {
          observer.observe(el);
          observedElements.add(el);
        }
      });

      // 2. Add stagger classes to grid containers if not present
      document.querySelectorAll('.grid').forEach((grid) => {
        if (!grid.classList.contains('stagger-children')) {
          grid.classList.add('stagger-children');
        }
      });

      // 3. Ambient float animations for background blur orbs
      const orbs = document.querySelectorAll('[class*="blur-3xl"]');
      orbs.forEach((orb, i) => {
        orb.style.animation =
          i % 2 === 0
            ? `ambientFloat ${7 + i * 2}s ease-in-out infinite alternate`
            : `ambientFloat ${9 + i * 2}s ease-in-out infinite alternate-reverse`;
      });
    };

    // Initial pass + delayed pass after preloader dismisses
    initRevealElements();
    const timer1 = setTimeout(initRevealElements, 300);
    const timer2 = setTimeout(initRevealElements, 1000);
    const timer3 = setTimeout(initRevealElements, 2000);

    // 4. Parallax scroll effect for images
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const vh = window.innerHeight;
          const parallaxImgs = document.querySelectorAll(
            'img:not(#site-preloader img):not(header img)'
          );

          parallaxImgs.forEach((img) => {
            if (img.closest('header, #site-preloader')) return;
            const rect = img.getBoundingClientRect();
            if (rect.bottom > 0 && rect.top < vh) {
              const progress = (vh - rect.top) / (vh + rect.height);
              const shift = (progress - 0.5) * 32;
              img.style.transform = `translateY(${shift}px) scale(1.03)`;
              img.style.transition = 'transform 0.15s ease-out';
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('scroll', onScroll);
      observedElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [routeDependency]);
}
