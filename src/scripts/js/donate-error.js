"use strict"
//# Donate-error
  //$ Variables
let donateErrorOpen = document.querySelector("a.main__cta__button2"),
  donateErrorBackgroundClose = document.querySelector("div.main__donate-error__background"),
  donateErrorButtonClose = document.querySelector("div.main__donate-error__button");
  //$ Functions
function donateErrorOpenClose() {
  let donateError = document.querySelector("div.main__donate-error");
  if (document.querySelector("div.main__donate-error--active") == null) {
    donateError.classList.add("main__donate-error--active");
  } else {
    donateError.classList.remove("main__donate-error--active");
  };
};
  //$ Events
donateErrorOpen.addEventListener("click", donateErrorOpenClose);
donateErrorBackgroundClose.addEventListener("click", donateErrorOpenClose);
donateErrorButtonClose.addEventListener("click", donateErrorOpenClose);