import React, { useContext } from "react";
import GuestNoteItem from "./GuestNoteItem";
import GuestNoteContext from "../../context/guestNote/guestNoteContext";

function GuestNotes() {
  const guestNoteContext = useContext(GuestNoteContext);
  const { guestNotes, filtered } = guestNoteContext;

  return (
    <div className="row">
      {filtered !== null
        ? filtered.map((note) => <GuestNoteItem key={note.id} note={note} />)
        : guestNotes.map((note) => <GuestNoteItem key={note.id} note={note} />)}
    </div>
  );
}

export default GuestNotes;
