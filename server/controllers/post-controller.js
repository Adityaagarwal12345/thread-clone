const User = require("../models/user-model");
const Post = require("../models/post-model");
const Comment = require("../models/comment-model");
const cloudinary = require("../config/cloudinary");
const formidable = require("formidable");
const mongoose = require("mongoose");


exports.addPost = async(req,res)=>{
    try{
        const form =formidable({});
        form.parse(req,async(err,fields,files)=>{
            if(err){
                return res.status(400).json({msg:"Error in form parse!"});
            }
            const post = new Post();
            if(fields.text){
                post.text=fields.text;
            }
            if(files.media){
                const uploadedImage = await cloudinary.uploader.upload(
                    files.media.filepath,
                    {
                        folder:"Threads_clone_youtube/Posts"
                    }
                );
                if(!uploadedImage){
                    return res.status(400).json({msg:"error while uploading Image!"})
                }
                post.media=uploadedImage.secure_url;
                post.public_id=uploadedImage.public_id;
            }
            post.admin = req.user._id;//ye id cookies mai hoti hai
            const newPost = await post.save();
            await User.findByIdAndUpdate(req.user._id,{
                $push: { threads: newPost._id},//id push into user model
            },
            {
            new:true
        });
            res.status(201).json({msg:'post created !',newPost});
        });
    } catch(err){
        res.status(400).json({msg:"error in addpost! ",err:err.message});
    }
};

//here we re going to req.query instead of parms or body
exports.allPost = async (req, res) => {
  try {
    const { page } = req.query;//yha hm id ki jageh page lenge jese id li thii
    let pageNumber = page;
    if (!page || page === undefined) {
      pageNumber = 1;
    }
    const posts = await Post.find({})//.find se sari post aajayegi jitni avaiable hai 
      .sort({ createdAt: -1 })//isme kya hai na ye sorted krdeti hai in last update post ke hisba se 
      .skip((pageNumber - 1) * 3)//ye logic hai behind pagination ka ek page pr ek post dilgego 
      .limit(3)//limit 3 hi rkhni hai 
      .populate({ path: "admin", select: "-password" })//joins laga diye idha r  hamne 
      .populate({ path: "likes", select: "-password" })
      .populate({
        path: "comments",
        populate: {
          path: "admin",
          model: "User",
        },
      });
    res.status(200).json({ msg: "Post Fetched !", posts });
  } catch (err) {
    res.status(400).json({ msg: "Error in allPost !", err: err.message });
  }
};


//delete post
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ msg: "Id is required !" });
    }
    const postExists = await Post.findById(id);
    if (!postExists) {
      return res.status(400).json({ msg: "Post not found !" });
    }
    const userId = req.user._id.toString();
    const adminId = postExists.admin._id.toString();
    if (userId !== adminId) {
      return res
        .status(400)
        .json({ msg: "You are not authorized to delete this post !" });
    }
    if (postExists.media) {
      await cloudinary.uploader.destroy(
        postExists.public_id,
        (error, result) => {
          console.log({ error, result });
        }
      );
    }
    await Comment.deleteMany({ _id: { $in: postExists.comments } });
    await User.updateMany(
      {
        $or: [{ threads: id }, { reposts: id }, { replies: id }],
      },
      {
        $pull: {
          threads: id,
          reposts: id,
          replies: id,
        },
      },
      { new: true }
    );
    await Post.findByIdAndDelete(id);
    res.status(400).json({ msg: "Post deleted !" });
  } catch (err) {
    res.status(400).json({ msg: "Error in deletePost !", err: err.message });
  }
};