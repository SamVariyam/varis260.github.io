
let button = document.querySelector(".button");
let results = document.querySelector(".results");
button.addEventListener("click", function(event) {
  console.log(event, event.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "Oops, nothing this time! Try again.";
  results.appendChild(newItem);
});