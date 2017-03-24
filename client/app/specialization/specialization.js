'use strict';

angular.module('projectsApp')
  .component('specialization', {
    templateUrl: 'app/specialization/specialization.html',
    controller: 'SpecializationCtrl'
  })
  .controller('SpecializationCtrl', function () {
    this.resumeUrl = resumeUrl;
  });
