const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Course = sequelize.define('course', {
  courseId: {
    field: 'course_id',
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  courseName: {
    field: 'course_name',
    type: DataTypes.STRING
  },
  teacherId: {
    field: 'teacher_id',
    type: DataTypes.INTEGER
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
})

module.exports = Course;