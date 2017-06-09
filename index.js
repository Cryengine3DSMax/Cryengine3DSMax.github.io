$(document).ready(function() {
  $(".button-collapse").sideNav();
  $(".title-text").animate({"opacity" : '1.0'}, 4000);
  $(".subtitle-text").animate({"opacity" : '1.0'}, 5000);
  $(".logo").animate({"opacity" : '1.0'}, 3000);
  scale()
  window.addEventListener('resize', scale);
  var animations = [
    {selector: ".about", offset: 500, callback: aboutAppear},
    {selector: ".skills", offset: 500, callback: skillsAppear},
    {selector: ".projects", offset: 500, callback: projAppear}
  ];
  Materialize.scrollFire(animations);
  $("#chrome").click(function() {
    window.open("https://www.flickr.com/gp/139923301@N05/D28L30", '_blank');
  });
  $("#sum").click(function() {
    window.open("http://devpost.com/software/succinct", '_blank');
  });
  $("#dico").click(function() {
    window.open("http://devpost.com/software/dico", '_blank');
  });
  $("#savior").click(function() {
    window.open("http://devpost.com/software/savior-ospjwh", '_blank');
  });
  $(".ironman").click(function() {
    window.open("https://www.flickr.com/gp/139923301@N05/npgr7x", '_blank');
  });
  $("#woxi").click(function() {
    window.open("https://devpost.com/software/woxi", '_blank');
  });
  $("#astro").click(function() {
    window.open("https://tinoastronomy.github.io/", '_blank');
  });
  /*$("#after").click(function() {
    window.open("https://www.flickr.com/gp/139923301@N05/npgr7x", '_blank');
  });*/
});

function aboutAppear() {
  $(".text-about").animate({"opacity" : '1.0', top : "0px"}, 1000);
  setTimeout(function() {
    $(".screen-shots").animate({"opacity" : '1.0', top : "0px"}, 1000);
  }, 500);
}

function skillsAppear() {
  $(".skl-title").animate({"opacity" : '1.0', top : "0px"}, 1000);
  setTimeout(function() {
    $(".prog").animate({"opacity" : '1.0', top : "0px"}, 1000);
  }, 500);
  setTimeout(function() {
    $(".des").animate({"opacity" : '1.0', top : "0px"}, 1000);
  }, 700);
  setTimeout(function() {
    $(".aca").animate({"opacity" : '1.0', top : "0px"}, 1000);
  }, 900);
}

function projAppear() {
  $(".proj-title").animate({"opacity" : '1.0', top : "0px"}, 1000);
  var i = 0;
  $(".project").each(function() {
    elem = this;
    fade(elem, i)
    i++;
  });
}

function fade(elem, idx) {
  setTimeout(function() {
    $(elem).animate({"opacity" : '1.0', top : "0px"}, 1000);
    console.log(elem);
  }, 500 + 100 * idx);
}

function scale() {
  w = $("#proj").width();
  var cusid_ele = document.getElementsByClassName('clear');
  for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];
    item.width = w;
  }
  var cusid_ele = document.getElementsByClassName('project');
  for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];
    item.setAttribute("style","height:"+ (w+10) +"px");
  }
  var cusid_ele = document.getElementsByClassName('blur');
  for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];
    item.width = w;
    item.height = w;
  }
}
