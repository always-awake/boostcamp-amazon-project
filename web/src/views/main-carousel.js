import mainCarousel from '../components/main-carousel/main-carousel';

const makeMainCarousel = () => {
  const mainCarouselArticle = document.getElementById('main_carousel_article');
  mainCarouselArticle.innerHTML = mainCarousel.carousel();
};

export default {
  makeMainCarousel,
};
