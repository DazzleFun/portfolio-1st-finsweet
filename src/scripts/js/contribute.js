"use strict"
//# Contribute
  //$ Variables
let contributeButton = document.querySelectorAll(".main__contribute__buttons-item"),
  contributeText = document.querySelectorAll(".main__contribute__text");
  //$ Functions & Events
contributeButton.forEach(function(item) {
  item.addEventListener("click", function() {
    let contributeTab = item.getAttribute("data-tab"),
      contributeParagraph = document.querySelector(contributeTab);
    if (!item.classList.contains("main__contribute__buttons-item--active")) {
      contributeButton.forEach(function(item) {
        item.classList.remove("main__contribute__buttons-item--active");
      });
      contributeText.forEach(function(item) {
        item.classList.remove("main__contribute__text--active");
      });
      item.classList.add("main__contribute__buttons-item--active");
      contributeParagraph.classList.add("main__contribute__text--active");
    };
  });
});


