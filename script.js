// ===== FitFlex Website Interactions =====

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Handle form submission (demo only)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting FitFlex! We'll get back to you soon.");
    form.reset();
  });
}

// Add year dynamically to footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
// Mobile navigation toggle (for small screens)
const navToggle = document.createElement('button');
navToggle.innerText = "☰ Menu";
navToggle.style.background = "transparent";
navToggle.style.border = "none";
navToggle.style.fontSize = "1.2rem";
navToggle.style.cursor = "pointer";
navToggle.style.display = "none";

const nav = document.querySelector("header nav ul");
const header = document.querySelector("header .container");
header.insertBefore(navToggle, nav);

navToggle.addEventListener('click', () => {
  nav.classList.toggle("show-nav");
});