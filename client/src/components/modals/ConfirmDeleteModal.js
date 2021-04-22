import React, { useContext } from "react";
import Modal from "react-modal";
import NoteContext from "../../context/note/noteContext";

const customStylesDelete = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "50%",
    width: "50%",
  },
};

Modal.setAppElement("#root");

function ConfirmDeleteModal({ note, setShowConfirmModal }) {
  const noteContext = useContext(NoteContext);

  const {
    deleteNote,
    closeDeleteModal,
    confirmDeleteNote,
    afterDeleteOpenModal,
  } = noteContext;

  const { _id, title } = note;

  const handleDelete = (e) => {
    e.preventDefault();
    deleteNote(_id);
    setShowConfirmModal(false);
    closeDeleteModal();
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
    closeDeleteModal();
  };

  console.log(title);

  return (
    <div className="d-flex justify-content-center">
      <Modal
        isOpen={confirmDeleteNote}
        onAfterOpen={afterDeleteOpenModal}
        onRequestClose={handleCancel}
        style={customStylesDelete}
        contentLabel="Delete Note Modal"
      >
        <div className="mb-3">
          <h6 className="d-flex justify-content-center">
            Are you sure you want to delete "{title}"?
          </h6>
        </div>

        <div className="row d-flex justify-content-center mb-5">
          <div style={{ width: "60%" }} className="">
            <button
              onClick={handleDelete}
              className="btn btn-danger btn-block mb-2"
            >
              Delete
            </button>
          </div>
          <div style={{ width: "60%" }} className="">
            <button onClick={handleCancel} className="btn btn-light btn-block">
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ConfirmDeleteModal;
