var express=require('express');

var router =express.Router();

var companyController = require('../controllers/company');

router.get("/companies" ,companyController.company);

module.exports=router;