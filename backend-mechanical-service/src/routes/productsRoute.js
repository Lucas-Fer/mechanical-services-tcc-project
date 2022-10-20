const express = require('express');
const productsController = require('../controllers/productsController');
const productsMiddleware = require('../middlewares/productsMiddleware');

const productsRoute = express.Router();

productsRoute.get('/', productsController.getAll);
productsRoute.get('/:id', productsController.getById);
productsRoute.post('/', productsMiddleware.validateName, productsController.addNewProduct);
productsRoute.put('/:id', productsMiddleware.validateName, productsController.update);
module.exports = productsRoute;