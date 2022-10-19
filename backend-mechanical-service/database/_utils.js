const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

const { cwd } = process;

const connect = () => mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  multipleStatements: true,
});

const runSql = (file) => async () => {
  const db = connect();
  const sql = fs.readFileSync(file, 'utf8');
  await db.query(sql);
  await db.end();
};

const runMigration = runSql(path.resolve(cwd(), 'migration.sql'));
const runSeed = runSql(path.resolve(cwd(), 'seed.sql'));

module.exports = {
  connect,
  runMigration,
  runSeed,
};