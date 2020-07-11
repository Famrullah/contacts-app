import {
  SET_CONTACTS,
  API_START,
  API_END,
  API_ERROR,
  FETCH_CONTACTS
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_CONTACTS:
      return { data: action.payload };
    case API_START:
      if (action.payload === FETCH_CONTACTS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      break;
    case API_ERROR:
      return {
        ...state,
        isLoadingData: false
      };
    case API_END:
      if (action.payload === FETCH_CONTACTS) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      break;
    default:
      return state;
  }
}
