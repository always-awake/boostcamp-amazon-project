import { select } from '../../../utils/domSelector';

class HeaderEvent {

  constructor() {
    this.header = null;
    this.loginButton = null;
  }

  init() {
    this.header = document.querySelector('header');
    this.loginButton = select('.login__button', this.header);
    this.setLoginButton();
  }
  setLoginButton() {
    this.loginButton.addEventListener('click', () => {

    })
  }
}

export {
  HeaderEvent
}