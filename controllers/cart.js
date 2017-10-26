const Shoes = require('../models/Cart.js');




exports.getCart = (req, res) => {
  Shoes.find((err, docs) => {
    res.render('cart', { cart: docs });
  });
};