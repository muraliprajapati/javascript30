const rootElement = document.querySelector(":root");
const blurInput = document.querySelector("#blur");
const opacityInput = document.querySelector("#opacity");
const colorInput = document.querySelector("#color");
const card = document.querySelector(".card");
const code = document.querySelector(".code-block");

function getVarValue(varName) {
  return getComputedStyle(rootElement).getPropertyValue(varName);
}

function setVarValue(varName, value) {
  rootElement.style.setProperty(varName, value);
}

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (!!alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

function getOpacityValue() {
  return getVarValue("--opacity");
}

function getColorValue() {
  return getVarValue("--bg-color");
}
function getBlurValue() {
  return getVarValue("--blur");
}

function updateCode() {
  const hexColor = getColorValue();
  const opacity = getOpacityValue();
  const blur = getBlurValue();

  const text = `
    background: ${hexToRGB(hexColor, opacity)};
    <br/>
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    <br/>
    backdrop-filter: blur(${blur});
    <br/>
    border-radius: 10px;
  `;

  code.innerHTML = text;
}

function updateCardBackground() {
  const hexColor = getColorValue();
  const opacity = getOpacityValue();
  card.style.background = `${hexToRGB(hexColor, opacity)}`;
}

function updateBlur() {
  setVarValue("--blur", `${this.value}px`);
  updateCode();
}

function updateOpacity() {
  setVarValue("--opacity", `${this.value}`);
  updateCardBackground();
  updateCode();
}

function updateColor() {
  setVarValue("--bg-color", `${this.value}`);
  updateCardBackground();
  updateCode();
}

blurInput.addEventListener("change", updateBlur);
blurInput.addEventListener("mousemove", updateBlur);

opacityInput.addEventListener("change", updateOpacity);
opacityInput.addEventListener("mousemove", updateOpacity);

colorInput.addEventListener("change", updateColor);

updateCode();
updateCardBackground();
