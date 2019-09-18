const carouselContent = (num) => {
  return `<div class="carousel__content">
    <div class="content__img"></div>
    <div class="content__text">
    <div class="text__tag"></div>
    <div class="text__title">${num}</div>
    <div class="text__subtitle"></div>
    <div class="text__explore__link"></div>
    </div>
</div>`;
};

const carouselList = () => {
  return `<div class="carousel__list">
  ${carouselContent(1)}
  ${carouselContent(2)}
  ${carouselContent(3)}
</div>`;
};

export default {
  carouselList,
};
