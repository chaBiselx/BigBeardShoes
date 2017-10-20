var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoeBrandSchema = new Schema({
  brand: String
});
module.exports = mongoose.model("ShoeBrand", ShoeBrandSchema);
