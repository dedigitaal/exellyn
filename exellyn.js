gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const isDesktop = window.matchMedia("(min-width: 1025px)").matches;

if (isDesktop) {
  // Beweging over het pad (vertraagd met end: '+=3000')
  gsap.to(".globe", {
    scrollTrigger: {
      trigger: ".globe-scroll-pad",
      start: "top top",
      end: "+=3000",
      scrub: true
    },
    motionPath: {
      path: "#globepath",
      align: "#globepath",
      autoRotate: false,
      alignOrigin: [0.5, 0.5]
    }
  });

  // Schaal-animatie tijdens scroll
  gsap.to(".globe", {
    scrollTrigger: {
      trigger: ".globe-scroll-pad",
      start: "top top",
      end: "bottom bottom",
      scrub: true
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
