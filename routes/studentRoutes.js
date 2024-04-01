const express = require('express')
const studentController = require('../controllers/studentController')

const router = express.Router()

router.post('/register',studentController.addStudent)
router.post('/login',studentController.studentLogin)
router.get('/getAll',studentController.getAllStudent)
router.get('/:id',studentController.getStudentById)



module.exports = router