const mongoose = require ('mongoose');
const clientSchema =mongoose.Schema({
name:{type:String,require:true},
detail:{type:String},
company_id: { type: mongoose.Schema.Types.ObjectId, ref:"Company" },
});

module.exports=mongoose.model("Clients",clientSchema);
