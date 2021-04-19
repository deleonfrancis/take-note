import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import NoteContext from "./noteContext";
import noteReducer from "./noteReducer";
import {
  ADD_NOTE,
  DELETE_NOTE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_NOTE,
  FILTER_NOTES,
  CLEAR_FILTER,
} from "../types";

const NoteState = (props) => {
  const initialState = {
    notes: [
      {
        id: 1,
        title: "Note 1",
        body: "Be Legendary",
      },
      {
        id: 2,
        title: "Now",
        body: "Everyday",
      },
      {
        id: 3,
        title: "What?",
        body: "Be great",
      },
    ],
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(noteReducer, initialState);

  // Add Note
  const addNote = (note) => {
    note.id = uuidv4();
    dispatch({ type: ADD_NOTE, payload: note });
  };
  // Delete Note
  const deleteNote = (id) => {
    dispatch({ type: DELETE_NOTE, payload: id });
  };

  // Set Current Note
  const setCurrent = (note) => {
    dispatch({ type: SET_CURRENT, payload: note });
  };

  // Clear Current Note
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Note
  const updateNote = (note) => {
    dispatch({ type: UPDATE_NOTE, payload: note });
  };

  // Filter Notes
  const filterNotes = (text) => {
    dispatch({ type: FILTER_NOTES, payload: text });
  };

  // Clear Filter
  const clearFilter = (text) => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        current: state.current,
        filtered: state.filtered,
        addNote,
        deleteNote,
        setCurrent,
        clearCurrent,
        updateNote,
        filterNotes,
        clearFilter,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
