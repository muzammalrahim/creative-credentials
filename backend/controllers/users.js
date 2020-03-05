var signup = require('../models/signup');
var company = require('../models/company');

const users = async (req,res)=>{

  const companyName = await signup.findOne({company_name:req.body.company_name.toLowerCase(),status:true,role:'Admin'});
  if(!companyName){
   return res.status(500).json("No users found");
  }

  console.log(companyName.company_name);
  var companyUsers =await company.findOne({name:companyName.company_name});

  if(!companyUsers){
    return res.status(500).json("No company found");
  }
  var totalUsers =await signup.find({company_id:companyUsers._id},'_id name email status');

  res.status(200).json(totalUsers);
}


const changeStatus = async(req,res)=> {
  const changeStatus = await signup.updateOne({_id:req.body.user_id});
  res.status(200).json(changeStatus);
}
module.exports=
{
  users,
  changeStatus
}
