var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbModels = {};

dbModels.Contract = require('./Contract.js');
dbModels.Offer = require('./Offer.js');
dbModels.ShoeModel = require('./ShoeModel.js');
dbModels.Shoe = require('./Shoe.js');
dbModels.User = require('./User.js');

exports.dbModels = dbModels;
