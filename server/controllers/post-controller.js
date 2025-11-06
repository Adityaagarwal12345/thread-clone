const User = require("../models/user-model");
const Post = require("../models/post-model");
const Comment = require("../models/comment-model");
const cloudinary = require("../config/cloudinary");
const formidable = require("formidable");

// ================= ADD POST =================
exports.addPost = async (req, res) => {
  try {
    const form = formidable({});
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ msg: "Error in form parse!" });
      }

      const post = new Post();

      if (fields.text) {
        post.text = fields.text;
      }

      if (files.media) {
        const uploadedImage = await cloudinary.uploader.upload(
          files.media.filepath,
          { folder: "Threads_clone_youtube/Posts" }
        );

        if (!uploadedImage) {
          return res.status(400).json({ msg: "Error while uploading Image!" });
        }

        post.media = uploadedImage.secure_url;
        post.public_id = uploadedImage.public_id;
      }

      post.admin = req.user._id;

      const newPost = await post.save();

      await User.findByIdAndUpdate(
        req.user._id,
        { $push: { threads: newPost._id } },
        { new: true }
      );

      res.status(201).json({ msg: "Post created!", newPost });
    });
  } catch (err) {
    res.status(400).json({ msg: "Error in addPost!", err: err.message });
  }
};

// ================= ALL POSTS =================
exports.allPost = async (req, res) => {
  try {
    const { page } = req.query;
    let pageNumber = page || 1;

    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .skip((pageNumber - 1) * 3)
      .limit(3)
      .populate({ path: "admin", model: "User", select: "-password" })
      .populate({ path: "likes", model: "User", select: "-password" })
      .populate({
        path: "comments",
        model: "Comment",
        populate: {
          path: "admin",
          model: "User",
          select: "-password",
        },
      });

    res.status(200).json({ msg: "Posts fetched!", posts });
  } catch (err) {
    res.status(400).json({ msg: "Error in allPost!", err: err.message });
  }
};

// ================= DELETE POST =================
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ msg: "Id is required!" });

    const postExists = await Post.findById(id);
    if (!postExists) return res.status(404).json({ msg: "Post not found!" });

    const userId = req.user._id.toString();
    const adminId = postExists.admin.toString();

    if (userId !== adminId) {
      return res
        .status(403)
        .json({ msg: "You are not authorized to delete this post!" });
    }

    if (postExists.media) {
      await cloudinary.uploader.destroy(postExists.public_id);
    }

    await Comment.deleteMany({ _id: { $in: postExists.comments } });

    await User.updateMany(
      {
        $or: [{ threads: id }, { reposts: id }, { replies: id }],
      },
      {
        $pull: { threads: id, reposts: id, replies: id },
      }
    );

    await Post.findByIdAndDelete(id);

    res.status(200).json({ msg: "Post deleted!" });
  } catch (err) {
    res.status(400).json({ msg: "Error in deletePost!", err: err.message });
  }
};

// ================= LIKE POST =================
exports.likePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ msg: "Id is required!" });

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ msg: "No such Post!" });

    if (post.likes.includes(req.user._id)) {
      await Post.findByIdAndUpdate(id, { $pull: { likes: req.user._id } },
        {new:true}
      );
      return res.status(200).json({ msg: "Post unliked!" });
    }

    await Post.findByIdAndUpdate(id, { $push: { likes: req.user._id } },
      {new:true}
    );
    return res.status(200).json({ msg: "Post liked!" });
  } catch (err) {
    res.status(400).json({ msg: "Error in likePost!", err: err.message });
  }
};
