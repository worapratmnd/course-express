# Course Express js APP

## Useage
### GET method
query data from table
|       API      |                 URL                      |
| -------------- | ---------------------------------------- |
| get all course | [http://localhost:3000/api/course](http://localhost:3000/api/course) |
| get course by id | [http://localhost:3000/api/course/:id](http://localhost:3000/api/course/:id) |
| get all teacher | [http://localhost:3000/api/teacher](http://localhost:3000/api/teacher) |
| get teacher by id | [http://localhost:3000/api/teacher](http://localhost:3000/api/teacher) |


### POST method
Insert into `courses` table with json body

`http://localhost:3000/api/course`

```
{
    "courseName": "English",
    "courseDescription": "Learn to speak English with Tony"
}
```

Insert into `teachers` table with json body

`http://localhost:3000/api/course`

```
{
    "firstName": "Tony",
    "lastName": "Jaa",
    "age": 35
}
```
