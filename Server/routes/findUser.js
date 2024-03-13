const express = require("express");
const { connectDatabase } = require("../db/connectDB");

const router = express.Router();

// Endpoint pour récupérer tous les utilisateurs
router.get("/", async (req, res) => {
  try {
    const db = await connectDatabase();
    const usersCollection = db.collection("Users");
    const users = await usersCollection.find().toArray();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
