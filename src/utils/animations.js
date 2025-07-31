// src/utils/animations.js

export const fadeIn = (element, duration = 500) => {
  if (!element) return;
  element.style.opacity = 0;
  element.style.transition = `opacity ${duration}ms`;
  requestAnimationFrame(() => {
    element.style.opacity = 1;
  });
};

export const slideInFromLeft = (element, duration = 500) => {
  if (!element) return;
  element.style.transform = 'translateX(-100%)';
  element.style.transition = `transform ${duration}ms ease-out`;
  requestAnimationFrame(() => {
    element.style.transform = 'translateX(0)';
  });
};

// Automatically slides through story cards every 3 seconds

export const autoSlideStories = () => {
  const slides = document.querySelectorAll('.storyCard');
  if (!slides.length) return; // Guard against empty NodeList
  let current = 0;
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
  });
  setInterval(() => {
    slides[current].style.display = 'none';
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].style.display = 'block';
    slides[current].classList.add('active');
  }, 3000);
};


