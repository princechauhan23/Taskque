// require the library
const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb://0.0.0.0/ToDo_App_db");

// acquire the  connection (to check of it is successful)
const db = mongoose.connection;

// error
db.on("error", console.error.bind(console,"error connecting to db"));

// up and runnig then print message
db.once("open", function(){
    console.log("successfully connected to the database");
});