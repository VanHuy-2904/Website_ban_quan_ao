const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  id: Number,
  name: String,
  category: String,
  image: { type: String, maxLength: 600 },
  new_price: Number,
  old_price: Number,
});

const Products = mongoose.model("Product", Product);
module.exports = Products;
