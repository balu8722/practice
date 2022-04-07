
$(document).ready(function(){
    $('.home-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:'<span class="backward"></span>',
        nextArrow:'<span class="forward"></span>',  
      });
}); 
$(function (){
  var header=$(".top-header");

  $(window).scroll(function() {
    var scroll=$(window).scrolltop();
    if (scroll >= 100){
      header.addclass("scrolled");
    } else {
      header.removeclass("scrolled");
    }
  })  
  })