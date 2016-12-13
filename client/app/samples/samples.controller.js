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
      desc: 'Мобильное приложение для Windows Phone. Мобильное приложение на JavaME. Измерение текущего значения радиационного фона с помощью датчика, подключенного к смартфону. Более подробная информация на do-ra.ru',
      tags: ['windows-phone', 'C#', 'Silverlight'],
      year: 2011,
      customer: 'Интерсофт-Евразия'
    },
    {
      name: 'АРМ организации поставщика транспортных услуг',
      imgPath: 'assets/images/acceptant1.png',
      url: 'https://aza-acceptant.herokuapp.com/#/arm/accounting/stat-common-chart',
      desc: 'Мордовия, пилотный проект системы обработки ЕСЭК (Единой Социальной Электронной Карты) для транспортных приложений.',
      tags: ['angular.js', 'javascript', 'es6', 'jade', 'less', 'grunt', 'flexbox'],
      year: 2015,
      customer: 'Правительство Республики Мордовия'
    },
    {
      name: 'Безопасный Город',
      imgPath: 'assets/images/bg.png',
      url: 'https://www.microsoft.com/en-us/store/p/%d0%9c%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bc%d0%be%d0%bd%d0%b8%d1%82%d0%be%d1%80/9nblgggzjd45',
      desc: 'Приложение "Мобильный Монитор" для Windows Phone. Измерение различных параметров состояния окружающей среды с помощью датчиков, подключенных к смартфону.',
      tags: ['windows-phone', 'C#', 'Silverlight'],
      year: 2012,
      customer: 'ИТЦ Система-Саров'
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
