const express = require('express')
const semesterController = require('../controllers/semesterController')

const router = express.Router()

router.post('/addSemester',semesterController.addSemester)
router.get('/getAllSemesters',semesterController.getAllSemester)
router.get('/:id',semesterController.getSemesterById)



module.exports = router