const express = require("express");
const router = express.Router();

const cartController = require('../app/controller/Cart')


router.post('/', cartController.getcart);
router.post('/addcart', cartController.addcart);

module.exports = router;