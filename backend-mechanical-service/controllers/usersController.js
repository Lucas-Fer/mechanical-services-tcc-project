const usersService = require('../services/usersService');

const getAllUsers = async (req, res) => {
  const allUsers = await usersService.getAll();

  res.status(200).json(allUsers);
};

module.exports = { getAllUsers };