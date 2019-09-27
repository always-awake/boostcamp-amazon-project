import { HeaderEvent } from './event/Header'
import { header } from './template/header';

class Index {
  constructor() {
    this.headerHtml = null;
  }

  init() {
    this.headerHtml = header();
    this.render();
    const headerEvent = new HeaderEvent();
    headerEvent.init();
  }

  render() {
    const header = document.querySelector('header');
    header.innerHTML = this.headerHtml;
  }
}

export {
  Index,
};
