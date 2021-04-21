import React, { useContext } from "react";
import NoteContext from "../../context/note/noteContext";
import FilterNotes from "../notes/FilterNotes";
// import notepad_pic from "../../images/notepad_pic.jpg";

function Jumbotron() {
  const noteContext = useContext(NoteContext);

  const { openModal, notes } = noteContext;

  const notesLessThanOne = notes.length >= 2

  return (
    <div className="jumbotron">
      <h1 className="display-4">takeNote</h1>
      <p className="lead">
        Keep track of your notes in this secure and user friendly web
        application.
      </p>
      <hr className="my-4" />
      <div>
        <p className="lead">
          <button className="btn btn-success btn-block" onClick={openModal}>
            Compose A Note
          </button>
        </p>
      </div>
      {notesLessThanOne && <FilterNotes />}
    </div>
  );
}

export default Jumbotron;
