const { Sequelize, DataTypes } = require('sequelize');

module.exports = new Sequelize('postgres', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});