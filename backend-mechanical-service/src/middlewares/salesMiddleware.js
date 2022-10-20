const productsModel = require('../models/producstModel');

const validateProductId = (req, res, next) => {
  const inputBody = req.body;
  const notContainsProductId = inputBody.length && inputBody.every((element) => element.productId);
  if (!notContainsProductId) return res.status(400).json({ message: '"productId" is required' });
  next();
};

const validateQuantity = (req, res, next) => {
  const inputBody = req.body;

  const notContainsQuantityField = inputBody
    .map((element) => Object.keys(element).includes('quantity'));
  const validateKey = notContainsQuantityField.every((value) => value === true);

  if (!validateKey) {
    return res.status(400)
      .json({ message: '"quantity" is required' });
  }

  const invalidQuantityField = inputBody.filter((element) => element.quantity <= 0);

  if (invalidQuantityField.length >= 1) {
    return res.status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

const productIdValidate = async (req, res, next) => {
  const inputBody = req.body;

  if (!inputBody.some(({ productId }) => productId)) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  const allProducts = await productsModel.getAll();

  const error = inputBody.every(({ productId }) => allProducts[productId - 1]);

  if (!error) return res.status(404).json({ message: 'Product not found' });

  next();
};

module.exports = { validateProductId, validateQuantity, productIdValidate };