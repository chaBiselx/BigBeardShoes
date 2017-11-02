/**
 * GET /buy
 * List buy.
 */
 const Buy = require('../models/buy.js');

 exports.getBuy = (req, res) => {
   Buy.find((err, docs) => {
     res.render('buy', { buy: docs });
   });
 };
