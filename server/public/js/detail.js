import { setHeaderEvent } from './common.js';

window.onload = () => {
  setHeaderEvent();
  setDetailEvent();
};

const setDetailEvent = () => {
  const detailSection = document.querySelector('.detail__section');
  const saveButton = detailSection.querySelector('.button.save');
  saveButton.addEventListener('click', () => {
    const detailForm = detailSection.querySelector('.detail__form');
    detailForm.submit();
  });
};
