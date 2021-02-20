let hoursNum = document.getElementById("hours");
let secondNum = document.getElementById("second");
let minutesNum = document.getElementById("minutes");
second.textContent = 0;
minutes.textContent = 0;
hours.textContent = 0;

let timer = function () {
  globalTimeInSeconds++;
  if (second < 59) second++;
  else {
    second = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  hoursNum.textContent = hours;
  minutesNum.textContent = minutes;
  secondNum.textContent = second;

  
};

