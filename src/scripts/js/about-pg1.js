"use strict"
//# About-pg1-video
  //$ Variables
let aboutPg1VideoPlayerStartPause = document.querySelector("div.main__about-pg1__info__video");
  //$ Functions
function aboutPg1VideoStartPause() {
  let aboutPg1VideoPlayer = document.querySelector("video.main__about-pg1__info__video-player"),
    aboutPg1VideoPlayerButton = document.querySelector("img.main__about-pg1__info__video-button");
  if (aboutPg1VideoPlayer.paused || aboutPg1VideoPlayer.ended) {
    aboutPg1VideoPlayerButton.classList.add("main__about-pg1__info__video-button--active");
    aboutPg1VideoPlayer.play();
  } else {
    aboutPg1VideoPlayerButton.classList.remove("main__about-pg1__info__video-button--active");
    aboutPg1VideoPlayer.pause();
  };
};
  //$ Events
aboutPg1VideoPlayerStartPause.addEventListener("click", aboutPg1VideoStartPause);