const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const db = require('./db');



dotenv.load({ path: '.env' });
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true,
  ssl: true,
  sslCA: [fs.readFileSync('./sslCert.crt')]
});
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

mongoose.connection.on('open', (err) => {
  console.log('connected to DB');
  // for (model in db.dbModels) {
  //   model.
  // }
  testInsert();
})

function testInsert() {
  let ShoeBrand = db.dbModels.ShoeBrand;
  let ShoeModel = db.dbModels.ShoeModel;
  let brands = ['PORTWEST', 'DIADORA', 'COFRA', 'HECKEL', 'Kapriol', 'DiKE'];
  for (let i = 0; i < brands.length ; i++) {
    var shoeBrand = new ShoeBrand({
      brand: brands[i]
    });
    shoeBrand.save();
    for (let j = 1; j <= 10; j++) {
      var shoeModel = new ShoeModel({
        model: brands[i] + ' ' + j,
        brand: shoeBrand._id
      });
      shoeModel.save();
    }
  }
}
