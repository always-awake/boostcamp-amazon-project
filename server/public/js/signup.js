window.onload = () => {
  setSignupEvent();
};

const setSignupEvent = () => {
  const loginSection = document.querySelector('.signup__section');
  const idInput = loginSection.querySelector('input');
  idInput.focus();
};
