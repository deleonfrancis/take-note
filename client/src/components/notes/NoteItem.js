import React, { useContext, useState } from "react";
import NoteContext from "../../context/note/noteContext";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal";
import ModifyNoteModal from "../modals/ModifyNoteModal";

function NoteItem({ note }) {
  const noteContext = useContext(NoteContext);

  const { openDeleteModal } = noteContext;

  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const showConfirmDeleteModal = (e) =>{
    openDeleteModal(e)
    setShowConfirmModal(true)
  }

  const [showModifyModal, setShowModifyModal] = useState(false)
  const showModifyNoteModal = (note) =>{
    setShowModifyModal(true)
  }


  return (
    <div id={`#${note.id}`} className="card m-2 cardBg" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.body}</p>
        <div className="d-flex justify-content-between">
          <button onClick={showModifyNoteModal} className="btn btn-block">
            <i className="fas fa-edit text-info"><span className="" style={{}}><br/>View/Edit</span></i>
          </button>
          <br />
          <button onClick={showConfirmDeleteModal} className="btn btn-block">
            <i className="far fa-trash-alt text-danger"> <span><br/>Delete</span></i>
          </button>
        </div>
      </div>
      {showConfirmModal && <ConfirmDeleteModal note={note} setShowConfirmModal={setShowConfirmModal} />}
      {showModifyModal && <ModifyNoteModal note={note} setShowModifyModal={setShowModifyModal} />}
    </div>
  );
}

export default NoteItem;
