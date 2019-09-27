import { setHeaderEvent } from './common.js';

window.onload = () => {
  setHeaderEvent();
  setDetailEvent();
};

/**
 * 개별 데이터 조회 페이지 이벤트 설정
 */
const setDetailEvent = () => {
  const detailSection = document.querySelector('.detail__section');
  const saveButton = detailSection.querySelector('.button.save');
  saveButton.addEventListener('click', () => {
    const detailForm = detailSection.querySelector('.detail__form');
    detailForm.submit();
  });
};
