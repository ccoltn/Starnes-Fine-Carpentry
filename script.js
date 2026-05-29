let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index) {

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides[currentSlide].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

showSlide(currentSlide);


