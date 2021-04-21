import React, { useContext, useRef, useEffect } from "react";
import NoteContext from "../../context/note/noteContext";

function FilterNotes() {
  const noteContext = useContext(NoteContext);
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const { filterNotes, clearFilter, filtered } = noteContext;

  const handleChange = (e) => {
    if (text.current.value !== "") {
      filterNotes(e.target.value);
    } else {
      clearFilter();
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
        className="form-control"
        placeholder="Search"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  );
}

export default FilterNotes;
