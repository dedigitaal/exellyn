gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// Beweeg de globe over het pad met zachte landing
gsap.to(".globe", {
  scrollTrigger: {
    trigger: ".globe-scroll-pad",
    start: "top top",
    end: "+=3000", // Lang scrolltraject = langzame beweging
    scrub: 2       // Zachte landing / easing effect
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

// Bounce-effect voor .globe2 als .empty in beeld komt
gsap.fromTo(".globe2",
  {
    y: 200,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    ease: "bounce.out",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".empty",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);
