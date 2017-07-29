// incorporate mongoose for model & setup Schema
let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let Events = require('./events')

let PoolSchema = new Schema({
  name: String,
  address: String,
  phoneNumber: String,
  contactEmail: String,
  monday: String,
  tuesday: String,
  wednesday: String,
  thursday: String,
  friday: String,
  saturday: String,
  sunday: String,
  special: String,
  map: String,
  maps: {
    lat: Number,
    long: Number
  },
  events: [Events.schema],
  tags: [String]
})

let Pool = mongoose.model('Pool', PoolSchema);

module.exports = Pool;
