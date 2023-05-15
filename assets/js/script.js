const open_menu = document.querySelector("#open-menu");
const close_menu = document.querySelector("#close-menu");
const mobile_nav = document.querySelector("#mobile-nav");
const blur_bg = document.querySelector("#blur-bg");
const mobile_nav_link = document.querySelectorAll(".mobile-nav-link");

// Open mobile nav
open_menu.addEventListener("click", () => {
  mobile_nav.style.display = "flex";
  blur_bg.style.display = "block";
  document.body.style.overflow = "hidden";
});

const handleCloseMobileNav = () => {
  mobile_nav.style.display = "none";
  blur_bg.style.display = "none";
  document.body.style.overflow = "auto";
};

// Handle clicking the close mobile menu icon
close_menu.addEventListener("click", handleCloseMobileNav);

// Handle clicking a mobile menu link
mobile_nav_link.forEach((link) =>
  link.addEventListener("click", handleCloseMobileNav)
);

// Hide mobile navbar and blurred div
// for desktop on window resize
window.onresize = () => {
  if (window.innerWidth >= 768) {
    handleCloseMobileNav();
  }
};
