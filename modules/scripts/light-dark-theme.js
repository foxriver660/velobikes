const changeThemeBtns = document.querySelectorAll(
  ".switch-box__pseudo-checkbox"
);
const page = document.querySelector(".page");
const titles = document.querySelectorAll(".section-title");
const texts = document.querySelectorAll(".section-text");
const links = document.querySelectorAll(".header__menu-link");
const header = document.querySelector(".header");
const benefitsTextImage = document.querySelector(".benefits__img-text");
const quote = document.querySelector(".motivation__quote");
const quoteAuthor = document.querySelector(".motivation__quote-author");
const quoteJob = document.querySelector(".motivation__author-job");
const sliderBtns = document.querySelectorAll(".slider__button");
const velobikesBtns = document.querySelectorAll(".velobikes__button");
const workoutLinks = document.querySelectorAll(".workout__link");
const footerHeading = document.querySelector(".footer__heading");
const inputFooter = document.querySelector(".footer__email-input");
const footer = document.querySelector(".footer");
const copyRigthFooter = document.querySelector(".footer__copyrigth");
const changeThemeMatchBtn = document.querySelector(".switch-box__icon");
const inputFooterSwitchs = document.querySelectorAll(
  ".switch-box__checkbox-input"
);
const switchIcons = document.querySelectorAll(".switch-box__checkbox-icon");

function changeIconColor() {
  for (let k = 0; k < switchIcons.length; k++) {
    if (k % 2 === 0) {
      switchIcons[k].src = "./images/Vector-light2.svg";
    } else switchIcons[k].src = "./images/Vector-dark2.svg";
  }
}
function changeBackIconColor() {
  for (let k = 0; k < switchIcons.length; k++) {
    if (k % 2 === 0) {
      switchIcons[k].src = "./images/Vector-light.svg";
    } else switchIcons[k].src = "./images/Vector-dark.svg";
  }
}

function changeThemeDirect() {
  page.classList.toggle("page_theme_dark");
  header.classList.toggle("header_theme_dark");
  benefitsTextImage.classList.toggle("benefits__img-text_theme_dark");
  quote.classList.toggle("motivation__quote_theme_dark");
  quoteAuthor.classList.toggle("motivation__quote-author_theme_dark");
  quoteJob.classList.toggle("motivation__author-job_theme_dark");
  sliderNextBtn.classList.toggle("slider__button_type_next-dark");
  sliderPrevBtn.classList.toggle("slider__button_type_prev-dark");
  footerHeading.classList.toggle("footer__heading_theme_dark");
  inputFooter.classList.toggle("footer__email-input_theme_dark");
  footer.classList.toggle("footer_theme_dark");
  dropDownBtn.classList.toggle("velobikes__dropdown-btn_theme_dark");
  submitBtn.classList.toggle("footer__submit-btn_theme_dark");
  copyRigthFooter.classList.toggle("footer__copyrigth_theme_dark");
  titles.forEach((title) => title.classList.toggle("section-title_theme_dark"));
  texts.forEach((text) => text.classList.toggle("section-text_theme_dark"));
  links.forEach((link) =>
    link.classList.toggle("header__menu-link_theme_dark")
  );
  sliderBtns.forEach((sliderBtn) =>
    sliderBtn.classList.toggle("slider__button_theme_dark")
  );
  velobikesBtns.forEach((velobikesBtn) =>
    velobikesBtn.classList.toggle("velobikes__button_theme_dark")
  );
  workoutLinks.forEach((workoutLink) =>
    workoutLink.classList.toggle("workout__link_theme_dark")
  );
  velobikesNames.forEach((velobikesName) =>
    velobikesName.classList.toggle("velobikes__model-name_theme_dark")
  );
  dropDownListItems.forEach((dropDownListItem) =>
    dropDownListItem.classList.toggle("velobikes__dropdown-item_theme_dark")
  );
  burger.classList.toggle("header__burger-btn_theme_dark");
  burger.classList.toggle("header__burger-btn_theme_dark-active");
}

function changeTheme() {
  if (!page.classList.contains("page_theme_dark")) {
    changeIconColor();
    changeThemeDirect();
  } else {
    changeBackIconColor();
    changeThemeDirect();
  }
}
changeThemeBtns.forEach((changeThemeBtn) =>
  changeThemeBtn.addEventListener("click", () => changeTheme())
);
