import mainCarouselComponent from '../components/main-carousel/main-carousel';
import setCarouselEvent from '../setEvents/carouselEvent';
import setCardsEvent from '../setEvents/main-carousel/cardEvent';

class MainCarousel {
  constructor(parentDivId) {
    this.mainCarouselArticle = document.getElementById(parentDivId);
  }

  makeCarousel() {
    this.makeHtml();
    this.setEvent();
  }

  makeHtml() {
    this.mainCarouselArticle.innerHTML = mainCarouselComponent.mainCarousel();
  }

  setEvent() {
    const mainCarousel = this.mainCarouselArticle.querySelector('.main__carousel');
    setCarouselEvent.setCarouselEvent(mainCarousel);
    setCardsEvent.setCardsEvent();
  }
}

export default {
  MainCarousel,
};
