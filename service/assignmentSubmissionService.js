const assignmentSubmissionDAO = require("../dao/assignmentSubmissionDao");

class assignmentSubmissionService {
  addAssignmentSubmission(file_url, submission_date, assignment_id, student_id) {
    return assignmentSubmissionDAO.addAssignmentSubmission(
      file_url,
      submission_date,
      assignment_id,
      student_id
    );
  }
  getAllAssignmentSubmission() {
    return assignmentSubmissionDAO.getAllAssignmentSubmission();
  }
  getAssignmentSubmissionById(id) {
    return assignmentSubmissionDAO.getAssignmentSubmissionById(id);
  }
}

module.exports = new assignmentSubmissionService();
