const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

// const swaggerOptions = {
//     swaggerDefinition:{
//         info:{
//             title: 'Student Assignment Api',
//             version: '1.0.0'
//         }

//     },
//     apis: ['server.js'],
// };

// const swaggerDocs = swaggerJSDoc(swaggerOptions);
// console.log(swaggerDocs)
// app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))

app.use(express.json());

app.use("/api/faculty", require("./routes/facultyRoutes"));
app.use("/api/student", require("./routes/studentRoutes"));
app.use("/api/semester", require("./routes/semesterRoutes"));
app.use("/api/program", require("./routes/programRoutes"));
app.use("/api/course", require("./routes/courseRoutes"));
app.use("/api/assignment", require("./routes/assignmentRoutes"));
app.use(
  "/api/assignmentSubmission",
  require("./routes/assignmentSubmissionRoutes")
);
app.use("/api/grade", require("./routes/gradeRoutes"));
// app.use(router)
app.listen(8080, function () {
  console.log("Server started at port 8080");
});
