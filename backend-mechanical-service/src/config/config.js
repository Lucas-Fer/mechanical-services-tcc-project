// src/config/config.js

require('dotenv').config();

const config = {
  username: 'root',
  password: 'docker',
  database: 'Mechanical_Services',
  host: 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};