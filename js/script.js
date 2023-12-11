/* Menu Icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });
});

/* Sticky Navbar */
let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
});

/* Remove Menu Icon Navbar When Click Navbar Link (Scroll) */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

/* Swiper */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* Dark/Light Mode */
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.addEventListener('click', () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});


/* Bounce-In Animation on Scroll */
const timelineBlocks = $('.cd-timeline-block');

// Hide timeline blocks initially
timelineBlocks.each(function() {
    if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
        $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    }
});

// On scrolling, show/animate timeline blocks when entering the viewport
$(window).on('scroll', function() {
    timelineBlocks.each(function(index) {
        const isEven = index % 2 === 0; // Check if the index is even
        const elements = $(this).find('.cd-timeline-img, .cd-timeline-content');

        if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && elements.hasClass('is-hidden')) {
            elements.removeClass('is-hidden').addClass(isEven ? 'bounce-in' : 'bounce-in-inverse');
        }
    });




});

