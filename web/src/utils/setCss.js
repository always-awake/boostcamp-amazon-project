const setTransition = (target, msValue) => {
  target.style.transition = `${msValue}ms`;
};

const setTranslate = (target, pxValue) => {
  target.style.transform = `translateX(${pxValue}px)`;
};

const addClass = (target, className) => {

};

const removeClass = (target, className) => {

};

const setWidth = (target, pxValue) => {
  target.style.width = `${pxValue}px`;
};

export {
  setTransition,
  setTranslate,
  addClass,
  removeClass,
  setWidth
};