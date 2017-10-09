const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
  name: String
});

const Shoes = mongoose.model('Shoes', shoesSchema);
module.exports = Shoes;