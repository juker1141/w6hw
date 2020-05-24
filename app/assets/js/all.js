$('.navbar-toggler').click(function (e) {
  e.preventDefault();
  $('.nav-menu').addClass('active')
})
$('.goback_icon').click(function (e) {
  e.preventDefault();
  $('.nav-menu').removeClass('active')
})
$('.shopping_cartBtn').click(function (e) {
  e.preventDefault();
  $('.shopping-cart-page').addClass('active')
})
$('.shopping-cart-close-icon').click(function (e) {
  e.preventDefault();
  $('.shopping-cart-page').removeClass('active')
})

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
});
