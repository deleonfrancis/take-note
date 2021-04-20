import React, { useContext, useState } from "react";
import Modal from "react-modal";
import NoteContext from "../../context/note/noteContext";

const customStylesModify = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "90%",
    width: "90%",
  },
};

Modal.setAppElement("#root");

function ModifyNoteModal({note, setShowModifyModal}) {
  const noteContext = useContext(NoteContext);

  const {
    afterModifyOpenModal,
    closeModifyModal,
    // modifyNote,
    updateNote,
    // setAddNoteModalOpen,
    // updateNote,
  } = noteContext;

  const [noteContent, setNoteContent] = useState({
    title: `${note.title}`,
    body: `${note.body}`,
  });

  // const { title, body } = note;

  const onChange = (e) =>{
      setNoteContent({ ...note, [e.target.name]: e.target.value });
  }
  
  const handleSave = (e) => {
    e.preventDefault();
    updateNote(noteContent);
    setShowModifyModal(false)
  };

  const handleCancel = e =>{
    setShowModifyModal(false)
    // closeModifyModal()
  }

  return (
    <Modal
      isOpen={true}
      onAfterOpen={afterModifyOpenModal}
      onRequestClose={closeModifyModal}
      style={customStylesModify}
      contentLabel="Modify Note Modal"
    >

      <form >
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            onChange={onChange}
            value={noteContent.title}
          />
        </div>
        <div className="form-group mb-5">
          <label htmlFor="exampleFormControlTextarea1">Note:</label>
          <textarea
            className="form-control"
            placeholder="Note"
            onChange={onChange}
            name="body"
            value={noteContent.body}
            id="exampleFormControlTextarea1"
            rows="15"
          ></textarea>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <button onClick={handleSave} className="btn btn-success btn-block" >
              Save
            </button>
          </div>
          <div className="col-sm-6">
            <button onClick={handleCancel} className="btn btn-danger btn-block">Cancel</button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default ModifyNoteModal;
