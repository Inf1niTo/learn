const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
  
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // breakpoints:{
    //   0:{
    //     slidesPerView: 1
    //   },
    //   0:{
    //     slidesPerView: 2
    //   },
    //   0:{
    //     slidesPerView: 3
    //   }
    // }
  });