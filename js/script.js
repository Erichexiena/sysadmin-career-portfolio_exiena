document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const backToTop = document.getElementById("backToTop");
  const navContent = document.getElementById("navContent");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  const updateScrollUI = () => {
    const scrolled = window.scrollY > 30;
    navbar?.classList.toggle("scrolled", scrolled);
    backToTop?.classList.toggle("visible", window.scrollY > 500);
  };
  updateScrollUI();
  window.addEventListener("scroll", updateScrollUI, { passive: true });

  // Close the mobile menu after selecting a section.
  document.querySelectorAll("#navContent .nav-link, #navContent .nav-cta").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && navContent?.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navContent).hide();
      }
    });
  });

  // Keep the navigation highlight aligned with the section in view.
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll("#mainNav .nav-link");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });

  // Contact is intentionally a placeholder until the developer adds a public email.
  const contactButton = document.getElementById("contactButton");
  const contactNote = document.getElementById("contactNote");
  contactButton?.addEventListener("click", (event) => {
    const email = contactButton.dataset.email;
    if (!email) {
      event.preventDefault();
      if (contactNote) {
        contactNote.textContent = "You can reach me at erichexiena@gmail.com.";
        contactNote.classList.add("contact-note-active");
      }
    }
  });
});

const contactButton = document.getElementById("contactButton");
const contactNote = document.getElementById("contactNote");

if (contactButton && contactNote) {
  contactButton.addEventListener("click", function () {
    contactNote.style.display =
      contactNote.style.display === "none" ? "block" : "none";
  });
}
