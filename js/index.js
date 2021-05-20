"use strict";

window.addEventListener("scroll", Appear);

const items = document.querySelectorAll("div.img > img");
const nbSlide = items.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
let count = 0;

console.log(items, nbSlide, suivant, precedent);

suivant.addEventListener("click", slideSuivante);
precedent.addEventListener("click", slidePrecedente);

function Appear() {
    var drone = document.querySelector(".imagedrone");
    var dronePosition = drone.getBoundingClientRect().top;
    var screenPositionDrone = window.innerHeight / 2;
    if (dronePosition < screenPositionDrone) {
        drone.classList.add("appeardrone");
    } else if (dronePosition > screenPositionDrone) {
        drone.classList.remove("appeardrone");
    }
    var videodrone = document.querySelector(".videodrone");
    var videodronePosition = videodrone.getBoundingClientRect().top;
    var screenvideoDrone = window.innerHeight / 2;
    if (videodronePosition < screenvideoDrone) {
        videodrone.classList.add("appearvideo");
    } else if (videodronePosition > screenvideoDrone) {
        videodrone.classList.remove("appearvideo");
    }
}

function slideSuivante() {
    items[count].classList.remove("active");

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add("active");
}

function slidePrecedente() {
    items[count].classList.remove("active");

    if (count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add("active");
}
