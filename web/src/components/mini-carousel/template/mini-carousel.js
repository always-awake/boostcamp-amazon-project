import carouselComponent from './carousel';

const miniCarousel = () => {
  return `<div class="mini__carousel">
      <div class="carousel__wrapper">
        ${carouselComponent.carousel()}
      </div>
      <div class="mini__carousel__text">
        <div class="text__title">
          Amazon Originals,<br>
          exclusively on Prime Video
        </div>
        <div class="text__content">
          Prime Video is the only place where you can watch Amazon<br>
          Original series like "The Marvelous Mrs. Maisel", "Tom Clancy's<br>
          Jack Ryan", "Homecoming", and "The Man in the High Castle".<br>
        </div>
        <div class="text__link">
          <a href="">Explore Prime Video <img src="../images/mini_carousel_text_link_arrow.png" alt=""></a>
        </div>
      </div>
    </div>`;
};


export default {
  miniCarousel,
};
