import React, { useContext, useState} from "react";
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
    height: "auto",
    width: "90%",
    border: "none",
    backgroundColor:"#f3f4ed",
    padding:"50px"
  },
};

Modal.setAppElement("#root");

function AddNoteModal() {
  const noteContext = useContext(NoteContext);

  const {
    afterOpenModal,
    closeModal,
    addNoteModalOpen,
    // setAddNoteModalOpen,
    addNote,
  } = noteContext;

  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const { title, body } = note;

  const onChange = (e) => setNote({ ...note, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({
      title: "",
      body: "",
    });
    closeModal();
  };

  const handleCancel = (e) => {
    setNote({
      title: "",
      body: "",
    });
    closeModal();
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
        <h2 className="greeting">Add A Note</h2>
        <button className="escapeModalBtn" onClick={closeModal}>
          <i className="fas fa-times fa-lg"></i>
        </button>
      </div>

      <form>
        <div className="form-group">
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
            
            {/* Title */}
            <label className="sr-only" htmlFor="newNoteTitle">
              Title
            </label>
            <input
              type="text"
            name="title"
            className="form-control noteTitleInput"
            id="newNoteTitle"
            placeholder="Title"
            onChange={onChange}
            value={title}
            // ref={inputEl}
            />
          </div>
        </div>
        {/* Note Body */}
        <div className="form-group mb-5">
          <label className="sr-only" htmlFor="exampleFormControlTextarea1">Note:</label>
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
        <div className="row" style={{ width: "60%", margin: "auto" }}>
          <div className="col-sm-12">
            <button
              onClick={handleSubmit}
              className={
                title.length < 1 || body.length < 1
                  ? "btn btn-secondary btn-block mb-3 shadow"
                  : "btn btn-success btn-block mb-3 shadow"
              }
              disabled={title.length < 1 || body.length < 1}
            >
              Create Note
            </button>
          </div>
          <div className="col-sm-12">
            <button onClick={handleCancel} className="btn btn-light btn-block shadow">
              Cancel
            </button>
          </div>
        </div>
      </form>
      
    </Modal>
  );
}

export default AddNoteModal;
