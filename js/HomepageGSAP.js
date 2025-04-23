// Header
const header = document.querySelector("header");
const q = gsap.utils.selector(header);

gsap
  .timeline({
    scrollTrigger: {
      trigger: header,
      start: "top 80%", // when header top is 80% down viewport
      end: "bottom top", // until header bottom hits top of viewport
      scrub: 1, // 1-second smoothing
      // markers: true,     // un-comment to debug
    },
  })

  // img1: start 20% above, move to 20% below
  .fromTo(q(".img1"), { yPercent: -20 }, { yPercent: 20, ease: "none" }, 0)

  // img2: start 20% below, move to 20% above
  .fromTo(q(".img2"), { yPercent: 20 }, { yPercent: -20, ease: "none" }, 0);

gsap.fromTo(q("h1"), { autoAlpha: 0, opacity: 0 }, { autoAlpha: 1, opacity: 1, duration: 1, delay: 0.1, ease: "power3.InOut" }, 0);
// Header End

// about Company
document.querySelectorAll(".reveal-text").forEach((el) => {
  gsap.fromTo(
    el,
    {
      yPercent: 80,
      opacity: 0,
      autoAlpha: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      autoAlpha: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none", // optional for back-scroll
        // markers: true,
      },
    }
  );
});
// about Company End

// Service

// === HEADINGS REVEAL ===
document.querySelectorAll(".container > .reveal-text").forEach((el) => {
  gsap.fromTo(
    el,
    { yPercent: 100, autoAlpha: 0 },
    {
      yPercent: 0,
      autoAlpha: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none ",
      },
    }
  );
});

// === SERVICE ITEM STAGGER ANIMATION ===
document.querySelectorAll(".hooks-service .wrap").forEach((wrap, i) => {
  const number = wrap.querySelector(".number");
  const title = wrap.querySelector("h4");
  const desc = wrap.querySelector("h5");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: "top 80%",
      toggleActions: "play none ",
    },
  });

  tl.fromTo(number, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }).fromTo(title, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3").fromTo(desc, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
});

// Service end

// Image
gsap.utils.toArray(".image-zoom").forEach((el) => {
  gsap.fromTo(
    el,
    { scale: 1.2 },
    {
      scale: 1,
      y: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "bottom top",
        scrub: true,
      },
    }
  );
});
// Image end
