const SignUp = require("../models/signup");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  try{

  var email =req.body.email;


const existing_user= await SignUp.findOne({email:email});

if(existing_user){
  res.status(500).json("User Already exists");
}else{

  var pass = await bcrypt.hash(req.body.password, 10);



  var data = {
      "name":  req.body.name,
      "email":email,
      "role":req.body.role,
      "company_name":req.body.company_name,
      "company_list":req.body.company_list,
      "password":pass,
      "phone":req.body.phone
  }
const addUser = await SignUp.create(data);
if (!addUser) {
res.status(500).json("No user Added")

}
res.status(200).json("User Created");
}
}
catch(error){
  console.log('error:::::', error)
  res.status(500).json({ msg: error.message })
}

};


const login =   (req,res) => {

  try{
  let fetchedUser;
   SignUp.findOne({email:req.body.email}).then(user => {
     facuser=req.body.email;
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
    

      return  bcrypt.compare(req.body.password, user.password);


    })
    .then(result => {
      // console.log(fetchedUser);
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
  /*  var x=  function e(){
        return req.body.email;
      }*/
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        fetchedUser:fetchedUser
      });
    })
    .catch(err => {
console.log(err);
      return res.status(401).json({
        message: "Auth failed"
      });
    });
  }catch(error){
console.log(error)
  }
}


module.exports={
  signup,
  login
}
