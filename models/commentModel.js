// import mongoose
const mongoose = require("mongoose");

// route handler
const commentSchema = new mongoose.Schema({
    // kon si post pr cmnt kr rha hai
    post:{
        type:mongoose.Schema.Types.ObjectId,  // refering id of post
        ref:"Post",   // reference to the post model  
    },
    // kon cmnt kr rha hai
    user:{
        type:String,
        required:true,
    },
    // kya cmnt kr rha hai
    body:{
        type:String,
        required:true,
    }
});

// export 
module.exports = mongoose.model("Comment",commentSchema);
