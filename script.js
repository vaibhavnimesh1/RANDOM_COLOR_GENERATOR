const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const colorChanger = function () {
  const Code = "1234567890ABCDEF";
  let Color = "#";

  for (let i = 0; i < 6; i++) {
    Color += Code[Math.floor(Math.random() * 16)];
  }
  // console.log(Color);
  return Color;
};

let interval;
function startColor() {
  if(!interval){
    interval = setInterval(changeBgColor, 500);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = colorChanger();
  }
}
function stopColor() {
  clearInterval(interval);
  interval = null;
}

start.addEventListener("click", startColor);
stop.addEventListener("click", stopColor);
