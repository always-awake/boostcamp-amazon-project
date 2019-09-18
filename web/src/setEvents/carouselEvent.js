const setCarouselEvent = (Carousel) => {
  const carouselList = Carousel.querySelector('.carousel__list');
  const carouselContents = carouselList.querySelectorAll('.carousel__content');
  const carouselArrowRight = Carousel.querySelector('.carousel__arrow.right');
  const carouseArrowlLeft = Carousel.querySelector('.carousel__arrow.left');
  // const carouselPagination = document.querySelector('.slide_pagination');
  const carouselLength = carouselContents.length;
  const carouselWidth = carouselContents[0].offsetWidth;
  const carouselChangeSpeed = 300;
  const initNum = 0;

  carouselList.style.width = `${carouselWidth * (carouselLength + 2)}px`;

  const firstCarousel = carouselList.firstElementChild;
  const lastCarousel = carouselList.lastElementChild;
  const clonedFirstCarousel = firstCarousel.cloneNode(true);
  const clonedLastCarousel = lastCarousel.cloneNode(true);
  carouselList.appendChild(clonedFirstCarousel);
  carouselList.insertBefore(clonedLastCarousel, carouselList.firstElementChild);
  carouselList.style.transform = `translate3d(-${(carouselWidth * (initNum + 1))}px, 0px, 0px)`;
  let currentIndex = initNum;
  let currentCarousel = carouselContents[currentIndex];
  currentCarousel.classList.add('slide_active');

  /**
   * 메인 캐러셀의 캐러셀 오른쪽 버튼 이벤트 설정
   */
  carouselArrowRight.addEventListener('click', () => {
    if (currentIndex <= carouselLength - 1) {
      carouselList.style.transition = `${carouselChangeSpeed}ms`;
      carouselList.style.transform = `translate3d(-${(carouselWidth * (currentIndex + 2))}px, 0px, 0px)`;
    }
    if (currentIndex === carouselLength - 1) {
      setTimeout(() => {
        carouselList.style.transition = '0ms';
        carouselList.style.transform = `translate3d(-${carouselWidth}px, 0px, 0px)`;
      }, carouselChangeSpeed);
      currentIndex = -1;
    }
    currentCarousel.classList.remove('slide_active');
    currentCarousel = carouselContents[currentIndex += 1];
    currentCarousel.classList.add('slide_active');
  });

  /**
   * 메인 캐러셀의 캐러셀 왼쪽 버튼 이벤트 설정
   */
  carouseArrowlLeft.addEventListener('click', () => {
    if (currentIndex >= 0) {
      carouselList.style.transition = `${carouselChangeSpeed}ms`;
      carouselList.style.transform = `translate3d(-${(carouselWidth * currentIndex)}px, 0px, 0px)`;
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        carouselList.style.transition = '0ms';
        carouselList.style.transform = `translate3d(-${(carouselWidth * carouselLength)}px, 0px, 0px)`;
      }, carouselChangeSpeed);
      currentIndex = carouselLength;
    }
    currentCarousel.classList.remove('slide_active');
    currentCarousel = carouselContents[currentIndex -= 1];
    currentCarousel.classList.add('slide_active');
  });
};

export default {
  setCarouselEvent,
};
