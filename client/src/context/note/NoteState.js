import React, { useReducer } from "react";
import axios from 'axios'
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
  SHOW_ADD_MODAL,
  REMOVE_ADD_MODAL,
  SHOW_DELETE_NOTE_MODAL,
  REMOVE_DELETE_NOTE_MODAL,
  SHOW_MODIFY_NOTE_MODAL,
  REMOVE_MODIFY_NOTE_MODAL,
  NOTE_ERROR,
  GET_NOTES,
  CLEAR_NOTES
} from "../types";

const NoteState = (props) => {
  const initialState = {
    notes: null,
    current: null,
    filtered: null,
    addNoteModalOpen: false,
    confirmDeleteNote: false,
    modifyNote: false,
    error: null
  };
  const [state, dispatch] = useReducer(noteReducer, initialState);

  // Get Notes
  const getNotes = async () => {
    try {
      const res = await axios.get("/api/notes");
      dispatch({ type: GET_NOTES, payload: res.data });
    } catch (error) {
      dispatch({ type: NOTE_ERROR, payload: error.response.msg });
    }
  };

  // Add Note
  const addNote = async (note) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/notes", note, config);
      dispatch({ type: ADD_NOTE, payload: res.data });
    } catch (error) {
      dispatch({ type: NOTE_ERROR, payload: error.response.msg });
    }
  };
  // Delete Note
  const deleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`, );
      dispatch({ type: DELETE_NOTE, payload: id });
    } catch (error) {
      dispatch({ type: NOTE_ERROR, payload: error.response.msg });
    }
    
  };
  
  // Clear Notes
  const clearNotes = () => {
    dispatch({ type: CLEAR_NOTES });
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
  // ===========ADD NOTE MODAL=======

  function openModal() {
    dispatch({ type: SHOW_ADD_MODAL });
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    dispatch({ type: REMOVE_ADD_MODAL });
  }
  // ===========DELETE NOTE MODAL========
  function openDeleteModal() {
    dispatch({ type: SHOW_DELETE_NOTE_MODAL });
  }
  function closeDeleteModal() {
    dispatch({ type: REMOVE_DELETE_NOTE_MODAL });
  }
  function afterDeleteOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
  // ===========MODIFY NOTE MODAL========
  function openModifyModal() {
    dispatch({ type: SHOW_MODIFY_NOTE_MODAL });
  }
  function closeModifyModal() {
    dispatch({ type: REMOVE_MODIFY_NOTE_MODAL });
  }
  function afterModifyOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addNoteModalOpen: state.addNoteModalOpen,
        confirmDeleteNote: state.confirmDeleteNote,
        modifyNote: state.modifyNote,
        getNotes,
        addNote,
        deleteNote,
        setCurrent,
        clearCurrent,
        updateNote,
        filterNotes,
        clearFilter,
        openModal,
        closeModal,
        afterOpenModal,
        openDeleteModal,
        closeDeleteModal,
        afterDeleteOpenModal,
        openModifyModal,
        closeModifyModal,
        afterModifyOpenModal,
        clearNotes
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
