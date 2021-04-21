const { Sequelize, DataTypes } = require('sequelize');

module.exports = new Sequelize('course', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});