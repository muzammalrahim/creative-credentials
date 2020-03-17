var express =require('express');

var router =express.Router();
var usersController = require ('../controllers/users')

router.post('/companyusers',usersController.users);
router.put('/statusupdate/:id',usersController.changeStatus);
module.exports=router;
