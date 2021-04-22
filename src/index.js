// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");
const h2 = body.querySelector("h2");
h2.style.color = "white";
function windowResize(event) {
  event.preventDefault();
  if (window.innerWidth < 400) {
    body.style.background = "#1abc9c";
  } else if (window.innerWidth >= 400 && window.innerWidth < 600) {
    body.style.background = "#3498db";
  } else if (window.innerWidth >= 600 && window.innerWidth < 800) {
    body.style.background = "#9b59b6";
  } else if (window.innerWidth >= 800 && window.innerWidth < 1000) {
    body.style.background = "#f39c12";
  } else {
    body.style.background = "#e74c3c";
  }
}

function init() {
  window.addEventListener("resize", windowResize);
}

init();
