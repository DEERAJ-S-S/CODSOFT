const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuBtnIcon.classList.toggle('ri-close-line', navLinks.classList.contains('open'));
});

navLinks.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtnIcon.classList.remove('ri-close-line');
});

const scrollRevealOptions = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};

const revealElements = [
  '.header__container p',
  '.header__container h1',
  '.about__image img',
  '.about__content .section__subheader',
  '.about__content .section__header',
  '.about__content .section__description',
  '.about__btn',
  '.room__card',
  '.service__list li',
];

revealElements.forEach((selector, index) => {
  ScrollReveal().reveal(selector, {
    ...scrollRevealOptions,
    delay: index * 500, 
    origin: index === 2 ? 'left' : 'bottom', 
  });
});