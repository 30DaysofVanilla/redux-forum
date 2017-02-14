const express = require('express');
const userRouter = express.Router();
const messageController = require('../database/controllers/messageController');
const userController = require('../database/controllers/userController');

userRouter.post('/signup', userController.addUser);
userRouter.post('/login', userController.loginUser);
userRouter.post('/remove/:id', userController.removeUser);
userRouter.put('/updateUser/:id', userController.updateUser);

userRouter.get('/', messageController.getMessages);
userRouter.post('/messages/post', messageController.addMessage);

module.exports = userRouter;
