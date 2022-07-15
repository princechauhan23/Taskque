// require dbs
const ToDotask = require("../models/todo");

// controller for deleting tasks 
module.exports.delete = function(req, res){
    // get the id from query in the ul
    let ids = JSON.parse(req.query.ids);

    // find the task in the database using id and delete
ids.forEach(id=>{
    ToDotask.findByIdAndDelete(id, function(err){
        if (err){
            console.log("error in deleting an object from databse",err);
            return;
        }
        if(id==ids[ids.length-1]){
            res.send("success")
        }
    });
})
    
};