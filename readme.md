# Course Express js APP

## Useage
### GET method

Query data from table

|       API      |                 URL                      |
| -------------- | ---------------------------------------- |
| get all course | [http://localhost:3000/api/course](http://localhost:3000/api/course) |
| get course by id | [http://localhost:3000/api/course/:id](http://localhost:3000/api/course/:id) |
| get all teacher | [http://localhost:3000/api/teacher](http://localhost:3000/api/teacher) |
| get teacher by id | [http://localhost:3000/api/teacher/:id](http://localhost:3000/api/teacher) |


### POST method
Insert into `courses` table with json body

[http://localhost:3000/api/course](http://localhost:3000/api/course)

```
{
    "courseName": "English",
    "courseDescription": "Learn to speak English with Tony"
}
```

Insert into `teachers` table with json body

[http://localhost:3000/api/course](http://localhost:3000/api/course)

```
{
    "firstName": "Tony",
    "lastName": "Jaa",
    "age": 35
}
```

### PUT method
Update `course` table with json body

[http://localhost:3000/api/course](http://localhost:3000/api/course)

```
{
    "courseId": 2,
    "courseName": "English",
    "courseDescription": "Learn to speak English with Tony"
}
```

Update `teachers` table with json body

[http://localhost:3000/api/course](http://localhost:3000/api/course)

```
{
    "teacherId": 3,
    "firstName": "Tony",
    "lastName": "Jaa",
    "age": 35
}
```

### DELETE method

Delete data from table by pk

|       API      |                 URL                      |
| -------------- | ---------------------------------------- |
| delete course by id | [http://localhost:3000/api/course/:id](http://localhost:3000/api/course/:id) |
| delete teacher by id | [http://localhost:3000/api/teacher/:id](http://localhost:3000/api/teacher) |


**develop by Woraprat Mindo**