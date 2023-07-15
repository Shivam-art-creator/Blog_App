// import mongoose
const mongoose = require("mongoose");


// route handler
const likeSchema = new mongoose.Schema({
    // Kon si post pr like kr rhe ho
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    // kon sa user like kr rha hai
    user: {
        type:String,
        required:true,
    }
});


module.exports = mongoose.model("Like",likeSchema);