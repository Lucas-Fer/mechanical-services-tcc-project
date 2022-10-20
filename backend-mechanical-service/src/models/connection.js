require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'Mechanical_Services',
});

module.exports = connection; 