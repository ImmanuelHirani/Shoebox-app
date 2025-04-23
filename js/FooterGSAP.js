// Fade in footer container
gsap.from(".footer-container", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".footer-container",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

// Title fade-in
gsap.from(".footer-container h4:first-of-type", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".footer-container",
    start: "top 95%",
  },
});

// Reliable per-icon animation
gsap.utils.toArray(".footer-icon").forEach((icon, i) => {
  gsap.from(icon, {
    opacity: 0,
    y: 30,
    scale: 0.8,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: icon,
      start: "top 95%",
      toggleActions: "play none none none",
    },
  });
});

// Subtext fade-up
gsap.from(".footer-container h4:last-of-type", {
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footer-container",
    start: "top 85%",
  },
});
