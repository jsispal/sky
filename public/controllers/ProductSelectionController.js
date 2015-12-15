angular.module('ProductSelectionController', [])

.controller('ProductSelectionController', function($scope, $http, $state, CatalogueService, CustomerService, LocationService, $localstorage, $filter) {

  $scope.channels = {
    news: [],
    sport: []
  };

  $scope.basket = {
    channels: []
  }

  $scope.init = function() {

    if ($localstorage.checkIfExists('CustomerDetails')) {
      try {
        //Store the localstorage CustomerDetails object in the $scope object
        $scope.CustomerDetails = $localstorage.getObject('CustomerDetails');

        //Send customerID to locationService to retrieve current customer'S locationID
        LocationService.getCustomerLocationID($scope.CustomerDetails.customerID).then(function(response) {

          //Update the locationID property on the $scope with the current customer's locationID
          $scope.CustomerDetails.locationID = _.first(response.data).locationID;

          //Update the localstorage CustomerDetails object with the $scope CustomerDetails object (containing the current customer' locationID)
          $localstorage.setObject('CustomerDetails', $scope.CustomerDetails);

          //Retrieve Channels based on the retrieved customer location ID
          CatalogueService.getByLocation($scope.CustomerDetails.locationID).then(function(response) {
            _.each(response.data, function(val, key) {
              if (val.category == "SPORT") {
                $scope.channels.sport.push(val);
              } else if (val.category == "NEWS") {
                $scope.channels.news.push(val);
              }
            });
          }).catch(function(error) {
            console.log("Error: CatalogueService.getByLocation()", error);
          });

        }).catch(function(error) {
          console.log('Error: LocationService.getCustomerLocation()', error);
        });
      } catch (exception) {
        console.log(exception);
      }
    } else {
      console.log('Customer Object Was Not Found!')
    }

  };

  $scope.selectedChannels = function(channel) {
    //Check if selected channel is currently stored within the basket.channels array
    var channelAlreadyInBasket = _.contains($scope.basket.channels, channel);

    //Set the basketChannels model for checked channel
    $scope.basketChannels = $filter('filter')($scope.basket.channels, {
      checked: true
    });

    //If channel not in basket.channels array, push in then set the basketChannels model for checked channel
    if (!channelAlreadyInBasket) {
      $scope.basket.channels.push(channel);
      $scope.basketChannels = $filter('filter')($scope.basket.channels, {
        checked: true
      });
    }

  };

  $scope.checkout = function() {
    $localstorage.setObject('basket', $scope.basketChannels);
    $state.go('confirmation');
  };

  $scope.init();
});
