"use strict"
//# CTA-popup
  //$ Variables
let popupOpen = document.querySelector("button.main__cta__button1"),
  popupBackgroundClose = document.querySelector("div.main__cta-popup__background"),
  popupButtonClose = document.querySelector("div.main__cta-popup__button");
  //$ Functions
function popupOpenClose() {
  let popup = document.querySelector("div.main__cta-popup");
  if (document.querySelector("div.main__cta-popup--active") == null) {
    popup.classList.add("main__cta-popup--active");
  } else {
    popup.classList.remove("main__cta-popup--active");
  };
};
  //$ Events
popupOpen.addEventListener("click", popupOpenClose);
popupBackgroundClose.addEventListener("click", popupOpenClose);
popupButtonClose.addEventListener("click", popupOpenClose);