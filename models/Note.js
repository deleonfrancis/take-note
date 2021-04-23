const mongoose = require("mongoose");

const currentDateAndTime = Date.now();
const today = new Date(currentDateAndTime);
const formattedDate = today.toDateString();

const NoteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // name of the collection
  },
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  formattedDate: {
    type: String,
    default: formattedDate,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("note", NoteSchema);
