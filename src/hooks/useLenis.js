import { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from '../animations/gsapConfig';

export const useLenis = () => {
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      prevent: (node) => 
        node?.classList?.contains('mobile-drawer-panel') || 
        node?.closest?.('.mobile-drawer-panel') || 
        node?.hasAttribute?.('data-lenis-prevent') ||
        node?.closest?.('[data-lenis-prevent]')
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    // Use requestAnimationFrame loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
};
