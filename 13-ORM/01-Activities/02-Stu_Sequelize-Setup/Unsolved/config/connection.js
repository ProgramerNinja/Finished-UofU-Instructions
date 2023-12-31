const Sequelize = require('sequelize');
require('dotenv').config()
console.log(process.env)

const sequelize = new Sequelize(
  process.env.DB_NAME,
  proccess.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
