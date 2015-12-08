var MysqlAdapter = require('firenze-adapter-mysql');

module.exports = {
  adapter: MysqlAdapter,

  host: process.env.FIRENZE_DB_HOST || '127.0.0.1',
  user: process.env.FIRENZE_DB_USER || 'root',
  port: process.env.FIRENZE_DB_PORT || 3306,
  password: process.env.FIRENZE_DB_PASS || '',
  database: process.env.FIRENZE_DB || 'firenze',

  pool: {
    min: 0,
    max: 5
  }
};
