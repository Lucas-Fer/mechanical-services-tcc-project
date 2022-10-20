const productsService = require('../services/productsService');

const ERROR_MESSAGE = 'Product not found';

const getAll = async (_req, res) => {
  const allProducts = await productsService.getAll();
  res.status(200).json(allProducts);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const productResult = await productsService.getById(id);
    return res.status(200).json(productResult);
  } catch (error) {
    return res.status(404).json({ message: ERROR_MESSAGE });
  }
};

const addNewProduct = async (req, res) => {
  const { name } = req.body;
  const productResult = await productsService.addNewProduct(name);
  return res.status(201).json(productResult);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedProduct = await productsService.update(id, name);

    if (updatedProduct.message) {
      return res.status(404).json(updatedProduct);
    }

    return res.status(200).json(updatedProduct);
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ message: 'Product not found' });
  }
};

module.exports = { getAll, getById, addNewProduct, update };