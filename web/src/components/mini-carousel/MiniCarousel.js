import miniCarouselComponent from './template/mini-carousel';
import { Carousel } from './event/Carousel';

class MiniCarousel {
  constructor(parentDivId) {
    this.articleTag = document.getElementById(parentDivId);
    this.miniCarouseHtml = null;
  }

  init() {
    this.miniCarouseHtml = miniCarouselComponent.miniCarousel();
    this.render();
    const carousel = new Carousel();
    carousel.init();
  }

  render() {
    this.articleTag.innerHTML = this.miniCarouseHtml;
  }
}

export {
  MiniCarousel,
};
