const db = require('../db/db')

class assignmentDAO{
    async addAssignment(name,description,due_date,course_id,faculty_id){
        const [id] = await db('assignment').insert({
            name,
            description,
            due_date,
            course_id,
            faculty_id
        }).returning('id');

        return id;
    }

    async getAllAssignment(){
        const assignments = await db('assignment').select()
        return assignments;
    }
    
    async getAssignmentById(id){
        const assignment = await db('assignment').where({'id':id}).first()
        if (assignment === undefined || null ){
            return {success:false,message:"No Records Found"}
        }
        return {success:true,result:assignment}
    }
    async updateAssignment(id,name,description,due_date,course_id){
        const assignment = await db('assignment')
            .where({'id':id})
            .update(
            {name: name,
            description:description,
            due_date:due_date,
            course_id:course_id}
        ).returning(['id','name','description','due_date','course_id'])
        
        return {success:true,result:assignment}
    }
    
    async deleteAssignment(id){
        const deleteAssignment = await db('assignment')
            .where({'id':id})
            .del()
            .returning(['id','name','description','due_date','course_id'])
        
        return {success:true,result:deleteAssignment}
    }


    async sortAssignment(column,type)
    {
        console.log(column,type)
        const assignment = await db('assignment').select().orderBy(column,type);
        if(assignment == null)
        {
            return {success:true,message:"Error"}   
        }
        return {success:true,result:assignment}
    }
    
}

module.exports = new assignmentDAO();