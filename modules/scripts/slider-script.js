const sliderNextBtn = document.querySelector(".slider__button_type_next");
const sliderPrevBtn = document.querySelector(".slider__button_type_prev");
const sliderItems = document.querySelectorAll(".slider__item");
const sliderContainer = document.querySelector(".slider__container");

const velibikesItems = document.querySelectorAll(".velobikes__dropdown-item");
const velobikesNames = document.querySelectorAll(".velobikes__model-name");
const velobikesImgs = document.querySelectorAll(".velobikes__card-image");
const velobikesLinks = document.querySelectorAll(".velobikes__card-link");



const velobikesArr = [
  [
    {
      model: "Cervelo Caledonia-5",
      link: "../../images/шоссе-1.jpg",
      urlLink: "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN"
    },
    {
      model: "Cannondale Systemsix Himod",
      link: "../../images/шоссе-2.jpg",
      urlLink: "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J"
    },
    {
      model: "Trek Domane SL-7",
      link: "../../images/шоссе-3.jpg",
      urlLink: "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF"
    },
  ],
  [
    {
      model: "Cervelo Aspero GRX 810",
      link: "../../images/грэвел-1.jpg",
      urlLink: "https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE"
    },
    {
      model: "Specialized S-Works Diverge",
      link: "../../images/грэвел-2.jpg",
      urlLink: "https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9"
    },
    {
      model: "Cannondale Topstone Lefty 3",
      link: "../../images/грэвел-3.jpg",
      urlLink: "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8"
    },
  ],
  [
    {
      model: "Specialized S-Works Shiv5",
      link: "../../images/тт-1.jpg",
      urlLink: "https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9"
    },
    {
      model: "BMC Timemachine 01 ONE",
      link: "../../images/тт-2.jpg",
      urlLink: "https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835"
    },
    {
      model: "Cervelo P-Series",
      link: "../../images/тт-3.jpg",
      urlLink: "https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q"
    },
  ],
];

let activeIdx = 0;

function clearBtn() {
  velibikesItems.forEach((item) =>
    item.classList.remove("velobikes__dropdown-item_active")
  );
}
function changeVelobikes(activeIdx) {
  for (i = 0; i < velobikesNames.length; i++) {
    velobikesNames[i].textContent = velobikesArr[activeIdx][i].model;
    velobikesImgs[i].src = velobikesArr[activeIdx][i].link;
    velobikesLinks[i].href = velobikesArr[activeIdx][i].urlLink;
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
      velibikesItems[activeIdx].classList.add("velobikes__dropdown-item_active");
      changeVelobikes(activeIdx);
      dropDownBtn.textContent = velibikesItems[activeIdx].innerText;
      break;
    }
    case "left": {
      activeIdx--;
      if (activeIdx < 0) {
        activeIdx = sliderItems.length - 1;
      }
      sliderContainer.style.transform = `translateX(-${activeIdx * 130}%)`;
      clearBtn();
      velibikesItems[activeIdx].classList.add("velobikes__dropdown-item_active");
      changeVelobikes(activeIdx);
      dropDownBtn.textContent = velibikesItems[activeIdx].innerText;
      break;
    }
  }
};
sliderNextBtn.addEventListener("click", () => changeSlide("right"));
sliderPrevBtn.addEventListener("click", () => changeSlide("left"));

