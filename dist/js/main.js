
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll("menu-nav__item");
const preloader = document.querySelector(".demo-content");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItems.forEach(item => item.classList.add("open"));

        showMenu = true;
    } else {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItems.forEach(item => item.classList.remove("open"));


        showMenu = false;
    }
}


window.onload = function () {
    setTimeout(() => {
        preloader.classList.add("open");
    }, 3000);
    setTimeout(() => {
        preloader.classList.add("close");
    }, 3500);
}

anime({
    targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
    points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
    baseFrequency: 0,
    scale: 1,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutExpo'
});