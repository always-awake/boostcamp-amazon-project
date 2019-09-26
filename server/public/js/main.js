window.onload = () => {
  setMainEvent();
};


const setMainEvent = () => {
  console.log('메인')
  const database = document.querySelector('.database');
  const tableList = database.querySelector('.table__list');
  tableList.addEventListener('click', (e) => {
    if (e.target.className === 'table__name') {
      const tableName = e.target.innerText;
      window.location.href = `http://localhost:3000/admin/${tableName}`;
    }
  });
};

