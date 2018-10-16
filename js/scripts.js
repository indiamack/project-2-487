$(function (){
  console.log('DOM Loaded');


  $(document).ready(function() {
            $('.tooltip').tooltipster();
            console.log('tooltip ready');

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

$('.slick-next').click('afterChange', function(event, slick, currentSlide, slickPause){
  waitForAnimate: true;
  $('#car-sensor').animate({left: '+=10%'}, 1000);
  console.log('car animated 2');

});


//Slide 2 -----------------------------------------------

$('#car-sensor').on({
  mouseenter: function(){
    $('#lidar-graphic').css('display', 'block');
    $('#radar-graphic').css('display', 'block');
    $('#image-graphic').css('display', 'block');
    $('#ultrasonic-graphic').css('display', 'block');
    $('#ld').css('color', '#8adfed');
    $('#rd').css('color', '#8990ef');
    $('#im').css('color', '#d388f2');
    $('#us').css('color', '#f487b1');
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
      $('#radar-graphic').css('display', 'none');
      $('#image-graphic').css('display', 'none');
      $('#ultrasonic-graphic').css('display', 'none');

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
      $('#lidar-graphic').css('display', 'none');
      $('#ultrasonic-graphic').css('display', 'none');
      $('#image-graphic').css('display', 'none');


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
      $('#radar-graphic').css('display', 'none');
      $('#lidar-graphic').css('display', 'none');
      $('#ultrasonic-graphic').css('display', 'none');

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
      $('#lidar-graphic').css('display', 'none');
      $('#radar-graphic').css('display', 'none');
      $('#image-graphic').css('display', 'none');

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
    });

    $('#ob-1').on({
      mouseenter: function(){
        $('ob-1-t').css('display', 'block');
      },
      mouseleave: function(){
      $('ob-1-t').css('display', 'none');
    },
    });

    $('#ob-2').on({
      mouseenter: function(){
        $('ob-2-t').css('display', 'block');
      },
      mouseleave: function(){
      $('ob-2-t').css('display', 'none');
    },
    });

    $('#ob-3').on({
      mouseenter: function(){
        $('ob-3-t').css('display', 'block');
      },
      mouseleave: function(){
      $('#car-3').animate({left: '+=25%'}, 1000);
      $('ob-3-t').css('display', 'none');
    },
    });

    // SLide 4------------------------------------------------

    $.fn.rwdImageMaps = function() {

                var $img = this;

                var rwdImageMap = function() {
                  $img.each(function() {
                    if (typeof($(this).attr('usemap')) == 'undefined')
                      return;

                    var that = this,
                      $that = $(that);

                    // Since WebKit doesn't know the height until after the image has loaded, perform everything in an onload copy
                    $('<img />').on('load', function() {
                      var attrW = 'width',
                        attrH = 'height',
                        w = $that.attr(attrW),
                        h = $that.attr(attrH);

                      if (!w || !h) {
                        var temp = new Image();
                        temp.src = $that.attr('src');
                        if (!w)
                          w = temp.width;
                        if (!h)
                          h = temp.height;
                      }

                      var wPercent = $that.width()/100,
                        hPercent = $that.height()/100,
                        map = $that.attr('usemap').replace('#', ''),
                        c = 'coords';

                      $('map[name="' + map + '"]').find('area').each(function() {
                        var $this = $(this);
                        if (!$this.data(c))
                          $this.data(c, $this.attr(c));

                        var coords = $this.data(c).split(','),
                          coordsPercent = new Array(coords.length);

                        for (var i = 0; i < coordsPercent.length; ++i) {
                          if (i % 2 === 0)
                            coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
                          else
                            coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
                        }
                        $this.attr(c, coordsPercent.toString());
                      });

                    }).attr('src', $that.attr('src'));
                  });
                };

                $(window).resize(rwdImageMaps).trigger('resize');

                return this;

                };

    $('.slick-slide').ready(function(){
      $("map[name=ped]").mapoid(function(){
        $.fn.rwdImageMaps = function() {

                    var $img = this;

                    var rwdImageMap = function() {
                      $img.each(function() {
                        if (typeof($(this).attr('usemap')) == 'undefined')
                          return;

                        var that = this,
                          $that = $(that);

                        // Since WebKit doesn't know the height until after the image has loaded, perform everything in an onload copy
                        $('<img />').on('load', function() {
                          var attrW = 'width',
                            attrH = 'height',
                            w = $that.attr(attrW),
                            h = $that.attr(attrH);

                          if (!w || !h) {
                            var temp = new Image();
                            temp.src = $that.attr('src');
                            if (!w)
                              w = temp.width;
                            if (!h)
                              h = temp.height;
                          }

                          var wPercent = $that.width()/100,
                            hPercent = $that.height()/100,
                            map = $that.attr('usemap').replace('#', ''),
                            c = 'coords';

                          $('map[name="' + map + '"]').find('area').each(function() {
                            var $this = $(this);
                            if (!$this.data(c))
                              $this.data(c, $this.attr(c));

                            var coords = $this.data(c).split(','),
                              coordsPercent = new Array(coords.length);

                            for (var i = 0; i < coordsPercent.length; ++i) {
                              if (i % 2 === 0)
                                coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
                              else
                                coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
                            }
                            $this.attr(c, coordsPercent.toString());
                          });

                        }).attr('src', $that.attr('src'));
                      });
                    };

                    $(window).resize(rwdImageMaps).trigger('resize');

                    return this;

                    };
        $('img[usemap=ped]').rwdImageMaps(function(){
          console.log('good morning');
        });
      });
    });







// Quiz -------------------------------------------------------

var json = {
    title: "Autonomous Vehicles",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start quiz by history. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "sensors",
                    title: "Which sensor doesn't need any more development?",
                    choices: [
                        "lidar", "image", "radar", "ultrasonic", "cloud"
                    ],
                    correctAnswer: "ultrasonic"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "sensors 2",
                    title: "Which sensor is the most effective in identifying objects?",
                    choicesOrder: "random",
                    choices: [
                        "lidar", "radar", "ultrasonic", "cloud", "image"
                    ],
                    correctAnswer: "lidar"
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "What is the Magna Carta?",
                    choicesOrder: "random",
                    choices: [
                        "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                    ],
                    correctAnswer: "The foundation of the British parliamentary system"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});

});
