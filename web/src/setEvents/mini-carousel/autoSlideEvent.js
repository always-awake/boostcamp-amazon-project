let autoSlideEvent;

const setAutoSlideEvent = (miniCarousel) => {
  const carouselArrowRight = miniCarousel.querySelector('.carousel__arrow.right');
  const carouselArrowLeft = miniCarousel.querySelector('.carousel__arrow.left');
  autoSlideEvent = setInterval(() => {
    carouselArrowRight.click();
  }, 3000);
  carouselArrowRight.addEventListener('click', (e) => {
    if (e.isTrusted === true) clearInterval(autoSlideEvent);
  });
  carouselArrowLeft.addEventListener('click', (e) => {
    if (e.isTrusted === true) clearInterval(autoSlideEvent);
  });
};

export default {
  setAutoSlideEvent,
};
