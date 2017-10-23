var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoeSchema = new Schema({
  model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShoeModel'
  },
  lessor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  size: [Number, Number]
});
module.exports = mongoose.model("Shoe", ShoeSchema);
