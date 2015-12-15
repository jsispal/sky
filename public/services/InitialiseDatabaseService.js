angular.module('InitialiseDatabaseService', [])

.service('InitialiseDatabaseService', function($http, CatalogueService, CustomerService, $localstorage) {

  var PopulateChannelsCollection = function() {
    //Channel data array object
    var stagingData = [{
      product: "Arsenal TV",
      category: "SPORT",
      locationID: "LONDON"
    }, {
      product: "Chelsea TV",
      category: "SPORT",
      locationID: "LONDON"
    }, {
      product: "Liverpool TV",
      category: "SPORT",
      locationID: "LIVERPOOL"
    }, {
      product: "Sky News",
      category: "NEWS",
      locationID: ""
    }, {
      product: "Sky Sports News",
      category: "NEWS",
      locationID: ""
    }];

    //Loop through the channels array object
    for (var j = 0; j < stagingData.length; j++) {
      //For each iteration, create a new single object containing the single iteration object data
      var this_StagingData = {
          product: stagingData[j].product,
          category: stagingData[j].category,
          locationID: stagingData[j].locationID
        }
        //Call the Channel factory and create a new document within the collection
      CatalogueService.create(this_StagingData);
    }
  };
  var PopulateCustomerCollection = function() {
    //Customer data array object
    var stagingData = [{
      customerID: "JS12345678",
      locationID: "LONDON"
    }, {
      customerID: "RS12345678",
      locationID: "LIVERPOOL"
    }];

    //Loop through the customers array object
    for (var j = 0; j < stagingData.length; j++) {
      //For each iteration, create a new single object containing the single iteration object data
      var this_StagingData = {
          customerID: stagingData[j].customerID,
          locationID: stagingData[j].locationID
        }
        //Call the Customer factory and create a new document within the collection
      CustomerService.create(this_StagingData);
    }
  };

  return {
    PopulateChannelsCollection: PopulateChannelsCollection,
    PopulateCustomerCollection: PopulateCustomerCollection
  };
});
