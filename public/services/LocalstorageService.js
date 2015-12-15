angular.module('LocalstorageService', [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },
    deleteObject: function(key) {
      $window.localStorage.removeItem(key);
    },
    appendToKey: function(key, value) {
      var arr = [];
      var current_items = JSON.parse($window.localStorage[key] || '{}');
      var new_items = value;

      for (i = 0; i < current_items.length; i++) {
        arr.push(current_items[i]);
      }
      arr.push(new_items);
      $window.localStorage[key] = JSON.stringify(arr);
    },
    checkIfExists: function(key) {
      var object = $window.localStorage.getItem(key);
      if (object === undefined || object === null || object.length === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}]);
