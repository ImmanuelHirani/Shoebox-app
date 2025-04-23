// Fade in entire footer container
gsap.from(".footer-container", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footer-container",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

// Fade in header
gsap.from(".footer-container h4:first-of-type", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footer-container",
    start: "top 92%",
  },
});

// Fade in icons with light stagger
gsap.utils.toArray(".footer-icon").forEach((icon, i) => {
  gsap.from(icon, {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out",
    delay: i * 0.1,
    scrollTrigger: {
      trigger: icon,
      start: "top 95%",
    },
  });
});

// Fade in subtext
gsap.from(".footer-container h4:last-of-type", {
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footer-container",
    start: "top 90%",
  },
});
