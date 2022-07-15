// import database
// const db = require("../config/mongoose");
const ToDotask = require("../models/todo");

// controller for adding new task
module.exports.addtask = function(req, res){
    console.log(req.body)
    ToDotask.create({
        todo: req.body.ToDo,
        category: req.body.category,
        date: req.body.date
    },function(err, newtodo){
        if (err){
            console.log("error in creating todo task!");
            return;
        }
        console.log("***************", newtodo);
        return res.redirect("/")
    });
};