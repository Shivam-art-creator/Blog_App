// import mongoose
const mongoose = require("mongoose");


// route handler
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    // array 
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like", 
    }],
    // array
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]
});


// export
module.exports = mongoose.model("POST",postSchema);