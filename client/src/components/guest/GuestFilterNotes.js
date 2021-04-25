import React, { useContext, useRef, useEffect } from "react";
import GuestNoteContext from "../../context/guestNote/guestNoteContext";

function GuestFilterNotes() {
  const guestNoteContext = useContext(GuestNoteContext);

  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const { guestFilterNotes, guestClearFilter,filtered } = guestNoteContext;


  const handleChange = (e) => {
    if (text.current.value !== "") {
      guestFilterNotes(e.target.value);
    } else {
      guestClearFilter();
    }
  };

  return (
    <div style={{width:"70%", margin:"auto"}} className="input-group mb-3">
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
        onChange={handleChange}
        ref={text}
        id="filterNote"
        type="text"
        className="form-control custom"
        placeholder="Search"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  );
}

export default GuestFilterNotes;
