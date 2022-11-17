//detects loading page immediately//
document.addEventListener('DOMContentLoaded' , () => {
	const bird = document.querySelector('.bird')
	const gameDisplay = document.querySelector('.game-container')
	const ground = document.querySelector('ground')
//bird's location in center of game-container and gravity
	let birdLeft = 220
	let birdBottom = 100
	let gravity = 2
//function to move bird down automatically
	function startGame() {
		birdBottom -= gravity
		bird.style.bottom = birdBottom + 'px'
		bird.style.left = birdLeft +'px'
	}
//javascript setInterval
	let timerId = setInterval(startGame,20)

//function to give space bar button control
	function control(e) {
		if (e.keyCode == 32) {
			jump()
		}
	}
//function to keep bird from going off page
	function jump() {
		if (birdBottom < 500) birdBottom += 50
		bird.style.bottom = birdBottom + 'px'
		console.log(birdBottom)
	}

	document.addEventListener('keyup', control)


} )