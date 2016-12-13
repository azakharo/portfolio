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
    },
    {
      name: 'ДО-РА, мобильный дозиметр-радиометр',
      imgPath: 'assets/images/dora.png',
      url: 'http://www.windowsphone.com/ru-ru/store/app/do-ra/237e80e8-e719-4fcf-a824-db7db15c129f',
      desc: 'Мобильное приложение для Windows Phone. Мобильное приложение на JavaME. Более подробная информация на do-ra.ru',
      tags: ['windows-phone', 'C#', 'Silverlight'],
      year: 2011,
      customer: 'Интерсофт-Евразия'
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
