/**
 * GET /shoes
 * List all shoes.
 */
const Shoes = require('../models/Shoes.js');



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