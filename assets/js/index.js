/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
	  navToggle = document.getElementById('nav-toggle'),
	  navClose = document.getElementById('nav-close')

/* menu show*/

if(navToggle){
	navToggle.addEventListener('click',() =>{
		navMenu.classList.add('show-menu')
	})
}

/* menu hidden*/

if(navClose){
	navClose.addEventListener('click',() =>{
		navMenu.classList.remove('show-menu')
	})
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')
	console.log('Link clicked, closing menu')
	navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
	const bgHeader = () => {
	const header = document.getElementById('header');

	window.scrollY >= 50
		? header.classList.add('bg-header')
		: header.classList.remove('bg-header');
}
window.addEventListener('scroll', bgHeader);
bgHeader()
/*=============== SWIPER SERVICES ===============*/ 
 const swiperServices = new Swiper('.services__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

  },
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () =>{
	const scrollup = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
											:scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)
scrollup()

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 58;
    const sectionId = section.getAttribute('id');

    const link = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
	origin: "top",
	distance: "100px",
	duration: 2500,
	delay: 400,
})

sr.reveal(`.home__content`)
sr.reveal(`.home__images`,{origin:'bottom', delay: 1000})
sr.reveal(`.about__images`,{origin:'left'})
sr.reveal(`.about__data`,{origin:'right'})