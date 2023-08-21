
// Digital clock

const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const ampmDisplay = document.querySelector("button");


// creating a update time function

function updateTime() {
  // Get Time from Date Object
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let ampm = "AM";

  // Setting am and pm based on the time.
  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  // Setting '0' before the single digit numbers.

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  // Changing the time by changing innerText in span
  hoursDisplay.innerText = hour;
  minutesDisplay.innerText = minute;
  secondsDisplay.innerText = second;
  ampmDisplay.innerText = ampm;

  // setting setTimeout function to create infinite loop for refreshing the page for every second.
  setTimeout(() => {
    updateTime();
  }, 1000);
}

updateTime();
