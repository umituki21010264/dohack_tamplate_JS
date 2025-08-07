function tick() {
  const now = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const hourDeg = h * 15 + m * 0.25;
  document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
}

function init() {
  tick();
  document.getElementById("hour").style.background = '#333333';
  document.getElementById("minute").style.background = '#333333';
  setInterval(() => { tick() }, 1000);
}

window.addEventListener('load', init);
