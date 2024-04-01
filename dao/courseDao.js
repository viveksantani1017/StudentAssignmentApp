const db = require('../db/db')

class courseDAO{
    async addCourse(name,description,program_id,faculty_id){
        const [id] = await db('course').insert({
            name,
            description,
            program_id,
            faculty_id
        }).returning('id');

        return id;
    }

    async getAllCourse(){
        const courses = await db('course').select()
        return courses;
    }
    
    async getCourseById(id){
        const course = await db('course').where({'id':id}).first()
        if (course === undefined || null ){
            return {success:false,message:"No Records Found"}
        }
        return {success:true,result:course}
    }

    
}

module.exports = new courseDAO();