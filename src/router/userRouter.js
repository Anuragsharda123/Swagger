const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.get('/user', userController.getAllUser);
router.get('/user/:id', userController.getUser);
router.post('/user', userController.addUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;