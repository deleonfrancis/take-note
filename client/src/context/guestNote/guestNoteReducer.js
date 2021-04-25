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
      };
    case GUEST_ADD_NOTE:
      return {
        ...state,
      };
    case GUEST_DELETE_NOTE:
      return {
        ...state,
      };
    case GUEST_UPDATE_NOTE:
      return {
        ...state,
        filtered: state.guestNotes.filter((note) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return note.title.match(regex || note.body.match(regex));
        }),
      };
    case GUEST_SET_CURRENT:
      return {
        ...state,
      };
    case GUEST_CLEAR_CURRENT:
      return {
        ...state,
      };
    case GUEST_CLEAR_NOTES:
      return {
        ...state,
      };
    case GUEST_FILTER_NOTES:
      return {
        ...state,
      };
    case GUEST_NOTE_ERROR:
      return {
        ...state,
      };
    case GUEST_CLEAR_FILTER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
