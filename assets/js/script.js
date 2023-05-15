const open_menu = document.querySelector("#open-menu");
const close_menu = document.querySelector("#close-menu");
const mobile_nav = document.querySelector("#mobile-nav");

// Open mobile nav
open_menu.addEventListener('click', () => {
  mobile_nav.style.display = "block";
});

// Close mobile nav 
close_menu.addEventListener("click", () => {
  mobile_nav.style.display = "none";
});