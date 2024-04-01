const assignmentSubmissionService = require("../service/assignmentSubmissionService");
const s3UploaderService = require("../service/s3UploaderService");
class assignmentSubmissionController {
  async addAssignmentSubmission(req, res) {
    if (
      !req.file ||
      !req.body.submission_date ||
      !req.body.assignment_id ||
      !req.body.student_id
    ) {
      res
        .status(400)
        .json({ success: false, message: "All the fields are required" });
    }
    
    try {
      const fileBuffer = req.file.buffer;
      const originalFileName = req.file.originalname.replace(/\s/g, '');
      console.log(originalFileName)
      const url = await s3UploaderService.uploadFileToS3(fileBuffer, originalFileName);
      const file_url = url.url
      const id = await assignmentSubmissionService.addAssignmentSubmission(
        file_url,
        req.body.submission_date,
        req.body.assignment_id,
        req.body.student_id
      );
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
    }
  }
  async getAssignmentSubmission(req, res) {
    try {
      const assignmentSubmissions =
        await assignmentSubmissionService.getAllAssignmentSubmission();
      res.status(200).json(assignmentSubmissions);
    } catch (err) {
      console.log(err);
    }
  }
  async getAssignmentSubmissionById(req, res) {
    try {
      const result =
        await assignmentSubmissionService.getAssignmentSubmissionById(
          req.params["id"]
        );
      if (!result.success) {
        res.status(401).json(result);
      }
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new assignmentSubmissionController();
