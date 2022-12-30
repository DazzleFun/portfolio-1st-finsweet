"use strict"
//# Preview-video
  //$ Variables
let previewVideoOpenButton = document.querySelector("div.main__preview__info-button-video"),
  previewVideoCloseBackground = document.querySelector("div.main__preview-video__background"),
  previewVideoCloseButton = document.querySelector("div.main__preview-video__close-button");
  //$ Functions
function previewVideoOpenClose() {
  let previewVideo = document.querySelector("div.main__preview-video"),
    previewVideoPlayer = document.querySelector("video.main__preview-video__player");
  if (document.querySelector("div.main__preview-video--active") == null) {
    previewVideo.classList.add("main__preview-video--active");
    previewVideoPlayer.play();
  } else {
    previewVideo.classList.remove("main__preview-video--active");
    previewVideoPlayer.pause();
  };
};
  //$ Events
previewVideoOpenButton.addEventListener("click", previewVideoOpenClose);
previewVideoCloseBackground.addEventListener("click", previewVideoOpenClose);
previewVideoCloseButton.addEventListener("click", previewVideoOpenClose);