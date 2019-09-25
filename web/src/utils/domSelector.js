const select = (selector, base) => {
  return base.querySelector(selector);
};

const selectAll = (selector, base) =>{
  return base.querySelectorAll(selector);
};

export {
  selectAll,
    select
}
