describe('Testing the CatalogueService', function() {
  var CatalogueService;

  beforeEach(function() {

    module('CatalogueService');

    inject(function(_CatalogueService_) {
      CatalogueService = _CatalogueService_;
    });

  });

  it('Should have a get function to retrieve all catalogue items', function() {
    expect(angular.isFunction(CatalogueService.get)).toBe(true);
  });

  it('Should have a get by location function to retrieve all catalogue items by location id', function() {
    expect(angular.isFunction(CatalogueService.getByLocation)).toBe(true);
  });

  it('Should have a creaate function to create a new catalogue item', function() {
    expect(angular.isFunction(CatalogueService.create)).toBe(true);
  });

  it('should return all catalogue items in an object', function() {
    var result = CatalogueService.get();
    expect(result).toEqual(jasmine.any(Object));
  });

  it('should return all catalogue items with a specific location id', function() {
    var locationID = "LONDON";
    var result = CatalogueService.getByLocation(locationID);
    expect(result).toEqual(jasmine.any(Object));
  });

  it('should return all catalogue items with a specific location id', function() {
    var channelData = {productID:"Arsenal TV", category:"SPORT", locationID:"LONDON"};
    var result = CatalogueService.create(channelData);
    expect(result).toEqual(jasmine.any(Object));
  });

});
