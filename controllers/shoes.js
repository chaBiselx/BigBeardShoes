/**
 * GET /shoes
 * List all shoes.
 */
const ShoeBrand = require('../models/ShoeBrand.js');
const ShoeModel = require('../models/ShoeModel.js');
// TODO currently only list the models, not the actual shoes

exports.getShoes = (req, res) => {
  ShoeModel.find({}).populate('brand').exec(function(err, docs) {
    res.render('shoes', { shoes: docs });
  });
};

exports.addShoes = (req, res) => {
  Shoes.find((err, docs) => {
    res.render('shoes', { shoes: docs });
  });
};