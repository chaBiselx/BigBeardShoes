var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  first_name: String,
  last_name: String,
  shoe_size: [Number, Number],
  coord_long: Number,
  coord_lat: Number
});
module.exports = mongoose.model("User", UserSchema);
