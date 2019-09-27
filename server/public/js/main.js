import { setHeaderEvent } from './common.js';

window.onload = () => {
  setMainEvent();
  setHeaderEvent();
};

/**
 * 메인 화변 이벤트 설정
 */
const setMainEvent = () => {
  const database = document.querySelector('.database');
  const tableList = database.querySelector('.table__list');
  tableList.addEventListener('click', (e) => {
    if (e.target.className === 'table__name') {
      const tableName = e.target.innerText;
      window.location.href = `/admin/${tableName}`;
    }
  });
};

