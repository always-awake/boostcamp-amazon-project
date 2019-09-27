import { setHeaderEvent } from './common.js';

window.onload = () => {
  setHeaderEvent();
  setSignupEvent();
};

/**
 * 회원가입 이벤트 설정
 */
const setSignupEvent = () => {
  const loginSection = document.querySelector('.signup__section');
  const idInput = loginSection.querySelector('input');
  idInput.focus();
};
