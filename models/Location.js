const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  name: String
});

const Location = mongoose.model('Location', LocationSchema);
module.exports = Location;
