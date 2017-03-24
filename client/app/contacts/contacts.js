"use strict";

var app = angular.module('projectsApp');

app.component('contacts', {
  templateUrl: 'app/contacts/contacts.html',
  controller: 'ContactsCtrl'
})
  .controller('ContactsCtrl', function () {
    this.resumeUrl = resumeUrl;
  });
