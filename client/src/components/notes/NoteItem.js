import React, {useContext} from "react";
import NoteContext from "../../context/note/noteContext";

function NoteItem({ note }) {
  const noteContext = useContext(NoteContext);

  const { deleteNote } = noteContext;

const handleDeleteNote = ()=>{
  deleteNote(note.id)
}
  return (
      <div className="card m-2" style={{width: "20rem"}}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.body}
          </p>
          <div className="d-flex justify-content-between">
          <button className="btn btn-block"><i className="fas fa-edit"></i></button>
          <button onClick={handleDeleteNote} className="btn btn-block"><i className="far fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
  );
}

export default NoteItem;
