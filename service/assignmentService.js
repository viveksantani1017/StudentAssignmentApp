const assignmentDAO = require('../dao/assignmentDao')
const courseDAO = require('../dao/courseDao')
const jwt  = require("jsonwebtoken");
const facultyDao = require('../dao/facultyDao');
class assignmentService{
    async addAssignment(assignmentDto,token){
        const faculty_id = jwt.decode(token).id;
        console.log(faculty_id)
        const faculty = await facultyDao.getFacultyById(faculty_id)
        if(!faculty.success){
            return {success:false,message:"User Not Authorized"}
        }else if(faculty.user.id != faculty_id){
            return {success:false,message:"User Not Authorized"}
        }

        const {name,description,due_date,course_id} = assignmentDto
        console.log(name)
        return assignmentDAO.addAssignment(name,description,due_date,course_id,faculty_id);
    }
    getAllAssignment(){
        return assignmentDAO.getAllAssignment();
    }
    getAssignmentById(id){
        return assignmentDAO.getAssignmentById(id);
    }

    async updateAssignment(assignmentDto,id,token){
        const jwt_id = jwt.decode(token);
        const {name,description,due_date,course_id,faculty_id} = assignmentDto
        if(faculty_id == jwt_id.id)
        {
            return assignmentDAO.updateAssignment(id,name,description,due_date,course_id);
        }
        else{
            return {success:false,message:"User Not Authorized"}
        }
    }
    
    async deleteAssignment(id,token){
        const jwt_id = jwt.decode(token);
        const assignment = await assignmentDAO.getAssignmentById(id);
        console.log(assignment.result.faculty_id)
        if(assignment.result.faculty_id == jwt_id.id)
        {
            return assignmentDAO.deleteAssignment(id);
        }
        else{
            return {success:false,message:"User Not Authorized"}
        }
    }

    sortAssignment(column,type)
    {
        return assignmentDAO.sortAssignment(column,type);
    }

}

module.exports = new assignmentService();

