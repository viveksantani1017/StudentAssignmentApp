const express = require('express')
const courseController = require('../controllers/courseController')

const router = express.Router()

router.post('/addCourse',courseController.addCourse)
router.get('/getAll',courseController.getAllCourse)
router.get('/:id',courseController.getCourseById)



module.exports = router