const studentDAO = require('../dao/studentDao')
const jwt = require("jsonwebtoken");

class studentService{
    addStudent(studentDto){
        const {email,username,password,program_id} = studentDto
        return studentDAO.addStudent(email,username,password,program_id);
    }
    getAllStudent(){
        return studentDAO.getAllStudent();
    }
    getStudentById(id){
        return studentDAO.getStudentById(id);
    }

    async validateLogin(loginDto){
        const {username,password} = loginDto
        const result = await studentDAO.getStudentByUsernameAndPassword(username,password)
        if (!result.success) {
            return result;
          }
          const id = result.user.id
          let token = jwt.sign({id}, process.env.JWT_SECRET, {
            expiresIn: '30d'
        });
          return{ success: true, jwt_token: token };
        
    }
}

module.exports = new studentService();

