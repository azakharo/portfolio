"use strict";

var app = angular.module('projectsApp');

app.component('samples', {
  templateUrl: 'app/samples/samples.html',
  controller: 'SamplesCtrl'
});

app.controller('SamplesCtrl', function ($timeout) {

  this.samples = [
    {
      name: 'Новая консоль управления Облака КРОК',
      imgPath: 'assets/images/c2-ui-demo.png',
      url: 'https://www.loom.com/share/68b021f3378b4d56a37df0957fe32291',
      desc: 'Frontend на React.js, Redux. Интерфейс для управления ресурсами в облаке: создание виртуальных машин, управление дисками, выделение машинам "белых" IP-шников, организация подсетей, управление доступом и многое другое',
      tags: ['React.js', 'Redux', 'redux-thunk', 'Babel', 'Webpack', 'axios', 'i18next', 'postcss', 'eslint', 'prettier', 'recharts', 'dnd', 'jest', 'puppeteer', 'day.js', 'formik + yup'],
      year: 2019,
      customer: 'КРОК'
    },
    {
      name: 'Сервис Речевой Аналитики',
      imgPath: 'assets/images/mentor.png',
      url: 'https://mentor-demo.herokuapp.com/',
      desc: 'Frontend на React.js, Redux, RxJS. Прослушивание записей телефонных переговоров, просмотр и изучение результатов анализа речи. Wave-форма, тайм-лайны.',
      tags: ['React.js', 'Redux', 'RxJS', 'es6', 'Webpack', 'create-react-app'],
      year: 2017,
      customer: 'ИТЦ Система-Саров'
    },
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
      name: 'Панель тревог',
      imgPath: 'assets/images/alarm-panel.png',
      url: resumeUrl,
      desc: 'Проект "Акустический мониторинг".',
      tags: ['angular.js', 'javascript', 'es6', 'jade', 'less', 'grunt', 'flexbox', 'node.js', 'express.js', 'mongodb', 'socket.io'],
      year: 2016,
      customer: 'Муниципалитеты городов Воронеж, Кострома, Архангельск, Калуга, Московский ЦОДД'
    },
    {
      name: 'Detector UI',
      imgPath: 'assets/images/detector_ui.png',
      url: resumeUrl,
      desc: 'Проект "Акустический мониторинг". Административный интерфейс для управления настройками акустического детектора, аналогичный интерфейсу управления обычным WiFi-роутером. А также back-end.',
      tags: ['angular.js', 'javascript', 'grunt', 'flexbox', 'node.js', 'express.js', 'coffeescript', 'socket.io'],
      year: 2015,
      customer: 'Муниципалитеты городов Воронеж, Кострома, Архангельск, Калуга, Московский ЦОДД'
    },
    {
      name: 'CO2',
      imgPath: 'assets/images/co2.png',
      url: resumeUrl,
      desc: 'Проект "Мониторинг содержания CO2 в воздухе офиса". Front-end and back-end (angular, node).',
      tags: ['angular.js', 'javascript', 'es6', 'flexbox', 'grunt', 'node.js', 'express.js', 'socket.io'],
      year: 2016,
      customer: 'ИТЦ Система-Саров'
    },
    {
      name: 'Безопасный Город',
      imgPath: 'assets/images/bg.png',
      url: 'https://www.microsoft.com/en-us/store/p/%d0%9c%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bc%d0%be%d0%bd%d0%b8%d1%82%d0%be%d1%80/9nblgggzjd45',
      desc: 'Приложение "Мобильный Монитор" для Windows Phone. Измерение различных параметров состояния окружающей среды с помощью датчиков, подключенных к смартфону.',
      tags: ['windows-phone', 'C#', 'Silverlight'],
      year: 2012,
      customer: 'ИТЦ Система-Саров'
    },
    {
      name: 'Система интернет-голосования Votum',
      imgPath: 'assets/images/votum.png',
      url: 'http://sarov-itc.ru/projects/51765498140ba0a1440000cd/',
      desc: 'Распределенная система дистанционного электронного голосования с использованием нескольких каналов передачи информации (WEB, SMS, e-mail) и архитектурой SOA (Service Oriented Architecture).',
      tags: ['Django', 'Python', 'Django REST Framework'],
      year: 2011,
      customer: 'ЦИК РФ'
    },
    {
      name: 'Веб-сервис для распознавания русской речи',
      imgPath: 'assets/images/asr.png',
      url: 'http://asr.sarov-itc.ru/',
      desc: 'ASR (Automatic Speech Recognition) HTTP. HTTP-интерфейс к распознавателю речи, который разрабатывался в «ИТЦ Система-Саров»',
      tags: ['Django', 'Python'],
      year: 2011,
      customer: 'ИТЦ Система-Саров'
    }
  ];

  $timeout(function () {
    handleWorkPopup();

    // Init masonry
    //var $container = $('.masonry-grid');
    //$container.masonry({
    //  itemSelector: '.masonry-grid-item', // use a separate class for itemSelector, other than .col-
    //  columnWidth: '.masonry-grid-sizer',
    //  percentPosition: true
    //});
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
