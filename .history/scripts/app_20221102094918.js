// $(".customer-list").slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
// });

$(document).ready(function () {
  $(".customer-list").slick({
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="caret-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="caret-forward-outline"></ion-icon></button>`,
  });
});
