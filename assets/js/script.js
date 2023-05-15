const open_menu = document.querySelector("#open-menu");
const close_menu = document.querySelector("#close-menu");
const mobile_nav = document.querySelector("#mobile-nav");
const blur_bg = document.querySelector("#blur-bg");

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

// Close mobile nav
close_menu.addEventListener("click", handleCloseMobileNav);

// Hide mobile navbar and blurred div
// for desktop on window resize
window.onresize = () => {
  if (window.innerWidth >= 768) {
    handleCloseMobileNav();
  }
};
