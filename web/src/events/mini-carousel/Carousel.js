class Carousel {
  constructor() {
    this.miniCarousel = document.querySelector('.mini__carousel');
    this.carouselList = this.miniCarousel.querySelector('.carousel__list');
    this.carouselContents = this.carouselList.querySelectorAll('.carousel__content');
    this.carouselArrowRight = this.miniCarousel.querySelector('.carousel__arrow.right');
    this.carouseArrowlLeft = this.miniCarousel.querySelector('.carousel__arrow.left');
    this.carouselLength = this.carouselContents.length;
    this.carouselWidth = this.carouselContents[0].offsetWidth;
    this.carouselChangeSpeed = 300;
    this.startIndex = 0;
    this.currentIndex = this.startIndex;
    this.currentCarousel = null;
    this.autoSlideEvent = null;
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
    this.setAutoEvent();
  }

  setPrevButton() {
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
      this.currentCarousel = this.carouselContents[this.currentIndex += 1];
    });
  }

  setNextButton() {
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
      this.currentCarousel = this.carouselContents[this.currentIndex -= 1];
    });
  }

  setAutoEvent() {
    this.autoSlideEvent = setInterval(() => {
      this.carouselArrowRight.click();
    }, 3000);
    const carousel = this.miniCarousel.querySelector('.mini__carousel__carousel');
    carousel.addEventListener('click', (e) => {
      if (e.isTrusted === true) clearInterval(this.autoSlideEvent);
    });
  }
}

export default {
  Carousel,
};
