const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    bio:{
        type:String,
    },
    profilePic:{
        type:String,
        default:"file:///C:/Users/dell/Downloads/register-bg.webp",
    },
    public_id:{
        type:String
    },
    followers:[{ type:mongoose.Schema.Types.ObjectId,ref:"user" }],
    threads:[{type:mongoose.Schema.Types.ObjectId,ref:"post"}],
    replies:[{type:mongoose.Schema.Types.ObjectId,ref:"comment"}],
    reposts:[{type:mongoose.Schema.Types.ObjectId,ref:"post"}],
},
  {timestamps:true}
);

module.exports=mongoose.model("User",userSchema);

//profile [ic is string bcos we use cloudinary 
//to upload phhoto and its provide us a link]
//public id isilye manlo koi photo cloudinary se dhundhni ho tou
//ref ka mtlb konse schema se connect krna chahte hai