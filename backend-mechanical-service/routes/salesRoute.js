const express = require('express');
const salesMiddleware = require('../middlewares/salesMiddleware');
const salesController = require('../controllers/salesController');

const salesRoute = express.Router();

salesRoute.post('/',
  salesMiddleware.validateProductId,
  salesMiddleware.validateQuantity,
  salesMiddleware.productIdValidate,
  salesController.registerSale);

salesRoute.get('/', salesController.getAll);
salesRoute.get('/:id', salesController.getById);

module.exports = salesRoute;