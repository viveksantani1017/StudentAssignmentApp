const db = require('../db/db')

class facultyDAO{
    async createFaculty(email,username,password){
        const [id] = await db('faculty').insert({
            email,
            username,
            password
        }).returning('id');

        return id;
    }

    async getAllFaculty(){
        const facultys = await db('faculty').select()
        return facultys;
    }
    
    async getFacultyById(id){
        const faculty = await db('faculty').where({'id':id}).first()
        if (faculty === undefined || null ){
            return {success:false,message:"No Records Found"}
        }
        return {success:true,user:faculty}
    }

    async getFacultyByUsernameAndPassword(username,password){
        const result = await db('faculty').where({'username':username,'password':password}).first();
        if (result === undefined || null ){
            return {success:false,message:"Wrong username or password"}
        }
        return {success:true,user:result}
    }
}

module.exports = new facultyDAO();