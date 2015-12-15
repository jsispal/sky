/**
 * ChannelSchema defines the structure of the Channel collection.
 * @property product: String defining the name of the catalogue channel (e.g - Sky News)
 * @property category: String defining the type of category the channel lies within (e.g - News)
 * @property locationID: String defining the location constraint for the channel (e.g - London)
**/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChannelSchema = new Schema({
  product: String,
  category: String,
  locationID: String
});

module.exports = mongoose.model('Channel', ChannelSchema);
