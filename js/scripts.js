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
      $('#car-sensor').css('display', 'none');
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
// Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.

  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    var field = document.getElementById("field");
    var ball = document.getElementById("ball");
    var ball2 = document.getElementById("ball2");

    var maxX = field.clientWidth - ball.offsetWidth;
    var maxY = field.clientHeight - ball.offsetHeight;

    var duration = 10; // seconds
    var gridSize = 50; // pixels

    var start = null;

    function step(timestamp)
    {
      var progress, x, y, y2;
      if(start === null) start = timestamp;

      progress = (timestamp - start) / duration / 1000; // percent

      x = progress * maxX/gridSize; // x = ƒ(t)
      y = 2 * Math.sin(x); // y = ƒ(x)
      y2 = 1 * Math.cos(x);

      ball.style.left = ball2.style.left = Math.min(maxX, gridSize * x) + "px";
      ball.style.bottom = maxY/2 + (gridSize * y) + "px";
      ball2.style.bottom = maxY/2 + (gridSize * y2) + "px";

      if(progress >= 1) start = null; // reset to start position
      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

});
