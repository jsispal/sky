angular.module('CatalogueService', [])

.factory('CatalogueService', function($http) {
  return {
    get: function() {
      return $http.get('/api/channel');
    },
    getByLocation: function(locationID) {
      return $http.get('/api/channel/'+locationID);
    },
    create: function(channelData) {
      return $http.post('/api/channel', channelData)
    }
  }
});
