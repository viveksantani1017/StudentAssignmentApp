
# Student Assignment App Api

The Student Assignment App API is designed to support the functionality of a student assignment management system. This API allows developers to seamlessly integrate assignment-related features into educational applications and platforms, streamlining the assignment submission, grading, and tracking process for both students and instructors.
## Tech Stack

**Server-side:** Node.js, Express.js

**SQL query builder:** Knex.js

**Database:** PostgreSQL


## Run Locally

1. Extract Zip.

2. Open cmd.

Go to the project directory

```bash
  cd StudentAssignmentApp
```

Install dependencies

```bash
  npm install
```

Update Database Name, Postgres Username and password in .env file

Run Migrations

```bash
  npm migrate
```

Start the Node.Js Server

```bash
  npm start

```



## API Endpoints


/faculty: Faculty authentication and profile management.

/student: Student authentication and profile management.

/semester: Create, retrieve, and manage assignments.

/program: Create, retrieve, and manage assignments.

/course: Manage courses associated with assignments.

/assignment: Create, retrieve, and manage assignments.

/assignmentSubmission: Submit and retrieve assignment submissions.

/grade: Assign and retrieve grades for assignments.



## Documentation

Detailed documentation, including API endpoints, request/response examples, and authentication procedures, can be found in the Documentation folder.
## Additional information

The migration file inside folder db/migrations/20231007084003_init.js can be used as a reference for SQL tables created in the database.

The assignment submitted by the student gets uploaded to the AWS S3 bucket and the public url of the file is stored in the database.

To isolate the data layer from the rest of the app repository pattern is used as the design pattern.

