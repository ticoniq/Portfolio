const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const mobileNav = document.querySelector('#mobile-nav');
const blurBg = document.querySelector('#blur-bg');
const mobileNavLink = document.querySelectorAll('.mobile-nav-link');
const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

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

// Save form data to localstorage
form.addEventListener('keyup', () => {
  const formData = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});
// Retrive form data from localstorage on page load
window.onload = () => {
  const formData = localStorage.getItem('formData');
  const formDataObj = JSON.parse(formData);
  name.value = formDataObj.name;
  email.value = formDataObj.email;
  message.value = formDataObj.message;
};

form.addEventListener('submit', (e) => {
  // Prevent form submission
  e.preventDefault();

  // Validate form fields
  const email = document.querySelector('#email').value;

  // Check if email is empty
  if (email !== email.toLowerCase()) {
    const errorDiv = document.querySelector('#validate');
    errorDiv.innerText = 'The email address must be lowercase';
  } else {
    form.submit();
  }
});
