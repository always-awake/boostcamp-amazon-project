import { carouselList } from './carouselList';

const carousel = () => {
  return `<div class="carousel">
    <div class="carousel__button prev">
      <div class="button">
        <img src="../images/mini_carousel_arrow_left.png" alt="">
      </div>
    </div>
    ${carouselList()}
    <div class="carousel__button next">
    <div class="button">
      <img src="../images/mini_carousel_arrow_right.png" alt="">
    </div>  
    </div>
  </div>`;
};

export {
  carousel,
};
