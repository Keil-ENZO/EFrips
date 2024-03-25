const express = require("express");
const router = express.Router();
const Articles = require("../../models/articles");

// Endpoint pour récupérer tous les blogs
router.get("/", async (req, res) => {
  try {
    const articles = await Articles.findAll();
    res.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
