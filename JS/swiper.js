const swiper = new Swiper('.slider', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   autoHeight: true,
   slidesPerView: 1,
   centeredSlides: true,
   // Navigation arrows
   navigation: {
      nextEl: '.toggle-right',
      prevEl: '.toggle-left',
   },


});

const sliderLots = new Swiper('.slider-lots', {
   // Optional parameters
   direction: 'horizontal',
   wrapperClass: 'slider-lots__body',
   slideClass: 'slider-lots__slide',
   loop: true,
   autoHeight: true,
   slidesPerView: 3,
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      550: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 3,
      }

   },
   // spaceBetween: 100,
   // Navigation arrows
   navigation: {
      nextEl: '.controll-slider__arrow-left',
      prevEl: '.controll-slider__arrow-right',
   },


});

const sliderQuotes = new Swiper('.slider-quotes', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   autoHeight: true,
   slidesPerView: 1,
   centeredSlides: true,
   // Navigation arrows
   navigation: {
      nextEl: '.controll-qoutes__arrow-right',
      prevEl: '.controll-qoutes__arrow-left',
   },


});

