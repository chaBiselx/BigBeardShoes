var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContractSchema = new Schema({
  start: Date,
  end: Date,
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lessor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
module.exports = mongoose.model("Contract", ContractSchema);
