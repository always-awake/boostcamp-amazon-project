import { mainData } from '../../../assets/main-carousel-data';

const carouselContent = ({ imgUrl, tagContent, tagColor, title, content, link, linkTitle }) => {
  return `<div class="content" style="background-image: url(${imgUrl})">
        <div class="text__tag">
          <div class="tag__text" style="background: ${tagColor};">
           ${tagContent}
          </div>
        </div>
        <div class="text__title">
          ${title}
        </div>
        <div class="text__content">
          ${content}
        </div>
        <div class="text__link">
          <a href="${link}"> ${linkTitle} <img src="../images/mini_carousel_text_link_arrow.png" alt=""></a>
        </div>
      </div>`;
};

const contentsHtml = () => {
  let contentsHtml = '';
  for (let key of Object.keys(mainData)) {
    for (let data of mainData[key]['data']) {
      contentsHtml += `
      ${carouselContent(data)}
      `
    }
  }
  return contentsHtml;
};

const carouselList = () => {
  return `<div class="carousel__list">
  ${contentsHtml()}
</div>`;
};


export default {
  carouselList,
};
