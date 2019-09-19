let clickedTarget;

const setCardsEvent = () => {
  const serviceCards = document.querySelector('.service__cards');
  serviceCards.addEventListener('click', (e) => {
    if (clickedTarget === undefined) {
      const firstServiceCard = serviceCards.querySelector('.service__card.first');
      firstServiceCard.classList.remove('card__selected');
    } else if (e.target !== clickedTarget) {
      clickedTarget.classList.remove('card__selected');
    }
    e.target.classList.add('card__selected');
    clickedTarget = e.target;
  });
};

export default {
  setCardsEvent,
};
