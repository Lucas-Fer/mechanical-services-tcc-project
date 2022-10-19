const salesModel = require('../models/salesModel');
const salesService = require('../services/salesService');

const registerSale = async (req, res) => {
  const bodyParams = req.body;
  const idSale = await salesModel.registerSale(bodyParams);

  return res.status(201).json({ id: idSale, itemsSold: bodyParams });
};

const getAll = async (req, res) => {
  const allSales = await salesService.getAll();
  return res.status(200).json(allSales);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const sales = await salesService.getById(Number(id));

    if (!sales.length) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { registerSale, getAll, getById };