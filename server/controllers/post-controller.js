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
