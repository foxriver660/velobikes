const smallSliderDots = document.querySelectorAll(".velobikes__dot");
const velobikesCards = document.querySelectorAll(".velobikes__card");

const changeVeloModel = () => {
  velobikesCards.forEach((velobikesCard) => velobikesCard.classList.remove('velobikes__card_active'))
      velobikesCards[0].classList.add('velobikes__card_active')
      smallSliderDots.forEach((smallSliderDot) => smallSliderDot.classList.remove('velobikes__dot_active'))
      smallSliderDots[0].classList.add('velobikes__dot_active')
      
      };
const changeVeloModel1 = () => {
  velobikesCards.forEach((velobikesCard) => velobikesCard.classList.remove('velobikes__card_active'))
      velobikesCards[1].classList.add('velobikes__card_active')
            smallSliderDots.forEach((smallSliderDot) => smallSliderDot.classList.remove('velobikes__dot_active'))
      smallSliderDots[1].classList.add('velobikes__dot_active')
      };
  const changeVeloModel2 = () => {
    velobikesCards.forEach((velobikesCard) => velobikesCard.classList.remove('velobikes__card_active'))
      velobikesCards[2].classList.add('velobikes__card_active')
      smallSliderDots.forEach((smallSliderDot) => smallSliderDot.classList.remove('velobikes__dot_active'))
      smallSliderDots[2].classList.add('velobikes__dot_active')
      };

  smallSliderDots[0].addEventListener("click", () => changeVeloModel());
  smallSliderDots[1].addEventListener("click", () => changeVeloModel1());
  smallSliderDots[2].addEventListener("click", () => changeVeloModel2());
  