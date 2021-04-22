import React, { useContext } from "react";
import FilterNotes from "../notes/FilterNotes";
import AuthContext from "../../context/auth/authContext";
import NoteContext from "../../context/note/noteContext";

// import notepad_pic from "../../images/notepad_pic.jpg";

function Jumbotron() {
  const noteContext = useContext(NoteContext);
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logoutUser, user } = authContext;
  const { openModal, clearNotes } = noteContext;

  const onLogout = () => {
    logoutUser();
    clearNotes();
  };

  // const notesGreaterThanOne = notes.length>1

  const authWelcome = (
    <>
      <h1 className="display-4">Hello {user && user.firstName},</h1>
      <p className="lead">
        keep track of your notes in this secure and user friendly web
        application.
      </p>
    </>
  );

  const guestWelcome = (
    <>
      <h1 className="display-4">takeNote</h1>
      <p className="lead">
        Keep track of your notes in this secure and user friendly web
        application.
      </p>
    </>
  );

  return (
    <div className="jumbotron pb-3">
      {isAuthenticated ? authWelcome : guestWelcome}
      <hr className="my-4" />
      <div style={{ width: "50%", margin: "auto" }} className="my-5">
        <p className="lead">
          <button className="btn btn-success btn-block" onClick={openModal}>
            Compose A Note
          </button>
        </p>
      </div>
      <FilterNotes />
      {/* {notesGreaterThanOne && <FilterNotes />} */}
      <button onClick={onLogout} className="btn mt-3">
        <i className="fas fa-sign-out-alt">Logout</i>
      </button>
    </div>
  );
}

export default Jumbotron;
