/**
 * GET /location
 * List all location.
 */
const Location = require('../models/Location.js');

exports.getLocation = (req, res) => {
  Location.find((err, docs) => {
    res.render('location', { location: docs });
  });
};
