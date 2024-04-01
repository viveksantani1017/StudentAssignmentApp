const facultyDAO = require("../dao/facultyDao");
const jwt = require("jsonwebtoken");

class facultyService {
  createFaculty(facultyDto) {
    const { email, username, password } = facultyDto;
    return facultyDAO.createFaculty(email, username, password);
  }
  getAllFaculty() {
    return facultyDAO.getAllFaculty();
  }
  getFacultyById(id) {
    return facultyDAO.getFacultyById(id);
  }

  async validateLogin(loginDto) {
    const { username, password } = loginDto;
    const result = await facultyDAO.getFacultyByUsernameAndPassword(
      username,
      password
    );

    if (!result.success) {
      return result ;
    }
    const id = result.user.id;
    let token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    return { success: true, jwt_token: token };
  }
}

module.exports = new facultyService();
