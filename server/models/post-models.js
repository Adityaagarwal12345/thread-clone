const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    text:{
        type:String
    },
    media:{
        type:String
    },
    public_id:{
        type:String
    },
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}],
    comment:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}]
},
    {timestamps:true}
);
const postModel=mongoose.model("post",postSchema);
module.exports=postModel;
//when we pass a single object that means only a single user will post