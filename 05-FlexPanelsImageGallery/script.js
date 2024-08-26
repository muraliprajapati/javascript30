const panels = document.querySelectorAll(".panel");
let activePanel = null;

function toggleOpen() {
  if (activePanel) {
    activePanel.classList.remove("open");
  }
  this.classList.add("open");
  activePanel = this;
}

function toggleActive(e) {
  if (activePanel === this) {
    if (e.propertyName.includes("flex")) {
      this.classList.add("open-active");
    }
  } else {
    this.classList.remove("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("mouseover", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
