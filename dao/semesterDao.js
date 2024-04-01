const db = require('../db/db')

class semesterDAO{
    async addSemester(semester){
        const [id] = await db('semester').insert({
            semester
        }).returning('id');

        return id;
    }

    async getAllSemester(){
        const semesters = await db('semester').select()
        return semesters;
    }
    
    async getSemesterById(id){
        const semester = await db('semester').where({'id':id}).first();
        if (semester === undefined || null ){
            return {success:false,message:"No such semester"}
        }
        return {success:true,result:semester}
    }

    
}

module.exports = new semesterDAO();