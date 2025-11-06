const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // must match User model
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post", // must match Post model name exactly
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);

//kosni post mai kya comment hui hai 
//text matlb ya commnet hai 
//admin mtlb page