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
  GET_NOTES
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        loading: false,

      };
      case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload._id ? action.payload : note
        ),
        loading: false,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
        loading: false,

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
      case SHOW_MODIFY_NOTE_MODAL:
      return {
        ...state,
        modifyNote: true,
      };
      case REMOVE_MODIFY_NOTE_MODAL:
      return {
        ...state,
        modifyNote: false,
      };
      case NOTE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
