import { miniData } from '../../../assets/mini-carousel-data';

const carouselContent = ({ imgUrl }) => {
  return `
  <img class="content" src="${imgUrl}" alt="">
  `;
};

const contentsHtml = () => {
  let contentsHtml = '';
  for (let data of miniData['CAROUSEL']) {
    contentsHtml += carouselContent(data);
  }
  return contentsHtml;
};

const carouselList = () => {
  return `<div class="carousel__list">
            ${contentsHtml()}
          </div>`;
};

export {
  carouselList,
};
