const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller');

// const accessControl = require('..//')

router.post('/login',authController.login);

module.exports = router;