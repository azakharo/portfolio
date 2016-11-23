'use strict';

angular.module('projectsApp')
  .component('specialization', {
    templateUrl: 'app/specialization/specialization.html',
    controller: 'SpecializationCtrl'
  })
  .controller('SpecializationCtrl', function ($scope, MyConstants) {
    $scope.resumeUrl = MyConstants.resumeUrl;
  });
