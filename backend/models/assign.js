const mongoose = require ('mongoose');



const assignSchema =mongoose.Schema({
project_id:{type: mongoose.Schema.Types.ObjectId, ref:"Projects" },
user_id:{type: mongoose.Schema.Types.ObjectId, ref:"SignUp" },
company_id:{type: mongoose.Schema.Types.ObjectId, ref:"Company" }
});

module.exports=mongoose.model("Assign",assignSchema);

