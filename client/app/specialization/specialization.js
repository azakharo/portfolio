'use strict';

angular.module('projectsApp')
  .component('specialization', {
    templateUrl: 'app/specialization/specialization.html',
    controller: 'SpecializationCtrl'
  })
  .controller('SpecializationCtrl', function () {
    this.resumeUrl = 'http://nn.hh.ru/resume/90742300ff0355cb510039ed1f41726d417476';
  });
