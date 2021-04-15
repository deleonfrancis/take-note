const express = require("express");
const router = express.Router();

// gets logged in user
router.get("/", (req, res) => {
  res.json({ message: "hello get logged in user" });
});

// sends the data to get authenticated and return a token.
router.post("/", (req, res) => {
  res.json({ message: "hello post user, sends the data to get authenticated and return a token." });
});

module.exports = router;