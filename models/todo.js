const mongoose = require("mongoose");

// todotask Schema Structure
const todoSchema = new mongoose.Schema({
    todo:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
});

// defining collection name as ToDotask
const ToDotask = mongoose.model("ToDoTask", todoSchema);

module.exports = ToDotask;