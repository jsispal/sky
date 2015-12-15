angular.module('LocationService', [])

.factory('LocationService', function($http) {
  return {
    getCustomerLocationID: function(customerID) {
      return $http.get('/api/location/'+customerID);
    }
  }
});
