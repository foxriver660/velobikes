const activeVeloBtn = document.querySelector('.velobikes__button_active')


function openSmallMenu(){
  velibikesBtns.forEach((item) => item.style.display = 'block')
  velibikesBtns.forEach((item) => item.style.backgroundImage = 'none')
  
}



activeVeloBtn.addEventListener("click", () => openSmallMenu())
