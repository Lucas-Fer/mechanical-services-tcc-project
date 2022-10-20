const connection = require('./connection');

const getAll = async () => {
  const [allProducts] = await connection.execute('SELECT * from products;');
  return allProducts;
};

const getById = async (id) => {
  const [productResult] = await connection.execute('SELECT * from products WHERE id = ?;', [id]);
  return productResult;
};

const addNewProduct = async (name) => {
  const [newProduct] = await connection.execute('INSERT INTO products (name) VALUES (?)', [name]);
  return newProduct;
};
const updateProduct = async (id, name) => {
  const [product] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return product;
};

module.exports = { getAll, getById, addNewProduct, updateProduct };