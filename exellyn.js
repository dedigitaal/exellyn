gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  // Alleen vanaf tablet en breder
  "(min-width: 768px)": function () {
    // Globe beweegt naar beneden en verkleint tijdens scroll
    gsap.to(".globe", {
      scrollTrigger: {
        trigger: ".globe-scroll-pad",
        start: "top top",
        end: "+=3000",    // Lang scrolltraject voor zachte beweging
        scrub: 2,         // Zachte vertraging
        markers: false
      },
      y: 300,             // Beweeg globe naar beneden
      scale: 0.4,         // Verklein globe
      ease: "none"
    });
  },

  // Altijd actief, onafhankelijk van schermgrootte
  "all": function () {
    // Schaalanimatie met keyframes (optioneel als je extra 'bounce' wilt)
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
      ]
    });

    // Bounce-effect voor globe2
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
  }

});
