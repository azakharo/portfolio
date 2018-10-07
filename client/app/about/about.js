"use strict";

var app = angular.module('projectsApp');

app.component('about', {
  templateUrl: 'app/about/about.html',
  controller: 'AboutCtrl'
});

app.controller('AboutCtrl', function ($scope, $timeout) {

  $scope.skills = [
    {
      name: 'Javascript, ES6, 7, 8... Babel, Webpack',
      value: 90
    },
    {
      name: 'React.js, Redux, redux-thunk, redux-saga',
      value: 85
    },
    {
      name: 'Vue, vuex',
      value: 65
    },
    {
      name: 'AngularJS',
      value: 75
    },
    {
      name: 'HTML, Pug',
      value: 80
    },
    {
      name: 'CSS, Less, PostCSS',
      value: 80
    },
    {
      name: 'Responsive layout, Flexbox, CSS Grid',
      value: 85
    },
    {
      name: 'Node.js, Express.js, MongoDB',
      value: 75
    }
  ];

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
