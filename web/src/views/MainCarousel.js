import mainCarouselHtml from '../components/main-carousel/main-carousel';
import Cards from '../events/main-carousel/Cards';
import Carousel from '../events/main-carousel/Carousel';

class MainCarousel {
  constructor(parentDivId) {
    this.miniCarouselArticle = document.getElementById(parentDivId);
    this.mainCarouseHtml = mainCarouselHtml.mainCarousel();
    this.makeMainCarouselHtml();
    this.cards = new Cards.Cards();
    this.carousel = new Carousel.Carousel(this.cards);
    this.cards.setCarousel(this.carousel);
  }

  makeMainCarouselHtml() {
    this.miniCarouselArticle.innerHTML = this.mainCarouseHtml;
  }
}

export default {
  MainCarousel,
};
