const express =require("express");

const router = express.Router();

const assignController = require("../controllers/assign");




router.post("/assignproj",assignController.assignproj);
router.post("/getAssignedProj",assignController.getAssigned);
router.delete("/removeassign/:id",assignController.remove);
module.exports=router;
