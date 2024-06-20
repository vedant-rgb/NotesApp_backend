const mongoose=require("mongoose");

//Step 1->Create schema
const noteSchema=mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
    },
    dateAdded:{
        type:Date,
        default:Date.now
    },
});

//Step 2->Create model and export it
module.exports = mongoose.model("Note",noteSchema);

