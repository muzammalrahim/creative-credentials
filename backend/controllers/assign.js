var signup = require('../models/signup');
var assign = require('../models/assign');
var company = require('../models/company');
const assignproj =async(req,res) => {
try{
  const companyName = await signup.findOne({company_name:req.body.company_name.toLowerCase(),status:true,role:'Admin'});
  if(!companyName){
   return res.status(500).json("No users found");
  }

  var companyid =await company.findOne({name:companyName.company_name});
  if(!companyid){
    return res.status(500).json("No company found");
  }
  const checking = await assign.findOne({company_id:companyid._id,user_id:req.body.user_id,project_id:req.body.project_id});
  if(checking){
    console.log(checking);
    return res.status(400).json("Project already assigned");
  }

  if(!req.body){
    return res.status(500).json("No Body Found");
  }
  var assignadded = await assign.create({
    project_id:req.body.project_id,
    user_id:req.body.user_id,
    company_id:companyid._id
  });

  if(!assignadded){
    return res.status(500).json("Error No Assign Added")
  }
  res.status(200).json("Successfully Added");

}
catch(error){
  console.log(error);
}

}
const getAssigned =async(req,res)=>{
  try{
    // console.log("In assigned module")
    const companyName = await signup.findOne({company_name:req.body.company_name.toLowerCase(),status:true,role:'Admin'});
    if(!companyName){
     return res.status(500).json("No users found");
    }

    var companyid =await company.findOne({name:companyName.company_name});
    if(!companyid){
      return res.status(500).json("No company found");
    }
    const assigndata = await assign.find({company_id:companyid._id}).populate('project_id').populate('user_id','name');


    if(!assigndata){
      return res.status(400).json("Sorry No data Found");
    }
    res.status(200).json({assigndata:assigndata});
  }catch(error){

  }
}
const remove = async(req,res)=>{
try{
const removeassign =await assign.remove({_id:req.params.id});
if(!removeassign){
return res.status(400).json("Error not removed");
}
res.status(200).json("Successfully Deleted");
}catch(error){
console.log(error);
res.status(400).json(error);
}

}
module.exports={
  assignproj,
  getAssigned,
  remove,
}
