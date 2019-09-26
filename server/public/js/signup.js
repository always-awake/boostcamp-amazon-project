import { setHeaderEvent } from './common.js';

window.onload = () => {
  setHeaderEvent();
  setSignupEvent();
};

const setSignupEvent = () => {
  const loginSection = document.querySelector('.signup__section');
  const idInput = loginSection.querySelector('input');
  idInput.focus();
};
