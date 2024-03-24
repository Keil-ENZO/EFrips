const express = require("express");
const router = express.Router();
const Users = require("../models/users");

// Endpoint pour récupérer tous les blogs
router.get("/", async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
