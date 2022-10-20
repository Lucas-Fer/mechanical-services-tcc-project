const salesModel = require('../models/salesModel');

const getAll = async () => {
  const allSales = await salesModel.getAllSales();
  return allSales;
};

const getById = async (id) => {
  const dataResult = await salesModel.getById(id);
  return dataResult;
};

module.exports = { getAll, getById };