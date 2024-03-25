const express = require("express");
const router = express.Router();
const Blog = require("../../models/blog");

// Endpoint pour créer un nouveau blog
router.post("/", async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.json(newBlog); // Renvoie le nouveau blog créé
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
