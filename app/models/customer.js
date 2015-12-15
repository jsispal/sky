/**
 * CustomerSchema defines the structure of the Customer collection.
 * @property customerID: String defining the customer identifier
 * @property category: String defining the location constraint of the user (e.g - London)
**/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  customerID: String,
  locationID: String
});

module.exports = mongoose.model('Customer', CustomerSchema);
