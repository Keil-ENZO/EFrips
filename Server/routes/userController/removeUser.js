const express = require("express");
const router = express.Router();
const Users = require("../../models/users");

// Endpoint pour récupérer tous les blogs
router.delete("/:id", async (req, res) => {
  try {
    const users = await Users.findByPk(req.params.id);

    if (!users) {
      return res.status(404).json({ error: "User not found" });
    }

    await users.destroy();

    res.json({ message: "User deleted successfully" + users.id });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
