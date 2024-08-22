const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;

    key.classList.remove("playing");
  });
});

function handleKeyDown(e) {
  const keycode = e.keyCode;
  const audioSource = document.querySelector(`audio[data-key="${keycode}"]`);
  if (audioSource) {
    const key = document.querySelector(`.key[data-key="${keycode}"]`);
    key.classList.add("playing");
    audioSource.currentTime = 0;
    audioSource.play();
  }
}

window.addEventListener("keydown", handleKeyDown);
