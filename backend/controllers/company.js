const Company = require("../models/company");

const company =async (req,res) => {

    try{

        const companyList = await Company.find();
        if(!companyList){
            res.status(400).send("No company found");
        }
        else{
            res.status(200).json({companyList:companyList});
        }

    }catch(error){
console.log(error);
res.status(400).send(error);
    }

}

module.exports={company};