let seet = 1;
function isAdPlaying() {
  const adOverlay = document.querySelector(".ytp-ad-player-overlay");
  return adOverlay !== null;
}

function adjustVideoSpeed(speed) {
  const videoPlayer = document.querySelector(".html5-main-video");
  if (videoPlayer) {
    videoPlayer.playbackRate = speed;
  }
}

function clickSkipButton() {
  const skipButton = document.querySelector(".ytp-ad-skip-button-modern");
  if (skipButton && skipButton.textContent === "Skip") {
    skipButton.click();
  }
}
setInterval(() => {
  if (isAdPlaying()) {
    seet = 0;
    adjustVideoSpeed(8);
  } else {
    if (seet === 0) {
      adjustVideoSpeed(1);
      seet = 1;
    }
  }
}, 100);
