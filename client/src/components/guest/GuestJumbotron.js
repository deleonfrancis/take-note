import React, {useState} from "react";
import { Link } from "react-router-dom";
import GuestFilterNotes from "../guest/GuestFilterNotes";
import GuestAddNoteModal from "../guestModals/GuestAddNoteModal";


function GuestJumbotron() {
  const [addNoteOpen, setAddNoteOpen] = useState(false);

  const handleGuestShowAdd = (e)=>{
    e.preventDefault()
    setAddNoteOpen(true)
    // console.log("Guest Show add Modal");
  }

  return (
    <div>
      <div className="jumbotron pb-3">
        <h1 className="display-4 takeNote">takeNote</h1>
        <p className="lead takeNoteDetail">
          For a more secure experience, sign up
        </p>
          <Link className="backToLoginBtn btn" to="/register">
            <i className="fas fa-user-plus"> Sign Up</i>
          </Link>
        
        <hr className="my-4" />
        <div style={{ width: "50%", margin: "auto" }} className="my-5">
          <p className="lead">
            <button onClick={handleGuestShowAdd} className="btn btn-success btn-block shadow">
              Compose A Note
            </button>
          </p>
        </div>
       <GuestFilterNotes />
          <Link className="backToLoginBtn btn" to="/login">
            <i className="fas fa-caret-left"> Back to Login</i>
          </Link>
      </div>
     {addNoteOpen && <GuestAddNoteModal addNoteOpen={addNoteOpen} setAddNoteOpen={setAddNoteOpen} />}
    </div>
  );
}

export default GuestJumbotron;
