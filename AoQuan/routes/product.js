const express = require("express");
const router = express.Router();

const productController = require("../app/controller/Product");

router.get('/', productController.getproduct);
module.exports = router;
