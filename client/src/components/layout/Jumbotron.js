import React from "react";

// import notepad_pic from "../../images/notepad_pic.jpg";

function Jumbotron({ openModal }) {
  return (
    <div className="jumbotron">
      <h1 className="display-4">takeNote</h1>
      <p className="lead">
        Keep track of your notes in this secure and user friendly web
        application.
      </p>
      <hr className="my-4" />
      <div>
        <p className="lead">
          <button className="btn btn-success btn-block" onClick={openModal}>
            Add Note
          </button>
        </p>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span
            style={{ border: "none" }}
            className="input-group-text"
            id="basic-addon1"
          >
            <i className="fas fa-search"></i>
          </span>
        </div>
        <input
          id="filterNote"
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
}

export default Jumbotron;
