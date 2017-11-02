const mongoose = require('mongoose');

const BuySchema = new mongoose.Schema({
  name: String
});

const Buy = mongoose.model('buy', BuySchema);
module.exports = Buy;
