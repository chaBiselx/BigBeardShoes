var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfferSchema = new Schema({
  lessor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  shoe_model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShoeModel'
  },
  type: String, // daily/monthly/yearly
  price: Number
});
module.exports = mongoose.model("Offer", OfferSchema);
