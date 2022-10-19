const usersModel = require('../models/usersModel');

const getAll = async () => {
  const result = await usersModel.getAll();
  return result;
};

module.exports = { getAll };
