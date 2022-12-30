"use strict"
//# For "donate" page
  //$ Variables
let donateNowErrorOpen = document.querySelector("a.main__donate__info__button");
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
donateNowErrorOpen.addEventListener("click", donateErrorOpenClose);