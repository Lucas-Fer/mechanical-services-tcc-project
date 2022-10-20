const connection = require('./connection');

const registerSale = async (sales) => {
  const [newId] = await connection
    .execute('INSERT INTO StoreManager.sales (id) values (default);');

  await sales.forEach(async ({ productId, quantity }) => connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [newId.insertId, productId, quantity],
  ));

  return newId.insertId;
};

const getAllSales = async () => {
  const [allDates] = await connection.execute('SELECT * FROM sales;');

  const [allSales] = await connection
    .execute('SELECT * FROM sales_products ORDER BY sale_id ASC, product_id ASC');

  return allSales.map((element) => (
    {
      saleId: element.sale_id,
      productId: element.product_id,
      quantity: element.quantity,
      date: allDates[element.sale_id - 1].date,
    }
  ));
};

const getById = async (id) => {
  const [[saleInfo]] = await connection.execute(
    'SELECT * FROM sales WHERE id = ?', [id],
  );

  const [findSale] = await connection.execute(
    'SELECT * FROM sales_products WHERE sale_id = ? ORDER BY sale_id', [id],
  );

  return findSale.map((items) => (
    { date: saleInfo.date, productId: items.product_id, quantity: items.quantity }
  ));
};

module.exports = { registerSale, getAllSales, getById };