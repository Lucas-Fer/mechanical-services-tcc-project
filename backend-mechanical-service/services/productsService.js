const productsModel = require('../models/producstModel');

const getAll = async () => {
  const allProducts = await productsModel.getAll();
  return allProducts;
};

const getById = async (id) => {
  const [productResult] = await productsModel.getById(id);
  if (!productResult) throw new Error();
  return productResult;
};

const addNewProduct = async (name) => {
  const newProduct = await productsModel.addNewProduct(name);
  const result = {
    id: newProduct.insertId,
    name,
  };

  return result;
};

const update = async (id, name) => {
  const updatedProduct = await productsModel.updateProduct(id, name);
  if (updatedProduct.affectedRows === 0) {
    return { message: 'Product not found' };
  }
  return { id, name };
};
module.exports = { getAll, getById, addNewProduct, update };