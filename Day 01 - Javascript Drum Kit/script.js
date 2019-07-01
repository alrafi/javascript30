function removeTransition(event) {
	if (event.propertyName !== 'transform') return;
	event.target.classList.remove('playing');
}

function keyToValue(key) {
	switch (key) {
		case ('A'): 
			return 65;
		case 'clap': 
			return 65;
		case 'S': 
			return 83;
		case 'hihat': 
			return 83;
		case 'D': 
			return 68;
		case 'kick': 
			return 68;
		case 'F': 
			return 70;
		case 'openhat': 
			return 70;
		case 'G': 
			return 71;
		case 'boom': 
			return 71;
		case 'H': 
			return 72;
		case 'ride': 
			return 72;
		case 'J': 
			return 74;
		case 'snare': 
			return 74;
		case 'K': 
			return 75;
		case 'tom': 
			return 75;
		case 'L': 
			return 76;
		case 'tink': 
			return 76;
	}
}

function playSound(event){
	
	const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

	if (!sound) return;

	key.classList.add('playing');
	sound.currentTime = 0;
	sound.play();
};

function playKbd(event){
	var keychar = event.path[0].textContent;
	var val = keyToValue(keychar);

	const sound = document.querySelector(`audio[data-key="${val}"]`);
	const key = document.querySelector(`div[data-key="${val}"]`);

	if (!sound) return;

	key.classList.add('playing');
	sound.currentTime = 0;
	sound.play();
};

function playText(event){
	var keychar = event.path[0].textContent;
	var val = keyToValue(keychar);
	const sound = document.querySelector(`audio[data-key="${val}"]`);
	const key = document.querySelector(`div[data-key="${val}"]`);

	if (!sound) return;

	key.classList.add('playing');
	sound.currentTime = 0;
	sound.play();
};

function playDivKey(event){
	var val = event.target.dataset.key;
	const sound = document.querySelector(`audio[data-key="${val}"]`);
	const key = document.querySelector(`div[data-key="${val}"]`);

	if (!sound) return;

	key.classList.add('playing');
	sound.currentTime = 0;
	sound.play();
};


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('click', playDivKey);
window.addEventListener('click', playText);
window.addEventListener('click', playKbd);
window.addEventListener('keydown', playSound);