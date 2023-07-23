const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Polopol1*',
  port: 5432, // default PostgreSQL port is 5432
});

module.exports = pool;