var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContractSchema = new Schema({
  start: Date,
  end: Date,
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  },
  lessor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lessor'
  }
});
module.exports = mongoose.model("Contract", ContractSchema);
