const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Teacher = sequelize.define('teacher', {
  teacherId: {
    field: 'teacher_id',
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  teacherName: {
    field: 'teacher_name',
    type: DataTypes.STRING
  },
  createBy: {
    field: 'create_by',
    type: DataTypes.STRING
  },
  createDate: {
    field: 'create_date',
    type: DataTypes.TIME
  },
  updateBy: {
    field: 'update_by',
    type: DataTypes.STRING
  },
  updateDate: {
    field: 'update_date',
    type: DataTypes.TIME
  }
});

module.exports = Teacher;