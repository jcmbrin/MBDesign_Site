document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".before-after");
  if (!container) return;
  const slider = container.querySelector(".comparison-slider");
  const handle = container.querySelector(".comparison-handle");
  const afterImage = container.querySelector(".comparison-after");

  let isDragging = false;

  function updateSlider(clientX) {
    const rect = slider.getBoundingClientRect();
    let position = ((clientX - rect.left) / rect.width) * 100;
    position = Math.max(0, Math.min(100, position));

    handle.style.left = position + "%";
    afterImage.style.clipPath = `inset(0 0 0 ${position}%)`;
  }

  handle.addEventListener("mousedown", function (e) {
    isDragging = true;
    e.preventDefault();
  });

  document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  handle.addEventListener("touchstart", function (e) {
    isDragging = true;
    e.preventDefault();
  });

  document.addEventListener("touchmove", function (e) {
    if (!isDragging) return;
    const touch = e.touches[0];
    updateSlider(touch.clientX);
  });

  document.addEventListener("touchend", function () {
    isDragging = false;
  });

  slider.addEventListener("click", function (e) {
    if (e.target === handle || handle.contains(e.target)) return;
    updateSlider(e.clientX);
  });
});
