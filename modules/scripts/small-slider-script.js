const smallSliderDots = document.querySelectorAll(".velobikes__dot");
const velobikesCards = document.querySelectorAll(".velobikes__card");

const changeCard = (i) => {
  velobikesCards.forEach((velobikesCard) =>
    velobikesCard.classList.remove("velobikes__card_active")
  );
  velobikesCards[i].classList.add("velobikes__card_active");
  smallSliderDots.forEach((smallSliderDot) =>
    smallSliderDot.classList.remove("velobikes__dot_active")
  );
  smallSliderDots[i].classList.add("velobikes__dot_active");
};

smallSliderDots[0].addEventListener("click", () => changeCard(0));
smallSliderDots[1].addEventListener("click", () => changeCard(1));
smallSliderDots[2].addEventListener("click", () => changeCard(2));
