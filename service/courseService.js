const courseDAO = require('../dao/courseDao')

class courseService{
    addCourse(courseDto){
        const {name,description,program_id,faculty_id} = courseDto
        return courseDAO.addCourse(name,description,program_id,faculty_id);
    }
    getAllCourse(){
        return courseDAO.getAllCourse();
    }
    getCourseById(id){
        return courseDAO.getCourseById(id);
    }

}

module.exports = new courseService();

