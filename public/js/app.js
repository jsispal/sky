var SkyApp = angular.module('SkyApp', ['ui.router', 'HomeController', 'ProductSelectionController', 'ConfirmationController', 'InitialiseDatabaseService', 'CatalogueService', 'CustomerService', 'LocationService', 'LocalstorageService'])

SkyApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: '/views/home.html',
    controller: 'HomeController'
  })

  .state('productselection', {
    url: '/productselection',
    templateUrl: '/views/product-selection.html',
    controller: 'ProductSelectionController'
  })

  .state('confirmation', {
    url: '/confirmation',
    templateUrl: '/views/confirmation.html',
    controller: 'ConfirmationController'
  })

});
