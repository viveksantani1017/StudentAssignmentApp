const express = require('express')
const assignmentSubmissionsController = require('../controllers/assignmentSubmissionController')
const multer = require("multer");


const router = express.Router()
const storage = multer.memoryStorage(); // Store the file in memory as a buffer
const upload = multer({ storage: storage });

router.post('/AddAssignmentSubmission',upload.single("file"),assignmentSubmissionsController.addAssignmentSubmission)
router.get('/getAll',assignmentSubmissionsController.getAssignmentSubmission)
router.get('/:id',assignmentSubmissionsController.getAssignmentSubmissionById)



module.exports = router