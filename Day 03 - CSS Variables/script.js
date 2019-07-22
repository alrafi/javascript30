const control = document.querySelectorAll('.controls input');
// console.log(control);

function handleUpdate() {
	const suffix = this.dataset.sizing || '';

	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);	
}

control.forEach(function(input) {
	input.addEventListener('change', handleUpdate);
});

control.forEach(function(input) {
	input.addEventListener('mousemove', handleUpdate);
});