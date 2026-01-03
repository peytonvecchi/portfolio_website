document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.getElementById("navbarsExample04");
  const bsCollapse = new bootstrap.Collapse(navBar, { toggle: false });
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // 1. Get the target ID (e.g., #contact)
      const targetId = this.getAttribute("href");

      // Only apply custom logic if it's an internal anchor link
      if (targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // 2. Slow Smooth Scroll (Duration: 1500ms / 1.5 seconds)
          const offset = 70; // Adjust based on your navbar height
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth", // Standard smooth scroll
            // Note: For precise duration control (e.g. exactly 3 seconds),
            // you would need the "Vanilla JavaScript Alternative" function
            // provided in the previous answer.
          });
        }

        // 3. Close the Mobile Menu
        if (navBar.classList.contains("show")) {
          bsCollapse.hide();
        }
      }
    });
  });
});
