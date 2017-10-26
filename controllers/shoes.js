/**
 * GET /shoes
 * List all shoes.
 */
const ShoeBrand = require('../models/ShoeBrand.js');
const ShoeModel = require('../models/ShoeModel.js');
// TODO currently only list the models, not the actual shoes



exports.addShoes = (req, res) => {
  Shoes.find((err, docs) => {
    res.render('sellshoes', { sellshoes: docs });
  });
};


exports.getShoes = (req, res) => {
  Shoes.find((err, docs) => {
    res.render('shoes', { shoes: docs });
  });
};