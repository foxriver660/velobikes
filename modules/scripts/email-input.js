const submitBtn = document.querySelector(".footer__submit-btn")
const form = document.querySelector(".footer__form")


inputFooter.addEventListener("focus",() => {submitBtn.classList.add('footer__submit-btn_active')})
inputFooter.addEventListener("focusout",() => {submitBtn.classList.remove('footer__submit-btn_active')})

function introducedEmail(evt) {
  evt.preventDefault();
  submitBtn.classList.remove('footer__submit-btn_active');
  inputFooter.value = "";
  inputFooter.placeholder = "Круто";
};

// TODO  ДОПИЛИТЬ ВВОД НЕ ПРОПАДАЕТ МЫЛО

form.addEventListener("submit", introducedEmail);

