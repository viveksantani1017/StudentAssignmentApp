const semesterService = require("../service/semesterService");

class semesterController {
  async addSemester(req, res) {
    if (!req.body.semester) {
        res
          .status(400)
          .json({ success: false, message: "All the fields are required" });
      }
    try {
      const id = await semesterService.addSemester(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
    }
  }
  async getAllSemester(req, res) {
    try {
      const semesters = await semesterService.getAllSemesters();
      res.status(200).json(semesters);
    } catch (err) {
      console.log(err);
    }
  }

  async getSemesterById(req, res) {
    try {
      const result = await semesterService.getSemesterById(req.params['id']);
      if (!result.success) {
        res.status(401).json(result);
      }
      res.status(200).json(result);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }

}

module.exports = new semesterController();
