const express = require('express')
const assignmentController = require('../controllers/AssignmentController')

const router = express.Router()




router.delete('/deleteAssignment/:id',assignmentController.deleteAssignment)
router.put('/updateAssignment/:id',assignmentController.updateAssignment)
router.post('/addAssignment',assignmentController.addAssignment)
router.get('/getAll',assignmentController.getAllAssignment)
router.get('/sort',assignmentController.sortAssignment)
router.get('/:id',assignmentController.getAssignmentById)



module.exports = router