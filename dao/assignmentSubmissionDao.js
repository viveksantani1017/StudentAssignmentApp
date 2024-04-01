const db = require("../db/db");

class assignmentSubmissionDao {

  async addAssignmentSubmission(
    file_url,
    submission_date,
    assignment_id,
    student_id
  ) {
    const [id] = await db("assignment_submission")
      .insert({
        file_url,
        submission_date,
        assignment_id,
        student_id,
      })
      .returning("id");

    return id;
  }

  async getAllAssignmentSubmission() {
    const assignmentSubmissions = await db("assignment_submission").select();
    return assignmentSubmissions;
  }

  async getAssignmentSubmissionById(id) {
    const assignmentSubmission = await db("assignment_submission").where({ id: id }).first();
    if (assignmentSubmission === undefined || null) {
      return { success: false, message: "No Records Found" };
    }
    return { success: true, result: assignmentSubmission };
  }
}

module.exports = new assignmentSubmissionDao();
