import React, { useContext, useState } from "react";
import Modal from "react-modal";
import NoteContext from "../../context/note/noteContext";
import GuestNoteContext from "../../context/guestNote/guestNoteContext";


const customStylesModify = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    width: "90%",
    border: "none",
    backgroundColor: "#f3f4ed",
    padding:"50px"
  },
};

Modal.setAppElement("#root");

function GuestModifyNoteModal({ note, setShowModifyModal }) {
  const noteContext = useContext(NoteContext);
  const guestNoteContext = useContext(GuestNoteContext);

  const { updateGuestNote, guestClearCurrent } = guestNoteContext;


  const {
    afterModifyOpenModal,
    closeModifyModal,
  } = noteContext;

  // const [originalNote, setOriginalNote] = useState({
  //   title: `${note.title}`,
  //   body: `${note.body}`,
  // });

  // const originalNote = {...note}

  const [noteContent, setNoteContent] = useState({
    title: `${note.title}`,
    body: `${note.body}`,
  });

  // const { title, body } = note;

  const onChange = (e) => {
    setNoteContent({ ...note, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateGuestNote(noteContent);
    setShowModifyModal(false);
    guestClearCurrent()
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    updateGuestNote(noteContent);
  };

  // const handleCancel = (e) => {
  //   setNoteContent(originalNote);
  //   setShowModifyModal(false);
  // };

  return (
    <Modal
      isOpen={true}
      onAfterOpen={afterModifyOpenModal}
      onRequestClose={closeModifyModal}
      style={customStylesModify}
      contentLabel="Modify Note Modal"
    >
      <form>
        <div className="form-group">
        {/* Note Title */}
          <div
            style={{ width: "70%", margin: "auto" }}
            className="input-group mb-3"
          >
            <div className="input-group-prepend">
              <span
                style={{ border: "none", background: "none" }}
                className="input-group-text"
                id="basic-addon1"
              >
                <i className="fas fa-envelope-open-text fa-lg"></i>
              </span>
            </div>
            <label className="sr-only" htmlFor="modNoteTitle">
              Title
            </label>
            <input
              className="form-control noteTitleInput"
              type="text"
              name="title"
              id="modNoteTitle"
              placeholder="Title"
              onChange={onChange}
              onBlur={handleUpdate}
              value={noteContent.title}
              // ref={inputEl}
            />
          </div>

          {/* old modify title */}
          {/* <label htmlFor="exampleFormControlInput1">Title:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            onChange={onChange}
            onBlur={handleUpdate}
            value={noteContent.title}
          /> */}
        </div>
        <div className="form-group mb-5">
          <label className="sr-only" htmlFor="exampleFormControlTextarea1">Note:</label>
          <textarea
            className="form-control"
            placeholder="Note"
            onChange={onChange}
            onBlur={handleUpdate}
            name="body"
            value={noteContent.body}
            id="exampleFormControlTextarea1"
            rows="15"
          ></textarea>
        </div>
        <div
          className="row d-flex justify-content-center"
          style={{ width: "60%", margin: "auto" }}
        >
          <div className="col-sm-12">
            <button
              onClick={handleSave}
              className="btn btn-success shadow btn-block mb-3"
            >
              Done
            </button>
          </div>
          {/* <div className="col-sm-12">
            <button onClick={handleCancel} className="btn btn-light btn-block">
              Cancel
            </button>
          </div> */}
        </div>
      </form>
    </Modal>
  );
}

export default GuestModifyNoteModal;
