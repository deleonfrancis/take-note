const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const auth = require("../middleware/auth");

// bring in User.js
const User = require("../models/User");
const Note = require("../models/Note");

// gets user notes
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ date: -1 });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error.");
  }

  // res.json({msg: "Hello get all notes"})
});

// adds a new note
router.post("/", auth, async (req, res) => {
  const { title, body } = req.body;
  try {
    const newNote = new Note({
      user: req.user.id,
      title,
      body,
    });

    const note = await newNote.save();
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error.");
  }
  // res.json({ msg: "Hello add new note" });
});
// updates a note
router.put("/:id", auth, async (req, res) => {
  const { title, body } = req.body;

  // Check to see if fields are actually submitted
  const noteFields = {};
  if (title) noteFields.title = title;
  if (body) noteFields.body = body;

  try {
    //   try and find the note
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found." });

    // make sure user owns the contact
    if (note.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not Authorized." });

    // update the note
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: noteFields },
      { new: true } //if the note doesn't exist, create it.
    );
    res.json(note); //send updated note
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// deletes a note
router.delete("/:id", auth, async (req, res) => {
  try {
    //   try and find the note
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found." });

    // make sure user owns the contact
    if (note.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not Authorized." });

    //   Delete the note
    await Note.findByIdAndRemove(req.params.id)
    res.json({msg: "Note removed."})
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error.");
  }
});

module.exports = router;
