const express = require('express')
const programController = require('../controllers/programController')

const router = express.Router()

router.post('/addProgram',programController.addProgram)
router.get('/getAllPrograms',programController.getAllProgram)
router.get('/:id',programController.getProgramById)
// router.post('/login',y)


module.exports = router