const facultyService = require("../service/facultyService");

class facultyController {
  async createFaculty(req, res) {
    if (!req.body.username || !req.body.password || !req.body.email) {
      res
        .status(400)
        .json({ success: false, message: "All the fields are required" });
    }
    try {
      const id = await facultyService.createFaculty(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
    }
  }
  async getAllFaculty(req, res) {
    try {
      const facultys = await facultyService.getAllFaculty();
      res.status(200).json(facultys);
    } catch (err) {
      console.log(err);
    }
  }
  async getFacultyById(req, res) {
    try {
      const result = await facultyService.getFacultyById(req.params['id']);
      if (!result.success) {
        res.status(401).json(result);
      }
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  }

  async facultyLogin(req, res) {
    if (!req.body.username || !req.body.password) {
      res
        .status(400)
        .json({ success: false, message: "All the fields are required" });
    }
    try {
      const result = await facultyService.validateLogin(req.body);
      if (!result.success) {
        res.status(401).json(result);
      }
      res.status(200).json(result);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }

}

module.exports = new facultyController();
