import miniCarouselComponent from '../components/mini-carousel/mini-carousel';
import setCarouselEvent from '../setEvents/carouselEvent';
import setAutoSlideEvent from '../setEvents/mini-carousel/autoSlideEvent';

const makeMiniCarousel = () => {
  const miniCarouselArticle = document.getElementById('mini_carousel_article');
  miniCarouselArticle.innerHTML = miniCarouselComponent.miniCarousel();

  const miniCarousel = miniCarouselArticle.querySelector('.mini__carousel');
  setCarouselEvent.setCarouselEvent(miniCarousel);
  setAutoSlideEvent.setAutoSlideEvent(miniCarousel);
};

export default {
  makeMiniCarousel,
};
