const programDAO = require('../dao/programDao')

class programService{
    addProgram(programDto){
        const {name,description,semester_id} = programDto
        return programDAO.addProgram(name,description,semester_id)
    }

    getAllPrograms(){
        return programDAO.getAllprograms()
    }
    getProgramById(id){
        return programDAO.getProgramById(id)
    }

}

module.exports = new programService();