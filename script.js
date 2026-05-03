const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const header = document.querySelector("[data-header]");
const newsletterForm = document.querySelector("[data-newsletter-form]");
const formMessage = document.querySelector("[data-form-message]");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (newsletterForm && formMessage) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(newsletterForm);
    const email = String(formData.get("email") || "").trim();

    if (!email) {
      formMessage.textContent = "Please enter your email address.";
      return;
    }

    formMessage.textContent = "Thank you — the email form is ready to connect to your newsletter tool.";
    newsletterForm.reset();
  });
}
