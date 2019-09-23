class Cards {
  init() {
    this.carousel = null;
    this.dots = document.querySelectorAll('.dot');
    this.cards = document.querySelector('.cards');
    this.prevActiveCard = this.cards.querySelector('.card.first');
    this.activeCard = null;
    this.prevActiveDot = this.prevActiveCard.parentNode.querySelector('.dot__selected');
    this.activeDot = null;
    this.initClickEvent();
  }

  initClickEvent() {
    this.cards.addEventListener('click', (e) => {
      if (e.target !== this.prevActiveCard && e.target.className !== 'cards') {
        this.inActivateCard();
        this.activeCard = e.target;
        this.clickCard();
      }
    });
  }

  clickCard() {
    const cardWrapper = this.activeCard.parentNode;
    const cardDotList = cardWrapper.querySelector('.card__dot__list');
    this.activeCard.classList.add('card__selected');
    cardDotList.classList.add('card__dot__list__selected');
    this.activateFirstDot(cardDotList);
    this.prevActiveCard = this.activeCard;
    this.activeCard = null;
  }

  activateFirstDot(cardDotList) {
    const firstDot = cardDotList.childNodes[1];
    firstDot.classList.add('dot__selected');
    for (let i = 0; i < this.dots.length; i++) {
      if (this.dots[i] === firstDot) {
        this.carousel.setContentByIndex(i);
        this.prevActiveDot = firstDot;
        this.activeDot = null;
      }
    }
  }

  activateCard(contentIndex) {
    this.inActivateCard();
    this.activeDot = this.dots[contentIndex];
    const cardWrapper = this.activeDot.parentNode.parentNode;
    const dotList = this.activeDot.parentNode;

    this.activeDot.classList.add('dot__selected');
    dotList.classList.add('card__dot__list__selected');
    this.activeCard = cardWrapper.querySelector('.card');
    this.activeCard.classList.add('card__selected');

    this.prevActiveDot = this.activeDot;
    this.prevActiveCard = this.activeCard;
  }

  inActivateCard() {
    this.prevActiveCard.classList.remove('card__selected');
    this.prevActiveDot.classList.remove('dot__selected');
    const preActiveDotList = this.prevActiveDot.parentNode;
    preActiveDotList.classList.remove('card__dot__list__selected');
    this.deActiveDot();
    }

  deActiveDot() {
    this.prevActiveDot.classList.remove('dot__selected');
  }

  setPrevActiveByIndex(dotIndex) {
    if (dotIndex === -1) {
      dotIndex = 16;
    } else if (dotIndex === 17) {
      dotIndex = 0;
    }
    this.prevActiveDot  = this.dots[dotIndex];
    console.log('====')
    console.log(this.prevActiveDot)
    const cardWrapper = this.prevActiveDot.parentNode.parentNode;
    this.activeCard = cardWrapper.querySelector('.card');
  }

  setCarousel(carousel) {
    this.carousel = carousel;
  }
}

export {
  Cards,
};
