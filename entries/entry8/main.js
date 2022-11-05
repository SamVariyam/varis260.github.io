let body = document.body;

function turnOnBadPill() {
  body.classList.toggle("badpilleffect");
}

let button = document.querySelector(".badpill");
button.addEventListener("click", turnOnBadPill);

function turnOnGoodPill() {
  body.classList.toggle("goodpilleffect");
}

let buttontwo = document.querySelector(".goodpill");
buttontwo.addEventListener("click", turnOnGoodPill);