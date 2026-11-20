import { gsap, ScrollTrigger } from './gsapConfig';

export const isReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Hero entrance animation
export const animateHero = (containerRef, elements) => {
  if (isReducedMotion() || !containerRef.current) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Chapter label pop
    if (elements.chapter) {
      tl.from(elements.chapter, {
        scale: 0.8,
        opacity: 0,
        y: -15,
        duration: 0.5
      });
    }

    // 2. Headings stagger
    if (elements.headingLines) {
      tl.from(elements.headingLines, {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7
      }, '-=0.2');
    }

    // 3. Subtitle & description
    if (elements.subtext) {
      tl.from(elements.subtext, {
        y: 20,
        opacity: 0,
        duration: 0.5
      }, '-=0.3');
    }

    // 4. Buttons
    if (elements.buttons) {
      tl.from(elements.buttons, {
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4
      }, '-=0.2');
    }

    // 5. Photo comic panel subtle entrance
    if (elements.mangaPanel) {
      tl.from(elements.mangaPanel, {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      }, '-=0.4');
    }

    // 6. Speech bubble pop
    if (elements.speechBubble) {
      tl.from(elements.speechBubble, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'back.out(1.7)'
      }, '-=0.2');
    }

    // 7. Stats strip reveal
    if (elements.statsStrip) {
      tl.from(elements.statsStrip, {
        y: 30,
        opacity: 0,
        duration: 0.6
      }, '-=0.3');
    }
  }, containerRef);

  return () => ctx.revert();
};

// Section scroll reveal animation
export const animateSection = (sectionRef) => {
  if (isReducedMotion() || !sectionRef.current) return;

  const ctx = gsap.context(() => {
    gsap.from(sectionRef.current.querySelectorAll('.reveal-on-scroll'), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 82%',
        toggleActions: 'play none none none'
      },
      y: 35,
      opacity: 0,
      stagger: 0.12,
      duration: 0.65,
      ease: 'power2.out'
    });
  }, sectionRef);

  return () => ctx.revert();
};

// Project cards stagger animation
export const animateCards = (gridRef) => {
  if (isReducedMotion() || !gridRef.current) return;

  const ctx = gsap.context(() => {
    gsap.from(gridRef.current.children, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out'
    });
  }, gridRef);

  return () => ctx.revert();
};
