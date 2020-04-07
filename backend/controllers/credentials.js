const Projects = require('../models/projects');
const signup = require('../models/signup');
const company = require('../models/company');

const assign = require('../models/assign');
const credentials = async (req, res) => {

  try {
    console.log('credentials', req.body);
    if (req.body.role == "Admin") {
      console.log("In Adminnnnn");

      const companyName = await signup.findOne({ company_name: req.body.company_name.toLowerCase(), status: true, role: 'Admin' });
      if (!companyName) {
        return res.status(500).json("No users found");
      }

      var companyid = await company.findOne({ name: companyName.company_name });
      if (!companyid) {
        return res.status(500).json("No company found");
      }

      // var projects = await Projects.find({company_id:companyid._id},"title").populate('client_id','name');
      var projects = await assign.find({ company_id: companyid._id }).populate({ path: 'project_id', populate: { path: 'client_id' } });
    } else if (req.body.role == 'User') {
      console.log("In userrrr");
      var projects = await assign.find({ user_id: req.body.user_id }).populate({ path: 'project_id', populate: { path: 'client_id' } });
    }

    if (!projects) {
      return res.status(500).json("No Assigned Projects Found")
    }

    res.status(200).json({ message: "Success", assignedProj: projects });

  } catch (error) {

  }

}
const totalUsers = async (req, res) => {

  try {
    var projects = await assign.find({ project_id: req.body.project_id }).populate({ path: 'user_id' });
    if (!projects) {
      return res.status(400).json("No Projects Users Found")
    }
    res.status(200).json({ projects: projects })
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
module.exports = {
  credentials,
  totalUsers,
}
