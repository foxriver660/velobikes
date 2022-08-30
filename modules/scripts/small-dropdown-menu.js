const dropDownBtn = document.querySelector(".velobikes__dropdown-btn");
const dropDownList = document.querySelector(".velobikes__dropdown-list");
const dropDownListItems = document.querySelectorAll(".velobikes__dropdown-item");
const dropDownInput = document.querySelector(".velobikes__dropdown-hidden-input");

function activeListItem(index) {
  dropDownListItems.forEach((dropDownListItem) => dropDownListItem.classList.remove('velobikes__dropdown-item_active'));
  dropDownListItems[index].classList.add('velobikes__dropdown-item_active')
}
function chooseSlide(){
  if(dropDownBtn.textContent == "Шоссе") {sliderContainer.style.transform = `translateX(-${0 * 130}%)`;
  changeVelobikes(0);
  activeListItem(0)
  }
  if(dropDownBtn.textContent == "Грэвел") {sliderContainer.style.transform = `translateX(-${1 * 130}%)`; 
  changeVelobikes(1);
  activeListItem(1)}
  if(dropDownBtn.textContent == "TT") {sliderContainer.style.transform = `translateX(-${2 * 130}%)`; 
  changeVelobikes(2);
  activeListItem(2)}
}

dropDownBtn.addEventListener('click', function (e) {
  dropDownList.classList.toggle('velobikes__dropdown-list_visible');
  dropDownBtn.classList.add('velobikes__dropdown-btn_active');
});

dropDownListItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.stopPropagation();
    dropDownBtn.innerText = item.innerText;
    dropDownBtn.focus();
    dropDownInput.value = item.dataset.value;
    dropDownList.classList.remove('velobikes__dropdown-list_visible');
    chooseSlide()
    changeVelobikes();
  });
});

document.addEventListener('click', function (e) {
  if (e.target !== dropDownBtn) {
    dropDownBtn.classList.remove('velobikes__dropdown-btn_active');
    dropDownList.classList.remove('velobikes__dropdown-list_visible');
  }
});

