var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const sequelize = require('../database/sequelize');
const Course = require('../models/course');
const Teacher = require('../models/teacher');

/* relation */
Course.belongsTo(Teacher, {
  foreignKey: 'teacherId'
});
Teacher.hasMany(Course, {
  foreignKey: 'teacherId'
});


/* GET test db connection listing. */
router.get('/', async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    res.send('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    res.send('Unable to connect to the database:', error)
  }
});

/* GET all course */
router.get('/course', (req, res) => {
  let filter = {};
  let courseName = req.query.courseName;
  if(courseName) {
    filter = {
      where: {
        courseName: {
          [Op.like]: `%${courseName}%`
        }
      }
    }
  }
  Course.findAll(filter).then((courses) => {
    res.json(courses);
  });
})

/* GET course by id */
router.get('/course/:id', (req, res) => {
  let id = req.params.id;
  Course.findByPk(id, {include: [Teacher]}).then((course) => {
    if(course) {
      res.json(course);
    } else {
      res.status(404).send();
    }
  });
})

/* GET all teacher */
router.get('/teacher', (req, res) => {
  Teacher.findAll().then((teachers) => {
    res.json(teachers)
  });
})

/* GET teacher by id */
router.get('/teacher/:id', (req, res) => {
  let id = req.params.id;
  Teacher.findByPk(id).then((teacher) => {
    if(teacher) {
      res.json(teacher)
    } else {
      res.status(404).send();
    }
  });
})

module.exports = router;
