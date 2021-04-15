const express = require("express");
const router = express.Router();

// Resisters a user
router.post("/", (req, res) => {
  res.json({ message: "Hello user post, resisters a user" });
});

module.exports = router;
