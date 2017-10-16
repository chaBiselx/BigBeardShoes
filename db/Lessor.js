var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LessorSchema = new Schema({
  name: String,
  coord_long: Number,
  coord_lat: Number
});
module.exports = mongoose.model("Lessor", LessorSchema);
