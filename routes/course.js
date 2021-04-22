var express = require('express');
var router = express.Router();
const { Sequelize, Op, QueryTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const Course = require('../models/course');
const Teacher = require('../models/teacher');

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
  if (courseName) {
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
  Course.findByPk(id).then((course) => {
    if (course) {
      res.json(course);
    } else {
      res.status(404).send();
    }
  });
})

/* POST create course */
router.post('/course', (req, res) => {
  sequelize.query("select nextval('course_id_sequence')", { type: QueryTypes.SELECT }).then((results) => {
    console.log(results);
    return results[0].nextval;
  })
    .then(id => {
      return Course.create({
        courseId: id,
        courseName: req.body.courseName,
        courseDescription: req.body.courseDescription,
        createBy: 'developer',
        createDate: new Date()
      })
    })
    .then((course) => {
      res.json(course);
    }, error => {
      res.status(400).json(error);
    })
    .catch(e => {
      res.status(400).send(e);
    })
});

/* PUT update course */
router.put('/course', (req, res) => {
  Course.update({
    courseName: req.body.courseName,
    courseDescription: req.body.courseDescription,
    updateBy: 'developer',
    updateDate: new Date()
  },
    {
      where: {
        courseId: req.body.courseId
      }
    }).then((results) => {
      if (results) {
        return Course.findByPk(req.body.courseId);
      }
    }, error => {
      console.log(error);
      res.status(404).send(error);
    })
    .then((course) => {
      res.json(course);
    })
});

/* DELETE course by id*/
router.delete('/course/:id', (req, res) => {
  let { id } = req.params;
  Course.findByPk(id).then(course => {
    if (course) {
      return course.destroy();
    } else {
      return Promise.reject();
    }
  }, error => {
    res.status(404).send(error);
  })
    .then(() => {
      res.status(204).send()
    }, error => {
      res.status(404).send(error);
    });
});

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
    if (teacher) {
      res.json(teacher)
    } else {
      res.status(404).send();
    }
  });
})

/* POST create teacher */
router.post('/teacher', (req, res) => {
  sequelize.query("select nextval('teacher_id_sequence')", { type: QueryTypes.SELECT }).then((results) => {
    console.log(results);
    return results[0].nextval;
  })
    .then(id => {
      return Teacher.create({
        teacherId: id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        createBy: 'developer',
        createDate: new Date()
      })
    })
    .then((teacher) => {
      res.json(teacher);
    }, error => {
      res.status(400).json(error);
    })
    .catch(e => {
      res.status(400).send(e);
    })
});

/* PUT update teacher */
router.put('/teacher', (req, res) => {
  Teacher.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    updateBy: 'developer',
    updateDate: new Date()
  },
    {
      where: {
        teacherId: req.body.teacherId
      }
    }).then((results) => {
      if (results) {
        return Teacher.findByPk(req.body.teacherId);
      }
    }, error => {
      console.log(error);
      res.status(404).send(error);
    })
    .then((teacher) => {
      res.json(teacher);
    })
})

/* DELETE teacher by id*/
router.delete('/teacher/:id', (req, res) => {
  let { id } = req.params;
  Teacher.findByPk(id).then(teacher => {
    if (teacher) {
      return teacher.destroy();
    } else {
      return Promise.reject();
    }
  }, error => {
    console.log(error);
    res.status(404).send(error);
  })
    .then(() => {
      res.status(204).send()
    }, error => {
      res.status(404).send(error);
    });
})

module.exports = router;