var express=require('express');

var router =express.Router();

var credentialController= require('../controllers/credentials');

router.post('/credentials', credentialController.credentials);
router.post('/totalusers', credentialController.totalUsers);
module.exports=router;
