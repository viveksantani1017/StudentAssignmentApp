const db = require('../db/db');
const assignmentSubmissionDao = require('./assignmentSubmissionDao');

class gradeDAO{
    async addCourse(grading_date,grade,assignment_submission_id,faculty_id){
        const [id] = await db('grade').insert({
            grading_date,grade,assignment_submission_id,faculty_id
        }).returning('id');

        return id;
    }

    async getAllGrade(){
        const grades = await db('grade').select()
        return grades;
    }
    
    async getGradeById(id){
        const grade = await db('grade').where({'id':id}).first()
        if (grade === undefined || null ){
            return {success:false,message:"No Records Found"}
        }
        return {success:true,result:grade}
    }

    
}

module.exports = new gradeDAO();