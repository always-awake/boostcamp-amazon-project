import miniCarousel from '../components/mini-carousel/mini-carousel';
// import setCarouselEvent from '../setEvents/main-carousel/carouselEvent';

const makeMiniCarousel = () => {
  const mainCarouselArticle = document.getElementById('mini_carousel_article');
  mainCarouselArticle.innerHTML = miniCarousel.miniCarousel();
  // setCarouselEvent.setCarouselEvent();
};

export default {
  makeMiniCarousel,
};
