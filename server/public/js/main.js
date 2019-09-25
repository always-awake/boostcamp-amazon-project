window.onload = () => {
  setMainEvent();
};


const setMainEvent = () => {
  const database = document.querySelector('.database');
  const tableList = database.querySelector('.table__list');
  tableList.addEventListener('click', (e) => {
    if (e.target.className === 'table__name') {
      const tableName = e.target.innerText;
      window.location.href = `http://localhost:3000/admin/${tableName}`;
    }
  });

  const headerTitle = document.querySelector('.header__title');
  headerTitle.addEventListener('click', () => {
    window.location.href = `http://localhost:3000/admin/main`;
  })
};

