const express = require("express");
const { ObjectId } = require("mongodb");
const { connectDatabase } = require("../db/connectDB");

const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    const db = await connectDatabase();
    const usersCollection = db.collection("Users");

    const result = await usersCollection.findOneAndDelete({
      _id: new ObjectId(req.params.id),
    });

    if (result.value === null) {
      // L'utilisateur n'a pas été trouvé
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
