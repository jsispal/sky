describe('Testing the LocationService', function() {
  var LocationService;

  beforeEach(function() {

    module('LocationService');

    inject(function(_LocationService_) {
      LocationService = _LocationService_;
    });

  });

  it('Should have a get customer location id function', function() {
    expect(angular.isFunction(LocationService.getCustomerLocationID)).toBe(true);
  });

  it('should return a single object containing the customer\'s locationID', function() {
    var customerID = "JS12345678";
    var result = LocationService.getCustomerLocationID(customerID);
    expect(result).toEqual(jasmine.objectContaining({
      locationID
    }))
  });

});
