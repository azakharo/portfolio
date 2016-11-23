"use strict";

var app = angular.module('projectsApp');

app.component('about', {
  templateUrl: 'app/about/about.html',
  controller: 'AboutCtrl'
});

app.controller('AboutCtrl', function ($scope, $timeout) {
  $timeout(function () {
    $('.progress').each(function () {
      $(this).appear(function () {
        $(this).animate({
          opacity: 1,
          left: "0px"
        }, 800);
        var w = $(this).find(".progress-bar").attr("data-width");
        var h = $(this).find(".progress-bar").attr("data-height");
        $(this).find(".progress-bar").animate({
          width: w + "%",
          height: h + "%"
        }, 100, "linear");
      });
    });
  }, 100);
});
