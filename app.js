const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('navbar__logo');
const body = document.querySelector('body');

// display Mobile menu
const mobile = () => {
  
  menu.classList.toggle('is_active');
  menuLinks.classList.toggle('active');
  body.classList.toggle('active')
};

menu.addEventListener('click' , mobileMenu)
