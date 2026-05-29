document.querySelectorAll(".media-slider").forEach(slider => {
  let current = 0;
  const slides = slider.querySelectorAll(".slide");
  const leftBtn = slider.querySelector(".arrow.left");
  const rightBtn = slider.querySelector(".arrow.right");

  function stopAllVideos() {
    slides.forEach(slide => {
      const vid = slide.querySelector("video");
      if (vid) {
        vid.pause();
      }
    });
  }

  function playActiveVideo(index) {
    const video = slides[index].querySelector("video");

    if (video) {
      video.play().catch(err => {
        console.log("Video play blocked:", err);
      });
    }
  }

  function showSlide(index) {
    stopAllVideos();

    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    playActiveVideo(index);
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

  // optional: play video on first load if first slide has video
  playActiveVideo(0);
});



