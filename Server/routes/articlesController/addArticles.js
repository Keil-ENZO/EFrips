const express = require("express");
const router = express.Router();
const Articles = require("../../models/articles");

// Endpoint pour créer un nouveau blog
router.post("/", async (req, res) => {
  try {
    const newArticles = await Articles.create({
      title: req.body.title,
      content: req.body.content,
      prix: req.body.prix,
      tags: req.body.tags,
      img: req.body.img,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.json(newArticles);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
