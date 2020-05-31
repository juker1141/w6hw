"use strict";

$('.navbar-toggler').click(function (e) {
  e.preventDefault();
  $('.nav-menu').addClass('active');
});
$('.goback_icon').click(function (e) {
  e.preventDefault();
  $('.nav-menu').removeClass('active');
});
$('.shopping_cartBtn').click(function (e) {
  e.preventDefault();
  $('.shopping-cart-page').addClass('active');
  $('.darkShady').show();
});
$('.shopping_addcartBtn').click(function (e) {
  e.preventDefault();
  $('.shopping-cart-page').addClass('active');
  $('.darkShady').show();
});
$('.shopping-cart-close-icon').click(function (e) {
  e.preventDefault();
  $('.shopping-cart-page').removeClass('active');
  $('.darkShady').hide();
});
$('.darkShady').click(function (e) {
  e.preventDefault();
  $('.shopping-cart-page').removeClass('active');
  $('.darkShady').hide();
});
$('.orderSummaryShowBtn_up').hide();
$('.orderSummaryShowBtn').click(function (e) {
  e.preventDefault();
  $('.orderSummaryList').toggle();
  $('.orderSummaryShowBtn_up').toggle();
  $('.orderSummaryShowBtn_down').toggle();
  $('.orderSummary_totalPrice').toggle();
});
$('.checkOutlineBtn').click(function (e) {
  e.preventDefault();
  $('.checkOutlineBtn').toggle();
  $('.checkBtn').toggle();
});
$('.checkBtn').click(function (e) {
  e.preventDefault();
  $('.checkOutlineBtn').toggle();
  $('.checkBtn').toggle();
});
$('.customerInformationShowBtn_up').hide();
$('.customerInformationShowBtn').click(function (e) {
  e.preventDefault();
  $('.customerInformationList').toggle();
  $('.customerInformationShowBtn_up').toggle();
  $('.customerInformationShowBtn_down').toggle();
  $('.customerInformation_mail').toggle();
  $('.customerInformation_address').toggle();
  $('.customerInformation').toggleClass('border-bottom-0');
  $('.shipInformation').toggleClass('borderRadius0');
});
var i = document.referrer;

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
    alert(i);

    if (i == 'https://juker1141.github.io/w6hw/information.html') {
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
    $('.product_logo_icon').addClass('text-primary');
    $('.navbar').addClass('align-left');
    $('.l-header .col').addClass('offset-xl-1');
    $('.navbar-toggler').hide();
    $('.menuBtn span').hide();
    $('.shopping_cartBtn span').hide();
    $('.nav-link').hide();
    $('.l_footer').hide();
    break;

  case "Paydone":
    $('.navbar').addClass('align-left');
    $('.navbar-toggler').hide();
    $('.menuBtn span').hide();
    $('.shopping_cartBtn span').hide();
    $('.nav-link').hide();
    $('.l_footer').hide();
    break;
}

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto'
}); // $(".productlistBtn").click(function (e) {
//   $(".product_logo_icon").addClass('active');
// });
//# sourceMappingURL=all.js.map
