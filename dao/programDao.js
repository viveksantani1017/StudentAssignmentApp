const db = require('../db/db')

class programDAO{
    async addProgram(name,description,semester_id){
        const [id] = await db('program').insert({
            name,
            description,
            semester_id
        }).returning('id');

        return id;
    }

    async getAllprograms(){
        const programs = await db('program').select()
        return programs;
    }

    async getProgramById(id){
        const program = await db('program').where({'id':id}).first();
        if (program === undefined || null ){
            return {success:false,message:"No Records Found"}
        }
        return {success:true,result:program}
    }
    
}

module.exports = new programDAO();