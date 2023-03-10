"use strict"
//# Preloader
  //$ Variables
let preloader = document.querySelector("div.preloader"),
  preloaderAnimation = document.querySelector("div.preloader__animation");
  //$ Functions
window.onload = function() {
  preloader.classList.add("preloader--loaded");
  window.setTimeout(function() {
    preloaderAnimation.classList.add("preloader__animation--stop");
  }, 300);
};