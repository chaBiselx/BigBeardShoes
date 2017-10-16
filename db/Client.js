var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
  first_name: String,
  last_name: String,
  shoe_size: Number,
  coord_long: Number,
  coord_lat: Number
});
module.exports = mongoose.model("Client", ClientSchema);
