// === TIMELINES ===
const navTl = gsap.timeline({ paused: true, reversed: true })
.fromTo("#navBarExpands", { x: "100%" }, { x: "0%", duration: 0.4, ease: "power1.inOut" }, 0)
.fromTo("#navBarExpands h5", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3, ease: "power1.inOut" }, "-=0.3")
.fromTo("#navBarExpands ul li", { x: 30, autoAlpha: 0 }, { x: 0, autoAlpha: 1, stagger: 0.08, duration: 0.4, ease: "power1.inOut" }, "-=0.25")
.fromTo("#navBarExpands .wrap.mt-auto a", { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.06, duration: 0.3, ease: "power1.inOut" }, "-=0.25")
.to("#closeBtn", { scale: 1, opacity: 1 });

const scrollTl = gsap.timeline({ paused: true });
window.addEventListener("DOMContentLoaded", () => {
  const navBrand = document.getElementById("navBrand");
  const navLinks = document.getElementById("navLinks");
  const burgerBtn = document.getElementById("burgerBtn");
  const menuBtn = document.getElementById("menuExpands");
  const CloseBtn = document.getElementById("closeBtn");
  const TH = 200;
  let past = false;
  let navOpen = false;

  if (!navBrand || !navLinks || !burgerBtn || !menuBtn || !CloseBtn) return;

  // initial off-screen state for burger
  gsap.set(burgerBtn, { x: 30, autoAlpha: 0 });

  // build scroll animation
  scrollTl
    .to(
      [navBrand, navLinks],
      {
        y: -20,
        autoAlpha: 0,
        duration: 0.3,
        ease: "power1.inOut",
        stagger: 0.05,
      },
      0
    )
    .to(
      burgerBtn,
      {
        x: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power1.inOut",
      },
      0
    );

  function openNav() {
    document.documentElement.style.overflow = document.body.style.overflow = "hidden";
    navTl.play();
    navOpen = true;
  }
  function closeNav() {
    document.documentElement.style.overflow = document.body.style.overflow = "";
    navTl.reverse();
    navOpen = false;
  }

  function showBurger() {
    // ensure it's in the flow
    burgerBtn.classList.remove("invisible");
    scrollTl.play();
  }
  function hideBurger() {
    scrollTl.reverse();
    scrollTl.eventCallback("onReverseComplete", () => {
      burgerBtn.classList.add("invisible");
    });
  }

  function updateOnScroll(isPast) {
    if (isPast) {
      showBurger();
    } else {
      if (navOpen) closeNav();
      hideBurger();
    }
  }

  // initial check
  past = window.scrollY > TH;
  updateOnScroll(past);

  // watch scroll
  window.addEventListener("scroll", () => {
    const now = window.scrollY > TH;
    if (now !== past) {
      past = now;
      updateOnScroll(past);
    }
  });

  // burger toggles drawer
  burgerBtn.addEventListener("click", () => {
    navOpen ? closeNav() : openNav();
  });

  // allow menuBtn to also toggle open the nav
  menuBtn.addEventListener("click", () => {
    if (!navOpen) openNav();
  });

  CloseBtn.addEventListener("click", () => {
    if (navOpen) closeNav();
  });
});
