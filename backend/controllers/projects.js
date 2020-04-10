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
      company_id:companyid._id,
      status:'2',
      creditHrs:req.body.creditHrs
    });

    if(!projectadded){
      return res.status(500).json("Error No Project Added")
    }
    res.status(200).json("Successfully Added");

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
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

    // var projects = await Projects.find({company_id:companyid._id},"title").populate('client_id','name');
    var projectfound = await Projects.find({company_id:companyid._id},'title').populate('client_id','name');
    if(!projectfound){
      return res.status(500).json("Error No Project found")
    }
    res.status(200).json({message:"Successfully Found ",projects:projectfound});

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
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


    var projectfound = await Projects.findOne({company_id:companyid._id,_id:req.body.project_id});
    if(!projectfound){
      return res.status(500).json("Error No Project found")
    }


    res.status(200).json({message:"Successfully Found ",projects:projectfound});
  }catch(error){
    res.status(500).json(error);
  }

}
const getprojbyid = async(req,res)=>{
try{
console.log("In project by id",req.params.id);
var project = await Projects.find({_id:req.params.id}).populate('client_id','name');
if(!project){
  return res.status(400).json("No Project Found");
}
res.status(200).json({project:project});

}catch(error){
res.status(400).json(error);
}

}

const updateprojbyid = async (req,res)=>{
var id=req.params.id;
  console.log("Update Project",id,req.body);
try{
var updateproject= await Projects.findOne({_id:req.params.id});
if(updateproject){
  const projects = new Projects ({
    _id:id,
    title:req.body.title,
    description:req.body.description,
    client_id:req.body.client_id,
    site:req.body.site,
    note:req.body.note,
    status:req.body.status,
    creditHrs:req.body.creditHrs
  })


 var updated= await Projects.updateOne({_id:id},projects);

 if(!updated){
   return res.status(500).json("Not updated");
 }
res.status(200).json("Successfully Updated")
}

}catch(error){
console.log(error);
res.status(500).json(error);
}

}

module.exports = {
  addprojects,
  getProjects,
  projDescription,
  getprojbyid,
  updateprojbyid
}
