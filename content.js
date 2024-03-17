let playing = 1;
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
    playing = 0;
    adjustVideoSpeed(8);
  } else {
    if (playing === 0) {
      adjustVideoSpeed(1);
      playing = 1;
    }
  }
}, 100);
