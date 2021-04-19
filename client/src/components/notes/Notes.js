import React, { useContext } from "react";
import NoteContext from "../../context/note/noteContext";

function Notes() {
  const noteContext = useContext(NoteContext);

  const { notes } = noteContext;
  return (
    <>
      {notes.map((note) => (
        <h3>{note.title}</h3>
      ))}
    </>
  );
}

export default Notes;
