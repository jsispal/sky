angular.module('ConfirmationController', [])

.controller('ConfirmationController', function($scope, $http, $localstorage) {
  $scope.init = function() {
    if ($localstorage.checkIfExists('basket')) {
      try {
        $scope.channels = $localstorage.getObject('basket');
        $scope.customer = $localstorage.getObject('CustomerDetails');
      } catch (exception) {
        console.log(exception);
      }
    } else {
      console.log('Basket is empty')
    }
  };

  $scope.init();
});
