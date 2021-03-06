const mongoose = require ('mongoose');



const projectSchema =mongoose.Schema({
title:{type:String , required:true},
description:{type:String, required:true},
note:{type:String},
client_id:{type:mongoose.Schema.Types.ObjectId , ref:"Clients"},
site:{type:String },
company_id: { type: mongoose.Schema.Types.ObjectId, ref:"Company" ,required:true},
description_checker:{type:Boolean, default: false},
createdAt: {type: Date, default: Date.now},
status:{type:String ,default:'2'},
creditHrs:{type:String ,default:''}
});

module.exports=mongoose.model("Projects",projectSchema);

