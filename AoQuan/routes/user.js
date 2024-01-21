const express = require('express');
const router = express.Router();
const UserController = require('../app/controller/User')

router.post('/', UserController.index);
module.exports = router;