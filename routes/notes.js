const express = require("express")
const router = express.Router()

// gets user notes
router.get("/", (req, res) => {res.json({message: "Hello get all notes"})})

// adds a new notes
router.post("/", (req, res) => {res.json({message: "Hello add new note"})})
// updates a note
router.put("/:id", (req, res) => {res.json({message: "Hello  update note"})})
// deletes a note
router.delete("/:id", (req, res) => {res.json({message: "Hello  delete note"})})

module.exports = router;