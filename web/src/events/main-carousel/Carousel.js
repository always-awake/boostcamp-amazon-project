class Carousel {
  constructor(cards) {
    this.cards = cards;
    this.mainCarousel = document.querySelector('.main__carousel');
    this.carouselList = this.mainCarousel.querySelector('.carousel__list');
    this.carouselContents = this.carouselList.querySelectorAll('.carousel__content');
    this.carouseArrowlLeft = this.mainCarousel.querySelector('.carousel__arrow.left');
    this.carouselArrowRight = this.mainCarousel.querySelector('.carousel__arrow.right');
    this.cardDots = this.mainCarousel.querySelectorAll('.pagination__dot');
    this.carouselLength = this.carouselContents.length;
    this.carouselWidth = this.carouselContents[0].offsetWidth;
    this.carouselChangeSpeed = 300;
    this.startIndex = 0;
    this.currentIndex = this.startIndex;
    this.currentCarousel = null;
    this.previousDot = null;
    this.setCarouselEvent();
  }

  setCarouselEvent() {
    this.carouselList.style.width = `${this.carouselWidth * (this.carouselLength + 2)}px`;
    const firstCarousel = this.carouselList.firstElementChild;
    const lastCarousel = this.carouselList.lastElementChild;
    const clonedFirstCarousel = firstCarousel.cloneNode(true);
    const clonedLastCarousel = lastCarousel.cloneNode(true);
    this.carouselList.appendChild(clonedFirstCarousel);
    this.carouselList.insertBefore(clonedLastCarousel, this.carouselList.firstElementChild);
    this.carouselList.style.transform = `translate3d(-${(this.carouselWidth * (this.startIndex + 1))}px, 0px, 0px)`;
    this.currentCarousel = this.carouselContents[this.currentIndex];
    this.setPrevButton();
    this.setNextButton();
  }

  setPrevButton() {
    this.carouseArrowlLeft.addEventListener('click', () => {
      if (this.currentIndex >= 0) {
        this.carouselList.style.transition = `${this.carouselChangeSpeed}ms`;
        this.carouselList.style.transform = `translate3d(-${(this.carouselWidth * this.currentIndex)}px, 0px, 0px)`;
      }
      if (this.currentIndex === 0) {
        setTimeout(() => {
          this.carouselList.style.transition = '0ms';
          this.carouselList.style.transform = `translate3d(-${(this.carouselWidth * this.carouselLength)}px, 0px, 0px)`;
        }, this.carouselChangeSpeed);
        this.currentIndex = this.carouselLength;
      }
      // before
      if (this.currentIndex !== this.carouselLength) {
        this.previousDot = this.cardDots[this.currentIndex];
      } else {
        this.previousDot = this.cardDots[this.carouselLength - this.currentIndex];
      }
      const serviceCardWrapper = this.previousDot.parentNode.parentNode;
      const previousClickedCard = serviceCardWrapper.querySelector('.service__card');
      this.previousDot.classList.remove('pagination__dot__selected');
      previousClickedCard.classList.remove('card__selected');
      this.cards.setPreviousClickedCard(previousClickedCard);
      serviceCardWrapper.classList.remove('card__selected');

      this.currentCarousel = this.carouselContents[this.currentIndex -= 1];

      // after
      const currentDot = this.cardDots[this.currentIndex];
      const currentDotList = currentDot.parentNode;
      const currentServiceCard = currentDotList.parentNode.querySelector('.service__card');
      currentDotList.classList.add('card__pagination_dot_list__selected');
      currentDot.classList.add('pagination__dot__selected');
      currentServiceCard.classList.add('card__selected');
      this.cards.setEventTargetCard(currentServiceCard);
    });
  }

  setNextButton() {
    this.carouselArrowRight.addEventListener('click', () => {
      if (this.currentIndex <= this.carouselLength - 1) {
        this.carouselList.style.transition = `${this.carouselChangeSpeed}ms`;
        this.carouselList.style.transform = `translate3d(-${(this.carouselWidth * (this.currentIndex + 2))}px, 0px, 0px)`;
      }
      if (this.currentIndex === this.carouselLength - 1) {
        setTimeout(() => {
          this.carouselList.style.transition = '0ms';
          this.carouselList.style.transform = `translate3d(-${this.carouselWidth}px, 0px, 0px)`;
        }, this.carouselChangeSpeed);
        this.currentIndex = -1;
      }
      if (this.currentIndex !== -1) {
        this.previousDot = this.cardDots[this.currentIndex];
      } else {
        this.previousDot = this.cardDots[this.carouselLength - 1];
      }
      const serviceCardWrapper = this.previousDot.parentNode.parentNode;
      const previousClickedCard = serviceCardWrapper.querySelector('.service__card');
      this.previousDot.classList.remove('pagination__dot__selected');
      previousClickedCard.classList.remove('card__selected');
      this.cards.setPreviousClickedCard(previousClickedCard);
      serviceCardWrapper.classList.remove('card__selected');

      this.currentCarousel = this.carouselContents[this.currentIndex += 1];

      // after
      const currentDot = this.cardDots[this.currentIndex];
      const currentDotList = currentDot.parentNode;
      const currentServiceCard = currentDotList.parentNode.querySelector('.service__card');
      currentDotList.classList.add('card__pagination_dot_list__selected');
      currentDot.classList.add('pagination__dot__selected');
      currentServiceCard.classList.add('card__selected');
      this.cards.setEventTargetCard(currentServiceCard);
    });
  }

  setCarouselByIndex(dotIndex) {
    this.currentIndex = dotIndex;
    this.currentCarousel = this.carouselList.querySelectorAll('.carousel__content')[this.currentIndex + 1];
    this.carouselList.style.transition = `${this.carouselChangeSpeed}ms`;
    this.carouselList.style.transform = `translate3d(-${this.carouselWidth * (dotIndex + 1)}px, 0px, 0px)`;
  }
}

export default {
  Carousel,
};
