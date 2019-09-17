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

const carouselContents = () => {
  return `<div class="carousel__contents">
  ${carouselContent(1)}

</div>`;
};

export default {
  carouselContents,
};
