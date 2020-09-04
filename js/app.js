// feather icons
feather.replace();

// PRELOADER
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
	preloader.classList.add('hide-preloader');
});


// future year
let futureYear = document.querySelector('.year');
futureYear.innerHTML = new Date().getFullYear() + `.`;


// sticky navbar
const sticky = document.querySelector('.sticky-nav');

window.addEventListener('scroll', function() {
	const height = window.pageYOffset;
	if (height > 0) {
		sticky.classList.add('fixed-nav');
	} else {
		sticky.classList.remove('fixed-nav');
	}
});
