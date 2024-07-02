var splide = new Splide(".splide", {
  type: "loop",
  perPage: 4,
  perMove: 1,
  autoplay: true,
  interval: 3000,
  speed: 5000,
  rewind: true,
  breakpoints: {
    
    1200: {
      perPage: 3, // Show 3 slides per page on screens 1200px wide or less
    },
    768: {
      perPage: 2, // Show 1 slide per page on screens 768px wide or less
    },
    600: {
      perPage: 1,
    },
  },
});

splide.mount();

var splide2 = new Splide("#splide2", {
  type: "loop",
  perPage: 4,
  perMove: 1,
  autoplay: true,
  interval: 3000,
  direction: "rtl",
  speed: 5000,
  rewind: true,
  breakpoints: {
    1200: {
      perPage: 3, // Show 3 slides per page on screens 1200px wide or less
    },
    768: {
      perPage: 2, // Show 1 slide per page on screens 768px wide or less
    },
    600: {
      perPage: 1, // Show 1 slide per page on screens 600px wide or less
    },
  },
});

splide2.mount();
// document.addEventListener('DOMContentLoaded', function () {

//     var splide2 = new Splide('#splide2', {
//       type       : 'loop',    // Ensures the slider loops infinitely
//       perPage    : 4,
//       autoplay   : true,      // Enables autoplay
//       interval   : 3000,      // Interval between slides in milliseconds
//    // Disable pausing on focus
//     }).mount();
//   });
