const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.post("/", createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.delete("/:id", deleteBlog);

module.exports = router;
