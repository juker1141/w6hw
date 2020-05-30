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
  $('.darkShady').show()
})
$('.shopping_addcartBtn').click(function (e) {
  e.preventDefault();
  $('.shopping-cart-page').addClass('active');
  $('.darkShady').show();
})
$('.shopping-cart-close-icon').click(function (e) {
  e.preventDefault();
  $('.shopping-cart-page').removeClass('active');
  $('.darkShady').hide();
})
$('.darkShady').click(function (e) {
  e.preventDefault();
  $('.shopping-cart-page').removeClass('active');
  $('.darkShady').hide();
})


$('.orderSummaryShowBtn_up').hide()
$('.orderSummaryShowBtn').click(function (e) {
  e.preventDefault();
  $('.orderSummaryList').toggle();
  $('.orderSummaryShowBtn_up').toggle();
  $('.orderSummaryShowBtn_down').toggle();
  $('.orderSummary_totalPrice').toggle();
})

$('.checkOutlineBtn').click(function (e) {
  e.preventDefault();
  $('.checkOutlineBtn').toggle();
  $('.checkBtn').toggle();
})
$('.checkBtn').click(function (e) {
  e.preventDefault();
  $('.checkOutlineBtn').toggle();
  $('.checkBtn').toggle();
})


var i = document.referrer
switch ($('title').text()) {
  case "ProductList":
    $('.product_logo_icon').addClass('text-primary');
    $('.menuBtn').addClass('text-primary');
    $('.shopping_cartBtn').addClass('text-primary');
    $('.nav-link').addClass('text-dark');
    $('.productlistBtn').addClass('text-success');
    $('.pagination_firstPageBtn').addClass('text-success');
    break;
  case "Productdetail":
    $('.product_logo_icon').addClass('text-primary');
    $('.menuBtn').addClass('text-primary');
    $('.shopping_cartBtn').addClass('text-primary');
    $('.nav-link').addClass('text-dark');
    if (i == 'http://localhost:8080/information.html') {
      $('.shopping-cart-page').addClass('active');
      $('.darkShady').show();
    }
    break;
  case "Information":
    $('.product_logo_icon').addClass('text-primary');
    $('.navbar').addClass('align-left');
    $('.l-header .col').addClass('offset-xl-1');
    $('.navbar-toggler').hide();
    $('.menuBtn span').hide();
    $('.shopping_cartBtn span').hide();
    $('.nav-link').hide();
    $('.l_footer').hide();
    break;
  case "Payment":
    $(".section__subscribe").hide();
    $(".js-layout__navbar__footer").hide();
    break;
  case "Well Done":
    $(".section__subscribe").hide();
    $(".js-layout__navbar__footer").hide();
    break;
}

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
});

// $(".productlistBtn").click(function (e) {

//   $(".product_logo_icon").addClass('active');
// });
