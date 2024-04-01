const assignmentService = require("../service/assignmentService");
const JwtController = require("./JwtController");

class assignmentController {
  async addAssignment(req, res) {
    if (
      !req.body.name ||
      !req.body.description ||
      !req.body.due_date ||
      !req.body.course_id 
    ) {
      res
        .status(400)
        .json({ success: false, message: "All the fields are required" });
    }
    try {
      const token = JwtController.extractToken(req);
      const id = await assignmentService.addAssignment(req.body,token);
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
    }
  }
  async getAllAssignment(req, res) {
    try {
      const assignments = await assignmentService.getAllAssignment();
      res.status(200).json(assignments);
    } catch (err) {
      console.log(err);
    }
  }
  async getAssignmentById(req, res) {
    try {
      const result = await assignmentService.getAssignmentById(req.params["id"]);
      if (!result.success) {
        res.status(401).json(result);
      }
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  }

  async updateAssignment(req, res) {
    try {
      const token = JwtController.extractToken(req);
      const id = await assignmentService.updateAssignment(req.body,req.params['id'],token);
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
    }
  }
  async deleteAssignment(req, res) {
    try {
      const token = JwtController.extractToken(req);
      const id = await assignmentService.deleteAssignment(req.params['id'],token);
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
    }
  }

  async sortAssignment(req,res){
    try{
      // console.log(req.query.column,req.query.type)
      const result = await assignmentService.sortAssignment(req.query.column,req.query.type);
      if(!result.success)
      {
        res.status(400).json(result);
      }
      res.status(200).json(result);
      return result;
    }catch(err){
      console.log(err)
    }
  }

  
}

module.exports = new assignmentController();
