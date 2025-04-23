window.addEventListener("DOMContentLoaded", () => {
  gsap.from([".breadcrumb", ".tracking-title", ".tracking-form"], {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
  });
});
