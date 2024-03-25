const express = require("express");
const router = express.Router();
const Categories = require("../../models/categories");

// Endpoint pour récupérer tous les blogs
router.get("/", async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
