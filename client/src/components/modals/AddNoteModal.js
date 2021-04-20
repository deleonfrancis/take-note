import React, { useContext, useState } from "react";
import Modal from "react-modal";
import NoteContext from "../../context/note/noteContext";

const customStyles = {
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

function AddNoteModal() {
  const noteContext = useContext(NoteContext);

  const {
    afterOpenModal,
    closeModal,
    addNoteModalOpen,
    setAddNoteModalOpen,
    addNote,
    updateNote,
  } = noteContext;

  const [note, setNote] = useState({
    title: " ",
    body: " ",
  });

  const { title, body } = note;

  const onChange = (e) =>
  setNote({ ...note, [e.target.name]: e.target.value });


  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
      setNote({
        title: " ",
        body: " ",
      });
      closeModal()
    // if (note === null) {
    //   addNote(note);
    //   setNote({
    //     title: " ",
    //     body: " ",
    //   });
    //   closeModal()

    // } else {
    //   updateNote(note);
    //   // clearCurrent();
    // }
  };

  return (
    <Modal
      isOpen={addNoteModalOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Note Modal"
    >
      <div className="d-flex justify-content-between mb-3">
        <h2 className="">Add A Note</h2>
        <button className="escapeModalBtn" onClick={closeModal}>
          <i className="fas fa-times fa-lg"></i>
        </button>
      </div>

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
            value={title}
          />
        </div>
        <div className="form-group mb-5">
          <label htmlFor="exampleFormControlTextarea1">Note:</label>
          <textarea
            className="form-control"
            placeholder="Note"
            onChange={onChange}
            name="body"
            value={body}
            id="exampleFormControlTextarea1"
            rows="15"
          ></textarea>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <button onClick={handleSubmit} className="btn btn-success btn-block" >
              Create Note
            </button>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-danger btn-block">Cancel</button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default AddNoteModal;
