
const clock = document.querySelector('.coffee-clock');
const handle = document.querySelector('.handle');
const spoon = document.querySelector('.spoon');

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const hourAngle = (hours % 12 + minutes / 60) * 30;
  const minuteAngle = minutes * 6;

  clock.style.setProperty('--angle-hour', `${hourAngle}deg`);
  clock.style.setProperty('--angle-minute', `${minuteAngle}deg`);
}

setInterval(updateClock, 1000);