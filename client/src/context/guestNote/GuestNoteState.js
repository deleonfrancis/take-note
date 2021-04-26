import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import GuestNoteContext from "./guestNoteContext";
import guestNoteReducer from "./guestNoteReducer";
import Localbase from "localbase";
import {
  GUEST_GET_NOTES,
  GUEST_ADD_NOTE,
  GUEST_DELETE_NOTE,
  GUEST_UPDATE_NOTE,
  GUEST_SET_CURRENT,
  GUEST_CLEAR_CURRENT,
  // eslint-disable-next-line
  GUEST_CLEAR_NOTES,
  GUEST_FILTER_NOTES,
  // eslint-disable-next-line
  GUEST_NOTE_ERROR,
  GUEST_CLEAR_FILTER,
} from "../types";

const GuestNoteState = (props) => {
  const initialState = {
    guestNotes: [
      // {
      //   id: "1",
      //   title: "Note 1",
      //   body: "This is my note 1",
      // },
      // {
      //   id: "2",
      //   title: "Note 2",
      //   body: "This is my note 2",
      // },
      // {
      //   id: "3",
      //   title: "Note 3",
      //   body: "This is my note 3",
      // },
      // {
      //   id: "4",
      //   title: "Note 4",
      //   body: "This is my note 4",
      // },
      // {
      //   id: "5",
      //   title: "Note 5",
      //   body: "This is my note 5",
      // },
    ],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(guestNoteReducer, initialState);

  let db = new Localbase("db");

  // Get Notes
  const getGuestNotes = () => {
    db.collection("takeNote")
    .get()
    .then((note) => {
      console.log(note);
      dispatch({ type: GUEST_GET_NOTES, payload: note });
      // console.log("GUEST_GET_NOTES");
      });
  };

  // Add Note
  const addGuestNote = (note) => {
    note.id = uuidv4();
    db.collection("takeNote").add({
      id: note.id,
      title: note.title,
      body: note.body,
    });
    dispatch({ type: GUEST_ADD_NOTE, payload: note });
    // console.log("GUEST_ADD_NOTE");
  };

  // Update Note
  const updateGuestNote = (note) => {
    db.collection("takeNote").doc({ id: note.id }).update({
      title: note.title,
      body: note.body,
    });
    dispatch({ type: GUEST_UPDATE_NOTE, payload: note });
    // console.log("GUEST_UPDATE_NOTE");
  };

  // Delete Note
  const deleteGuestNote = (note) => {
    db.collection('takeNote')
    .doc({ id: note })
    .delete()
    .then(response => {
      dispatch({ type: GUEST_DELETE_NOTE, payload: note });
    })
    .catch(error => {
      console.log(`There was an error trying to delete ${note.id}`)
    })
    // console.log("GUEST_DELETE_NOTE");
  };

  // Filter Notes
  const guestFilterNotes = (text) => {
    dispatch({ type: GUEST_FILTER_NOTES, payload: text });
    // console.log("GUEST_FILTER_NOTES");
  };

  // Clear Filter
  const guestClearFilter = () => {
    dispatch({ type: GUEST_CLEAR_FILTER });
    // console.log("GUEST_CLEAR_FILTER");
  };

  // Set Current
  const guestSetCurrent = (note) => {
    dispatch({ type: GUEST_SET_CURRENT, payload: note });
    // console.log("GUEST_SET_CURRENT");
  };

  // Clear Current
  const guestClearCurrent = () => {
    dispatch({ type: GUEST_CLEAR_CURRENT });
    // console.log("GUEST_CLEAR_CURRENT");
  };

  // Clear Notes
  const guestClearNotes = () => {
    // console.log("GUEST_CLEAR_NOTES");
  };

  // Note Error
  const guestNotesError = () => {
    // console.log("GUEST_NOTE_ERROR");
  };

  return (
    <GuestNoteContext.Provider
      value={{
        guestNotes: state.guestNotes,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getGuestNotes,
        addGuestNote,
        deleteGuestNote,
        updateGuestNote,
        guestSetCurrent,
        guestClearCurrent,
        guestClearNotes,
        guestFilterNotes,
        guestNotesError,
        guestClearFilter,
      }}
    >
      {props.children}
    </GuestNoteContext.Provider>
  );
};

export default GuestNoteState;
