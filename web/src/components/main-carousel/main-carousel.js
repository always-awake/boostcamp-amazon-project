import cardsComponent from './cards';

const carousel = () => {
  return `<div class="main__carousel">
          ${cardsComponent.cards()}
          </div>`;
};

export default {
  carousel,
};
