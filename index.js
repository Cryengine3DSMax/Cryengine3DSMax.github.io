var aspect = 1.15;
var animDone = true;
var projects = ["#chrome", "#skies", "#chem", "#cap", "#motion", "#sum", "#dico", "#mandelbrot"];
var i = 0;

$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  scale();
  $(".nam").animate({opacity: "1"}, 3000);
  $(".sub").animate({opacity: "1"}, 5000);
  $(window).resize(function() {
    scale();
  });
  var animations = [
    {selector: "#webdev", offset: 200, callback: 'web()'},
    {selector: "#gamedev", offset: 200, callback: 'game()'},
    {selector: "#appdev", offset: 200, callback: 'code()'},
    {selector: "#projects", offset: 400, callback: 'setInterval(pop, 100)'},
  ];

  Materialize.scrollFire(animations);

  $(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if(scroll >= 20 && animDone) {
      animDone = false;
      $("nav").stop().animate({backgroundColor: "rgba(50, 50, 50, 1)"}, 700);
		} else if(scroll < 20 && !animDone) {
      animDone = true;
      $("nav").stop().animate({backgroundColor: "transparent"}, 700);
    }
	});
  $("#chrome").mouseenter(function() {
    $("#chrome .name").stop().animate({opacity: "1", top: "-10px"}, 500);
  });
  $("#chrome").mouseleave(function() {
    $("#chrome .name").stop().animate({opacity: "0", top: "0px"}, 500);
  });
  $("#chrome").click(function() {
    window.open("https://www.flickr.com/gp/139923301@N05/D28L30", '_blank');
  });
  $("#skies").mouseenter(function() {
    $("#skies .name").stop().animate({opacity: "1", top: "-10px"}, 500);
  });
  $("#skies").mouseleave(function() {
    $("#skies .name").stop().animate({opacity: "0", top: "0px"}, 500);
  });
  $("#skies").click(function() {
    window.open("https://www.flickr.com/gp/139923301@N05/G84u9b", '_blank');
  });
  $("#cap").mouseenter(function() {
    $("#cap .name").stop().animate({opacity: "1", top: "-10px"}, 500);
  });
  $("#cap").mouseleave(function() {
    $("#cap .name").stop().animate({opacity: "0", top: "0px"}, 500);
  });
  $("#cap").click(function() {
    window.open("https://www.flickr.com/gp/139923301@N05/4Ybs8w", '_blank');
  });
  $("#chem").mouseenter(function() {
    $("#chem .name").stop().animate({opacity: "1", top: "-10px"}, 500);
  });
  $("#chem").mouseleave(function() {
    $("#chem .name").stop().animate({opacity: "0", top: "0px"}, 500);
  });
  $("#chem").click(function() {
    window.open("https://www.flickr.com/gp/139923301@N05/Xs2c97", '_blank');
  });
  $("#motion").mouseenter(function() {
    $("#motion .name").stop().animate({opacity: "1", top: "-10px"}, 500);
  });
  $("#motion").mouseleave(function() {
    $("#motion .name").stop().animate({opacity: "0", top: "0px"}, 500);
  });
  $("#motion").click(function() {
    window.open("https://www.flickr.com/gp/139923301@N05/62j32J", '_blank');
  });
  $("#sum").mouseenter(function() {
    $("#sum .name").stop().animate({opacity: "1", top: "-10px"}, 500);
  });
  $("#sum").mouseleave(function() {
    $("#sum .name").stop().animate({opacity: "0", top: "0px"}, 500);
  });
  $("#sum").click(function() {
    window.open("http://devpost.com/software/succinct", '_blank');
  });
  $("#dico").mouseenter(function() {
    $("#dico .name").stop().animate({opacity: "1", top: "-10px"}, 500);
  });
  $("#dico").mouseleave(function() {
    $("#dico .name").stop().animate({opacity: "0", top: "0px"}, 500);
  });
  $("#dico").click(function() {
    window.open("http://devpost.com/software/dico", '_blank');
  });
  $("#mandelbrot").mouseenter(function() {
    $("#mandelbrot .name").stop().animate({opacity: "1", top: "-10px"}, 500);
  });
  $("#mandelbrot").mouseleave(function() {
    $("#mandelbrot .name").stop().animate({opacity: "0", top: "0px"}, 500);
  });
  $("#mandelbrot").click(function() {
    window.open("https://www.flickr.com/gp/139923301@N05/z6FjLg", '_blank');
  });
  /*$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});*/
});

function scale() {
  if($(window).width()/$(window).height() >= aspect) {
    $(".header").css("background-size", "100vw auto");
    $(".skill").css("width", "100vw");
    $(".skill").css("height", "auto");
  } else {
    $(".header").css("background-size", "auto 100vh");
    $(".skill").css("width", "auto");
    $(".skill").css("height", "100vh");
  }
  if ($(window).width()/$(window).height() >= 1.5) {
    $(".contact").css("background-size", "100vw auto");
  } else {
    $(".contact").css("background-size", "auto 100vh");
  }
}

function web() {
  $(".web h1").animate({opacity: "1"}, 300);
  Materialize.showStaggeredList("#webdev");
  $(".web img").animate({opacity: "1"}, 500);
}

function game() {
  $(".gdesign h1").animate({opacity: "1"}, 300);
  Materialize.showStaggeredList("#gamedev");
  $(".gdesign img").animate({opacity: "1"}, 500);
}

function code() {
  $(".coding h1").animate({opacity: "1"}, 300);
  Materialize.showStaggeredList("#appdev");
  $(".coding img").animate({opacity: "1"}, 500);
}

function pop() {
  if(i < projects.length) {
    $(projects[i]).addClass("animated pulse");
    i++;
  } else {
    clearInterval(pop);
  }
}
