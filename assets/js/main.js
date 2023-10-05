/* ===== Strict mode ===== */
"use strict"

/* ===== Header ===== */
const cartIcon = document.getElementById("cart")
const cartContainer = document.querySelector(".shopping-container")
const userIcon = document.getElementById("user")
const form = document.querySelector(".form")

cartIcon.addEventListener("click", function() {
    cartContainer.classList.toggle("active")
    form.classList.remove("active")
    navBar.classList.remove("active")
    menuIcon.classList.remove("fa-times")
})

userIcon.addEventListener("click", function() {
    form.classList.toggle("active")
    cartContainer.classList.remove("active")
    navBar.classList.remove("active")
    menuIcon.classList.remove("fa-times")
})

/* ===== Responsive menu ===== */
const menuIcon = document.getElementById("menu-icon")
const navBar = document.querySelector(".navbar")

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("active")
    this.classList.toggle("fa-times")
    cartContainer.classList.remove("active")
    form.classList.remove("active")
})

window.addEventListener("scroll", function() {
    cartContainer.classList.remove("active")
    form.classList.remove("active")
    navBar.classList.remove("active")
    menuIcon.classList.remove("fa-times")
})

/* ===== Home section ===== */
function homeSwiper() {
    const homeSlider = document.querySelector(".home-slider")
    if(homeSlider) {
        new Swiper(homeSlider, {
            autoplay: {
                delay: 7500,
                disableOnInteraction: false
            },
            grabCursor: true,
            centeredSlides: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        })
    }
}
homeSwiper()

/* ===== Menu section ===== */
function menuSwiper() {
    const menuSlider = document.querySelector(".menu-slider")
    if(menuSlider) {
        new Swiper(menuSlider, {
            grabCursor: true,
            autoHeight: true,
            centeredSlides: true,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        })
    }
}
menuSwiper()

const menuContainer = document.querySelector(".menu-preview-container")
const menuBoxs = document.querySelectorAll(".menu-box")
const menuPreviews = document.querySelectorAll(".menu-preview")
const closeIcon = document.getElementById("close")

menuBoxs.forEach((menu) => {
    menu.addEventListener("click", function() {
        menuContainer.style.display = "flex"
        const name = menu.getAttribute("data-name")
        menuPreviews.forEach((preview) => {
            const target = preview.getAttribute("data-target")
            if(name === target) {
                preview.classList.add("active")
            }
        })
    })
})

if(closeIcon) {
    closeIcon.addEventListener("click", function() {
        menuContainer.style.display = "none"
        menuPreviews.forEach((preview) => {
            preview.classList.remove("active")
        })
    })
}