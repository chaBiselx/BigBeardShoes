/**
 * GET /shoes
 * List all shoes.
 */
const ShoeModel = require('../models/ShoeModel.js');
const Shoe = require('../models/Shoe.js');

exports.getShoes = (req, res) => {
  Shoe.find({}).populate('model').exec((err, docs) => {
    console.log(docs);
    res.render('shoes', { shoes: docs });
  });
};

exports.addShoes = (req, res) => {
  Shoe.find({}).populate('model').exec((err, docs) => {
    res.render('shoes', { shoes: docs });
  });
};

