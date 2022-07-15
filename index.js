const express = require("express");
const path = require("path");
const port = 8000;

const db = require("./config/mongoose");
const ToDotask = require("./models/todo");

// firing the express server
const app = express();

// setting up the view engine
app.set("view engine", "views");
app.set("views", path.join(__dirname,"views"))
app.use(express.urlencoded());
app.use(express.static("assets"));


// routers
app.use("/",require("./routes/"));




// express server host the server from here using port value
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});