/**
 * GET /shoes
 * List all shoes.
 */
const Shoes = require('../models/Shoes.js');

exports.getShoes = (req, res) => {
  Shoes.find((err, docs) => {
    res.render('shoes', { shoes: docs });
  });
};