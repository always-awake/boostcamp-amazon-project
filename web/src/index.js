import './style.sass';
import { Index } from './components/index/Index';
import { MiniCarousel } from './components/mini-carousel/MiniCarousel';
import { MainCarousel } from './components/main-carousel/MainCarousel';

window.onload = () => {
  const index = new Index();
  index.init();
  const mainCarousel = new MainCarousel('main_carousel_article');
  mainCarousel.init();
  const miniCarousel = new MiniCarousel('mini_carousel_article');
  miniCarousel.init();
};