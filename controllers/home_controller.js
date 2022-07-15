// import database 
// const db = require("../config/mongoose");
const ToDotask = require("../models/todo");


// home controller to render the main page of todo App
module.exports.home = function(req, res){
    // console.log("home controller called!");

    // find tasks from database
    ToDotask.find({},function(err, tasks){
        if(err){
            console.log("Error in fetching tasks from db");
            return;
        }
        return res.render("../views/home.ejs",{
            title: "TODO App",
            task_list: tasks,
        });
    });
};

// module.exports.actionName = function(req, res){}
