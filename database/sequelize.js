const { Sequelize, DataTypes } = require('sequelize');

console.log("process.env.POSTGRES_HOST: ", process.env.POSTGRES_HOST);

module.exports = new Sequelize(
  process.env.DATABASE || 'postgres',
  process.env.POSTGRES_USERNAME || 'postgres',
  process.env.POSTGRES_PASSWORD || 'password',
  {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || '5432',
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  });