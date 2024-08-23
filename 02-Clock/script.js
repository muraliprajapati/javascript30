const secondHand = document.querySelector(".hand-sec");
const minuteHand = document.querySelector(".hand-min");
const hourHand = document.querySelector(".hand-hr");

const day = document.querySelector(".day");
const time = document.querySelector(".time");

function setClock() {
  const now = new Date();
  day.innerHTML = now.toLocaleDateString("en-US", {
    dateStyle: "full",
  });
  time.innerHTML = now.toLocaleTimeString("en-US", {
    timeStyle: "full",
  });

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = (seconds / 60) * 360 + 90;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  // Fix the transition issue at 0 seconds
  if (seconds === 0) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "all 0.5s";
  }

  // Fix the transition issue at 0 minutes
  if (minutes === 0 && seconds === 0) {
    minuteHand.style.transition = "none";
  } else {
    minuteHand.style.transition = "all 0.5s";
  }

  // Fix the transition issue at 0 hours
  if (hours === 0 && minutes === 0 && seconds === 0) {
    hourHand.style.transition = "none";
  } else {
    hourHand.style.transition = "all 0.5s";
  }

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setClock();
setInterval(setClock, 1000);
