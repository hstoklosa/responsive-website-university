const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
const image = document.getElementById('gallery-image');

const burgerBtn = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-navbar');

const images = [
    { src: "./images/gallery-1.jpeg" },
    { src: "./images/gallery-2.jpeg" },
    { src: "./images/gallery-3.jpeg" },
    { src: "./images/gallery-4.jpeg" },
    { src: "./images/gallery-5.jpeg" },
    { src: "./images/gallery-6.jpeg" },
    { src: "./images/gallery-7.jpeg" },
    { src: "./images/gallery-8.jpeg" },
    { src: "./images/gallery-9.jpeg" }
];

let imgIndex = 1;

const setImage = (idx) => {
    image.src = `./images/gallery-${idx}.jpeg`
}

// Event Handlers

burgerBtn.addEventListener('click', () => {
    const active = mobileNav.classList.contains('active') ? true : false;

    if (!active) {
        mobileNav.classList.add('active');
    } else {
        mobileNav.classList.remove('active')
    }
});

nextBtn.addEventListener('click', () => {
    if (imgIndex == 9) {
        imgIndex = 1;
    } else { imgIndex++; }

    return setImage(imgIndex);
});

previousBtn.addEventListener('click', () => {
    if (imgIndex == 1) {
        imgIndex = 9;
    } else { imgIndex--; }

    return setImage(imgIndex);
});

window.addEventListener('load', () => {
    return setImage(imgIndex);
});


