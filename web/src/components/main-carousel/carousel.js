import carouselList from './carouselList';

const carousel = () => {
  return `<div class="carousel">
    ${carouselList.carouselList()}
    <div class="carousel__arrow left">
      <div class="arrow__button">
        <img src="../images/main_carousel_arrow_left.png" alt="">
      </div>
    </div>
    <div class="carousel__arrow right">
    <div class="arrow__button">
      <img src="../images/main_carousel_arrow_right.png" alt="">
    </div>  
    </div>
  </div>`;
};

export default {
  carousel,
};
