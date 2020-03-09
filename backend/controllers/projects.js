const Projects = require("../models/projects");
var signup = require('../models/signup');
var company = require('../models/company');


var addprojects = async (req, res) => {
  console.log(":::::::::::::::;", req.body);

  try {
    const companyName = await signup.findOne({company_name:req.body.company_name.toLowerCase(),status:true,role:'Admin'});
    if(!companyName){
     return res.status(500).json("No users found");
    }


    var companyid =await company.findOne({name:companyName.company_name});

    if(!companyid){
      return res.status(500).json("No company found");
    }




    if(!req.body){
      return res.status(500).json("No Body Found");
    }
    if(!req.body.title){
      return res.status(500).json("No Project Title Found");
    }

    var projectadded = await Projects.create({
      title:req.body.title,
      description:req.body.description,
      note:req.body.note,
      client_id:req.body.client_id,
      site:req.body.site,
      company_id:companyid._id
    });

    if(!projectadded){
      return res.status(500).json("Error No Project Added")
    }
    res.status(200).json("Successfully Added");

  } catch (error) {
    console.log(error);
  };

}

var getProjects = async (req, res) => {
  console.log(":::::::::::::::;", req.body);

  try {
    const companyName = await signup.findOne({company_name:req.body.company_name.toLowerCase(),status:true,role:'Admin'});
    if(!companyName){
     return res.status(500).json("No users found");
    }

    console.log("===============",companyName.company_name);
    var companyid =await company.findOne({name:companyName.company_name});


    if(!companyid){
      return res.status(500).json("No company found");
    }


    var projectfound = await Projects.find({company_id:companyid._id},'title').populate('client_id','name');
    if(!projectfound){
      return res.status(500).json("Error No Project found")
    }
    res.status(200).json({message:"Successfully Found ",projects:projectfound});

  } catch (error) {
    console.log(error);
  };

}

var projDescription = async(req,res)=>{

  try {
    const companyName = await signup.findOne({company_name:req.body.company_name.toLowerCase(),status:true,role:'Admin'});
    if(!companyName){
     return res.status(500).json("No users found");
    }

    console.log("===============",companyName.company_name);
    var companyid =await company.findOne({name:companyName.company_name});


    if(!companyid){
      return res.status(500).json("No company found");
    }


    var projectfound = await Projects.findOne({company_id:companyid._id,_id:req.body.project_id},'description');
    if(!projectfound){
      return res.status(500).json("Error No Project found")
    }


    res.status(200).json({message:"Successfully Found ",projects:projectfound});
  }catch(error){

  }

}


module.exports = {
  addprojects,
  getProjects,
  projDescription
}
