window.onload = () => {
  setTableEvent();
};


const setTableEvent = () => {
  const headerTitle = document.querySelector('.header__title');
  headerTitle.addEventListener('click', () => {
    window.location.href = `http://localhost:3000/admin/main`;
  })
};

