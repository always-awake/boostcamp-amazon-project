import cardsComponent from './cards';
import carouselComponent from './carousel';

const mainCarousel = () => {
  return `<div class="main__carousel">
          ${cardsComponent.cards()}
          ${carouselComponent.carousel()}
          </div>`;
};

export default {
  mainCarousel,
};
