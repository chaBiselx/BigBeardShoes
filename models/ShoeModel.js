var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoeModelSchema = new Schema({
  shoeModelName: String,
  brand: String
});
module.exports = mongoose.model("ShoeModel", ShoeModelSchema);
