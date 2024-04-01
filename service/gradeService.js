const gradeDAO = require('../dao/gradeDao')
const assignmentSubmissionDao = require('../dao/assignmentSubmissionDao');

class gradeService{
    addGrade(gradeDto){
        const {grading_date,grade,assignment_submission_id,faculty_id} = gradeDto
        return gradeDAO.addCourse(grading_date,grade,assignment_submission_id,faculty_id);
    }
    getAllGrade(){
        return gradeDAO.getAllGrade();
    }
    geGradeById(id){
        const result =  gradeDAO.getGradeById(id);
        // const assignment = assignmentSubmissionDao.getAssignmentSubmissionById(result.then((res)=>{res.result.assignment_submission_id}))
        // console.log(assignment)
        return result;
    }

}

module.exports = new gradeService();

