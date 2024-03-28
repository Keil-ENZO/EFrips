const express = require("express");
const router = express.Router();
const Categories = require("../../models/categories");

// Endpoint pour récupérer tous les blogs
router.get("/:id", async (req, res) => {
  try {
    const categorie = await Categories.findByPk(req.params.id);

    if (!categorie) {
      return res.status(404).json({ error: "categorie not found" });
    }

    const { nom } = req.body;
    categorie.nom = nom;
    categorie.updatedAt = new Date();

    await categorie.save();

    const updatedCategories = await Categories.findByPk(req.params.id);

    res.json(updatedCategories);
  } catch (error) {
    console.error("Error fetching categorie:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
