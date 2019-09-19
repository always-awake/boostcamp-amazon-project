let autoSlideEvent;

const setAutoSlideEvent = (miniCarousel) => {
  const carouselArrowRight = miniCarousel.querySelector('.carousel__arrow.right');
  autoSlideEvent = setInterval(() => {
    carouselArrowRight.click();
  }, 3000);
  const carousel = miniCarousel.querySelector('.mini__carousel__carousel');
  carousel.addEventListener('click', (e) => {
    if (e.isTrusted === true) clearInterval(autoSlideEvent);
  });
};

export default {
  setAutoSlideEvent,
};
