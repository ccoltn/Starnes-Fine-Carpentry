let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));

  slides[index].classList.add("active");
}

function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}


function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + direction + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");

  // Pause all videos
  document.querySelectorAll("video").forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  // Play video in active slide
  const activeVideo = slides[currentSlide].querySelector("video");
  if (activeVideo) {
    activeVideo.play();
  }
}
