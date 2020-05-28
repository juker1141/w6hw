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

switch ($('title').text()) {
  // case "Index":
  //   $(".js-layout__navbar").addClass("fixed-top navbar-dark");
  //   $('a[href="productList.html"]').addClass('custom__text');
  //   break;
  case "ProductList":
    $('.product_logo_icon').addClass('active');
    $('.menuBtn').addClass('active');
    $('.shopping_cartBtn').addClass('active');
    break;
  case "Product":
    $('a[href="productList.html"]').addClass('active');
    break;
  case "Information":
    $(".section__subscribe").hide();
    $(".js-layout__navbar__nav").hide();
    $(".js-layout__navbar__footer").hide();
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
