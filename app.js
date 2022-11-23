const hamburger = document.querySelector('.hamburger');
const menuClose = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.remove('display-none');
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.add('display-none');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('display-none');
  });
});
