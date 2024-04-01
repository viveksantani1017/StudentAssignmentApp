const courseService = require("../service/courseService");

class courseController {
  async addCourse(req, res) {
    if (
      !req.body.name ||
      !req.body.description ||
      !req.body.program_id ||
      !req.body.faculty_id
    ) {
      res
        .status(400)
        .json({ success: false, message: "All the fields are required" });
    }
    try {
      const id = await courseService.addCourse(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
    }
  }
  async getAllCourse(req, res) {
    try {
      const courses = await courseService.getAllCourse();
      res.status(200).json(courses);
    } catch (err) {
      console.log(err);
    }
  }
  async getCourseById(req, res) {
    try {
      const result = await courseService.getCourseById(req.params["id"]);
      if (!result.success) {
        res.status(401).json(result);
      }
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  }

  
}

module.exports = new courseController();
