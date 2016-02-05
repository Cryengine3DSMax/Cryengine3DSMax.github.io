var ref = new Firebase("https://projectsdata.firebaseio.com/");
var app = angular.module('angApp', []);

app.controller('ctrl', function($scope) {
  var url = window.location.href;
  var ind = url.indexOf("title");
  var proj = url.substring(ind + 6, url.length);
  ref.child(proj).on("value", function(snapshot) {
    $scope.project = snapshot.val();
    //console.log(snapshot.val());
    $scope.$apply();
  });
  ref.child(proj).child("imgs").on("value", function(snapshot) {
    var imageList = snapshot.val();
    imageList.splice(0, 1);
    $scope.imgList = imageList;
    console.log(imageList[0]);
    $scope.$apply();
    $('.slider').slider();
    var x = $('.head').css("height");
    console.log(x);
  });
});

$(document).ready(function() {
});
