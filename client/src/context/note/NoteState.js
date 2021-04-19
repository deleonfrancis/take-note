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

  // Add Contact
  const addContact = (note) => {
    note.id = uuidv4();
    dispatch({ type: ADD_NOTE, payload: note });
  };
  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_NOTE, payload: id });
  };

  // Set Current Contact
  const setCurrent = (note) => {
    dispatch({ type: SET_CURRENT, payload: note });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact
  const updateContact = (note) => {
    dispatch({ type: UPDATE_NOTE, payload: note });
  };

  // Filter Contacts
  const filterContacts = (text) => {
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
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
