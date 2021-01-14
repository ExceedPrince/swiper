function pageLoad () {
		document.querySelector("body").insertAdjacentHTML("afterbegin", `
		<div class="swiper-container">
			<div class="swiper-wrapper">
			</div>
		<div class="swiper-pagination"></div>
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
		</div>
	`);

	for (let index = 1; index < 11; index++) {
		document.querySelector(".swiper-wrapper").insertAdjacentHTML("beforeend", `
			<div class="swiper-slide"><img src="/img/${index}.jpg"></div>
		`);;
	}
	
	let mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		speed: 400,
		spaceBetween: 100,
		
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
};

window.addEventListener("load", pageLoad);