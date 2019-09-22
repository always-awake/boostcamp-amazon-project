const carouselContent = (num) => {
  return `<div class="content">
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
  ${carouselContent(4)}
  ${carouselContent(5)}
  ${carouselContent(6)}
  ${carouselContent(7)}
  ${carouselContent(8)}
  ${carouselContent(9)}
  ${carouselContent(10)}
  ${carouselContent(11)}
  ${carouselContent(12)}
  ${carouselContent(13)}
  ${carouselContent(14)}
  ${carouselContent(15)}
  ${carouselContent(16)}
  ${carouselContent(17)}
</div>`;
};

export default {
  carouselList,
};
