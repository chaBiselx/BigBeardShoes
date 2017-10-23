const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
  name: String
});

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