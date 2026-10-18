const mongoose = require("mongoose");
const Blog = require("../models/Blog");

// POST /blogs — create a new blog
exports.createBlog = async (req, res, next) => {
  try {
    const { title, description, author } = req.body;
    const blog = await Blog.create({ title, description, author });
    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res
        .status(400)
        .json({ success: false, message: "Validation failed", errors });
    }
    next(err);
  }
};

// GET /blogs — get all blogs
exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (err) {
    next(err);
  }
};

// GET /blogs/:id — get a single blog
exports.getBlogById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid blog id" });
    }
    const blog = await Blog.findById(id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (err) {
    next(err);
  }
};

// DELETE /blogs/:id — delete a blog
exports.deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid blog id" });
    }
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      data: blog,
    });
  } catch (err) {
    next(err);
  }
};
