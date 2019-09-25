import { miniData } from '../../../assets/mini-carousel-data';

const carouselText = () => {
  return `<div class="text__title">
          ${miniData['CONTENT']['title']}
        </div>
        <div class="text__content">
          ${miniData['CONTENT']['text']}
        </div>
        <div class="text__link">
          <a href="">${miniData['CONTENT']['link_title']} <img src="../images/mini_carousel_text_link_arrow.png" alt=""></a>
        </div>`
};

export {
  carouselText
}