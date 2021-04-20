import React, { useContext, useState } from "react";
import NoteContext from "../../context/note/noteContext";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal";

function NoteItem({ note }) {
  const noteContext = useContext(NoteContext);

  const { openDeleteModal } = noteContext;
  // const { deleteNote, closeDeleteModal  } = noteContext;

  // const handleDelete = (e)=>{
  //   e.preventDefault();
  //   deleteNote(note.id);
  //   // deleteNote({...note, [e.target.id]: e.target.value});
  //   closeDeleteModal();
  // }

  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const showConfirmDeleteModal = (e) =>{
    openDeleteModal(e)
    setShowConfirmModal(true)
  }

  return (
    <div id={`#${note.id}`} className="card m-2" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.body}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-block">
            <i className="fas fa-edit"></i>
          </button>
          <button onClick={showConfirmDeleteModal} className="btn btn-block">
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
      {showConfirmModal && <ConfirmDeleteModal note={note} setShowConfirmModal={setShowConfirmModal} />}
    </div>
  );
}

export default NoteItem;
