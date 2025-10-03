const slidesloop = document.querySelectorAll(".slides img");
let slideIndexloop = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slidesloop.length > 0){
        slidesloop[slideIndexloop].classList.add("displaySlide");
        intervalId = setInterval(nextSlideloop, 3000);
    }
}

function showSlideloop(index){
    if(index >= slidesloop.length){
        slideIndexloop = 0;
    }
    else if(index < 0){
        slideIndexloop = slidesloop.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slidesloop[slideIndexloop].classList.add("displaySlide");
}
function nextSlideloop(){
    slideIndexloop++;
    showSlide(slideIndexloop);
}