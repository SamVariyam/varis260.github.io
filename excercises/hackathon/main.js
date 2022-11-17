
let wrapper = document.querySelector(".wrapper");
let dateDiv = document.createElement ("div");
let otherText = document.createElement ("span");


let colors = ["#255c34", "#726756", "#703a56", "#953e00"];



function displayDate () {
	let date = new Date; 
	wrapper.appendChild(otherText);
	wrapper.appendChild(dateDiv);
	otherText.classList.add("description");
	dateDiv.classList.add ("date");
	otherText.innerHTML = "It's currently";
	dateDiv.innerHTML = date;
	let randIndex = Math.floor(Math.random() * colors.length);
}

function clearPage () {
	dateDiv.innerHTML = " ";
}


setInterval(displayDate, 1000);
displayDate();
