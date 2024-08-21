(function updateClock() {
  let now = new Date();
  let sec = now.getSeconds();
  let min = now.getMinutes() + sec / 60;
  let hour = (now.getHours() % 12) + min / 60;
  let secondangle = sec * 6;
  let minangle = min * 6;
  let hourangle = hour * 30;

  let secondhand = document.querySelector("#clock .secondhand");
  let minhand = document.querySelector("#clock .minutehand");
  let hourhand = document.querySelector("#clock .hourhand");

  secondhand.setAttribute("transform", `rotate(${secondangle},50,50)`);
  minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
  hourhand.setAttribute("transform", `rotate(${hourangle},50,50)`);

  setTimeout(updateClock, 1000);
})();
