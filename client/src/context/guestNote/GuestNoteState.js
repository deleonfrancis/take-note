import React, { useReducer } from " react";
import GuestNoteContext from "./guestNoteContext";
import guestNoteReducer from "./guestNoteReducer";
import {
  GUEST_GET_NOTES,
  GUEST_ADD_NOTE,
  GUEST_DELETE_NOTE,
  GUEST_SET_CURRENT,
  GUEST_CLEAR_CURRENT,
  GUEST_CLEAR_NOTES,
  GUEST_UPDATE_NOTE,
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

  return (
    <GuestNoteContext.Provider>
      value=
      {{
        guestNotes: state.guestNotes,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
      }}
      {props.children}
    </GuestNoteContext.Provider>
  );
};

export default GuestNoteState;
