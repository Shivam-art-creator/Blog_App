// import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");


// buisness logic
exports.createComment = async(req,res)=>{
    // save funct ka use krege usse phle check krna hoga cmnt ka object humne apna ready kr rkha ho
    try{
        // fetch data from req ke body
        const {post,user,body} = req.body;

        // create a comment object
        const comment = new Comment({
            post,user,body
        });

        // save the new comment into the db
        const savedComment = await comment.save();

        // fnd the post by ID, add the new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments:savedComment._id}},{new:true})
        .populate("comments") 
        .exec(); 
         // push operator to update any entry or pull operator to delete any entry
        // new: true -> just to return the updated cmnt not the prev cmnt
        // we can fetch the actual doc related to that id using populate() function
        res.json({
            post:updatedPost,
        });
    } catch(err){
        return res.status(500)
        .json({
            err:"Error while creating comment",
        });
    }
}