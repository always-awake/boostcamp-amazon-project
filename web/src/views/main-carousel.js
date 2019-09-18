import mainCarouselComponent from '../components/main-carousel/main-carousel';
import setCarouselEvent from '../setEvents/carouselEvent';

const makeMainCarousel = () => {
  const mainCarouselArticle = document.getElementById('main_carousel_article');
  mainCarouselArticle.innerHTML = mainCarouselComponent.mainCarousel();

  const mainCarousel = mainCarouselArticle.querySelector('.main__carousel');
  setCarouselEvent.setCarouselEvent(mainCarousel);
};

export default {
  makeMainCarousel,
};
