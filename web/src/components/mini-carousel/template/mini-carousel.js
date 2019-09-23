import { carousel } from './carousel';
import { carouselText } from './carouselText';

const miniCarousel = () => {
  return `<div class="mini__carousel">
      <div class="carousel__wrapper">
        ${carousel()}
      </div>
      <div class="mini__carousel__text">
        ${carouselText()}
      </div>
    </div>`;
};


export {
  miniCarousel,
};
