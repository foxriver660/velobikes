const burger = document.querySelector(".header__burger-btn");
const menulist = document.querySelector(".header__menu-list");

function toggleBurger() {
  burger.classList.toggle("header__burger-btn_active");
  menulist.classList.toggle("header__menu-list_visible");
}

function changeIcon() {
  if (!page.classList.contains("page_theme_dark")) {
    toggleBurger();
  } else {
    toggleBurger();
    burger.classList.toggle("header__burger-btn_theme_dark-active");
  }
}

burger.addEventListener("click", () => changeIcon());
