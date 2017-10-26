var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoeModelSchema = new Schema({
  shoeModelName: String,
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShoeBrand'
  }
});
module.exports = mongoose.model("ShoeModel", ShoeModelSchema);
