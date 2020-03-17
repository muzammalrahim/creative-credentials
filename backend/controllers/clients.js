const Clients = require("../models/clients");
var signup = require('../models/signup');
var company = require('../models/company');

const clients = async (req, res) => {


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

    console.log("===============",companyName.company_name);
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
module.exports = {
  clients,
  getClients
}
