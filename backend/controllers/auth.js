const SignUp = require("../models/signup");
const Comapny = require("../models/company");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
  try {

    var email = req.body.email;
    if (req.body.role === "Admin") {
      var company_name = req.body.company_name.toLowerCase();
    }
    const existing_user = await SignUp.findOne({ email: email });

    if (existing_user) {
     return res.status(500).json({ message: "User Already exists" });
    } else {
      if (req.body.role === "Admin") {
        const existing_company = await SignUp.findOne({ company_name: company_name });
        if (existing_company) {
          return res.status(500).json({ message: "Company Already Exists" });
        }
      }
      if (req.body.role === "User") {
        const find_company = await Comapny.findOne({ _id: req.body.company_id });
        if (!find_company ) {
          return res.status(500).json({ message: "Please Choose Company from list" });
        }
      }
      var pass = await bcrypt.hash(req.body.password, 10);

      var status;
      if (req.body.role === "Admin") {
        status = true;
      }
      if (req.body.role === "User") {
        status = false;
      }


      var data = {
        "name": req.body.name,
        "email": email,
        "role": req.body.role,
        "company_name": company_name,
        "company_id": req.body.company_id,
        "password": pass,
        "phone": req.body.phone,
        "status": status
      }



      const addUser = await SignUp.create(data);
      if (!addUser) {
       return res.status(500).json({ message: "No user Added" })

      }
      if (req.body.company_name) {
        Comapny.create({ name: req.body.company_name.toLowerCase(), user_id: addUser._id });
      }
      res.status(200).json({ message: "User Created" });
    }
  }
  catch (error) {
    console.log('error:::::', error)
    res.status(500).json({ message: error.message })
  }

};


const login = (req, res) => {

  try {
    let fetchedUser;
    SignUp.findOne({ email: req.body.email }).populate('company_id').then(user => {
      facuser = req.body.email;
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;


      return bcrypt.compare(req.body.password, user.password);


    })
      .then(result => {
        // console.log(fetchedUser);
        if (!result) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }

        if (fetchedUser.status == false) {
          return res.status(401).json({
            message: "Waiting for admin Approval"
          })
        }

        /*  var x=  function e(){
              return req.body.email;
            }*/
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          "secret_this_should_be_longer",
          { expiresIn: "1h" }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          fetchedUser: fetchedUser
        });
      })
      .catch(err => {
        console.log(err);
        return res.status(401).json({
          message: "Auth failed"
        });
      });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}


module.exports = {
  signup,
  login
}
