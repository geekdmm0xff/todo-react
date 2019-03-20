var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  id: Number,
  rate: String,
  brand: String,
  color: String,
  engine: String,
  push: String,
  control: String,
  system: {
    name: String,
    type: String,
    seat: Number
  },
  buyDate: String,
  detail: String,
  saler: String,
  km: Number,
  city: String,
  price: Number
});

module.exports = mongoose.model("Car", schema);
