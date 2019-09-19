import './style.sass';
import MiniCarousel from './views/MiniCarousel';
import MainCarousel from './views/MainCarousel';

window.onload = () => {
  const maincarousel = new MainCarousel.MainCarousel('main_carousel_article');
  maincarousel.makeCarousel();
  const miniCarousel = new MiniCarousel.MiniCarousel('mini_carousel_article');
  miniCarousel.makeCarousel();
};
