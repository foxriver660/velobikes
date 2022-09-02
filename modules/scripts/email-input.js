const submitBtn = document.querySelector(".footer__submit-btn")
const form = document.querySelector(".footer__form")

inputFooter.addEventListener("focus",() => {submitBtn.classList.add('footer__submit-btn_active')})
inputFooter.addEventListener("focusout",() => {submitBtn.classList.remove('footer__submit-btn_active'); inputFooter.value = ""})

function introducedEmail(evt) {
  if(inputFooter.validity.valid) {
  evt.preventDefault();
  submitBtn.classList.remove('footer__submit-btn_active');
  inputFooter.value = "";
  inputFooter.value = "Круто!";
  inputFooter.placeholder = "Круто!"} else {inputFooter.placeholder = "Введите Ваш email"}
};


form.addEventListener("submit", introducedEmail);

