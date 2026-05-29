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

// Pause all videos
document.querySelectorAll('.slide video').forEach(video => {
  video.pause();
  video.currentTime = 0;
});

// Play video in active slide (if there is one)
const activeSlide = document.querySelector('.slide.active');
const activeVideo = activeSlide.querySelector('video');

if (activeVideo) {
  activeVideo.play();
}

activeVideo.addEventListener('ended', () => {
  changeSlide(1);
});

