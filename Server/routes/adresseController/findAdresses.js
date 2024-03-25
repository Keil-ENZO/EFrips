const express = require("express");
const router = express.Router();
const Adresses = require("../../models/adresses");

// Endpoint pour récupérer tous les blogs
router.get("/", async (req, res) => {
  try {
    const adresses = await Adresses.findAll();
    res.json(adresses);
  } catch (error) {
    console.error("Error fetching adresses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
