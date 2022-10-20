const connection = require('./connection');

const getAll = async () => {
  const [allUsers] = await connection.execute('SELECT * FROM users');
  return allUsers;
};

module.exports = { getAll };