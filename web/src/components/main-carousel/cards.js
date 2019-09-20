const cards = () => {
  return `<div class="service__cards">
      <div class="service__card__wrapper">
        <div class="service__card first card__selected">
          <div class="card__img">
            <img src="../images/main_card_1.png" alt="">
          </div>
        </div>
        <div class="card__title">
          Ship
        </div>
        <div class="card__pagination_dot_list card__pagination_dot_list__selected">
         <div class="pagination__dot pagination__dot__selected"></div>
         <div class="pagination__dot"></div>
         <div class="pagination__dot"></div>
         <div class="pagination__dot"></div>
        </div>
      </div>
      <div class="service__card__wrapper">
        <div class="service__card second">
          <div class="card__img">
            <img src="../images/main_card_2.png" alt="">
          </div>
        </div>
        <div class="card__title">
          Stream
        </div>
        <div class="card__pagination_dot_list">
         <div class="pagination__dot"></div>
         <div class="pagination__dot"></div>
         <div class="pagination__dot"></div>
         <div class="pagination__dot"></div>
         <div class="pagination__dot"></div>
        </div>
      </div>
      <div class="service__card__wrapper">
        <div class="service__card third">
          <div class="card__img">
            <img src="../images/main_card_3.png" alt="">
          </div>
        </div>
        <div class="card__title">
          Shop
        </div>
        <div class="card__pagination_dot_list">
         <div class="pagination__dot"></div>
         <div class="pagination__dot"></div>
         <div class="pagination__dot"></div>
         <div class="pagination__dot"></div>
        </div>
      </div>
      <div class="service__card__wrapper">
        <div class="service__card forth">
          <div class="card__img">
            <img src="../images/main_card_4.png" alt="">
          </div>
        </div>
        <div class="card__title">
          Read
        </div>
        <div class="card__pagination_dot_list">
         <div class="pagination__dot"></div>
         <div class="pagination__dot"></div>
        </div>
      </div>
      <div class="service__card__wrapper">
        <div class="service__card fifth">
          <div class="card__img">
            <img src="../images/main_card_5.png" alt="">
          </div>
        </div>
        <div class="card__title">
          More
        </div>
        <div class="card__pagination_dot_list">
         <div class="pagination__dot"></div>
         <div class="pagination__dot"></div>
        </div>
      </div>
  </div>`;
};

export default {
  cards,
};
