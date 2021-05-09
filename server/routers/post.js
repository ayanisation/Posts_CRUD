const express = require("express");
const mongoose = require("mongoose");
const sample = require("../operations/sample");
const PostModel = require("../models/postModel");
const { response } = require("express");

const router = new express.Router();

router.get("/", async (req, res) => {
  try {
    const newPosts = await PostModel.find().sort({ $natural: -1 });
    res.status(200).json(newPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const addPost = new PostModel(req.body);
  try {
    await addPost.save();
    res.status(201).json(addPost);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
});

router.patch("/:id/update", async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ message: "post not found" });
  } else {
    try {
      const updatedPost = await PostModel.findByIdAndUpdate(
        _id,
        { ...post, _id },
        {
          new: true,
        }
      );
      res.status(200).json(updatedPost);
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  }
});

router.patch("/:id/like", async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ message: "post not found" });
  } else {
    try {
      const post = await PostModel.findOne({ _id });
      const liked = post.liked;
      const disliked = post.disliked;
      const updatedPost = await PostModel.findByIdAndUpdate(
        _id,
        { liked: !liked, disliked: disliked ? !disliked : disliked },
        {
          new: true,
        }
      );
      res.status(200).json(updatedPost);
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  }
});

router.patch("/:id/dislike", async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ message: "post not found" });
  } else {
    try {
      const post = await PostModel.findOne({ _id });
      const liked = post.liked;
      const disliked = post.disliked;
      const updatedPost = await PostModel.findByIdAndUpdate(
        _id,
        {
          liked: liked ? !liked : liked,
          disliked: !disliked,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedPost);
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  }
});

router.delete("/:id/delete", async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ message: "post not found" });
  } else {
    try {
      await PostModel.findByIdAndRemove(_id);
      res.status(200).json({ message: "Post removed" });
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  }
});

module.exports = router;
