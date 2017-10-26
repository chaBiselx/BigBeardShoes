const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');

var Contract = require('./Contract.js');
var Offer = require('./Offer.js');
var ShoeModel = require('./ShoeModel.js');
var Shoe = require('./Shoe.js')
var User = require('./User.js');



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
  // testInsert();
  testGet();
})

function testInsert() {
  let ObjectId = require('mongoose').Types.ObjectId;
  let lessor;
  User.findOne({_id: new ObjectId("59eddf4893bcec1704ba3c22")}, (err, user) => {
    lessor = user;
  });
  let counter = 0;
  let sizes = [40, 41, 42, 43, 44, 45, 46, 47, 48];
  let brands = ['PORTWEST', 'DIADORA', 'COFRA', 'HECKEL', 'Kapriol', 'DiKE'];
  for (let i = 0; i < brands.length ; i++) {
    for (let j = 1; j <= 5; j++) {
      var shoeModel = new ShoeModel({
        shoeModelName: 'model ' + j,
        brand: brands[i]
      });
      shoeModel.save();
      for (let k = 0; k < 4; k++) {
        var shoe = new Shoe({
          model: shoeModel,
          lessor: lessor,
          size: sizes[counter++ % sizes.length]
        });
        shoe.save();
      }
    }
  }
}

function testGet() {
  Shoe.find({}).populate('model').exec((err, docs) => {
    console.log(docs);
  });
}
