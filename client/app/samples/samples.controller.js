"use strict";

var app = angular.module('projectsApp');

app.component('samples', {
  templateUrl: 'app/samples/samples.html',
  controller: 'SamplesCtrl'
});

app.controller('SamplesCtrl', function ($scope, $timeout) {

  $scope.samples = [
    {
      name: 'Javascript, ES6',
      value: 65
    },
    {
      name: 'Angular.js (1.5)',
      value: 75
    },
    {
      name: 'HTML5 (Jade)',
      value: 70
    },
    {
      name: 'CSS (Less)',
      value: 70
    },
    {
      name: 'Node.js, Express, MongoDB',
      value: 65
    }
  ];

  $timeout(function () {
    handleWorkPopup();

    // Init masonry
    var $container = $('.masonry-grid');
    $container.masonry({
      itemSelector: '.masonry-grid-item', // use a separate class for itemSelector, other than .col-
      columnWidth: '.masonry-grid-sizer',
      percentPosition: true
    });
  }, 100);

  function handleWorkPopup() {
    var overlay = $('.work-popup-overlay'),
      close = $('.work-popup-close'),
      trigger = $('.work-popup-trigger');

    trigger.on('click', function () {
      $(this).find('.work-popup-overlay').removeClass('work-popup-overlay-show');
      $(this).find('.work-popup-overlay').addClass('work-popup-overlay-show');
    });

    close.on('click', function (e) {
      e.stopPropagation();
      overlay.removeClass('work-popup-overlay-show');
    });
  }

});
