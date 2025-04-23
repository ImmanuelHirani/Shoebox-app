window.addEventListener("DOMContentLoaded", () => {
  gsap.from(
    [
      ".breadcrumb",
      "h2.uppercase", // services list heading
      ".accordion-box",
    ],
    {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
    }
  );
});
