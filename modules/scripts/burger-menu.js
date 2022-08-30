const burger = document.querySelector('.header__burger-btn');
const burgerActive = document.querySelector('.header__burger-btn_active');
const menulist = document.querySelector('.header__menu-list');

function changeIcon() {
  burger.classList.toggle('header__burger-btn_active')
  menulist.classList.toggle('header__menu-list_visible')
};

burger.addEventListener('click', () => changeIcon())