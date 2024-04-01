const studentService = require("../service/studentService");

class studentController {
  async addStudent(req, res) {
    if (!req.body.username || !req.body.password || !req.body.email || !req.body.program_id) {
      res
        .status(400)
        .json({ success: false, message: "All the fields are required" });
    }
    try {
      const id = await studentService.addStudent(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
    }
  }
  async getAllStudent(req, res) {
    try {
      const students = await studentService.getAllStudent();
      res.status(200).json(students);
    } catch (err) {
      console.log(err);
    }
  }
  async getStudentById(req, res) {
    try {
      const result = await studentService.getStudentById(req.params['id']);
      if (!result.success) {
        res.status(401).json(result);
      }
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  }

  async studentLogin(req, res) {
    if (!req.body.username || !req.body.password) {
      res
        .status(400)
        .json({ success: false, message: "All the fields are required" });
    }
    try {
      const result = await studentService.validateLogin(req.body);
      if (!result.success) {
        res.status(401).json(result);
      }
      res.status(200).json(result);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }

}

module.exports = new studentController();
