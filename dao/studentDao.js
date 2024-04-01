const db = require('../db/db')

class studentDAO{
    async addStudent(email,username,password,program_id){
        const [id] = await db('student').insert({
            email,
            username,
            password,
            program_id
        }).returning('id');

        return id;
    }

    async getAllStudent(){
        const students = await db('student').select()
        return students;
    }
    
    async getStudentById(id){
        const student = await db('student').where({'id':id}).first()
        if (student === undefined || null ){
            return {success:false,message:"No Records Found"}
        }
        return {success:true,user:student}
    }

    async getStudentByUsernameAndPassword(username,password){
        const result = await db('student').where({'username':username,'password':password}).first();
        if (result === undefined || null ){
            return {success:false,message:"Wrong username or password"}
        }
        return {success:true,user:result}
    }
}

module.exports = new studentDAO();