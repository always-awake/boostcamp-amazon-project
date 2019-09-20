class Cards {
  constructor() {
    this.cardDots = document.querySelectorAll('.pagination__dot');
    this.cards = document.querySelector('.service__cards');
    this.previousClickedCard = this.cards.querySelector('.service__card.first');
    this.eventTargetCard = null;
    this.carousel = null;
    this.setCardEvent();
  }

  setCardEvent() {
    this.cards.addEventListener('click', (e) => {
      if (e.target !== this.previousClickedCard && e.target.className !== 'service__cards') {
        this.eventTargetCard = this.previousClickedCard;
        this.unSelectCard();
        this.previousClickedCard = e.target;
        this.eventTargetCard = e.target;
        this.selectCard();
      }
    });
  }

  setCarousel(carousel) {
    this.carousel = carousel;
  }

  // selectCardByIndex(cardIndex) {
  // }
  //
  // unSelectCardByIndex(cardIndex) {
  // }

  selectCard() {
    this.eventTargetCard.classList.add('card__selected');
    const paginationDotList = this.eventTargetCard.parentNode.querySelector('.card__pagination_dot_list');
    paginationDotList.style.opacity = 1;
    this.selectFirstDot();
    this.previousClickedCard = this.eventTargetCard;
  }

  unSelectCard() {
    const cardWrapper = this.previousClickedCard.parentNode;
    const cardDotList = cardWrapper.querySelector('.card__pagination_dot_list');
    this.eventTargetCard.classList.remove('card__selected');
    cardDotList.style.opacity = 0;
    this.unSelectFirstDot();
  }

  selectFirstDot() {
    const cardWrapper = this.eventTargetCard.parentNode;
    const cardDotList = cardWrapper.querySelector('.card__pagination_dot_list');
    const firstDot = cardDotList.childNodes[1];
    firstDot.classList.add('pagination__dot__selected');
    for (let i = 0; i < this.cardDots.length; i++) {
      if (this.cardDots[i] === firstDot) {
        this.carousel.setCarouselByIndex(i);
      }
    }
  }

  unSelectFirstDot() {
    const cardWrapper = this.eventTargetCard.parentNode;
    const cardDotList = cardWrapper.querySelector('.card__pagination_dot_list');
    cardDotList.childNodes[1].classList.remove('pagination__dot__selected');
  }

  setPreviousClickedCard(previousClickedCard) {
    this.previousClickedCard = previousClickedCard;
  }

  setEventTargetCard(eventTargetCard) {
    this.eventTargetCard = eventTargetCard;
  }
}

export default {
  Cards,
};
