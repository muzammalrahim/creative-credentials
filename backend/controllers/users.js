var signup = require('../models/signup');
var company = require('../models/company');

const users = async (req, res) => {

  try{
    const companyName = await signup.findOne({ company_name: req.body.company_name.toLowerCase(), status: true, role: 'Admin' });
    if (!companyName) {
      return res.status(500).json("No users found");
    }

    console.log(companyName.company_name);
    var companyUsers = await company.findOne({ name: companyName.company_name });

    if (!companyUsers) {
      return res.status(500).json("No company found");
    }
    var totalUsers = await signup.find({ company_id: companyUsers._id }, '_id name email status');

    res.status(200).json(totalUsers);
  }
catch(error){
  res.status(400).json(error);
}
}


const changeStatus = async (req, res) => {
  try {
    const findtoupdate = await signup.findOne({ _id: req.params.id });
    var signupobj = new signup({
      _id: req.params.id,
      status: !findtoupdate.status,
    });
    console.log("changes status is running");

    const changeStatus = await signup.updateOne({ _id: req.params.id }, signupobj);
    if (!changeStatus) {
      return res.status(200).json("No changes saved");

    }
    res.status(200).json(changeStatus);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
module.exports =
{
  users,
  changeStatus
}
