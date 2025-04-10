gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const isDesktop = window.matchMedia("(min-width: 1025px)").matches;

if (isDesktop) {
  // Beweeg de globe over het pad met zachte landing
  gsap.to(".globe", {
    scrollTrigger: {
      trigger: ".globe-scroll-pad",
      start: "top top",
      end: "+=3000",         // Lang scrolltraject = langzame beweging
      scrub: 2,              // Zachte landing / easing effect
    },
    motionPath: {
      path: "#globepath",
      align: "#globepath",
      autoRotate: false,
      alignOrigin: [0.5, 0.5]
    }
  });

  // Schaal de globe tijdens scroll
  gsap.to(".globe", {
    scrollTrigger: {
      trigger: ".globe-scroll-pad",
      start: "top top",
      end: "bottom bottom",
      scrub: 2
    },
    keyframes: [
      { scale: 1, duration: 0 },
      { scale: 0.4, duration: 0.25 },
      { scale: 0.4, duration: 0.25 },
      { scale: 1, duration: 0.35 },
      { scale: 1, duration: 0.15 }
    ],
    duration: 1
  });
}
