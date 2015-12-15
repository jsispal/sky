angular.module('HomeController', [])

.controller('HomeController', function($scope, $http, $state, InitialiseDatabaseService, CustomerService, $localstorage) {

  $scope.users = [];

  /**
  * When app is first run OR localstorage key 'appIsInitialised' has not yet been created
  * @property InitialiseDatabaseService.PopulateChannelsCollection: Service method prepares the DB and populates the Catalogue (stub data)
  * @property InitialiseDatabaseService.PopulateCustomerCollection: Service method prepares the DB and populates the Customer Directory (stub data)
  **/
  if (!$localstorage.get('appIsInitialised')) {
    InitialiseDatabaseService.PopulateChannelsCollection();
    InitialiseDatabaseService.PopulateCustomerCollection();
    $localstorage.set('appIsInitialised', true);
  }

  //Retrieve all Customers
  CustomerService.getAll().then(function(response) {
    $scope.users = response.data;
  }).catch(function(exception) {
    console.log("Caught: ", exception);
  });

  //Store selected user data in localstorage, so can provide product-selection view
  //locationID is empty as this is retrieved via the LocationService via ProductSelectionController
  $scope.selectUser = function(user) {
    $localstorage.setObject('CustomerDetails', {
      _id: user._id,
      customerID: user.customerID,
      locationID: ""
    });
    $state.go('productselection');
  }

});
