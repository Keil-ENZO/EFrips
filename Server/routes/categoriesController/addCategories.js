const express = require("express");
const router = express.Router();
const Categories = require("../../models/categories");

// Endpoint pour créer un nouveau blog
router.post("/", async (req, res) => {
  try {
    const newCategories = await Categories.create({
      nom: req.body.nom,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.json(newCategories);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
