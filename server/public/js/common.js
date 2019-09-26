const setHeaderEvent = () => {
  const header = document.querySelector('header');
  setHeaderTitleEvent(header);
  setLogoutButtonEvent(header);
};

const setHeaderTitleEvent = (header) => {
  const headerTitle = header.querySelector('.header__title');
  headerTitle.addEventListener('click', () => {
    window.location.href = `http://localhost:3000/admin/main`;
  });
};

const setLogoutButtonEvent = (header) => {
  const logoutButton = header.querySelector('.menu__button.logout');
  if (logoutButton !== null) {
    logoutButton.addEventListener('click', () => {
      window.location.href = `http://localhost:3000/admin/logout`;
  })}
};

export {
  setHeaderEvent
}