import { SET_CONTACTS, API, FETCH_CONTACTS, API_ERROR } from "./types";

export function fetchContacts() {
  return apiAction({
    url: "people",
    onSuccess: setContact,
    onFailure: apiErorr,
    label: FETCH_CONTACTS
  });
}

function setContact(data) {
  return {
    type: SET_CONTACTS,
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
