const programService = require('../service/programService')

class programController{
    async addProgram(req,res){
        if(!req.body.name || !req.body.description || !req.body.semester_id)
        {
            res.status(400).json({ success: false, message: "All the fields are required" });
        }
        try {
          const id = await programService.addProgram(req.body);
          res.status(200).json(id);
        } catch (err) {
          console.log(err);
        }
    }

    async getAllProgram(req, res) {
        try {
          const programs = await programService.getAllPrograms();
          res.status(200).json(programs);
        } catch (err) {
          console.log(err);
        }
      }
    
      async getProgramById(req, res) {
        try {
          const result = await programService.getProgramById(req.params['id']);
          if (!result.success) {
            res.status(401).json(result);
          }
          res.status(200).json(result);
        } catch (err) {
          console.log(err);
        }
      }
}

module.exports = new programController();