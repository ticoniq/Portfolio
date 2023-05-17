const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const mobileNav = document.querySelector('#mobile-nav');
const blurBg = document.querySelector('#blur-bg');
const mobileNavLink = document.querySelectorAll('.mobile-nav-link');
const form = document.querySelector('#form');

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

form.addEventListener('submit', (e) => {
  // Prevent form submission
  e.preventDefault();

  // Validate form fields
  const email = document.querySelector('#email').value;
  const validate = document.createElement('span');
  validate.className = 'validate';

  const control = document.querySelector('#btn-control');
  const btn = document.querySelector('#validate');

  control.insertBefore(validate, btn);

  // Check if name is empty
  if (email !== email.toLowerCase()) {
    validate.appendChild(document.createTextNode('The email address must be lowercase'));
  } else {
    form.submit();
  }
});
