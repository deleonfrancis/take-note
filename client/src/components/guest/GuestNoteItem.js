import React, { useContext, useState } from 'react'
// import NoteContext from "../../context/note/noteContext";
import GuestNoteContext from "../../context/guestNote/guestNoteContext";

import GuestDeleteModal from "../guestModals/GuestDeleteModal"
import GuestModifyNoteModal from "../guestModals/GuestModifyNoteModal"

function GuestNoteItem({ note }) {
    // const noteContext = useContext(NoteContext);
    const guestNoteContext = useContext(GuestNoteContext);


    // const { openDeleteModal } = noteContext;
    const { deleteGuestNotes, guestSetCurrent } = guestNoteContext;

    const { id, title } = note;

    const [showGuestConfirmModal, setShowGuestConfirmModal] = useState(false)
    const showConfirmDeleteModal = () =>{
      setShowGuestConfirmModal(true)
    }
  
    const [showModifyModal, setShowModifyModal] = useState(false)
    const showModifyNoteModal = () =>{
      guestSetCurrent(note)
      setShowModifyModal(true)
    }
    return ( 
    <div id={`#${note.id}`} className="card m-2 cardBg shadow" style={{ width: "20rem" }}>
    <div className="card-body">
      <h5 className="card-title noteTitle">{(note.title.length >=15) ? `${note.title.slice(0, 10)}...` : note.title}</h5>
      <hr style={{width:"70%"}}/>
      <p className="card-text text-muted mb-0">{(note.body.length >= 20) ? `${note.body.slice(0, 20)}...` : note.body}</p>
      <div className="d-flex justify-content-between my-3">
        <button onClick={showModifyNoteModal} className="btn btn-block">
          <i className="fas fa-edit text-info"><span className="" style={{}}><br/>View/Edit</span></i>
        </button>
        <br />
        <button onClick={showConfirmDeleteModal} className="btn btn-block">
          <i className="far fa-trash-alt text-danger"> <span><br/>Delete</span></i>
        </button>
      </div>
      <p className="text-muted mb-0">{note.formattedDate}</p>
    </div>
    {showGuestConfirmModal && <GuestDeleteModal note={note} setShowGuestConfirmModal={setShowGuestConfirmModal} />}
    {showModifyModal && <GuestModifyNoteModal note={note} setShowModifyModal={setShowModifyModal} />}
  </div>
    )
}

export default GuestNoteItem
