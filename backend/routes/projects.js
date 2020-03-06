const express =require("express");

const router = express.Router();

const projectsController = require("../controllers/projects");




router.post("/addproject",projectsController.addprojects);
router.post("/getprojects",projectsController.  getProjects);

module.exports=router;
