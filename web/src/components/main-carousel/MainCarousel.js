import './sass/main-carousel.sass';
import mainCarouselHtml from './template/main-carousel';
import { Cards } from './event/Cards';
import { Carousel } from './event/Carousel';
import { select } from '../../utils/domSelector';


class MainCarousel {
  constructor(parentDivId) {
    this.miniCarouselArticle = document.getElementById(parentDivId);
    this.mainCarouseHtml = null;
  }

  init() {
    this.mainCarouseHtml = mainCarouselHtml.mainCarousel();
    this.render();

    this.cards = new Cards();
    this.cards.init();

    this.carousel = new Carousel(this.cards);
    this.cards.setCarousel(this.carousel);
    this.carousel.init();
  }

  render() {
    this.miniCarouselArticle.innerHTML = this.mainCarouseHtml;
    const firstDot = select('.dot', this.miniCarouselArticle);
    firstDot.classList.add('dot__selected')
  }
}

export {
  MainCarousel,
};
