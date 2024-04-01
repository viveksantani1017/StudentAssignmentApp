const express = require('express')
const facultyController = require('../controllers/facultyController')

const router = express.Router()

router.post('/register',facultyController.createFaculty)
router.post('/login',facultyController.facultyLogin)
router.get('/getAll',facultyController.getAllFaculty)
router.get('/:id',facultyController.getFacultyById)



module.exports = router