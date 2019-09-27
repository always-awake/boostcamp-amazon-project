import { setHeaderEvent } from './common.js';

window.onload = () => {
  setHeaderEvent();
  setLoginEvent();
};

/**
 * 로그인 폼 페이지 이벤트 설정
 */
const setLoginEvent = () => {
  const loginSection = document.querySelector('.login__section');
  const loginButton = loginSection.querySelector('.login__button');
  loginButton.addEventListener('click', () => {
    const loginForm = loginSection.querySelector('.login__form');
    loginForm.submit();
  });

  const signUpButton = loginSection.querySelector('.signup__link');
  signUpButton.addEventListener('click', () => {
    window.location.href = `/admin/accounts`;
  });
};

