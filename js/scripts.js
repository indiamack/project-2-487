$(function (){
  console.log('DOM Loaded');

  $('.slick-slider').slick({
    });

/* $('#slide1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(nextSlide);
  $('#car').animate({left: '600px'}, "slow");
}); */


$('#slide1').ready(function(){
  console.log('car animated');
  $('#car').animate({left: '+=300px'}, 1000);
});

$('.slide1').click(function(beforeChange){
  console.log(nextSlide);
  $('#car').animate({left: '+=300px'}, 1000);
  waitForAnimate: true;
});

$('#slide2').click(function(){
  console.log('car animated 2');
  $('#car-sensor').animate({left: '+=300px'}, 1000);
});


});
