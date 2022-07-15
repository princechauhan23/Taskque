// require express to fetch the router property
const express = require("express");

const router = express.Router();

// importing the homecontroller
const homeController = require("../controllers/home_controller");
const addtaskController = require("../controllers/addtask_controller");
const deleteController = require("../controllers/deletetask_controller");
console.log("router loaded");

// routes 
router.get("/",homeController.home);
router.post("/addtask", addtaskController.addtask);
router.get("/deletetask/", deleteController.delete);

// exports the router 
module.exports = router;