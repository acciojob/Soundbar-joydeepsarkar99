let sounds // to hold all Audio 
let audioHTML = document.querySelector('#my-audio');
let btnList = document.querySelectorAll('.btn');

for (let i = 0; i < btnList.length; i++) {
	btnList[i].addEventListener("click", () => {
		if (btnList[i].classList.contains('stop')) {
			stopSounds();
		} else {
			playSound(i);
		}
	});
}

function playSound(i) {
	let soundName = btnList[i].innerText;
	audioHTML.setAttribute("src", `sounds/${soundName}.mp3`);
	sounds = audioHTML 
	audioHTML.play();
}

function stopSounds() {
	sounds.pause();
}