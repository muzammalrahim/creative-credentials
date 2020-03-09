
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const authroutes =require("./routes/auth");
const companyroutes =require("./routes/company");
const usersroutes =require("./routes/users");

const projectroutes = require("./routes/projects");
const clientroutes = require("./routes/clients")
const credentialsroutes = require("./routes/credentials")
const app = express();
//QT44EaNJfnmWedIs
//"mongodb+srv://fahad:WiAlrRRZKWjBtdct@cluster0-irxzc.mongodb.net/Comsats?retryWrites=true
mongoose
  .connect(
    "mongodb+srv://fahad:"+process.env.MONGO_ATLAS_PW+
      "@cluster0-irxzc.mongodb.net/creative-credentials?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use("/api", authroutes);
app.use("/api", companyroutes);
app.use("/api", usersroutes);
app.use("/api", projectroutes);
app.use("/api", clientroutes);
app.use("/api", credentialsroutes);
module.exports = app;
