import miniCarouselComponent from '../components/mini-carousel/mini-carousel';
import Carousel from '../events/mini-carousel/Carousel';

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
  const carousel = new Carousel.Carousel();
};

export default {
  MiniCarousel,
};
