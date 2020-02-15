const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  company_name: { type: String },
  company_list: { type: String },
  password: { type: String, required: true },
  phone: { type: String, required: true },

});

module.exports = mongoose.model("SignUp", signupSchema);
