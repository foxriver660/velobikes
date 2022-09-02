const dropDownBtn = document.querySelector(".velobikes__dropdown-btn");
const dropDownList = document.querySelector(".velobikes__dropdown-list");
const dropDownListItems = document.querySelectorAll(
  ".velobikes__dropdown-item"
);
const dropDownInput = document.querySelector(
  ".velobikes__dropdown-hidden-input"
);

function activeListItem(index) {
  dropDownListItems.forEach((dropDownListItem) =>
    dropDownListItem.classList.remove("velobikes__dropdown-item_active")
  );
  dropDownListItems[index].classList.add("velobikes__dropdown-item_active");
}
function chooseSlide() {
  let i = 0;
  if (dropDownBtn.textContent == "Шоссе") {
    sliderContainer.style.transform = `translateX(-${i * 130}%)`;
    changeVelobikes(i);
    activeListItem(i);
  }
  if (dropDownBtn.textContent == "Грэвел") {
    i++;
    sliderContainer.style.transform = `translateX(-${i * 130}%)`;
    changeVelobikes(i);
    activeListItem(i);
  }
  if (dropDownBtn.textContent == "TT") {
    i += 2;
    sliderContainer.style.transform = `translateX(-${i * 130}%)`;
    changeVelobikes(i);
    activeListItem(i);
  }
}

dropDownBtn.addEventListener("click", function (e) {
  dropDownList.classList.toggle("velobikes__dropdown-list_visible");
  dropDownBtn.classList.add("velobikes__dropdown-btn_active");
});

dropDownListItems.forEach(function (item) {
  
  item.addEventListener("click", function (e) {
    activeIdx++
    e.stopPropagation();
    dropDownBtn.innerText = item.innerText;
    dropDownBtn.focus();
    dropDownInput.value = item.dataset.value;
    dropDownList.classList.remove("velobikes__dropdown-list_visible");
    chooseSlide();
    changeVelobikes(activeIdx);
  });
});

document.addEventListener("click", function (e) {
  if (e.target !== dropDownBtn) {
    dropDownBtn.classList.remove("velobikes__dropdown-btn_active");
    dropDownList.classList.remove("velobikes__dropdown-list_visible");
  }
});
