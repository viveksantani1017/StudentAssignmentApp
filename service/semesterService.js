const semesterDAO = require('../dao/semesterDao')

class semesterService{
    async addSemester(semesterDto){
        const {semester}  =semesterDto
        return semesterDAO.addSemester(semester);
    }

    async getAllSemesters(){
        return semesterDAO.getAllSemester();
    }
    
    async getSemesterById(id){
        return semesterDAO.getSemesterById(id);
    }

    
}

module.exports = new semesterService();