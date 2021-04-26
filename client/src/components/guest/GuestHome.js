import React, {useEffect, useContext} from "react";
import GuestJumbotron from "./GuestJumbotron";
import GuestNotes from "./GuestNotes";
import GuestNoteContext from "../../context/guestNote/guestNoteContext";


function GuestHome() {

  useEffect(() => {
    getGuestNotes()
    // eslint-disable-next-line
  }, [])

  const guestNoteContext = useContext(GuestNoteContext);
  const { getGuestNotes } = guestNoteContext;
  return (
    <div>
      <GuestJumbotron />
      <div className="container">
      <GuestNotes />
      </div>
    </div>
  );
}

export default GuestHome;
