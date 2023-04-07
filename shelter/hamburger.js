//...........hamburger menu........... //

const body = document.querySelector("body");
const blackout = document.querySelector(".blackout");
const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");
const link = document.querySelectorAll(".navigation .link a");

hamburger.addEventListener("click", function toggleMenu() {
    body.classList.toggle("scroll-no");
    hamburger.classList.toggle("hamburger_move");
    navigation.classList.toggle("navigation_show");
    blackout.classList.toggle("blackout-yes");
})

function closeMenu() {
    body.classList.remove("scroll-no");
    hamburger.classList.remove("hamburger_move");
    navigation.classList.remove("navigation_show");
    blackout.classList.remove("blackout-yes");
}

blackout.addEventListener("click", closeMenu);
for (let a of link) {
    a.addEventListener("click", closeMenu);
}
//...........hamburger menu........... //