const slides = document.querySelectorAll(".slidesImg img" );
const slidesW = document.querySelectorAll(".words p" );;
let slideIndex = 0;


const slidesloop = document.querySelectorAll(".slides img");
let slideIndexloop = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        slidesW[slideIndex].classList.add("displayWord");
        slidesB[slideIndex].classList.add("displayWord");
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide" );
    });
    slides[slideIndex].classList.add("displaySlide" );

    slidesW.forEach(slide => {
        slide.classList.remove("displayWord" );
    });
    slidesW[slideIndex].classList.add("displayWord" );

}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
function prevSlide(){
    
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}