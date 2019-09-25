window.onload = () => {
  setLoginEvent();
};

const setLoginEvent = () => {
  const loginSection = document.querySelector('.login__section');
  const loginButton = loginSection.querySelector('.login__button');
  loginButton.addEventListener('click', () => {
    const loginForm = loginSection.querySelector('.login__form');
    loginForm.submit();
  });

  const idInput = loginSection.querySelector('input');
  idInput.focus();
};

