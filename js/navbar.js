document.addEventListener("DOMContentLoaded", () => {
  const TH = 200;
  let past = false;
  let navOpen = false;

  const navBrand = document.getElementById("navBrand");
  const navLinks = document.getElementById("navLinks");
  const burgerBtn = document.getElementById("burgerBtn");
  const navPane = document.getElementById("navBarExpands");

  if (!navBrand || !navLinks || !burgerBtn || !navPane) {
    console.error("Element not found:", { navBrand, navLinks, burgerBtn, navPane });
    return;
  }

  function updateOnScroll(p) {
    navBrand.classList.toggle("invisible", p);
    navLinks.classList.toggle("invisible", p);
    burgerBtn.classList.toggle("hidden", !p);

    // jika di-scroll ke atas di bawah threshold dan sidebar terbuka, tutup & restore scroll
    if (!p && navOpen) {
      closeNav();
    }
  }

  function openNav() {
    navPane.classList.remove("translate-x-full");
    navPane.classList.add("translate-x-0");
    // lock scroll di html + body
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    navOpen = true;
  }

  function closeNav() {
    navPane.classList.add("translate-x-full");
    navPane.classList.remove("translate-x-0");
    // restore scroll
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    navOpen = false;
  }

  // inisialisasi
  past = window.scrollY > TH;
  updateOnScroll(past);

  window.addEventListener("scroll", () => {
    const now = window.scrollY > TH;
    if (now !== past) {
      past = now;
      updateOnScroll(past);
    }
  });

  burgerBtn.addEventListener("click", () => {
    navOpen ? closeNav() : openNav();
  });
});
