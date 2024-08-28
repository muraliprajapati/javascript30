const videoPlayer = document.querySelector("video");
const playBtn = document.querySelector("button.player__button.toggle");
const fullscreenBtn = document.querySelector(
  "button.player__button.fullscreen"
);
const skipBtns = document.querySelectorAll("button[data-skip]");
const volumeSlider = document.querySelector('input[name="volume"]');
const playbackSlider = document.querySelector('input[name="playbackRate"]');
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

let isMouseDown = false;
let isSeeking = false;

function seekTo(time) {
  videoPlayer.currentTime = time;
}

playBtn.addEventListener("click", () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
});

volumeSlider.addEventListener("change", (e) => {
  videoPlayer.volume = e.target.value;
});

playbackSlider.addEventListener("change", (e) => {
  videoPlayer.playbackRate = e.target.value;
});

videoPlayer.addEventListener("timeupdate", (e) => {
  if (!isSeeking) {
    const progressPct = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressBar.style.flexBasis = `${progressPct}%`;
  }
});

videoPlayer.addEventListener("play", () => {
  playBtn.textContent = "▐▐";
});
videoPlayer.addEventListener("pause", () => {
  playBtn.textContent = "▶";
});

skipBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    seekTo(videoPlayer.currentTime + parseInt(this.dataset.skip));
  })
);

function scrub(pointX) {
  const seekTime = (pointX / progress.offsetWidth) * videoPlayer.duration;
  seekTo(seekTime);
}

progress.addEventListener("mousedown", () => (isMouseDown = true));
progress.addEventListener("mouseup", (e) => {
  isMouseDown = false;
  isSeeking = false;
  scrub(e.offsetX);
});
progress.addEventListener("click", (e) => scrub(e.offsetX));
progress.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    isSeeking = true;
    const progressPct = (e.offsetX / progress.offsetWidth) * 100;
    progressBar.style.flexBasis = `${progressPct}%`;
  }
});

fullscreenBtn.addEventListener("click", () => {
  videoPlayer.requestFullscreen();
});
