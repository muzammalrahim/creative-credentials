const Clients = require("../models/clients");
var signup = require('../models/signup');
var company = require('../models/company');

const clients = async (req, res) => {


  try {

    const companyName = await signup.findOne({company_name:req.body.company_name.toLowerCase(),status:true,role:'Admin'});
    if(!companyName){
     return res.status(500).json("No users found");
    }

    // console.log("===============",companyName.company_name);
    var companyid =await company.findOne({name:companyName.company_name});


    if(!companyid){
      return res.status(500).json("No company found");
    }




    if(!req.body){
      return res.status(500).json("No Body Found");
    }
    if(!req.body.clientName){
      return res.status(500).json("No Client Name Found");
    }

    var clientadded = await Clients.create({name:req.body.clientName,detail:req.body.clientDetails,company_id:companyid._id});

    if(!clientadded){
      return res.status(500).json("No Client Added");
    }
    res.status(200).json("Client Added Successfully");

  } catch (error) {
    console.log(error);
  };

}

const getClients = async(req,res)=>{


  try {
    const companyName = await signup.findOne({company_name:req.body.company_name.toLowerCase(),status:true,role:'Admin'});
    if(!companyName){
     return res.status(500).json("No users found");
    }

    // console.log("===============",companyName.company_name);
    var companyid =await company.findOne({name:companyName.company_name});


    if(!companyid){
      return res.status(500).json("No company found");
    }
    var clients = await Clients.find({company_id:companyid._id});

    if(!clients){
      return res.status(500).json("No Client Found");
    }
    res.status(200).json({message:"Client Found Successfully",clients:clients});

  } catch (error) {
    console.log(error);
  };
}


const getclientbyid = async(req,res) =>{

  try{
    // console.log("In Client by id", req.params.id);
    var client = await Clients.find({_id:req.params.id});
    if(!client){
      return res.status(400).json("No Client Found");
    }
    res.status(200).json({client:client});
  }catch(error){
    res.status(400).json(error);
  }
}



const updateclientbyid = async (req,res)=>{
  var id=req.params.id;
    // console.log("Update Client:::::::::::::",id,req.body);
  try{
  var clientget= await Clients.findOne({_id:id});
  if(clientget){
    const clients = new Clients ({
      _id:id,
      name:req.body.clientName,
      detail:req.body.clientDetails,
    })
   var updated= await Clients.updateOne({_id:id},clients);
   if(!updated){
     return res.status(500).json("Not updated");
   }
  res.status(200).json("Successfully Updated")
  }

  }
  catch(error) {
  console.log(error);

  }

  }


module.exports = {
  clients,
  getClients,
  getclientbyid,
  updateclientbyid
}
