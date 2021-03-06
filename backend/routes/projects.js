const express =require("express");

const router = express.Router();

const projectsController = require("../controllers/projects");




router.post("/addproject",projectsController.addprojects);
router.post("/getprojects",projectsController.  getProjects);
router.post("/projdescription",projectsController.projDescription);


router.get("/getprojbyid/:id",projectsController.getprojbyid);
router.put("/updateprojbyid/:id",projectsController.updateprojbyid);
module.exports=router;
