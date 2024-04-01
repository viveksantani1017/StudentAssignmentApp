const db = require('../db/db');
const assignmentSubmissionDao = require('./assignmentSubmissionDao');

class gradeDAO{
    
    async getGradeReport(faculty_id,course_id){
        const assigments = await db("db").select().where({"faculty_id":faculty_id,"course_id":course_id})
        // const assignmentSubmissionResult = await db('assignment_submission').select().innerJoin({"assigment_id":assigments.})
        const gradeResult = await db('grade').select().where({"faculty_id":faculty_id})
    }

    
}

module.exports = new gradeDAO();