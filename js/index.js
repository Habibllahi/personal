// Hamburger
document.querySelector("#nav-hamburger").addEventListener("click", () => {
  document.querySelector(".secondary-nav").classList.toggle("show-sec-nav");
});

// Nav time
document.querySelector("#nav-times").addEventListener("click", () => {
  document.querySelector(".secondary-nav").classList.toggle("show-sec-nav");
});

// Automatically update copyright year
document.querySelector(
  "#copyright-year"
).textContent = new Date().getFullYear();
