import { SET_CONTACTS, API, FETCH, API_ERROR, SET_SUCCESS } from "./types";

export function fetchContacts() {
  return apiAction({
    url: "5dd6036933000006d5f383b7",
    onSuccess: setContact,
    onFailure: apiErorr,
    label: FETCH
  });
}
export function success() {
  return apiAction({
    url: "5e76e25d2f00007100986142",
    label: FETCH,
    onSuccess: setSuccess,
    onFailure: apiErorr,
  });
}

function setContact(data) {
  return {
    type: SET_CONTACTS,
    payload: data
  };
}
function setSuccess(data) {
  return {
    type: SET_SUCCESS,
    payload: data
  };
}

function apiErorr(data){
  return {
    type: API_ERROR,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
