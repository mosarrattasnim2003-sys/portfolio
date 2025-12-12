// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Close menu after clicking a link (mobile)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// AOS init
AOS.init({
  duration: 900,
  once: true,
  offset: 90
});

// Typed.js
new Typed(".typing", {
  strings: ["Data Analyst", "Python Programmer", "SQL Enthusiast", "CSE Student"],
  typeSpeed: 55,
  backSpeed: 30,
  backDelay: 1200,
  loop: true
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  const scrollY = window.scrollY;

  sections.forEach(sec => {
    const top = sec.offsetTop - 110;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(a => a.classList.remove("active"));
      const active = document.querySelector(`.nav a[href="#${id}"]`);
      if (active) active.classList.add("active");
    }
  });
}
window.addEventListener("scroll", setActiveLink);
setActiveLink();

// Contact form (no backend): show success message
const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
  form.reset();
});
