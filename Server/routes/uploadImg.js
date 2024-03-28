const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "./images" });

router.post("/", upload.single("image"), (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }
    console.log(req.file);
    res.json({ message: "Image upload successful", file: file });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
