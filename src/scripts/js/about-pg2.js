"use strict"
//# About-pg2-video
  //$ Variables
let aboutPg2VideoPlayerStartPause = document.querySelector("div.main__about-pg2__video__wrapper");
  //$ Functions
function aboutPg2VideoStartPause() {
  let aboutPg2VideoPlayer = document.querySelector("video.main__about-pg2__video-player"),
    aboutPg2VideoPlayerButton = document.querySelector("img.main__about-pg2__video-button");
  if (aboutPg2VideoPlayer.paused || aboutPg2VideoPlayer.ended) {
    aboutPg2VideoPlayerButton.classList.add("main__about-pg2__video-button--active");
    aboutPg2VideoPlayer.play();
  } else {
    aboutPg2VideoPlayerButton.classList.remove("main__about-pg2__video-button--active");
    aboutPg2VideoPlayer.pause();
  };
};
  //$ Events
aboutPg2VideoPlayerStartPause.addEventListener("click", aboutPg2VideoStartPause);