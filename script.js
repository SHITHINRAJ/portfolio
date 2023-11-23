// Add this to your script.js file
let currentSlide = 0;

function moveSlider(direction) {
  const slider = document.querySelector('.slider');
  const totalSlides = document.querySelectorAll('.slide').length;

  if (direction === 'next' && currentSlide < totalSlides - 1) {
    currentSlide++;
  } else if (direction === 'prev' && currentSlide > 0) {
    currentSlide--;
  }

  const slideWidth = document.querySelector('.slide').offsetWidth;
  const newTransformValue = -currentSlide * slideWidth + 'px';
  slider.style.transform = 'translateX(' + newTransformValue + ')';
}


// Add this to your script.js file
$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2, // Show two slides at a time
    slidesToScroll: 1,
    adaptiveHeight: true,
    // Add any other Slick Carousel options you want
  });
});


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
