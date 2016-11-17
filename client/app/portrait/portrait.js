'use strict';

angular.module('projectsApp')
  .controller('PortraitCtrl', function ($scope, $timeout) {
    $timeout(function () {
      $('.parallax-window').parallax({imageSrc: 'assets/images/portrait.jpg'});
    }, 100);
  })
  .component('portrait', {
    templateUrl: 'app/portrait/portrait.html',
    controller: 'PortraitCtrl'
  });

