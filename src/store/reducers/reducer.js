import {
  SET_CONTACTS,
  API_START,
  API_END,
  API_ERROR,
  FETCH,
  SET_SUCCESS
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_CONTACTS:
      console.log(action.payload)
      return { 
        data: action.payload
      };
    case SET_SUCCESS:
      return { 
        ...state,
        msg: action.payload };
    // case SUCCESS:
    //   return { 
    //     ...state ,
    //     isLoadingData: false,
    //     message:action.payload
    //   };
    case API_START:
      if (action.payload === FETCH) {
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
      if (action.payload === FETCH) {
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
