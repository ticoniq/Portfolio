import projectsData from './projects-data.js';
import { generateProjectCards } from './generate-html-utils.js';

const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const mobileNav = document.querySelector('#mobile-nav');
const blurBg = document.querySelector('#blur-bg');
const mobileNavLink = document.querySelectorAll('.mobile-nav-link');

const projectCardsWrapper = document.querySelector('#project-cards');
projectCardsWrapper.innerHTML = generateProjectCards(projectsData);

// Open mobile nav
openMenu.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
  blurBg.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

const handleCloseMobileNav = () => {
  mobileNav.style.display = 'none';
  blurBg.style.display = 'none';
  document.body.style.overflow = 'auto';
};

// Handle clicking the close mobile menu icon
closeMenu.addEventListener('click', handleCloseMobileNav);

// Handle clicking a mobile menu link
mobileNavLink.forEach((link) => {
  link.addEventListener('click', handleCloseMobileNav);
});

// Hide mobile navbar and blurred div
// for desktop on window resize
window.onresize = () => {
  if (window.innerWidth >= 768) {
    handleCloseMobileNav();
  }
};
