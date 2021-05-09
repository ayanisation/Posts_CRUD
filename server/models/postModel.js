const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String },
  message: { type: String },
  tags: { type: String },
  selectedFile: { type: String },
  liked: { type: Boolean, default: false },
  disliked: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    // default: new Date(),
  },
});

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;
