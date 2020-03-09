const Projects = require('../models/projects');
const signup = require('../models/signup');
const company = require('../models/company');
const credentials= async(req,res) => {

  try{
    const companyName = await signup.findOne({company_name:req.body.company_name.toLowerCase(),status:true,role:'Admin'});
    if(!companyName){
     return res.status(500).json("No users found");
    }

    var companyid =await company.findOne({name:companyName.company_name});
    if(!companyid){
      return res.status(500).json("No company found");
    }

    var projects = await Projects.find({company_id:companyid._id},"title").populate('client_id','name');
    if(!projects){
      return res.status(500).json("No Projects Found")
    }

    res.status(200).json({message:"Success",projects : projects});

  } catch(error) {

  }

}

module.exports={
  credentials
}
