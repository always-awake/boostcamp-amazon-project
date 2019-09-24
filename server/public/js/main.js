window.onload = () => {
  setMainEvent();
};


const setMainEvent = () => {
  const database = document.querySelector('.database');
  const tableList = database.querySelector('.table__list');
  const databaseName = database.querySelector('.title').innerText.toLowerCase();
  tableList.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) {
      const tableName = e.target.innerText;
      window.location.href = `http://localhost:3000/admin/${databaseName}/${tableName}`;
    }
  })
};

