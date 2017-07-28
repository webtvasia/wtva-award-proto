var slide = $('.slider-single');
var slideTotal = slide.length - 1;
var slideCurrent = -1;
var timeRange = 24;

$(document).on('ready', function() {

  function slideInitial() {
    slide.addClass('proactivede');

    setTimeout(function() {
      slideRight();
    }, 500);

    window.setInterval(function(){
      var activeSlide = slide.eq(slideCurrent);
      var counter = activeSlide.find( "p" ).html();
      counter--;
      if(counter >= 0 ){
        activeSlide.find( "p" ).html(counter);
      } else {
        slideRight();
      }
    }, 1000);
  }

  function slideRight() {
    if (slideCurrent < slideTotal) {
      slideCurrent++;
    } else {
      slideCurrent = 0;
    }

    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
      if(slideCurrent == 1) {
        var preactiveSlide2 = slide.eq(slideTotal);
      } else {
        var preactiveSlide2 = slide.eq(slideCurrent - 2);
      }
    } else {
      var preactiveSlide = slide.eq(slideTotal);
      var preactiveSlide2 = slide.eq(slideTotal-1);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
      if ((slideCurrent + 1) == slideTotal) {
        var proactiveSlide2 = slide.eq(0);
      } else {
        var proactiveSlide2 = slide.eq(slideCurrent + 2);
      }
    } else {
      var proactiveSlide = slide.eq(0);
      var proactiveSlide2 = slide.eq(1);

    }

    slide.each(function() {
      var thisSlide = $(this);
      if (thisSlide.hasClass('preactivede')) {
        thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
      }
      if (thisSlide.hasClass('preactive')) {
        thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
      }

      if (thisSlide.hasClass('preactive2')) {
        thisSlide.removeClass('preactive2');
      }
      if (thisSlide.hasClass('proactive2')) {
        thisSlide.removeClass('proactive2');
      }
    });
    preactiveSlide2.removeClass('preactivede active proactive proactivede').addClass('preactive preactive2');
    preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active ');
    proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    proactiveSlide2.removeClass('preactivede preactive active proactivede').addClass('proactive proactive2');
    activeSlide.find( "p" ).html(timeRange);
    
    var videoURL = activeSlide.find("iframe").prop("src");
    videoURL += "&autoplay=1";
    activeSlide.find("iframe").prop('src',videoURL);

    videoURL = preactiveSlide.find("iframe").prop('src');
    videoURL = videoURL.replace("&autoplay=1", "");
    preactiveSlide.find("iframe").prop('src','');
    preactiveSlide.find("iframe").prop('src',videoURL);
  }

  function slideLeft() {
    if (slideCurrent > 0) {
      slideCurrent--;
    } else {
      slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
      if ((slideCurrent + 1) == slideTotal) {
        var proactiveSlide2 = slide.eq(0);
      } else {
        var proactiveSlide2 = slide.eq(slideCurrent + 2);
      }
    } else {
      var proactiveSlide = slide.eq(0);
      var proactiveSlide2 = slide.eq(1);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
      if (slideCurrent == 1) {
       var preactiveSlide2 = slide.eq(slideTotal);
      } else {
       var preactiveSlide2 = slide.eq(slideCurrent - 2);
      }
    } else {
      var preactiveSlide = slide.eq(slideTotal);
      var preactiveSlide2 = slide.eq(slideTotal - 1);
    }
    slide.each(function() {
      var thisSlide = $(this);
      if (thisSlide.hasClass('proactivede')) {
        thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
      }
      if (thisSlide.hasClass('proactive')) {
        thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
      }

      if (thisSlide.hasClass('preactive2')) {
        thisSlide.removeClass('preactive2');
      }
      if (thisSlide.hasClass('proactive2')) {
        thisSlide.removeClass('proactive2');
      }
    });
    preactiveSlide2.removeClass('preactivede active proactive proactivede').addClass('preactive preactive2');
    preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
    proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    proactiveSlide2.removeClass('preactivede preactive active proactivede').addClass('proactive proactive2');
    activeSlide.find( "p" ).html(timeRange);

    var videoURL = activeSlide.find("iframe").prop("src");
    videoURL += "&autoplay=1";
    activeSlide.find("iframe").prop('src',videoURL);

    videoURL = proactiveSlide.find("iframe").prop('src');
    videoURL = videoURL.replace("&autoplay=1", "");
    proactiveSlide.find("iframe").prop('src','');
    proactiveSlide.find("iframe").prop('src',videoURL);
  }

  var left = $('.slider-left');
  var right = $('.slider-right');
  left.on('click', function() {
    slideLeft();
  });
  right.on('click', function() {
    slideRight();
  });
  slideInitial();

  $("#join_24" ).click(function() {
    addVideo();
    $("#join_24" ).blur();
  });

  $( "#youtube_url" ).keydown(function() {
    $("#invalid-link").hide();
  });

  function addVideo() {
    var youtube_url = $('#youtube_url').val();
    if ((youtube_url.indexOf('www.youtube.com') > -1) && (youtube_url.indexOf('?') > -1) && (youtube_url.indexOf('v=') > -1)) {
        var first_cut = youtube_url.split("?");
        var second_cut = first_cut[1].split("&");
        $.each( second_cut, function( key, value ) {
          if (value.indexOf('v=') > -1){
            var video_id = value.split("=");
            var slider_single = "<div class=\"slider-single\">";
            slider_single += "<iframe class=\"slider-single-image\"  style=\"width:100%;\" src=\"https://www.youtube-nocookie.com/embed/"+video_id[1]+"?rel=0&amp;controls=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
            slider_single += "<p class=\"slider-single-download\"></p>";
            slider_single += "</div>";
            $(".slider-content").append(slider_single);
            
            var checkSlide = slide.eq(slideCurrent);
            videoURL = checkSlide.find("iframe").prop('src');
            videoURL = videoURL.replace("&autoplay=1", "");
            checkSlide.find("iframe").prop('src','');
            checkSlide.find("iframe").prop('src',videoURL);

            slide = $('.slider-single');
            slideTotal = slide.length - 1;
            slideCurrent = slideTotal - 1;

            slideRight();
            $('#youtube_url').val("");
            return;
          }
        });

    } else {
      $("#invalid-link").show();
    }
  }
});