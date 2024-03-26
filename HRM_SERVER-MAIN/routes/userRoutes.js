const express = require('express');
const router = express.Router();
const userController = require('../controller/user-controller');


 
router.post('/users',userController.createUser);
router.get('/users',userController.getUserData);

module.exports = router;