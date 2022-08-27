const sliderNextBtn = document.querySelector(".slider__button_type_next");
const sliderPrevBtn = document.querySelector(".slider__button_type_prev");
const sliderItems = document.querySelectorAll(".slider__item");
const sliderContainer = document.querySelector(".slider__container");

const velibikesBtns = document.querySelectorAll(".velobikes__button");
const velibikes = document.querySelectorAll(".velobikes__model-name");

const velobikes = [
  [
    {
      model: "Cervelo Caledonia-5",
      link: "../../images/Снимок экрана 2021-05-24 в 12.58 (2).jpg",
    },
    {
      model: "Cannondale Systemsix Himod",
      link: "../../images/Снимок экрана 2021-05-24 в 12.58 (2).jpg",
    },
    {
      model: "Trek Domane SL-7",
      link: "../../images/Снимок экрана 2021-05-24 в 12.58 (2).jpg",
    },
  ],
  [
    {
      model: "Cervelo Aspero GRX 810",
      link: "../../images/Снимок экрана 2021-05-24 в 12.58 (2).jpg",
    },
    {
      model: "Specialized S-Works Diverge",
      link: "../../images/Снимок экрана 2021-05-24 в 12.58 (2).jpg",
    },
    {
      model: "Cannondale Topstone Lefty 3",
      link: "../../images/Снимок экрана 2021-05-24 в 12.58 (2).jpg",
    },
  ],
  [
    {
      model: "Specialized S-Works Shiv5",
      link: "../../images/Снимок экрана 2021-05-24 в 12.58 (2).jpg",
    },
    {
      model: "BMC Timemachine 01 ONE",
      link: "../../images/Снимок экрана 2021-05-24 в 12.58 (2).jpg",
    },
    {
      model: "Cervelo P-Series",
      link: "../../images/Снимок экрана 2021-05-24 в 12.58 (2).jpg",
    },
  ],
];

let activeIdx = 0;

function clearBtn() {
  velibikesBtns.forEach((btn) =>
    btn.classList.remove("velobikes__button_active")
  );
}
function changeVelobikes() {
  for (i = 0; i < velobikes.length; i++) {
    velibikes[i].textContent = velobikes[activeIdx][i].model;
    velibikes[i].src = velobikes[activeIdx][i].link;
  }
}
const changeSlide = (direction) => {
  switch (direction) {
    case "right": {
      activeIdx++;
      if (activeIdx >= sliderItems.length) {
        activeIdx = 0;
      }
      sliderContainer.style.transform = `translateX(-${activeIdx * 130}%)`;
      clearBtn();
      velibikesBtns[activeIdx].classList.add("velobikes__button_active");
      changeVelobikes();
      break;
    }
    case "left": {
      activeIdx--;
      if (activeIdx < 0) {
        activeIdx = sliderItems.length - 1;
      }
      sliderContainer.style.transform = `translateX(-${activeIdx * 130}%)`;
      clearBtn();
      velibikesBtns[activeIdx].classList.add("velobikes__button_active");
      changeVelobikes();
      break;
    }
  }
};
sliderNextBtn.addEventListener("click", () => changeSlide("right"));
sliderPrevBtn.addEventListener("click", () => changeSlide("left"));
