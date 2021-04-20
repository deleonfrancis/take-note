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
  REMOVE_DELETE_NOTE_MODAL
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case FILTER_NOTES:
      return {
        ...state,
        filtered: state.notes.filter((note) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return note.title.match(regex) || note.body.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case SHOW_ADD_MODAL:
      return {
        ...state,
        addNoteModalOpen: true,
      };
    case REMOVE_ADD_MODAL:
      return {
        ...state,
        addNoteModalOpen: false,
      };
      case SHOW_DELETE_NOTE_MODAL:
      return {
        ...state,
        confirmDeleteNote: true,
      };
      case REMOVE_DELETE_NOTE_MODAL:
      return {
        ...state,
        confirmDeleteNote: false,
      };
    default:
      return state;
  }
};
