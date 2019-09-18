import './style.sass';
import mainCarousel from './views/main-carousel';
import miniCarousel from './views/mini-carousel';

window.onload = () => {
  mainCarousel.makeMainCarousel();
  miniCarousel.makeMiniCarousel();
};
