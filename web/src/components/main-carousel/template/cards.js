const cards = () => {
  return /* html */`<div class="cards">
      <div class="card__wrapper">
        <div class="card first card__selected">
          <div class="card__img">
            <img src="../images/main_card_1.png" alt="">
          </div>
        </div>
        <div class="card__title">
          Ship
        </div>
        <div class="card__dot__list card__dot__list__selected">
         <div class="dot dot__selected"></div>
         <div class="dot"></div>
         <div class="dot"></div>
         <div class="dot"></div>
        </div>
      </div>
      <div class="card__wrapper">
        <div class="card second">
          <div class="card__img">
            <img src="../images/main_card_2.png" alt="">
          </div>
        </div>
        <div class="card__title">
          Stream
        </div>
        <div class="card__dot__list">
         <div class="dot"></div>
         <div class="dot"></div>
         <div class="dot"></div>
         <div class="dot"></div>
         <div class="dot"></div>
        </div>
      </div>
      <div class="card__wrapper">
        <div class="card third">
          <div class="card__img">
            <img src="../images/main_card_3.png" alt="">
          </div>
        </div>
        <div class="card__title">
          Shop
        </div>
        <div class="card__dot__list">
         <div class="dot"></div>
         <div class="dot"></div>
         <div class="dot"></div>
         <div class="dot"></div>
        </div>
      </div>
      <div class="card__wrapper">
        <div class="card forth">
          <div class="card__img">
            <img src="../images/main_card_4.png" alt="">
          </div>
        </div>
        <div class="card__title">
          Read
        </div>
        <div class="card__dot__list">
         <div class="dot"></div>
         <div class="dot"></div>
        </div>
      </div>
      <div class="card__wrapper">
        <div class="card fifth">
          <div class="card__img">
            <img src="../images/main_card_5.png" alt="">
          </div>
        </div>
        <div class="card__title">
          More
        </div>
        <div class="card__dot__list">
         <div class="dot"></div>
         <div class="dot"></div>
        </div>
      </div>
  </div>`;
};

export default {
  cards,
};
