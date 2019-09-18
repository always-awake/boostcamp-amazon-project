import mainCarousel from '../components/main-carousel/main-carousel';
import setCarouselEvent from '../setEvents/main-carousel/carouselEvent';

const makeMainCarousel = () => {
  const mainCarouselArticle = document.getElementById('main_carousel_article');
  mainCarouselArticle.innerHTML = mainCarousel.carousel();
  setCarouselEvent.setCarouselEvent();
};

export default {
  makeMainCarousel,
};
