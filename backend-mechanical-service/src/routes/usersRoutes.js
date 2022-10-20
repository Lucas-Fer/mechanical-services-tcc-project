const express = require('express');
const usersController = require('../controllers/usersController');

const usersRoute = express.Router();

usersRoute.get('/', usersController.getAllUsers);

module.exports = usersRoute;