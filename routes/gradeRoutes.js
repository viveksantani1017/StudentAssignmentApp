const express = require('express')
const gradeController = require('../controllers/gradeController')

const router = express.Router()

router.post('/addGrade',gradeController.addGrade)
router.get('/getAll',gradeController.getAllGrade)
router.get('/:id',gradeController.getGradeById)



module.exports = router