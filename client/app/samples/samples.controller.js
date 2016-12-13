"use strict";

var app = angular.module('projectsApp');

app.component('samples', {
  templateUrl: 'app/samples/samples.html',
  controller: 'SamplesCtrl'
});

app.controller('SamplesCtrl', function ($timeout) {

  this.samples = [
    {
      name: 'Dashboard',
      imgPath: 'assets/images/dashboard.png',
      url: 'https://dashboard-page2.herokuapp.com',
      desc: 'Мордовия, пилотный проект системы обработки ЕСЭК (Единой Социальной Электронной Карты) для транспортных приложений.',
      tags: ['angular.js', 'javascript', 'es6', 'jade', 'less', 'grunt', 'flexbox'],
      year: 2015,
      customer: 'Правительство Республики Мордовия'
    },
    {
      name: 'Мониторинг оборудования на автобусах/троллейбусах',
      imgPath: 'assets/images/uptime.png',
      url: 'https://aza-uptime.herokuapp.com',
      desc: 'Мордовия, пилотный проект системы обработки ЕСЭК (Единой Социальной Электронной Карты) для транспортных приложений.',
      tags: ['angular.js', 'javascript', 'es6', 'jade', 'less', 'grunt', 'flexbox'],
      year: 2015,
      customer: 'Правительство Республики Мордовия'
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
