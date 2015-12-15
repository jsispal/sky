/****************
 * API ROUTES
*****************/

var express = require('express');
var router = express.Router();

//Load in the Models
var Channel = require('../models/channel');
var Customer = require('../models/customer');

// Test Route
router.get('/', function(req, res) {
  res.json({
    message: 'SKY Catalogue Application. API V1'
  });
});


/****************
 * ROUTES
*****************/

/**
 * CHANNEL ROUTE
 * Recieves Channel POST data and creates new document within the collection and returns all channels from the DB
 * @var _channel: new instance of the model: Channel
 * @param response: contains an object encapsulating all channels within the Channel collections
 * @param request: contains post data required to construct to insert the new document
**/
router.route('/channel').post(function(request, response) {
  var _channel = new Channel();
  _channel.product = request.body.product;
  _channel.category = request.body.category;
  _channel.locationID = request.body.locationID;

  _channel.save(function(err) {
    if (err) {
      response.send(err);
    }
    Channel.find(function(err, channels) {
      if (err) {
        response.send(err);
      }
      response.json(channels);
    })
  });
})

/**
 * CHANNEL ROUTE
 * Returns all channels within the DB
 * @param response: contains an object encapsulating all retrieved channels within the Channel collections
**/
router.route('/channel').get(function(request, response) {
  Channel.find(function(err, channels) {
    if (err) {
      response.send(err);
    }
    response.json(channels);
  })
})

/**
 * CHANNEL ROUTE
 * Returns channels containing a specific location constraint
 * @param response: contains an object encapsulating all retrieved channels within the Channel collections
 * @param find: locates channels matching the params.locationID as well as those with no specified locationID
**/
router.route('/channel/:locationID').get(function(request, response) {
  Channel.find({
    $and: [{
      $or: [{
        locationID: request.params.locationID
      }, {
        locationID: ""
      }]
    }]
  }, function(err, channels) {


    if (err) {
      return response.send(err);
    }
    response.json(channels);
  });
})

/**
 * CUSTOMER ROUTE
 * @var _customer: new instance of the model: Customer
 * @param request: contains post data required to construct to insert the new document
 * @param response: contains an object encapsulating all channels within the Customer collection
**/
router.route('/customer').post(function(request, response) {
  var _customer = new Customer();
  _customer.customerID = request.body.customerID;
  _customer.locationID = request.body.locationID;

  _customer.save(function(err) {
    if (err) {
      response.send(err);
    }
    Customer.find(function(err, customer) {
      if (err) {
        response.send(err);
      }
      response.json(customer);
    })
  });
})

/**
 * CUSTOMER ROUTE
 * Returns all customers within the DB
 * @param response: contains an object encapsulating all retrieved customers within the customer collections
**/
router.route('/customer').get(function(request, response) {
  Customer.find(function(err, customer) {
    if (err) {
      response.send(err);
    }
    response.json(customer);
  })
})

/**
 * CUSTOMER ROUTE
 * Returns all customers with a specific customer ID
 * @param response: contains an object encapsulating all retrieved customers within the customer collections
**/
router.route('/customer/:customerID').get(function(request, response) {
  Customer.find({
    'customerID': request.params.customerID
  }, function(err, customer) {
    if (err) {
      return response.send(err);
    }
    response.json(customer);
  });
})

/**
 * LOCATION ROUTE
 * Returns all locationID for a user using their customerID
 * @param response: contains an object encapsulating the retrieved location for the specific customer
**/
router.route('/location/:customerID').get(function(request, response) {
  Customer.find({
    'customerID': request.params.customerID
  }, {
    customerID: 0,
    _id: 0
  }, function(err, customer) {
    if (err) {
      return response.send(err);
    }
    response.json(customer);
  });
})


module.exports = router;
