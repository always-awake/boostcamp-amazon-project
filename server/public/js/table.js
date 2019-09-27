import { setHeaderEvent } from './common.js';

window.onload = () => {
  setHeaderEvent();
  setTableEvent();
};

/**
 * 새로운 데이터 생성 폼 이벤트 설정
 */
const setTableEvent = () => {
  const tableSection = document.querySelector('.table');
  const addButton = tableSection.querySelector('.add__button');
  const tableName = tableSection.querySelector('.title').innerHTML;
  addButton.addEventListener('click', () => {
    window.location.href = `/admin/${tableName}/new`;
  });
};

