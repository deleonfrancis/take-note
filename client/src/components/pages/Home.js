import React, { useContext, useEffect } from "react";
import Jumbotron from "../layout/Jumbotron";
import AddNoteModal from "../modals/AddNoteModal";
import Notes from "../notes/Notes";
import AuthContext from "../../context/auth/authContext";

function Home() {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser()
    // eslint-disable-next-line
}, [])

  return (
    <div>
      <Jumbotron />
      <AddNoteModal />
      <div className="container">
        <Notes />
      </div>
    </div>
  );
}

export default Home;
