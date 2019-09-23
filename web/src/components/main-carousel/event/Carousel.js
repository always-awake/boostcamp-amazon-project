import { setTransition, setTranslate, setWidth } from '../../../utils/setCss';
import { selectAll, select } from '../../../utils/domSelector';

class Carousel  {
  constructor(cards) {
    this.cards = cards;
  }

  init() {
    this.initCarouselValue();
    this.initCarouselPosition();
  }

  initCarouselValue() {
    this.mainCarousel = select('.main__carousel', document);
    this.carouselList = select('.carousel__list', this.mainCarousel);
    this.contents = selectAll('.content', this.carouselList);
    this.contentCount = this.contents.length;
    this.contentWidth = this.contents[0].offsetWidth;
    this.prevBtn = select('.carousel__button.prev', this.mainCarousel);
    this.nextBtn = select('.carousel__button.next', this.mainCarousel);
    this.dummyContentCount = 2;
    this.changeSpeed = 300;
    this.zeroChangeSpeed = 0;
    this.startContentIndex = 0;
    this.activeContentIndex = this.startContentIndex;
    this.activeContent = null;
  }

  initCarouselPosition() {
    setWidth(this.carouselList, this.contentWidth * (this.contentCount + this.dummyContentCount));
    const firstContent = this.carouselList.firstElementChild;
    const lastContent = this.carouselList.lastElementChild;
    this.carouselList.appendChild(firstContent.cloneNode(true));
    this.carouselList.insertBefore(lastContent.cloneNode(true), this.carouselList.firstElementChild);
    setTranslate(this.carouselList, -(this.contentWidth * (this.startContentIndex + 1)));
    this.activeContent = this.contents[this.activeContentIndex];
    this.setCarouselEvent()
  }

  setCarouselEvent() {
    this.setPrevButtonEvent();
    this.setNextButtonEvent();
  }

  setPrevButtonEvent() {
    this.prevBtn.addEventListener('click', () => {
      // 1. 첫 번째 페이지 이상일 경우
      if (this.activeContentIndex >= this.startContentIndex) {
        setTransition(this.carouselList, this.changeSpeed);
        setTranslate(this.carouselList, -1 * (this.contentWidth * this.activeContentIndex));
      }
      // 2. 첫 번째 페이지일 경우
      if (this.activeContentIndex === this.startContentIndex) {
        setTimeout(() => {
          setTransition(this.carouselList, this.zeroChangeSpeed);
          setTranslate(this.carouselList, -(this.contentWidth * this.contentCount));
        }, this.changeSpeed);
        this.activeContentIndex = this.contentCount;
      }
      this.cards.setPrevActiveByIndex(this.activeContentIndex);
      this.activeContent = this.contents[this.activeContentIndex -= 1];
      this.cards.activateCard(this.activeContentIndex)
    });
  }

  setNextButtonEvent() {
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

      this.cards.setPrevActiveByIndex(this.activeContentIndex); // Dot과 Card 설정
      this.activeContent = this.contents[this.activeContentIndex += 1];
      this.cards.activateCard(this.activeContentIndex)
    });
  }

  setContentByIndex(dotIndex) {
    this.activeContent = this.carouselList.querySelectorAll('.content')[dotIndex + 1];
    this.activeContentIndex = dotIndex;
    setTransition(this.carouselList, this.changeSpeed);
    setTranslate(this.carouselList, -this.contentWidth * (dotIndex + 1));
  }
}

export {
  Carousel,
};
