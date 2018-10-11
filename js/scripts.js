$(function (){
  console.log('DOM Loaded');


  $(document).ready(function() {
            $('.tooltip').tooltipster();
            console.log('tooltip ready')
        });

  $('.slick-slider').slick({
    });

  $('#slide1').ready(function(){
    console.log('car animated');
    $('#car').animate({left: '+=300px'}, 1000);
  });


  $('.site').on('afterChange', function(slick){
    console.log('car animated 2');
  });

  $('#ld').on({
    mouseenter: function(){
      $(this).css('color', '#8adfed');
      $('#lidar-graphic').css('display', 'block');
    },
    mouseleave: function(){
    $(this).css('color', '#5b5c56');
    $('#lidar-graphic').css('display', 'none');
    },
  });

  $('#rd').on({
    mouseenter: function(){
      $(this).css('color', '#8990ef');
      $('#radar-graphic').css('display', 'block');
    },
    mouseleave: function(){
    $(this).css('color', '#5b5c56');
    $('#radar-graphic').css('display', 'none');
    },
  });

  $('#im').on({
    mouseenter: function(){
      $(this).css('color', '#d388f2');
      $('#image-graphic').css('display', 'block');
    },
    mouseleave: function(){
    $(this).css('color', '#5b5c56');
    $('#image-graphic').css('display', 'none');
    },
  });

  $('#us').on({
    mouseenter: function(){
      $(this).css('color', '#f487b1');
      $('#ultrasonic-graphic').css('display', 'block');
    },
    mouseleave: function(){
    $(this).css('color', '#5b5c56');
    $('#ultrasonic-graphic').css('display', 'none');
    },
  });
});
