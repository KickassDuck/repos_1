const catalogList = document.querySelector('.catalog-list');
const catalogBtns = document.querySelectorAll('.catalog-tabs__btn');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const body = document.body;
const menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  body.classList.toggle('stop-scroll');
});

menuLinks.forEach(el => {
  el.addEventListener('click', (e) => {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    body.classList.remove('stop-scroll');
  });
});
