import React, { useReducer } from " react";
import GuestNoteContext from "./guestNoteContext";
import guestNoteReducer from "./guestNoteReducer";
import {
  GUEST_GET_NOTES,
  GUEST_ADD_NOTE,
  GUEST_DELETE_NOTE,
  GUEST_UPDATE_NOTE,
  GUEST_SET_CURRENT,
  GUEST_CLEAR_CURRENT,
  GUEST_CLEAR_NOTES,
  GUEST_FILTER_NOTES,
  GUEST_NOTE_ERROR,
  GUEST_CLEAR_FILTER,
} from "../types";

const GuestNoteState = (props) => {
  const initialState = {
    guestNotes: [],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(guestNoteReducer, initialState);

// Get Notes
const getGuestNotes = () =>{
    console.log("GUEST_GET_NOTES");
}

// Add Note
const addGuestNotes = () =>{
    console.log("GUEST_ADD_NOTE");
}
 
// Delete Note
const deleteGuestNotes = () =>{
    console.log("GUEST_DELETE_NOTE");
}
// Update Note
const updateGuestNotes = () =>{
    console.log("GUEST_UPDATE_NOTE");
}
// Set Current
const guestSetCurrent = () =>{
    console.log("GUEST_SET_CURRENT");
}

// Clear Current
const guestClearCurrent = () =>{
    console.log("GUEST_CLEAR_CURRENT");
}

// Clear Notes
const guestClearNotes = () =>{
    console.log("GUEST_CLEAR_NOTES");
}

// Filter Notes
const guestFilterNotes = () =>{
    console.log("GUEST_FILTER_NOTES");
}

// Note Error
const guestNotesError = () =>{
    console.log("GUEST_NOTE_ERROR");
}

// Clear Filter
const guestClearFilter = () =>{
    console.log("GUEST_CLEAR_FILTER");
}


  return (
    <GuestNoteContext.Provider>
      value=
      {{
        guestNotes: state.guestNotes,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getGuestNotes,
        addGuestNotes,
        deleteGuestNotes,
        updateGuestNotes,
        guestSetCurrent,
        guestClearCurrent,
        guestClearNotes,
        guestFilterNotes,
        guestNotesError,
        guestClearFilter
      }}
      {props.children}
    </GuestNoteContext.Provider>
  );
};

export default GuestNoteState;
