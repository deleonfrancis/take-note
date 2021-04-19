import React, { useState } from "react";
import Modal from "react-modal";

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

function AddNoteModal({
  openModal,
  afterOpenModal,
  closeModal,
  addNoteModalOpen,
  setAddNoteModalOpen,
}) {
  return (
    <div>
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
            <i class="fas fa-times fa-lg"></i>
          </button>
        </div>

        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Title:</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
            />
          </div>
          <div class="form-group mb-5">
            <label for="exampleFormControlTextarea1">Note:</label>
            <textarea
              class="form-control"
              placeholder="Note"
              id="exampleFormControlTextarea1"
              rows="15"
            ></textarea>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <button className="btn btn-success btn-block">Create Note</button>
            </div>
            <div className="col-sm-6">
              <button className="btn btn-danger btn-block">Cancel</button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddNoteModal;
