const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let current = 0;

function updateSlider(index) {
  current = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === current);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });
}

prevBtn.addEventListener('click', () => updateSlider(current - 1));
nextBtn.addEventListener('click', () => updateSlider(current + 1));

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => updateSlider(i));
});

setInterval(() => updateSlider(current + 1), 4000);
