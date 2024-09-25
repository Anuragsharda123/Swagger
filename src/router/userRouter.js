const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();
router.get('/', userController.getAllUser);
router.post('/adduser', userController.addUser);
router.post('/user', userController.loginUser);

router.put('/user/:id', userController.updatUser)
.get('/user/:id', userController.getUser);

module.exports = router;