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

  const signUpButton = loginSection.querySelector('.signup__link');
  signUpButton.addEventListener('click', () => {
    window.location.href = `http://localhost:3000/admin/accounts`;
  });
};

