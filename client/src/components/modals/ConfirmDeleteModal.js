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
    height: "30%",
    width: "30%",
  },
};

Modal.setAppElement("#root");

function ConfirmDeleteModal({note, setShowConfirmModal}) {
  const noteContext = useContext(NoteContext);

  const {
    deleteNote,
    // closeDeleteModal,
    confirmDeleteNote,
    afterDeleteOpenModal
  } = noteContext;

  const {id, title} = note;;

  const handleDelete = (e) => {
    e.preventDefault();
    deleteNote(id);
    setShowConfirmModal(false)
    // closeDeleteModal();
  };

  const handleCancel = () => {
    setShowConfirmModal(false)
    // closeDeleteModal();
  };

  console.log(title);

  return (
    <Modal
      isOpen={confirmDeleteNote}
      onAfterOpen={afterDeleteOpenModal}
      onRequestClose={handleCancel}
      style={customStylesDelete}
      contentLabel="Delete Note Modal"
    >
      <div className="d-flex justify-content-between mb-3">
        <h5 className="">Delete {title}?</h5>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <button onClick={handleDelete} className="btn btn-danger btn-block">
            Delete Note
          </button>
        </div>
        <div className="col-sm-6">
          <button onClick={handleCancel} className="btn btn-light btn-block">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmDeleteModal;
