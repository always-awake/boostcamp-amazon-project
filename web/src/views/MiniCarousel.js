import miniCarouselComponent from '../components/mini-carousel/mini-carousel';
import setCarouselEvent from '../setEvents/carouselEvent';
import setAutoSlideEvent from '../setEvents/mini-carousel/autoSlideEvent';

function MiniCarousel(parentDivId) {
  MiniCarousel.miniCarouselArticle = document.getElementById(parentDivId);
}

MiniCarousel.prototype.makeCarousel = () => {
  MiniCarousel.prototype.makeHtml();
  MiniCarousel.prototype.setEvent();
};

MiniCarousel.prototype.makeHtml = () => {
  MiniCarousel.miniCarouselArticle.innerHTML = miniCarouselComponent.miniCarousel();
  MiniCarousel.miniCarousel = MiniCarousel.miniCarouselArticle.querySelector('.mini__carousel');
};

MiniCarousel.prototype.setEvent = () => {
  setCarouselEvent.setCarouselEvent(MiniCarousel.miniCarousel);
  setAutoSlideEvent.setAutoSlideEvent(MiniCarousel.miniCarousel);
};

export default {
  MiniCarousel,
};
