const secretCode = "hello";
const maxLen = secretCode.length;
const keysPressed = [];

window.addEventListener("keyup", (e) => {
  keysPressed.push(e.key);
  if (keysPressed.length > maxLen) {
    keysPressed.shift();
  }
  if (keysPressed.join("") === secretCode) {
    cornify_add();
  }
});
