
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const elements = document.querySelectorAll('.social-icons .fab');


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
        anime({
            targets: elements,
            translateX: 200
          });          
    }, 1000);

}


setTimeout(() => {
    anime({
        targets: elements,
        translateY: -60,
        delay: anime.stagger(150), // increase delay by 100ms for each elements.
        color: "#ff652f",
        });
}, 1500);
setTimeout(() => {
    anime({
        targets: elements,
        translateY: 0,
        delay: anime.stagger(100), // increase delay by 100ms for each elements.
        color: "#fff",
      });
}, 2300);