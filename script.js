document.querySelectorAll(".media-slider").forEach(slider => {
  let current = 0;
  const slides = slider.querySelectorAll(".slide");
  const leftBtn = slider.querySelector(".arrow.left");
  const rightBtn = slider.querySelector(".arrow.right");

  function showSlide(index) {
    slides.forEach(slide => {
      slide.classList.remove("active");

      // PAUSE any video inside every slide
      const video = slide.querySelector("video");
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    slides[index].classList.add("active");

    // PLAY video if present in active slide
    const activeVideo = slides[index].querySelector("video");
    if (activeVideo) {
      activeVideo.play();
    }
  }

  leftBtn.addEventListener("click", () => {
    current--;
    if (current < 0) current = slides.length - 1;
    showSlide(current);
  });

  rightBtn.addEventListener("click", () => {
    current++;
    if (current >= slides.length) current = 0;
    showSlide(current);
  });
});


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
