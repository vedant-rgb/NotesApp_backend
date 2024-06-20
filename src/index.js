
//Step 1->initialisation
const express = require("express");
const mongoose=require("mongoose");
require('dotenv').config();
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const PORT=process.env.PORT || 8080;


//Step 2->Staring the server
app.listen(PORT,()=>{console.log("Server started at 8080")}); 
//Step 3->Connecting to mongoDB
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Connected to DB!!");
    //Step 4->routes
    app.get("/",(req,res)=>{
        res.send("Home Page");
    });

    const noteRouter = require('./routes/api')
    app.use("/notes",noteRouter);
    // /notes/list
    // /notes/add
    // /notes/delete/..
    // /notes/update/..


});

