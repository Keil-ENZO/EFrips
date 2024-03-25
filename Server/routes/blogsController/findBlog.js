const express = require("express");
const router = express.Router();
const Blog = require("../../models/blog");

// Endpoint pour récupérer tous les blogs
router.get("/", async (req, res) => {
  try {
    const blog = await Blog.findAll();
    res.json(blog);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
