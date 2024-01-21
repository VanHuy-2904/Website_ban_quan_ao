const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Cartitems = new Schema({
    name: String,
    price: Number,
    image: String,
    quantity: Number
  });
  

const Cart = new Schema({
  user: String,
  CartItems: [Cartitems]
});

const Carts = mongoose.model("Cart", Cart);
module.exports = Carts;
