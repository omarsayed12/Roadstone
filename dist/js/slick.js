$(function () {
   $('.retailersCity').owlCarousel({
      loop: true,
      lazyLoad: true,
      smartSpeed: 800,
      slideTransition: 'linear',
      // responsiveClass: true,
      // autoplay: true,
      // autoplayTimeout: 0,
      // autoplayHoverPause: false,
      // mouseDrag: true,
      dots: true,
      responsive: {
         0: {
            items: 2,
            stagePadding: 30,
         },
         375: {
            items: 3,
            stagePadding: 10,
         },
         425: {
            items: 4,
            margin: 30,
         },
         768: {
            items: 6,
         },
         1000: {
            items: 9,
         },
      }
   })
})

$(function () {
   $('.tire-size').owlCarousel({
      loop: true,
      lazyLoad: true,
      smartSpeed: 800,
      slideTransition: 'linear',
      dots: false,

      responsive: {
         0: {
            items: 1,
            margin: 20,
             stagePadding: 50,
         },
         600: {
            items: 2,
            // stagePadding: 50,
            // margin: 30,
         },
         1000: {
            items: 3,
            // margin: 30,
         }
      }
   })
})