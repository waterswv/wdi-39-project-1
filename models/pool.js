// incorporate mongoose for model & setup Schema
let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let PoolSchema = new Schema ({
  name: String,
  address: String,
  phoneNumber: String,
  contactEmail: String
})

let Pool = model.mongoose('Pool', PoolSchema);

module.exports = Pool;
