const express = require("express");
const router = express.Router();
const Blog = require("../../models/blog");

// Endpoint pour récupérer tous les blogs
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
