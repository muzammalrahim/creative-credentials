const mongoose = require("mongoose");
const Signup =require("../models/signup");

const companySchema = mongoose.Schema({
  name: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref:"Signup" },

});

module.exports = mongoose.model("Company", companySchema);
