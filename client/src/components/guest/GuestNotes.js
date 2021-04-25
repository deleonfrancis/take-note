import React, { useContext } from "react";
import GuestNoteItem from "./GuestNoteItem";
import GuestNoteContext from "../../context/guestNote/guestNoteContext";

function GuestNotes() {
  const guestNoteContext = useContext(GuestNoteContext);
  const { guestNotes } = guestNoteContext;

  return (
    <div>
      {guestNotes.map((note) => <GuestNoteItem key={note.id} note={note} />)}
    </div>
  );
}

export default GuestNotes;
