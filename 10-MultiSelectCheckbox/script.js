const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let isHoldingShift = false;

function isShiftKey(keyCode) {
  return keyCode === 16;
}

document.addEventListener("keydown", (e) => {
  if (isShiftKey(e.keyCode)) {
    isHoldingShift = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (isShiftKey(e.keyCode)) {
    isHoldingShift = false;
  }
});

function setChecked(from, to, isChecked = true) {
  for (let i = from; i <= to; i++) {
    checkboxes[i].checked = isChecked;
  }
}

let prevSelected = -1;
function handleChange(e, i) {
  if (prevSelected !== -1 && isHoldingShift) {
    const [start, end] =
      i < prevSelected ? [i, prevSelected] : [prevSelected, i];
    setChecked(start, end, e.target.checked);
  }
  prevSelected = i;
}

checkboxes.forEach((cb, i) =>
  cb.addEventListener("change", (e) => handleChange(e, i))
);
