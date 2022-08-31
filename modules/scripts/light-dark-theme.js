const changeThemeBtns = document.querySelectorAll(
  ".switch-box__pseudo-checkbox"
);
const page = document.querySelector(".page");
const titles = document.querySelectorAll(".section-title");
const texts = document.querySelectorAll(".section-text");
const links = document.querySelectorAll(".header__menu-link");
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

const changeThemeMatchBtn = document.querySelector(".switch-box__icon");
const inputFooterSwitchs = document.querySelectorAll(
  ".switch-box__checkbox-input"
);

function changeTheme() {
  page.classList.toggle("page_theme_dark");
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
  document
    .querySelector(".header__burger-btn_active")
    .classList.toggle("header__burger-btn_theme_dark-active");
}
changeThemeBtns.forEach((changeThemeBtn) =>
  changeThemeBtn.addEventListener("click", () => changeTheme())
);
