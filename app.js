const images = [
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen10.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen9.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen8.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen7.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen6.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen5.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen4.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen3.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen2.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen1.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/Queen-of-Smiles.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/Local-Coop.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/Kraekan-Cyclops.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/Archer-Monk.jpg",
    "https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/The-Unspeakable-Deep.jpg"
]
const leftArrow = document.querySelector(".fa-chevron-left");
const rightArrow = document.querySelector(".fa-chevron-right");
const menuBtn = document.querySelector(".menu");
const overlay = document.querySelector(".slide-overlay");
const xBtn = document.querySelector(".fa-times");
const select = document.querySelector(".images");
const playBtn = document.querySelector(".fa-play");
const btn = document.querySelector(".play");
let index = 1;

playBtn.addEventListener("click", pauseImg);
leftArrow.addEventListener("click", switchLeft);
rightArrow.addEventListener("click", switchRight);
menuBtn.addEventListener("click", addOverlay);

function pauseImg(event) {
    const pauseBtn = `<i class="fas fa-pause"></i>`;
    
    if (btn.hasChildNodes()) {
        const i = document.createElement("i");
        
        event.target.remove();
        btn.appendChild(i);
        i.innerHTML = pauseBtn;
        i.addEventListener("click", playImg);
        clearInterval(imageChange) // FIX THIS LAST THING THEN DONE
    }
}

function playImg(event) {
    const playBtn = `<i class="fas fa-play"></i>`;
    
    if (btn.hasChildNodes()) {
        const i = document.createElement("i");
        
        event.target.parentElement.remove();
        btn.appendChild(i);
        i.innerHTML = playBtn;
        i.addEventListener("click", pauseImg);
        imageChange = setInterval(imageSlider, 4500);
    }
}

function menuRemove() {
    const menuOverlay = document.querySelector(".nav-overlay");

    menuOverlay.style.display = "none";
}

function addOverlay() {
    const menuOverlay = document.querySelector(".nav-overlay");

    menuOverlay.style.width = "300px";
    menuOverlay.style.padding = "1rem";
    menuOverlay.style.display = "block";
    xBtn.addEventListener("click", menuRemove);
}

function switchLeft() {
    if (index == 1) {
        index = 10
    } else {
        index--; 
    }
    select.src = `https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen${index}.jpg`

}

function switchRight() {
    if (index == 10) {
        index = 1;
    } else {
        index++
    }
    select.src = `https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen${index}.jpg`
}

function image() {
    if (index == 10) {
        index = 1
    } else {
        index++; 
    }
    select.src = `https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen${index}.jpg`
}

function imageSlider() {
    if (index == 10) {
        index = 1
    } else {
        index++; 
    }
    select.src = `https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen${index}.jpg`
}

let imageChange = setInterval(() => {
    if (index == 10) {
        index = 1
    } else {
        index++; 
    }
    select.src = `https://ska-studios.com/ska-wp/wp-content/uploads/2016/03/screen${index}.jpg`
}, 4500)