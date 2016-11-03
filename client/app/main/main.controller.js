'use strict';

angular.module('projectsApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    let wow = null;
    let progressBar = null;
    let layout = null;
    $timeout(function () {
      wow = MyWow();
      wow.init();
      progressBar = MyProgressBar();
      progressBar.init();
      layout = MyLayout();
      layout.init();
      $('.parallax-window').parallax({imageSrc: 'assets/images/1920x1080/01.jpg'});
    }, 100);
  });
