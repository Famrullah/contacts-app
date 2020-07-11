import axios from "axios";
import { API } from "../store/actions/types";
import { accessDenied, apiError, apiStart, apiEnd } from "../store/actions/api";

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);
  console.log('next',action)

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload;
  const dataOrParams = ["GET"].includes(method) ? "params" : "data";

  // axios default configs
  axios.defaults.baseURL = "https://swapi.dev/api/";

  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch(error => {
      dispatch(apiError(error));
      dispatch(onFailure(error));

      if (error.response && error.response.status === 500) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
