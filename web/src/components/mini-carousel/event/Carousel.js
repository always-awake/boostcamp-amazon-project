import { setTransition, setTranslate, setWidth } from '../../../utils/setCss';
import { selectAll, select } from '../../../utils/domSelector';

class Carousel {
  init() {
    this.initCarouselValue();
    this.initCarouselPosition();
    this.setCarouselEvent();
  }

  initCarouselValue() {
    this.miniCarousel = select('.mini__carousel', document);
    this.carouselList = select('.carousel__list', this.miniCarousel);
    this.contents = selectAll('.content', this.carouselList);
    this.contentCount = this.contents.length;
    this.contentWidth = this.contents[0].offsetWidth;
    this.prevBtn = select('.carousel__button.prev', this.miniCarousel);
    this.nextBtn = select('.carousel__button.next', this.miniCarousel);
    this.dummyContentCount = 2;
    this.changeSpeed = 300;
    this.zeroChangeSpeed = 0;
    this.startContentIndex = 0;
    this.activeContentIndex = this.startContentIndex;
    this.activeContent = null;
    this.autoSlideEvent = null;
  }

  initCarouselPosition() {
    setWidth(this.carouselList, this.contentWidth * (this.contentCount + this.dummyContentCount));
    const firstCarousel = this.carouselList.firstElementChild;
    const lastCarousel = this.carouselList.lastElementChild;
    this.carouselList.appendChild(firstCarousel.cloneNode(true));
    this.carouselList.insertBefore(lastCarousel.cloneNode(true), this.carouselList.firstElementChild);
    setTranslate(this.carouselList, -(this.contentWidth * (this.startContentIndex + 1)));
    this.activeContent = this.contents[this.activeContentIndex];
  }

  setCarouselEvent() {
    this.setPrevButtonEvent();
    this.setNextButtonEvent();
    this.setAutoEvent();
  }

  setNextButtonEvent() {
    this.prevBtn.addEventListener('click', () => {
      if (this.activeContentIndex >= this.startContentIndex + 1) {
        setTransition(this.carouselList, this.changeSpeed);
        setTranslate(this.carouselList, -(this.contentWidth * this.activeContentIndex));
      }
      if (this.activeContentIndex === this.startContentIndex) {
        setTimeout(() => {
          setTransition(this.carouselList, this.zeroChangeSpeed);
          setTranslate(this.carouselList, -(this.contentWidth * this.contentCount));
        }, this.changeSpeed);
        this.activeContentIndex = this.contentCount;
      }
      this.activeContent = this.contents[this.activeContentIndex -= 1];
    });
  }

  setPrevButtonEvent() {
    this.nextBtn.addEventListener('click', () => {
      // 1. 마지막 이전 페이지일 경우
      if (this.activeContentIndex <= this.contentCount - 1) {
        setTransition(this.carouselList, this.changeSpeed);
        setTranslate(this.carouselList, -(this.contentWidth * (this.activeContentIndex + 2)));
      }
      // 마지막 페이지일 경우
      if (this.activeContentIndex === this.contentCount - 1) {
        setTimeout(() => {
          setTransition(this.carouselList, this.zeroChangeSpeed);
          setTranslate(this.carouselList, -this.contentWidth);
        }, this.changeSpeed);
        this.activeContentIndex = -1;
      }
      this.activeContent = this.contents[this.activeContentIndex += 1];
    });
  }

  setAutoEvent() {
    this.autoSlideEvent = setInterval(() => {
      this.nextBtn.click();
    }, 3000);
    const carousel = this.miniCarousel.querySelector('.carousel');
    carousel.addEventListener('click', (e) => {
      if (e.isTrusted === true) clearInterval(this.autoSlideEvent);
    });
  }
}

export {
  Carousel,
};
