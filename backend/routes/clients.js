const express =require("express");

const router = express.Router();

const clientsController = require("../controllers/clients");




router.post("/addclient",clientsController.clients);
router.post("/getclients",clientsController.getClients);

module.exports=router;
