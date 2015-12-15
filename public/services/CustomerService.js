angular.module('CustomerService', [])

.factory('CustomerService', function($http) {
  return {
    getAll: function() {
      return $http.get('/api/customer');
    },
    getById: function(customerID) {
      return $http.get('/api/customer/'+customerID);
    },
    create: function(customerData) {
      return $http.post('/api/customer', customerData);
    }
  }
});
