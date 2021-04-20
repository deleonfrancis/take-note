import React from "react";

function NoteItem({ note }) {
  return (
      <div className="card m-2" style={{width: "20rem"}}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.body}
          </p>
          <div className="d-flex justify-content-between">
          <button className="btn btn-block"><i className="fas fa-edit"></i></button>
          <button className="btn btn-block"><i className="far fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
  );
}

export default NoteItem;
