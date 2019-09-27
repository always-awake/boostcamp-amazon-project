import { setHeaderEvent } from './common.js';

window.onload = () => {
  setHeaderEvent();
  setAddEvent();
};

/**
 * 새로운 데이터 추가 폼의 이벤트 설정
 */
const setAddEvent =() => {
  const addSection = document.querySelector('.add__section');
  const addButton = addSection.querySelector('.button.add');
  const addForm = addSection.querySelector('.add__form');
  addButton.addEventListener('click', () => {
    addForm.submit();
  });
};
