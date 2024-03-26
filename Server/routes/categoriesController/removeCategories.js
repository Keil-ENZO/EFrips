const express = require("express");
const router = express.Router();
const Categories = require("../../models/categories");

// Endpoint pour récupérer tous les blogs
router.delete("/:id", async (req, res) => {
  try {
    const categories = await Categories.findByPk(req.params.id);

    if (!categories) {
      return res.status(404).json({ error: "Categories not found" });
    }

    await categories.destroy();

    res.json({ message: "Categories deleted successfully " + categories.id });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
