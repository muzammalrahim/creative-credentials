const Company = require("../models/company");
var signup = require('../models/signup');




const company = async (req, res) => {

  try {

    const companyList = await Company.find();
    if (!companyList) {
      res.status(400).send("No company found");
    }
    else {
      res.status(200).json({ companyList: companyList });
    }

  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }

}

const getSingleCompany = async(req,res)=>{
  try{
var getCompany = await Company.findOne({name:req.body.company_name});
if(!getCompany){
  return res.status(400).json("data send");
}
res.status(200).json({getCompany:getCompany});
  }catch(error){
    res.status(400).json(error);

  }

}
const updatecompany= async (req,res)=> {
try{

console.log("UpdateCompanyyyyy",req.body);
  const company_update = new Company({
    _id:req.body.company_id,
    name:req.body.company_name.toLowerCase()
  })
var update = await Company.updateOne({_id:req.body.company_id},company_update);
if(!update){
  return res.status(400).json("Error not updated");
}
const user_update = new signup({
  _id:req.body.user_id,
  company_name:req.body.company_name.toLowerCase()
})
var update_user = await signup.updateOne({_id:req.body.user_id},user_update);
if(!update_user){
  return res.status(400).json("Error not updated");
}
var fetched_user = await signup.findOne({_id:req.body.user_id});
res.status(200).json({message:"Successfully updated",fetchedUser:fetched_user})

}catch(error){

  res.status(400).json(error);
}

}
module.exports = { company ,updatecompany,getSingleCompany};
