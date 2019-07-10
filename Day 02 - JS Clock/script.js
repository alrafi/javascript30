const secondHand = document.querySelector('.secondhand');
const minuteHand = document.querySelector('.minutehand');
const hourHand = document.querySelector('.hourhand');

function setDate() {
	const clock = new Date();
	const second = clock.getSeconds();
	const secondDegree = (second / 60 * 360) + 90;
	secondHand.style.transform = `rotate(${secondDegree}deg)`;
	// console.log(second);

	const minute = clock.getMinutes();
	const minuteDegree = (minute / 60 * 360) + 90;
	minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

	const hour = clock.getHours();
	const hourDegree = (hour / 12 * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);