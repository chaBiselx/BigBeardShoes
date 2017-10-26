const mongoose = require('mongoose');
const db = require('../db/db');

const shoesSchema = db.dbModels.Shoe;

const Shoes = mongoose.model('Shoes', shoesSchema);
module.exports = Shoes;

/*function listshoes() {
	return a list of all the shoes to be treated
}


*/

/*function getSize(shoe) {
	return the size of a shoe
}
*/
