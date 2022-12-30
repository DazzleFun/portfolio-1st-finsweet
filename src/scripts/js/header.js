"use strict"
//# Burger
  //$ Variables
let menuButton = document.querySelector("div.header__menu__button");
  //$ Functions
function menuButtonShowHide() {
  let header = document.querySelector("header.header"),
    menuBurger = document.querySelector("nav.header__menu-burger");
  if (document.querySelector("header.header--active") == null) {
    header.classList.add("header--active");
    menuButton.classList.add("header__menu__button--active");
    menuBurger.classList.add("header__menu-burger--active");
  } else {
    header.classList.remove("header--active");
    menuButton.classList.remove("header__menu__button--active");
    menuBurger.classList.remove("header__menu-burger--active");
  };
};
function menuButtonCancel() {
  let windowWidth = document.documentElement.clientWidth;
  if ((windowWidth > 838 || windowWidth == 838) && (document.querySelector("header.header--active") != null)) {
    menuButtonShowHide();
  };
};
  //$ Events
menuButton.addEventListener("click", menuButtonShowHide);
window.addEventListener("resize", menuButtonCancel);