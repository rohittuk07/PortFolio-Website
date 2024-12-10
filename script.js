let hamburger = document.querySelector(".fa-bars")
let crossIcon = document.querySelector("fa-xmark")

let sideNav = document.getElementById("slider-navbar")


function showSlider() {
    sideNav.style.left = "0"
}
function hideSlider() {
    sideNav.style.left = "-100%"
}