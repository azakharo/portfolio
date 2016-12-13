"use strict";

var app = angular.module('projectsApp');

app.component('sampleItem', {
  templateUrl: 'app/samples/sampleItem.html',
  controller: 'SampleItemCtrl',
  bindings: {
    sample: '='
  }
});

app.controller('SampleItemCtrl', function () {
});
