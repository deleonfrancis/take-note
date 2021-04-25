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

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GUEST_GET_NOTES:
      return {
        ...state,
        guestNotes: action.payload,
        loading: false,
      };
    case GUEST_ADD_NOTE:
      return {
        ...state,
        guestNotes: [...state.guestNotes, action.payload],
        loading: false,
      };

    case GUEST_UPDATE_NOTE:
      return {
        ...state,
        guestNotes: state.guestNotes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case GUEST_DELETE_NOTE:
      return {
        ...state,
        guestNotes: state.guestNotes.filter(
          (note) => note.id !== action.payload
        ),
        loading: false,
      };
    case GUEST_CLEAR_NOTES:
      return {
        ...state,
        guestNotes: null,
        filtered: null,
        error: null,
        current: null,
      };
    case GUEST_SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case GUEST_CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case GUEST_FILTER_NOTES:
      return {
        ...state,
        filtered: state.guestNotes.filter((note) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return note.title.match(regex || note.body.match(regex));
        }),
      };
    case GUEST_CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case GUEST_NOTE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
