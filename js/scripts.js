$(function (){
  console.log('DOM Loaded');


  $(document).ready(function() {
            $('.tooltip').tooltipster();
            console.log('tooltip ready')
        });

  $('.tooltip').tooltipster({
        theme: ['tooltipster-noir', 'tooltipster-noir-customized']
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

//Slide 2 -----------------------------------------------

$('#car-sensor').on({
  mouseenter: function(){
    $('#lidar-graphic').css('display', 'block');
    $('#radar-graphic').css('display', 'block');
    $('#image-graphic').css('display', 'block');
    $('#ultrasonic-graphic').css('display', 'block');
  },
  mouseleave: function(){
  $(this).css('color', '#5b5c56');
  $('#lidar-graphic').css('display', 'none');
  $('#modal-ld').css('display', 'none');
  },
});


  $('#ld').on({
    mouseenter: function(){
      $(this).css('color', '#8adfed');
      $('#lidar-graphic').css('display', 'block');
      $('#modal-ld').css('display', 'block');
    },
    mouseleave: function(){
    $(this).css('color', '#5b5c56');
    $('#lidar-graphic').css('display', 'none');
    $('#modal-ld').css('display', 'none');
    },
  });

  $('#rd').on({
    mouseenter: function(){
      $(this).css('color', '#8990ef');
      $('#radar-graphic').css('display', 'block');
      $('#modal-rd').css('display', 'block');
    },
    mouseleave: function(){
    $(this).css('color', '#5b5c56');
    $('#radar-graphic').css('display', 'none');
    $('#modal-rd').css('display', 'none');
    },
  });

  $('#im').on({
    mouseenter: function(){
      $(this).css('color', '#d388f2');
      $('#image-graphic').css('display', 'block');
      $('#modal-im').css('display', 'block');

    },
    mouseleave: function(){
    $(this).css('color', '#5b5c56');
    $('#image-graphic').css('display', 'none');
    $('#modal-im').css('display', 'none');
    },
  });

  $('#us').on({
    mouseenter: function(){
      $(this).css('color', '#f487b1');
      $('#ultrasonic-graphic').css('display', 'block');
      $('#modal-us').css('display', 'block');
    },
    mouseleave: function(){
    $(this).css('color', '#5b5c56');
    $('#ultrasonic-graphic').css('display', 'none');
    $('#modal-us').css('display', 'none');
    },
  });

  setInterval(function () {
    moveRight();
   }, 3000);
    function moveRight() {
        var len=$('li');
        var i=1;
        $('li').each(function(){
            i++;
             if($(this).attr('class')=="active")
             {
                 $(this).next('li').addClass('active');
                 $(this).removeClass('active');
                 return false;
             }
            if(len.length==i)
            {
                $('li:nth-child(1)').addClass('active');
            }
        });
}

//Slide 3 -----------------------------------------------------


    $('.tooltip').on({
      mouseenter: function(){
      $('#car-3').animate({left: '+=25%'}, 1000);
      },
      mouseleave: function(){

      },
    });


});
