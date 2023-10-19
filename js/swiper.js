let TestimonialSwiper = new Swiper(".testimonial-Content", {
    slidesPerView: 1,
  
    loop:true,
    spaceBetween:16,
    grabCursor: true,
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '#next',
      prevEl: '#prev',
    },

    breakpoints: {
        600: {
          slidesPerView: 1.2,
          centeredSlides: true,
        },
        968: {
          slidesPerView: 2,
        },
      }

  });