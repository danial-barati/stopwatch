let domMS = document.getElementById("ms");
let domS = document.getElementById("s");
let domM = document.getElementById("m");

let _start = document.getElementById("start");

let ms = 0;
let s = 0;
let m = 0;

let _clear = null;

_start.addEventListener("click", () => {
  if (_start.getAttribute("data-status") == "off") {
    _clear = setInterval(corno, 10);
    _start.setAttribute("data-status", "on");
  }
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(_clear);
  _start.setAttribute("data-status", "off");
});

document.getElementById("lap").addEventListener("click", () => {
  let _li = document.createElement("li");
  _li.innerHTML =
    "Minute: " + m + " - second: " + s + " - milisecond is: " + ms;
  document.getElementById("list").appendChild(_li);
});

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("pause").click();
  ms = 0;
  s = 0;
  m = 0;

  domMS.innerHTML = ms;
  domS.innerHTML = s;
  domM.innerHTML = m;

  _start.setAttribute("data-status", "off");
});

function corno() {
  if (ms < 99) {
    ms++;
    domMS.innerHTML = ms;
  } else {
    ms = 0;
    if (s < 60) {
      s++;
      domS.innerHTML = s;
    } else {
      s = 0;
      m++;
      domM.innerHTML = m;
    }
  }
}
