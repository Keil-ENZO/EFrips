const express = require("express");
const router = express.Router();
const Users = require("../../models/users");

// Endpoint pour récupérer tous les blogs
router.get("/:id", async (req, res) => {
  try {
    const users = await Users.findByPk(req.params.id);

    if (!users) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(users);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
