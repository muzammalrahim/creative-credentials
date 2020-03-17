var express=require('express');

var router =express.Router();

var companyController = require('../controllers/company');

router.get("/companies" ,companyController.company);
router.post("/updatecompany" ,companyController.updatecompany);
router.post("/getSingleCompany" ,companyController.getSingleCompany);

module.exports=router;
