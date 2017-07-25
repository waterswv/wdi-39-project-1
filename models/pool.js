// incorporate mongoose for model & setup Schema
let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let PoolSchema = new Schema({
  name: String,
  address: String,
  phoneNumber: String,
  contactEmail: String
})

let Pool = mongoose.model('Pool', PoolSchema);

module.exports = Pool;
