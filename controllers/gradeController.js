const gradeService = require("../service/gradeService");

class gradeController {
  async addGrade(req, res) {
    if (
      !req.body.grading_date ||
      !req.body.grade ||
      !req.body.assignment_submission_id ||
      !req.body.faculty_id
    ) {
      res
        .status(400)
        .json({ success: false, message: "All the fields are required" });
    }
    try {
      const id = await gradeService.addGrade(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
    }
  }
  async getAllGrade(req, res) {
    try {
      const grades = await gradeService.getAllGrade();
      res.status(200).json(grades);
    } catch (err) {
      console.log(err);
    }
  }
  async getGradeById(req, res) {
    try {
      const result = await gradeService.geGradeById(req.params["id"]);
      if (!result.success) {
        res.status(401).json(result);
      }
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  }

  
}

module.exports = new gradeController();
